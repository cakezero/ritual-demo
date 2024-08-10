import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { getWalletClient } from "../viem/viemClient";
import {
	polygon,
	polygonAmoy,
	SmartAccountClient,
	WalletClientSigner,
} from "@alchemy/aa-core";
import {
	ENVIRONMENT,
	ALCHEMY_API_KEY,
	ALCHEMY_GAS_POLICY_ID,
} from "../utils/env";
// import { getChain } from "../viem/viemChain";

const chain = ENVIRONMENT === "mainnet" ? polygon : polygonAmoy;

let smartAccount: SmartAccountClient | undefined = undefined;

const getSmartAccount = async () => {

	if (smartAccount) return smartAccount;

	smartAccount = await createSmartAccount();

	return smartAccount;
};

const getSmartAccountAddress = async () => {

	const instance = await getSmartAccount();

	const smartAccountAddress = instance.account?.address;

	if (!smartAccountAddress) throw new Error("No smart acccount address found");

	return smartAccountAddress;
};

const createSmartAccount = async () => {

	if (!ALCHEMY_API_KEY || !ALCHEMY_GAS_POLICY_ID)
		throw new Error("ALCHEMY API KEY OR GAS POLICY ID not set");

	const client = getWalletClient();

	const signer = new WalletClientSigner(client, "json-rpc");

	return await createModularAccountAlchemyClient({
		chain,
		apiKey: ALCHEMY_API_KEY,
		signer,
		gasManagerConfig: {
			policyId: ALCHEMY_GAS_POLICY_ID,
		},
	});
};

export { getSmartAccount, getSmartAccountAddress };

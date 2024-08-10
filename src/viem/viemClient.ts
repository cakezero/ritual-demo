import {
	createWalletClient,
	createPublicClient,
	custom,
	WalletClient,
	PublicClient,
} from "viem";
import { getChain } from "./viemChain";
import { getMagicClient } from "../magic/magicClient";

let walletClient: WalletClient | undefined = undefined;
let publicClient: PublicClient | undefined = undefined;

const getWalletClient = () => {
	if (walletClient) return walletClient;
	const magicProvider = getMagicClient().rpcProvider;

	walletClient = createWalletClient({
		account: "0x8B52c1eF822F57248aA4f14edB11a0CfA20007b6",
		chain: getChain(),
		transport: custom(magicProvider),
	});

	return walletClient!;
};

const getPublicClient = () => {
	if (publicClient) return publicClient;
	const magicProvider = getMagicClient().rpcProvider;

	publicClient = createPublicClient({
		chain: getChain(),
		transport: custom(magicProvider),
	});
	return publicClient;
};

export { getWalletClient, getPublicClient };

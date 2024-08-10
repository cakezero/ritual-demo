import { Address } from "viem";
import { getSmartAccount } from "./smartAccount";
import { UserOperationCallData } from "@alchemy/aa-core";

const sendUserOperation = async (
	operationData: {
		target: Address;
		calldata: Address;
	}
): Promise<`0x${string}`> => {
	const { calldata, target } = operationData;

	const smartAccountClient = await getSmartAccount();

	if (!smartAccountClient.account) {
		throw new Error("SmartAccountClient account missing");
	}

	const uoStruct: UserOperationCallData = {
		target: target,
		data: calldata
	};

	const sim = await smartAccountClient.simulateUserOperation({
		uo: uoStruct
	})

	const userOperation = await smartAccountClient.sendUserOperation({
		uo: {
			target: target,
			data: calldata,
		},
		account: smartAccountClient.account,
	});

	const txHash = await smartAccountClient.waitForUserOperationTransaction(
		userOperation
	);

	return txHash;
};

export { sendUserOperation };

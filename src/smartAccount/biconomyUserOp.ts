import { PaymasterMode } from "@biconomy/account";
import { getSmartAccount } from "./biconomySa";
import { Address } from "viem";

const sendTransaction = async (operationData: {
	target: string;
	calldata: Address;
}) => {

	const { target, calldata } = operationData;
	const tx = {
		to: target,
		data: calldata
	}
	const userOperation = (await getSmartAccount()).sendTransaction(tx, {
		paymasterServiceData: { mode: PaymasterMode.SPONSORED }
	});
  const OpStatus = (await userOperation).waitForTxHash();

  console.log(`TxHash: ${(await OpStatus).transactionHash}`);
  const userOpReceipt = (await userOperation).wait(1);
  
  if ((await userOpReceipt).success === 'false') throw new Error('Error sending transaction')
  return (await userOpReceipt).receipt as Address;
  
	// 	const userOp = (await getSmartAccount(address)).sendTransaction(tx, {
	// 		paymasterServiceData: { mode: PaymasterMode.SPONSORED },
	// 	});

	// 	const transaction = (await userOp).waitForTxHash();
	// 	const transactionHash = (await transaction).transactionHash;
	// 	console.log(`Transaction Hash: ${transactionHash}`);

	// 	const userOpReceipt = (await userOp).wait(1);

	// 	console.log({ userOpReceipt });
	// 	return (await userOpReceipt).receipt as Address;
};

export { sendTransaction };

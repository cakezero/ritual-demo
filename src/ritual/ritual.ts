// import Ritual from "rituals-sdk"
import { encodeFunctionData } from "viem"
import { rituals_factory_abi } from "../utils/factoryAbi"
// import { sendUserOperation } from "../smartAccount/userOperation";
import { sendTransaction } from "../smartAccount/biconomyUserOp"
import { getExplorerUrl } from "../utils/network";

const leaveRitual = () => {
  
}

const joinRitual = async (contract_address: string) => {
  // const contract_addy = getAddress(contract_address)
  const data = encodeFunctionData({
    abi: rituals_factory_abi,
    functionName: "join",
    args: []
  });

  console.log({ data })

  const Hash = await sendTransaction({ target: contract_address, calldata: data });

  // const txHash = await sendUserOperation({ target: contract_addy, calldata: data });

  return getExplorerUrl(Hash);
}

export { leaveRitual, joinRitual }
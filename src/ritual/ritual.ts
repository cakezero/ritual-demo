// import Ritual from "rituals-sdk"
import { encodeFunctionData, getAddress } from "viem"
import { rituals_factory_abi } from "../utils/factoryAbi"
import { sendUserOperation } from "../smartAccount/userOperation";
import { getExplorerUrl } from "../utils/network";

const leaveRitual = () => {
  
}

const joinRitual = async (contract_address: string) => {
  const contract_addy = getAddress(contract_address)
  const data = encodeFunctionData({
    abi: rituals_factory_abi,
    functionName: "join",
    args: []
  });

  console.log({ data })

  const txHash = await sendUserOperation({ target: contract_addy, calldata: data });

  return getExplorerUrl(txHash);
}

export { leaveRitual, joinRitual }
import { joinRitual } from "../ritual/ritual";
import { useState } from "react";
import { Spinner } from "../ts/icons";
import toast, { Toaster } from "react-hot-toast";

const JoinRitual = () => {
	const contractAddress = "0x8247d1cbad76bb4fcb4691559ce869d27d976b68"; 
  const [submit, setSubmit] = useState<boolean | undefined>(false);
	let tx: string | undefined;
	
  const joinRitualRequest = async () => {
    try {
      setSubmit(true)
      toast("Hit")
      tx = await joinRitual(contractAddress);
      console.log({ tx })
      toast.success("Ritual Joined Sucessfully!")
      setSubmit(false)
    } catch (error) {
      console.error(error)
      toast.error("Couldn't join ritual, try again!")
      setSubmit(false)
    }
  };

	return (
		<>
			<h1 className=" text-center text-3xl font-bold text-black-500 mt-20">
				Join a Ritual
			</h1>

			<div className="flex flex-col items-center justify-center mt-10">
				<button
					onClick={joinRitualRequest}
					className="bg-blue-500 items-center flex mt-4 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
				>
					{submit ? (
						<>
							<Spinner />
							<span className="ml-2">Joining Ritual...</span>
						</>
					) : (
						"Join"
					)}
				</button>
				{tx ? (
					<a
						href={tx}
						target="_blank"
						rel="noreferrer noopener"
						className="mt-4"
					>
						Check Transaction
					</a>
				) : (
					""
				)}

				<Toaster />
			</div>
		</>
	);
};

export default JoinRitual;

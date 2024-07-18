import { Spinner } from "../ts/icons";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react"
// import { sendAuthEmail } from "../magic/sendAuthEmail"
import { getMagicClient } from "../magic/magicClient";

const Home = () => {
  const [submit, setSubmit] = useState<boolean>(false);
	const [email, setEmail] = useState<string | undefined>("");
	const magic = getMagicClient()

	const sendEmail = async () => {
		try {
			if (!email) return toast.error("Please enter Email Address");

			toast("Hit!");
			setSubmit(true);
			console.log("hit")

			const send = await magic.auth.loginWithEmailOTP({ email })

			console.log(`send: ${send}`)

			// const acct = await sendAuthEmail(email);
			// console.log({acct});

			toast.success("User auth successful");
			setSubmit(false);
		} catch (err) {
			console.error(err);
      toast.error("Error sending auth email");
      setSubmit(false)
		}
	};

	return (
		<>
			<h1 className="text-center text-3xl font-bold text-black-500 mt-20">
				Login to Join a Ritual
			</h1>

			<div className="flex flex-col items-center justify-center mt-10">
				<input
					className="border border-gray-300 rounded px-3 py-2 placeholder-gray-300 focus:outline-none focus:border-black-500"
					type="text"
					placeholder="Enter Email"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<button
					onClick={sendEmail}
					className="bg-blue-500 flex items-center mt-4 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
				>
					{submit ? (
						<>
							<Spinner />
							<span className="ml-2">Authenticating...</span>
						</>
					) : (
						"login"
					)}
				</button>
			</div>
			<Toaster />
		</>
	);
};

export default Home;

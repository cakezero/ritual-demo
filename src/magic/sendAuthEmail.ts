import { getMagicClient } from "./magicClient";

const sendAuthEmail = async (email: string) => {
	const magic = getMagicClient();

	const didToken = await magic.auth.loginWithEmailOTP({ email });

	return didToken;
};

export { sendAuthEmail };

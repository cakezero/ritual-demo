import { getMagicClient } from "./magicClient";

const sendAuthEmail = async (email: string) => {
	const magic = getMagicClient();

	const didToken = await magic.auth.loginWithEmailOTP({ email, deviceCheckUI: false });

	return didToken;
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
export { sendAuthEmail };

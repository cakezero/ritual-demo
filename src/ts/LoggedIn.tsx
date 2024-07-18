import { useEffect, useState } from "react";
import { getMagicClient } from "../magic/magicClient";

const LoggedIn = () => {
	const [loggedIn, setLoggedIn] = useState<boolean | null>(false);
	const magic = getMagicClient();

	useEffect(() => {
		const checkLoggedIn = async () => {
			try {
				const isLoggedIn = await magic.user.isLoggedIn();
				const address = (await magic.user.getInfo()).publicAddress
				console.log({ address })
				setLoggedIn(isLoggedIn);
			} catch (err) {
				console.error(err);
				setLoggedIn(false);
			}
		};
		checkLoggedIn();
	}, [magic]);

	return loggedIn;
};

export default LoggedIn;

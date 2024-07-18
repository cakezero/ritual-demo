export type WEB3ENVIRONMENT = "testnet" | "mainnet";

const ENVIRONMENT: WEB3ENVIRONMENT =
	import.meta.env.VITE_ENVIRONMENT === "development" ? "testnet" : "mainnet";

const ALCHEMY_GAS_POLICY_ID = import.meta.env.VITE_ALCHEMY_GAS_POLICY_ID;

const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY;

const MAGIC_PUB_KEY = import.meta.env.VITE_MAGIC_PUB_KEY;

const ENV = import.meta.env.VITE_ENVIRONMENT;

const PAYMASTER_API_KEY = import.meta.env.VITE_PAYMASTER_API_KEY;

export {
	ENVIRONMENT,
	ALCHEMY_API_KEY,
	ALCHEMY_GAS_POLICY_ID,
	MAGIC_PUB_KEY,
	ENV,
	PAYMASTER_API_KEY,
};

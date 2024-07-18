import LoggedIn from "./ts/LoggedIn"
import JoinRitual from "./components/JoinRitual";
import Home from "./components/Home";

const App = () => {
	const log = LoggedIn();
	console.log(log)

	return (
		<>
			{log ? (
				<JoinRitual />
			) : (
				<Home />
			)}
		</>
	);
};

export default App;

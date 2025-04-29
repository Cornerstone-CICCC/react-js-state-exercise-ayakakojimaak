import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";
import ClickCounter from "./components/ClickCounter";
import "./App.css";

const App = () => {
	/* Your states here */

	return (
		<div>
			<h2>Light Toggle</h2>
			<LightToggle />

			<h2>Lotto Numbers</h2>
			<LottoNumbers />

			<h2>Click Counter</h2>
			<ClickCounter />
		</div>
	);
};

export default App;

import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hogs from "./Hogs"
import FilterHogs from "./FilterHogs"


function App() {
	const [hogsArray, setHogs] = useState(hogs)
	return (
		<div className="App">
			<Nav />
			<FilterHogs hogs={hogsArray} setHogs={setHogs} />
			<Hogs hogs={hogsArray} />
		</div>
	);
}

export default App;

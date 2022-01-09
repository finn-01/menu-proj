import React, { useState } from "react";

import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";

const App = () => {
	return (
		<div>
			Hello App
			<Categories />
			<Menu />
		</div>
	);
};

export default App;

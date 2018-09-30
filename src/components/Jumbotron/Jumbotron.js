//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Cowboy Bebop!</h1>
		<h2>Click all twelve images once to win.  If you click a character more that once you lose.</h2>
	</header>
);

export default Jumbotron;
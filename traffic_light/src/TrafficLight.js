import { useState, React } from "react";

export default function TrafficLight() {
	const [walk, setWalk] = useState(false);
	const handleClick = () => {
		setWalk(!walk);
		alert(walk ? "Next is Stop" : "Next is Walk");
	};

	return (
		<div className="App-header">
			<h1
				style={{
					color: walk ? "green" : "red",
				}}
			>
				{walk ? "Green" : "Red"} Light
			</h1>
			<h2
				style={{
					color: walk ? "green" : "red",
				}}
			>
				You {walk ? "can Walk" : "need to Stop"}
			</h2>
			<button onClick={handleClick}>
				{walk ? "Click to Stop" : "Click to Walk"}
			</button>
		</div>
	);
}

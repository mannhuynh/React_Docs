import { useState } from "react";

export default function FeedbackForm() {
	const [name, setName] = useState("");

	function handleClick() {
		setName(prompt("What is your name?"));
	}

	return (
		<div>
			<button onClick={handleClick}>Greet</button>

			<p> Hello {name} </p>
		</div>
	);
}

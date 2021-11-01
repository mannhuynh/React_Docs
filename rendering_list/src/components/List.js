import React from "react";
import { data } from "./data";
import { getImageUrl } from "./utils";

export default function List() {
	const chemists = data.filter((chemist) => chemist.profession === "chemist");
	const everyOneElse = data.filter(
		(chemist) => chemist.profession !== "chemist"
	);

	const chemistList = chemists.map((chemist) => (
		<li key={chemist.id}>
			<img src={getImageUrl(chemist)} alt={chemist.name} />
			<p>
				<b>{chemist.name}</b>
				{" " + chemist.profession + " "}
				known for {chemist.accomplishment}
			</p>
		</li>
	));

	const everyOneElseList = everyOneElse.map((each) => (
		<li key={each.id}>
			<img src={getImageUrl(each)} alt={each.name} />

			<p>
				<b>{each.name}</b>
				{" " + each.profession + " "}
				known for {each.accomplishment}
			</p>
		</li>
	));

	return (
		<article>
			<h1>Scientist</h1>
			<h3>Chemists</h3>
			<ul>{chemistList}</ul>
			<h3>Every One Else</h3>
			<ul>{everyOneElseList}</ul>
		</article>
	);
}

import React from "react";
import Profile from "./Profile";

export default function Gallery() {
	const people = [
		{
			name: "Maria Skłodowska-Curie",
			className: "avatar",
			imageID: "szV5sdG",
			size: 70,
			profession: "physicist and chemist",
			awards: [
				"Nobel Prize in Physics",
				"Nobel Prize in Chemistry",
				"Davy Medal",
				"Matteucci Medal",
			],
			discover: "polonium (element)",
		},
		{
			name: "Katsuko Saruhashi",
			className: "avatar",
			imageID: "YfeOqp2",
			size: 70,
			profession: "geochemist",
			awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
			discover: "a method for measuring carbon dioxide in seawater)",
		},
	];
	return (
		<div>
			<Profile people={people} />
		</div>
	);
}

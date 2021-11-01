import React from "react";
import { getImageUrl } from "./utils";

export default function Profile({ people }) {
	return people.map((person) => {
		return (
			<section className="profile container">
				<h2>{person.name}</h2>
				<img
					className={person.className}
					src={getImageUrl(person.imageID)}
					alt={person.name}
					width={person.size}
					height={person.zise}
				/>
				<ul>
					<li>
						<b>Profession: </b>
						{person.profession}
					</li>
					<li>
						<b>Awards: {person.awards.length} </b>({person.awards.join(" ,")})
					</li>
					<li>
						<b>Discovered: </b>
						{person.discover}
					</li>
				</ul>
			</section>
		);
	});
}

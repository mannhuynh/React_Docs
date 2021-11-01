import { getImageUrl } from "./utils.js";

function Profile({ people }) {
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
						<b>Awards: 4 </b>({person.awards.join(" ,")})
					</li>
					<li>
						<b>Discovered: </b>
						{person.discover}
					</li>
				</ul>
			</section>
		);
	});
	// <section className="profile">
	//       <h2>{people.name}</h2>
	//       <img
	//         className= {people.className}
	//         src={getImageUrl(people.imageID)}
	//         alt={people.name}
	//         width={people.size}
	//         height={people.zise}
	//       />
	//       <ul>
	//         <li>
	//           <b>Profession: </b>
	//           {people.profession}
	//         </li>
	//         <li>
	//           <b>Awards: 4 </b>
	//           ({people.awards.join(" ,")})
	//         </li>
	//         <li>
	//           <b>Discovered: </b>
	//           polonium (element)
	//         </li>
	//       </ul>
	//     </section>
}

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
			<h1>Notable Scientists</h1>
			<Profile people={people} />
			<section className="profile">
				<h2>Maria Skłodowska-Curie</h2>
				<img
					className="avatar"
					src={getImageUrl("szV5sdG")}
					alt="Maria Skłodowska-Curie"
					width={70}
					height={70}
				/>
				<ul>
					<li>
						<b>Profession: </b>
						physicist and chemist
					</li>
					<li>
						<b>Awards: 4 </b>
						(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
						Matteucci Medal)
					</li>
					<li>
						<b>Discovered: </b>
						polonium (element)
					</li>
				</ul>
			</section>
			<section className="profile">
				<h2>Katsuko Saruhashi</h2>
				<img
					className="avatar"
					src={getImageUrl("YfeOqp2")}
					alt="Katsuko Saruhashi"
					width={70}
					height={70}
				/>
				<ul>
					<li>
						<b>Profession: </b>
						geochemist
					</li>
					<li>
						<b>Awards: 2 </b>
						(Miyake Prize for geochemistry, Tanaka Prize)
					</li>
					<li>
						<b>Discovered: </b>a method for measuring carbon dioxide in seawater
					</li>
				</ul>
			</section>
		</div>
	);
}

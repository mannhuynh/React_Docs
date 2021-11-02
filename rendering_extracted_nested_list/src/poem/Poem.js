import React from "react";
import "./poem.css";
import { poem } from "../data";

// Return hr tag in between poem's lines
export default function Poem() {
	return (
		<div className="container">
			{poem.lines.map((line, index) => {
				return (
					<article key={index}>
						{/* Index control the number of lines
                If index = 0, no hr tag allowed */}
						{index > 0 && <hr />}
						<p>{line}</p>
					</article>
				);
			})}
		</div>
	);
}

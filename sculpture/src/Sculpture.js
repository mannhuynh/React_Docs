import React, { useState } from "react";
import { sculptureList } from "./data";

export default function Sculpture() {
	const [index, setIndex] = useState(0);
	const [showDetail, setShowDetail] = useState(false);

	const handleShowDetail = () => {
		setShowDetail(!showDetail);
	};
	const handleNext = () => {
		setIndex(() => {
			if (index === sculptureList.length - 1) {
				return 0;
			}
			return index + 1;
		});
	};

	const handlePrev = () => {
		setIndex(() => {
			if (index === 0) {
				return sculptureList.length - 1;
			}
			return index - 1;
		});
	};

	let sculpture = sculptureList[index];
	return (
		<div className="container">
			<h2>
				{sculpture.name} by {sculpture.artist}
			</h2>
			<button onClick={handlePrev} className="btn btn-dark">
				Prev
			</button>
			<button onClick={handleNext} className="btn btn-dark">
				Next
			</button>
			<p>
				{index + 1} in {sculptureList.length}
			</p>
			<button onClick={handleShowDetail} className="btn btn-info">
				{showDetail ? "Hide" : "Show"} Details
			</button>
			<p>{showDetail && sculpture.description}</p>

			<img src={sculpture.url} alt={sculpture.alt} />
		</div>
	);
}

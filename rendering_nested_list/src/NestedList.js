import React from "react";
import { recipes } from "./data";

export default function NestedList() {
	const recipesList = recipes.map((recipe) => {
		return <h2>{recipe.name}</h2>;
	});

	return <div>{recipesList}</div>;
}

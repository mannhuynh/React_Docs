import React from "react";
import { recipes } from "./data";

export default function NestedList() {
	const recipesList = recipes.map((recipe) => {
		return (
			<ul key={recipe.id}>
				<h2>{recipe.name}</h2>

				<ul>
					{recipe.ingredients.map((ingredient) => (
						<li key={ingredient}>{ingredient}</li>
					))}
				</ul>
			</ul>
		);
	});

	return (
		<div>
			<h1>Recipes</h1>
			{recipesList}
		</div>
	);
}

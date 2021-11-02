import React from "react";

export default function Recipes({ id, name, ingredients }) {
	return (
		<ul>
			<h2>{name}</h2>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>
		</ul>
	);
}

// const recipesList = recipes.map((recipe) => {
// 	return (
// 		<ul key={recipe.id}>
// 			<h2>{recipe.name}</h2>

// 			<ul>
// 				{recipe.ingredients.map((ingredient) => (
// 					<li key={ingredient}>{ingredient}</li>
// 				))}
// 			</ul>
// 		</ul>
// 	);
// });

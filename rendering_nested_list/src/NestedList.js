import React from "react";
import { recipes } from "./data";

export default function NestedList() {
	const recipesList = recipes.map((recipe) => {
		return (
			<ul key={recipe.id}>
				<li>
          <h2>{recipe.name}</h2>
          <li>{
            recipe.ingredients.map(ingredient =>
              <li>{ingredient }</li>
            )
          }</li>
				</li>
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

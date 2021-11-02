import React from "react";
import { recipes } from "../data";
import Recipes from "./Recipes";

export default function NestedList() {
	return (
		<div>
			<h1>Recipes</h1>
			{recipes.map((recipe) => {
				return <Recipes {...recipe} key={recipe.id} />;
			})}
		</div>
	);
}

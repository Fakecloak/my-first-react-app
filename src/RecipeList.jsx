import { recipes } from "./recipe_data.js";

// Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

function Recipe({ id, name, ingredients }) {
    return
    <div key={id}>
        <h2>{name}</h2>
        <ul>
            {ingredients.map((ingredient) => <li key={ingredient}>{ingredient} </li>)}
        </ul>
    </div>
}


export default function RecipeList() {
    return (
        <div>

        </div>
    );
}
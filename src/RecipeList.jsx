import { recipes } from "./recipe_data.js";

// Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

function Recipe({ id, name, ingredients }) {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map((ingredient) => <li key={ingredient}>{ingredient} </li>)}
            </ul>
        </div>
    )
}


export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe => <Recipe {...recipe} key={recipe.id} />)}
            {/* {recipes.map((recipe) => <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />)} */}
        </div>
    );
}
import React, { useEffect, useRef, useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../AI.JS";
import RecipesList from "./RecipesList";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    setLoading(true); // start loading
    try {
      const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
      setRecipe(recipeMarkdown);
      localStorage.setItem('recipe', JSON.stringify(recipeMarkdown))
    } finally {
      setLoading(false); // stop loading (even if error happens)
    }
  }


  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button> + Add ingredient</button>
        <button
          type="button"
          onClick={() => {
            setIngredients([]);
            setRecipe("");
          }}
        >
          Clear
        </button>
      </form>
      {ingredients.length === 0 ? (
        <h2>
          To get started please add "all the major spices" as one of your
          ingredients.
        </h2>
      ) : (
        <h2>
          {ingredients.length <= 3 &&
            `Add at least ${4 - ingredients.length} more ${
              ingredients.length >= 3 ? "ingredient" : "ingredients"
            }`}
        </h2>
      )}
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {loading && <p className="loading">Loading recipe... 🍳</p>}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}

import React from "react";

export default function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.length > 0 && props.ingredients.map((ingredient, idx) => (
    <li key={idx}>{ingredient}</li>
  ));

  console.log(props.recipe)

  return (
    <section>
      <h2>Ingredients on hand:</h2>
       <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div>
         {props.recipe === ("") && <div className="get-recipe-container">
            <div ref={props.ref}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
          </div>}
        </div>
      )}
    </section>
  );
}

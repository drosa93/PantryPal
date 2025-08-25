import React from 'react'
import Markdown from 'react-markdown'

export default function RecipesList() {
    const recipes = localStorage.getItem('recipe')
  return (
   <div>
         <section className="suggested-recipe-container" aria-live='polite'>
           <Markdown>
           {recipes}
           </Markdown>
         </section>
       </div>
  )
}

import React from "react";
import Markdown from 'react-markdown'

export default function Recipe(props) {

  return (
    <div>
      <section className="suggested-recipe-container" aria-live='polite'>
        <h2>Chef Claude Recommends:</h2>
        <Markdown>
        {props.recipe}
        </Markdown>
      </section>
    </div>
  );
}

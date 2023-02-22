import { useState } from "react";
import { data as availableRecipes } from "../utils/data";
import { RecipeItems } from "./RecipeItems";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");
  const recipes = availableRecipes.hits;
  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });
  // console.log(recipes);
  console.log(recipe);

  const matchedRecipes = availableRecipes.hits.filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase() || "");
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for recipes:</label>
      <TextInput
        onChange={handleChange}
        w={300}
        mb={8}
        border="solid"
        h={50}
        borderColor="yellow.300"
      />
      <RecipeItems onClick={onClick} recipes={matchedRecipes} />
    </>
  );
};

import { useState } from "react";
import { availableRecipes } from "../utils/data";
import { RecipeItems } from "./RecipesItems";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = availableRecipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchField.toLowerCase());
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
      <RecipeItems onClick={onClick} Recipes={matchedRecipes} />
    </>
  );
};

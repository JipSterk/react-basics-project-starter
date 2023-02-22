import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipesPage = () => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = "Welcome to our Restaurant!";

  return (
    <div className="app">
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading size="2xl" mb={8} color="blue.200">
            <Center h="100vh" flexDir="column">
              Your Recipe
              {greeting}
            </Center>
          </Heading>

          <RecipeSearch onClick={setUserRecipe} />
        </>
      )}
    </div>
  );
};

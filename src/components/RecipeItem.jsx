import { Center, Image, Text } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  return (
    <Center gap={16} cursor={"pointer"} onClick={() => onClick(recipe)}>
      <Image
        src={recipe.imgUrl}
        w={50}
        h={50}
        borderWidth={1}
        alt={recipe.alt}
      />

      <Text fontWeight={"450"}>{recipe.name}</Text>
    </Center>
  );
};

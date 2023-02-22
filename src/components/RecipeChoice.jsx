import {
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";

export const RecipeChoice = ({ recipe, onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center flexDir={"column"} gap={4}>
      <Heading fontSize={"2xl"} color="gray.600">
        {" "}
        Your choice: {recipe.name}
      </Heading>
      <Image
        src={recipe.imgUrl}
        w={100}
        h={100}
        borderRadius={"2xl"}
        alt={recipe.alt}
      />
      <Text> Your recipe will be ready in a few minutes </Text>
      <Flex mt={4}>
        <Button onClick={onOpen} mr={4}>
          Confirm order
        </Button>

        <Button onClick={() => onClick()} variant="ghost">
          Change selection
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> confirm your order</ModalHeader>

          <ModalCloseButton />

          <ModalBody
            height={["full, fit-content"]}
            display="flex"
            justifyContent={"center"}
            alignItems={["center", "flex-start"]}
            flexDir="column"
          >
            <Text>1x {recipe.name}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={4}>
              Confirm
            </Button>

            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

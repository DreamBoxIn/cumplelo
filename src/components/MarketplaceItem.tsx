  import React from "react";
  import { Box, Image, Heading, Text, Button, Flex } from "@chakra-ui/react";

  interface Project {
    id: number;
    title: string;
    description: string;
    disponibles: number;
    imageUrl: string;
  }

  interface MarketplaceItemProps {
    project: Project;
  }

  const MarketplaceItem: React.FC<MarketplaceItemProps> = ({ project }) => {
    return (
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" marginBottom="4" width="100%">
        <Box position="relative" width="100%" height="300px"> {/* Contenedor de la imagen */}
          <Image 
            src={project.imageUrl} 
            alt={project.title} 
            objectFit="cover" 
            width="100%" 
            height="100%" 
            position="absolute" 
            top="0" 
            left="0" 
          />
        </Box>

        <Box p="6">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="teal.600">
                {project.disponibles} Disponibles 
              </Text>
              <Button colorScheme="teal" variant="solid">
                Reclamar NFT
              </Button>

              <Heading mt="1" fontWeight="semibold" lineHeight="tight">
                {project.title}
              </Heading>

              <Text mt="2" color="gray.600" fontSize="sm" textAlign="justify" style={{ overflowWrap: "break-word" }}>
                {project.description}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  };

  export default MarketplaceItem;

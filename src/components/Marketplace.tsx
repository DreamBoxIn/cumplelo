import React from "react";
import { HStack } from "@chakra-ui/react";
import MarketplaceItem from "./MarketplaceItem";
import { Project } from "../types"; // Importa la interfaz Project desde types.ts

interface MarketplaceProps {
  projects: Project[];
}

const Marketplace: React.FC<MarketplaceProps> = ({ projects }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <HStack spacing={4}>
        {projects.map((project) => (
          <MarketplaceItem key={project.id} project={project} />
        ))}
      </HStack>
    </div>
  );
};

export default Marketplace;

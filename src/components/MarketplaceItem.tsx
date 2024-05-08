import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface MarketplaceItemProps {
  project: Project;
}

const MarketplaceItem: React.FC<MarketplaceItemProps> = ({ project }) => {
  return (
    <div>
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Precio: ${project.price}</p>
    </div>
  );
};

export default MarketplaceItem;

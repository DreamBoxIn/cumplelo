import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  Box, Text, Image, Button, Flex, useBreakpointValue, useColorModeValue,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
} from '@chakra-ui/react';
import { Project } from '../types';

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const slidesPerView = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4, xl: 5 });
  const spaceBetweenSlides = useBreakpointValue({ base: 10, sm: 20, md: 30 });
  // Mejoras en la transparencia para un diseño más limpio
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(45, 55, 72, 0.8)');

  return (
    <Box width="full" sx={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}>
      <Swiper
        spaceBetween={spaceBetweenSlides}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Box p={3} boxShadow="lg" bg={bgColor} color="black" borderRadius="lg" display="flex" flexDirection="column" alignItems="center">
              <Box width="100%" height="200px" overflow="hidden" mb={2}>
                <Image src={project.imageUrl} alt={project.title} width="100%" height="100%" objectFit="cover" />
              </Box>
              <Text fontSize="lg" fontWeight="bold" textAlign="center" color="gray.800">{project.title}</Text>
              <Text fontSize="sm" textAlign="center" fontWeight="bold" color="gray.600">Disponibles: {project.disponibles}</Text>
              <Text fontSize="sm" textAlign="center" color="gray.600">Category: {project.category}</Text>
              <Button colorScheme="blue" size="sm" mt={4} alignSelf="center">Reclamar NFT</Button>
              <Accordion allowToggle mt={2} width="100%">
                <AccordionItem>
                  <AccordionButton px={2} py={1} fontSize="sm">
                  <Box flex="1" textAlign="center" fontWeight="bold" color="gray.900">Más detalles</Box>
                    <AccordionIcon color="blue.500" />
                  </AccordionButton>
                  <AccordionPanel pb={4} color="gray.500">
                    {project.description}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProjectCarousel;

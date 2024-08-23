import { Box, Heading, VStack, Link, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import CustomButton from './customButton';
import { FormattedMessage } from 'react-intl';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const projects = [
  { id: 1, link: 'https://pelis-lista.vercel.app/', image: '/images/peli.png', titleId: 'project1.title', descriptionId: 'project1.description' },
  { id: 2, link: '', image: '/images/horoscopo destino.png', titleId: 'project2.title', descriptionId: 'project2.description' },
  { id: 3, link: '', image: '/images/nomada digital.png', titleId: 'project3.title', descriptionId: 'project3.description' },
  { id: 4, link: '', image: '/images/poketrivia.png', titleId: 'project4.title', descriptionId: 'project4.description' },
  { id: 5, link: '', image: '/images/cancion y letra.png', titleId: 'project5.title', descriptionId: 'project5.description' },
  { id: 6, link: '', image: '/images/refrimarket.png', titleId: 'project6.title', descriptionId: 'project6.description' },
];
interface ProjectSectionProps {
showAll: boolean,
toggleShowAll: () => void
}

const ProjectSection = ({  showAll, toggleShowAll }: ProjectSectionProps) => {
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
// Efecto de perspectiva para las imágenes
const imageVariants = (index: number) => ({
    initial: {
      perspective: 1000,
      rotateY: index % 2 === 0 ? 25 : -25,
      scale: 1,
    },
    hover: {
      rotateY: 0,
      scale: 1.05,
    },
  });
  return (
    <Box
  bgColor="pink.50"
  borderRadius="16px"
  mb={20}
  py={20}
  borderY="1px solid white"
  h="fit-content"
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
>
  <Heading as="h2" size="xl" fontFamily="'Courier Prime', monospace" mb={8}>
    <FormattedMessage id='projects' defaultMessage='Proyectos'/>
  </Heading>
  
  {visibleProjects.map((project, index) => (
    <MotionBox
      key={project.id}
      justifyContent="space-between"
      h="fit-content"
      mb={16}
      display="flex"
      flexDirection={{ base: "column", md: index % 2 === 0 ? 'row' : 'row-reverse' }} // Apila en columna en móviles
      alignItems="center"
      initial="initial"
      animate="visible"
      whileHover="hover"
      variants={imageVariants(index)}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <MotionImage
        src={project.image}
        alt={`Proyecto ${project.id}`}
        objectFit="cover"
        w={{ base: "100%", md: "40%" }} // Ancho completo en móviles
        h="auto"
        borderRadius={20}
        boxShadow="20px 20px 40px rgba(255, 255, 255, 0.2)"
        initial="initial"
        whileHover="hover"
        variants={imageVariants(index)}
        transition={{ duration: 0.5, type: 'spring' }}
      />
      <VStack
            spacing={4}
            p={4}
            mt={{ base: 4, md: 0 }}
            w={{ base: "100%", md: "50%" }}
            alignItems="flex-start"
            borderRadius={16}
            boxShadow="20px 20px 40px rgba(0, 0, 0, 0.4)"
          >
            <Heading size="md" textAlign="start" fontFamily="'Playfair Display', serif">
              <FormattedMessage id={project.titleId} defaultMessage={project.titleId} />
            </Heading>
            <Text fontSize="lg" fontFamily="'Lora', serif">
              <FormattedMessage id={project.descriptionId} defaultMessage={project.descriptionId} />
            </Text>
            <Link href={project.link} isExternal alignSelf="center">
              <CustomButton text='Visitar' />
            </Link>
          </VStack>
    </MotionBox>
  ))}

  <CustomButton icon={showAll ? <FaChevronUp /> : <FaChevronDown />} onClick={toggleShowAll}/>
</Box>

  );
};

export default ProjectSection;
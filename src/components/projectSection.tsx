import { Box, Heading, VStack, Link, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import CustomButton from './customButton';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const projects = [
  { 
    id: 1, 
    link: 'https://pelis-lista.vercel.app/', 
    image: '/images/peli.png', 
    title: 'Pelis Lista', 
    description: 'Organiza tus películas favoritas de manera intuitiva y elegante. Con Pelis Lista, puedes añadir, clasificar y buscar títulos en un solo lugar, convirtiendo tu experiencia cinematográfica en algo personalizado y fácil de gestionar.' 
  },
  { 
    id: 2, 
    link: '', 
    image: '/images/horoscopo destino.png', 
    title: 'Horóscopo App', 
    description: 'Descubre tu destino con la Horóscopo App, una aplicación móvil disponible en Play Store que ofrece predicciones diarias personalizadas según tu signo zodiacal. Navega tu día con la sabiduría de las estrellas directamente en tu bolsillo.' 
  },
  { 
    id: 3, 
    link: '', 
    image: '/images/nomada digital.png', 
    title: 'Nómada Digital', 
    description: 'Explora el mundo de las aplicaciones desarrolladas por Nómada Digital. Esta plataforma es tu ventana a un portafolio de proyectos, con todas las aplicaciones creadas, detalles de contacto y más, todo en un solo lugar.' 
  },
  { 
    id: 4, 
    link: '', 
    image: '/images/poketrivia.png', 
    title: 'Poke Trivia', 
    description: 'Descarga Poke Trivia en la Play Store y pon a prueba tu conocimiento del universo Pokémon. Esta aplicación móvil ofrece un desafío divertido para fans de todas las edades, con preguntas y retos que te mantendrán enganchado.' 
  },
  { 
    id: 5, 
    link: '', 
    image: '/images/cancion y letra.png', 
    title: 'Canción y Letra', 
    description: 'Encuentra las letras de tus canciones favoritas con Canción y Letra. Explora un vasto catálogo de canciones y canta al ritmo de tus artistas preferidos, todo en una aplicación fácil de usar.' 
  },
  { 
    id: 6, 
    link: '', 
    image: '/images/refrimarket.png', 
    title: 'Refrimarket', 
    description: 'Gestiona el inventario de tu negocio con Refrimarket, un sistema de gestión de stock creado para emprendedores. Este software simplifica el control de inventarios, facilitando la administración y el crecimiento de tu empresa.' 
  },
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
      <Heading as="h2" size="xl" fontFamily="'Courier Prime', monospace" mb={8}>Proyectos</Heading>
      
      {visibleProjects.map((project, index) => (
        <MotionBox
          key={project.id}
          justifyContent="space-between"
          h="fit-content"
          mb={16}
          display="flex"
          flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
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
            w="40%"
            h="50%"
            borderRadius={20}
            boxShadow="20px 20px 40px rgba(255, 255, 255, 0.2)"
            initial="initial"
            whileHover="hover"
            variants={imageVariants(index)}
            transition={{ duration: 0.5, type: 'spring' }}
          />
          <VStack spacing={4} p={4} w="50%" alignItems="flex-start"  borderRadius={16} boxShadow="20px 20px 40px rgba(0, 0, 0, 0.4)">
  <Heading size="md" textAlign="start" fontFamily="'Playfair Display', serif">
    {project.title}
  </Heading>
  <Text fontSize="lg" fontFamily="'Lora', serif">
    {project.description}
    
  </Text>
  <Link href={project.link} isExternal alignSelf="center">
    <CustomButton text='Visitar' />
  </Link>
  <Box mt={2} as="span" display="inline-block" w="100%" textAlign="center" fontSize="lg" fontFamily="'Lora', serif">
      ~ * ~
    </Box>
</VStack>
        </MotionBox>
      ))}

      <CustomButton icon={showAll ? <FaChevronUp /> : <FaChevronDown />} onClick={toggleShowAll}/>
    </Box>
  );
};

export default ProjectSection;
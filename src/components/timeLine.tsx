import { Box, Heading, VStack, Text, Container, Flex } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

const experiences = [
  {
    date: 'Mayo 2023 - Actualidad',
    title: 'Desarrolladora Front-End',
    company: 'BECHSUD ARGENTINA',
    location: 'Argentina (Híbrido)',
    description:
      'Mantenimiento y actualización del sitio web de la empresa, implementando mejoras y optimizando el rendimiento para una mejor experiencia de usuario.',
  },
  {
    date: 'Mayo 2021 - Sept. 2022',
    title: 'Programadora Full Stack',
    company: 'Argenmining',
    location: 'Buenos Aires, Argentina (Híbrido)',
    description:
      'Lideré el desarrollo de una plataforma integral para control de equipos, usando React, Node.js y TypeScript. También diseñé la web de la empresa y material publicitario.',
  },
  {
    date: 'Marzo 2012 - Abril 2020',
    title: 'Diseñadora Gráfica',
    company: 'Estetica M&A',
    location: 'Buenos Aires, Argentina (Presencial)',
    description:
      'Diseñé el logo, tarjetas y publicidad para redes sociales, contribuyendo al aumento de la presencia en línea del centro.',
  },
  {
    date: 'Noviembre 2022 - Actualidad',
    title: 'Desarrolladora de Aplicaciones Móviles',
    company: 'Proyectos Personales',
    location: 'Publicados en Play Store',
    description:
      'Creé y publiqué aplicaciones como "Poke Trivia" y "Horóscopo App" en la Play Store, alcanzando un número significativo de descargas.',
  },
];

const Timeline = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h2" size="xl" mb={8} textAlign="center" fontFamily="'Courier Prime', monospace">
        Experiencia Profesional
      </Heading>
      <Box position="relative" pl={10} _before={{
        content: '""',
        position: 'absolute',
        left: '30px',
        top: 0,
        bottom: 0,
        width: '2px',
        bgColor: 'gray.200',
      }}>
        {experiences.map((exp, index) => (
          <Flex key={index} gap={5} mb={10} alignItems="center" position="relative">
            <Box position="absolute" left="22px">
              <FaCircle size="12px" color={index % 2 === 0 ? '#fd9395' : '#82a56d'} />
            </Box>
            <Box ml={10}>
              <Text fontSize="sm" fontWeight="bold" fontFamily="'Playfair Display', serif">
                {exp.date}
              </Text>
              <Heading size="md" fontFamily="'Playfair Display', serif">{exp.title}</Heading>
              <Text fontSize="md" fontWeight="bold" color="gray.600" fontFamily="'Lora', serif">
                {exp.company} · {exp.location}
              </Text>
              <Text fontSize="lg" mt={2} fontFamily="'Lora', serif">
                {exp.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Container>
  );
};

export default Timeline;

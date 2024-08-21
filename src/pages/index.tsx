import { Box, Heading, VStack, Text, Container, SimpleGrid, Link, Input, Textarea, Button, Image } from '@chakra-ui/react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaBootstrap, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiNextdotjs, SiChakraui, SiKotlin, SiTailwindcss } from 'react-icons/si';
import TypingEffect from '@/components/TypingEffect';
import CustomButton from '@/components/customButton';

const ParallaxBox = motion(Box);
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Home = () => {
  const { scrollY } = useViewportScroll();
  

  // Efecto parallax en las secciones
  const yBackground = useTransform(scrollY, [700, 1100], [0, 0]);
  const yForeground = useTransform(scrollY, [500, 1100], [-400, 0]);
  const yBackground2 = useTransform(scrollY, [3500, 3800], [0, 0]); // Fondo estático
  const yForeground2 = useTransform(scrollY, [3500, 3800], [-300, 0]);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    console.log(inView); // Puedes usar esto para depuración si quieres
  }, [inView]);

  // Skills Icons
  const skills = [
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaCss3Alt, color: "#1572B6" },
    { icon: FaJs, color: "#F7DF1E" },
    { icon: SiTypescript, color: "#007ACC" },
    { icon: FaReact, color: "#61DAFB" },
    { icon: SiRedux, color: "#764ABC" },
    { icon: SiNextdotjs, color: "#000000" },
    { icon: SiChakraui, color: "#319795" },
    { icon: FaGithub, color: "#181717" },
    { icon: SiKotlin, color: "#7F52FF" },
    { icon: SiTailwindcss, color: "#06B6D4" },
    { icon: FaBootstrap, color: "#7952B3" },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('iris')?.getBoundingClientRect();
      if (!rect) return;

      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      const irisMovementX = Math.min(Math.max(mouseX / 10, -10), 10); // Limitar el movimiento
      const irisMovementY = Math.min(Math.max(mouseY / 10, -10), 0.5);

      setIrisPosition({ x: irisMovementX, y: irisMovementY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

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
      // bgImage="url('/images/Aestetic floral.svg')" 
      bgSize="cover" 
      bgPosition="center"
      minH="100vh"
      p={0} 
      overflow="hidden"
    >
      <Container alignItems="center" justifyContent="center" maxW="90%" p={20}>
        {/* Sección Sobre Mí */}
        <Box h="50vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4}  w="50%">
  <TypingEffect text="Hola, Soy Juli♥" />
  <Text fontSize="xl" mt={16} mr={14} fontFamily="'Cormorant Garamond'" border="1px groove brown" p={6} borderRadius={16} boxShadow="20px 20px 40px rgba(0, 0, 0, 0.4)">
    Soy Julieta Ailyn Mosquera, una apasionada desarrolladora front end con un fuerte enfoque en la creación de aplicaciones web modernas y atractivas. Con experiencia en tecnologías como React, Next.js, y TypeScript, me especializo en transformar ideas en interfaces de usuario intuitivas y responsivas. Mi objetivo es combinar un diseño estético con una funcionalidad impecable, creando experiencias digitales que cautiven a los usuarios. Siempre en busca de nuevos retos, disfruto aprendiendo y adaptándome a las últimas tendencias en desarrollo web.
  </Text>
</VStack>

<Box mt={20} w="40%" display="flex" justifyContent="center" position="relative">
            {/* Caricatura Base */}
            <Image src="/images/juli anim.png" alt="Caricatura de Juli" borderRadius="lg" />
            
            {/* Ojos */}
            <Image
              src="/images/ojos juli.png"
              alt="Ojos de Juli"
              position="absolute"
              top="50%"
              left="50%"
              zIndex={2}
              transform="translate(-50%, -50%)"
            />
            
            {/* Iris */}
            <Image
              src="/images/iris juli.png"
              alt="Iris de Juli"
              position="absolute"
              zIndex={3}
              top="51%"
              left="51%"
              transform={`translate(-50%, -50%) translate(${irisPosition.x}px, ${irisPosition.y}px)`}
              id="iris"
            />
            <Image
              src="/images/ojos 2.png"
              alt="Ojos de Juli"
              position="absolute"
              top="50%"
              left="50%"
              zIndex={4}
              transform="translate(-50%, -50%)"
            />
          </Box>
</Box>
          <Box 
            h="900px"
            w="fix-content" 
            position="relative" 
          >
          <ParallaxBox 
            style={{ y: yForeground }} 
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundImage="url('/images/fondo flores.gif')"
            backgroundSize="cover"
            backgroundPosition="center"
            zIndex={2}
          />
        </Box>

        {/* Sección Proyectos */}
        <Box
          ref={ref}
          bgColor="pink.50"
          mb={20}
          py={20}
          borderY="1px solid white"
          h="fit-content"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h2" size="xl" fontFamily="'Courier Prime', monospace"  mb={8}>Proyectos</Heading>
          {[{
            id: 1, link: 'https://pelis-lista.vercel.app/', image: '/images/peli.png', title: 'Pelis Lista', description: 'Aplicación para organizar películas.'
          }, 
          {
            id: 2, link: '', image: '/images/horoscopo destino.png', title: 'Horóscopo App', description: 'Consulta diaria de horóscopos.'
          },
          
          {
            id: 3, link: '', image: '/images/nomada digital.png', title: 'Nomada Digital', description: 'Plataforma de servicios de desarrollo.'
          },
          {
            id: 4, link: '', image: '/images/poketrivia.png', title: 'Poke Trivia', description: 'Juego de trivia sobre Pokémon.'
          },
          {
            id: 5, link: '', image: '/images/cancion y letra.png', title: 'Canción y Letra', description: 'App para encontrar letras de canciones.'
          },
          {
            id: 6, link: '', image: '/images/refrimarket.png', title: 'Refrimarket', description: 'Tienda en línea de electrodomésticos.'
          },
           
          ].map((project, index) => (
            <MotionBox
              key={project.id}
              justifyContent="space-between"
              h="fit-content"
              mb={16}
              gap={8}
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
              <VStack spacing={4} p={4} w="50%" alignItems={index % 2 === 0 ? 'flex-start' : 'flex-end'}>
                <Heading size="md" textAlign="start">{project.title}</Heading>
                <Text>{project.description}</Text>
                <Link href={project.link} isExternal>
                <CustomButton text='Visitar' />
                  {/* <Button variant="solid" colorScheme="teal">Visitar</Button> */}
                </Link>
              </VStack>
            </MotionBox>
          ))}
        </Box>

        {/* Efecto Parallax 2 */}
        <Box 
          h="600px" 
          w="600px" 
          position="relative" 
          margin="0 auto"
          overflow="hidden" 
          border="2px solid white"
          borderRadius="lg"
        >
          <ParallaxBox 
            style={{ y: yBackground2 }} 
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundImage="url('/images/pcmujer.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            zIndex={1}
          />
          <ParallaxBox 
            style={{ y: yForeground2 }} 
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundImage="url('/images/mujer pc.png')" 
            backgroundSize="contain"
            backgroundPosition="center"
            zIndex={2}
          />
        </Box>

        {/* Sección Experiencia Profesional */}
        <Box h="100vh" display="flex" alignItems="center" justifyContent="space-between">
          <Box w="50%">
          <VStack alignItems="flex-start" spacing={6}>
  <Box>
    <Heading size="md">2022 - Actualidad</Heading>
    <Text fontSize="lg">
      <strong>Desarrolladora Full Stack - Frávega</strong>
      <br />
      Trabajo en el desarrollo y mantenimiento de aplicaciones tanto front end como back end, con un enfoque especial en la optimización de la experiencia de usuario y la implementación de soluciones escalables. Uso tecnologías como React, Redux, Node.js, y microservicios para asegurar que las plataformas sean robustas, seguras y fáciles de usar.
    </Text>
  </Box>

  <Box>
    <Heading size="md">2021 - 2022</Heading>
    <Text fontSize="lg">
      <strong>Desarrolladora Front End - ABC Dinamic Technologies</strong>
      <br />
      Participé en el desarrollo de interfaces de usuario para aplicaciones empresariales utilizando React y TypeScript. Colaboré con equipos de diseño para implementar interfaces responsive y accesibles, mejorando significativamente la experiencia de usuario en las plataformas de nuestros clientes.
    </Text>
  </Box>

  <Box>
    <Heading size="md">2020 - 2021</Heading>
    <Text fontSize="lg">
      <strong>Desarrolladora Junior - Deftecnic</strong>
      <br />
      Inicié mi carrera trabajando en proyectos de desarrollo web utilizando HTML, CSS, y JavaScript. Colaboré en la creación de componentes reutilizables y en la optimización de sitios web para mejorar la velocidad de carga y la accesibilidad.
    </Text>
  </Box>
</VStack>

          </Box>
          <Box w="50%" display="flex" justifyContent="center" onMouseMove={handleMouseMove}>
            <Box 
              w="400px" 
              h="400px" 
              position="relative" 
              borderRadius="50%" 
              bg="rgba(255, 255, 255, 0.1)" 
              overflow="hidden" 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const angle = (index / skills.length) * 360;
                const x = 150 * Math.cos((angle * Math.PI) / 180);
                const y = 150 * Math.sin((angle * Math.PI) / 180);
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    top={`calc(50% + ${y}px)`}
                    left={`calc(50% + ${x}px)`}
                    transform="translate(-50%, -50%)"
                    animate={{
                      x: mousePosition.x / 30,
                      y: mousePosition.y / 30,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <Icon color={skill.color} size="40px" />
                  </MotionBox>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Sección Contacto */}
        <Box h="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bg="rgba(0, 0, 0, 0.5)" color="white">
          <Heading as="h2" size="xl" mb={8}>Contacto</Heading>
          <VStack spacing={4} w="50%">
            <Input placeholder="Tu nombre" variant="filled" />
            <Input placeholder="Tu correo electrónico" variant="filled" />
            <Textarea placeholder="Tu mensaje" variant="filled" />
            <Button colorScheme="teal">Enviar</Button>
          </VStack>
          <SimpleGrid columns={4} spacing={10} mt={8}>
            <Link href="https://github.com/" isExternal><FaGithub size="40px" /></Link>
            <Link href="https://www.linkedin.com/" isExternal><FaLinkedin size="40px" /></Link>
            <Link href="mailto:julietaailyn01@gmail.com" isExternal><FaEnvelope size="40px" /></Link>
            <Link href="https://wa.me/1132610111" isExternal><FaWhatsapp size="40px" /></Link>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

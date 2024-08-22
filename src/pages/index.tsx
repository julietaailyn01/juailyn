import { Box, Heading, VStack, Text, Container, SimpleGrid, Link, Input, Textarea, Button, Image } from '@chakra-ui/react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaBootstrap, FaLinkedin, FaWhatsapp, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiNextdotjs, SiChakraui, SiKotlin, SiTailwindcss } from 'react-icons/si';
import TypingEffect from '@/components/TypingEffect';
import CustomButton from '@/components/customButton';
import Timeline from '@/components/timeLine';
import SkillsSection from '@/components/skillsSection';

const ParallaxBox = motion(Box);
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


const Home = () => {
  const { scrollY } = useViewportScroll();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const toggleShowAll = () => setShowAll(!showAll);
  

  // Efecto parallax en las secciones
  const yForeground = useTransform(scrollY, [500, 1100], [-400, 0]);
  const yBackground2 = useTransform(scrollY, !showAll? [2200, 2500] : [3200, 3500], [0, 0]);
  const yForeground2 = useTransform(scrollY, !showAll? [2200, 2500] : [3200, 3500], [-300, 0]);

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
        <Box display="flex" gap={5} alignItems="center" justifyContent="space-between">
          
        <Timeline/>


<SkillsSection/>

        </Box>

        {/* Sección Contacto */}
        <Box 
  h="100vh" 
  display="flex" 
  flexDirection="column" 
  alignItems="center" 
  justifyContent="center" 
  p={8}
  borderRadius="16px"
>
  <Heading as="h2" size="2xl" mb={8} fontFamily="'Playfair Display', serif" color="#fd9395">
    Contáctame
  </Heading>
  <VStack spacing={4} w="50%">
    <Input 
      placeholder="Tu nombre" 
      variant="filled" 
      bg="rgba(253, 147, 149, 0.1)"
      borderColor="transparent"
      focusBorderColor="#fd9395"
      _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
      borderRadius="12px"
      color="#4b643b"
      fontFamily="'Lora', serif"
    />
    <Input 
      placeholder="Tu correo electrónico" 
      variant="filled" 
      bg="rgba(253, 147, 149, 0.1)"
      borderColor="transparent"
      focusBorderColor="#fd9395"
      _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
      borderRadius="12px"
      color="#4b643b"
      fontFamily="'Lora', serif"
    />
    <Textarea 
      placeholder="Tu mensaje" 
      variant="filled" 
      bg="rgba(253, 147, 149, 0.1)"
      borderColor="transparent"
      focusBorderColor="#fd9395"
      _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
      borderRadius="12px"
      color="#4b643b"
      fontFamily="'Lora', serif"
    />
    <CustomButton text="Enviar" />
  </VStack>
  <SimpleGrid columns={4} spacing={10} mt={8}>
    <Link href="https://github.com/" isExternal>
      <Box 
        p={3} 
        bg="rgba(253, 147, 149, 0.1)" 
        borderRadius="50%" 
        _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
        transition="all 0.3s ease"
        color="#fd9395"
      >
        <FaGithub size="40px" />
      </Box>
    </Link>
    <Link href="https://www.linkedin.com/" isExternal>
      <Box 
        p={3} 
        bg="rgba(253, 147, 149, 0.1)" 
        borderRadius="50%" 
        _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
        transition="all 0.3s ease"
        color="#fd9395"
      >
        <FaLinkedin size="40px" />
      </Box>
    </Link>
    <Link href="mailto:julietaailyn01@gmail.com" isExternal>
      <Box 
        p={3} 
        bg="rgba(253, 147, 149, 0.1)" 
        borderRadius="50%" 
        _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
        transition="all 0.3s ease"
        color="#fd9395"
      >
        <FaEnvelope size="40px" />
      </Box>
    </Link>
    <Link href="https://wa.me/1132610111" isExternal>
      <Box 
        p={3} 
        bg="rgba(253, 147, 149, 0.1)" 
        borderRadius="50%" 
        _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
        transition="all 0.3s ease"
        color="#fd9395"
      >
        <FaWhatsapp size="40px" />
      </Box>
    </Link>
  </SimpleGrid>
</Box>



      </Container>
    </Box>
  );
};

export default Home;

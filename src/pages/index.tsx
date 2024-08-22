import { Box, Heading, VStack, Text, Container, SimpleGrid, Link, Input, Textarea, Image } from '@chakra-ui/react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaBootstrap, FaLinkedin, FaWhatsapp, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiNextdotjs, SiChakraui, SiKotlin, SiTailwindcss } from 'react-icons/si';
import TypingEffect from '@/components/TypingEffect';
import CustomButton from '@/components/customButton';
import Timeline from '@/components/timeLine';
import SkillsSection from '@/components/skillsSection';
import ProjectSection from '@/components/projectSection';
import ContactSection from '@/components/contactSection';

const ParallaxBox = motion(Box);

const Home = () => {
  const { scrollY } = useViewportScroll();
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);

  // Efecto parallax en las secciones
  const yForeground = useTransform(scrollY, [500, 1100], [-400, 0]);
  const yBackground2 = useTransform(scrollY, !showAll ? [2200, 2500] : [3200, 3500], [0, 0]);
  const yForeground2 = useTransform(scrollY, !showAll ? [2200, 2500] : [3200, 3500], [-300, 0]);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    console.log(inView); // Puedes usar esto para depuración si quieres
  }, [inView]);

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

  return (
    <Box
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      p={0}
      overflow="hidden"
    >
      <Container alignItems="center" justifyContent="center" maxW="90%" p={20}>
        {/* Sección Sobre Mí */}
        <Box h="50vh" display="flex" alignItems="center" justifyContent="center">
          <VStack spacing={4} w="50%">
            <TypingEffect text="Hola, Soy Juli♥" />
            <Text
              fontSize="xl"
              mt={16}
              mr={14}
              fontFamily="'Cormorant Garamond'"
              border="1px groove brown"
              p={6}
              borderRadius={16}
              boxShadow="20px 20px 40px rgba(0, 0, 0, 0.4)"
            >
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
        <ProjectSection showAll={showAll} toggleShowAll={toggleShowAll} />

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
          <Timeline />
          <SkillsSection />
        </Box>

        {/* Sección Contacto */}
        <ContactSection />
      </Container>
    </Box>
  );
};

export default Home;

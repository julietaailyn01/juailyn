import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiChakraui, SiKotlin, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';

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

const Sphere3D = () => {
  const sphereRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    const radius = 150;
    const total = skills.length;
    const mouse = { x: 0, y: 0 };
    let currentX = 0;
    let currentY = 0;

    const rotateSphere = () => {
      currentX += (mouse.x - currentX) * 0.05;
      currentY += (mouse.y - currentY) * 0.05;

      sphere.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;

      requestAnimationFrame(rotateSphere);
    };

    const positionElements = () => {
      skills.forEach((skill, index) => {
        const icon = sphere.children[index] as HTMLElement;
        const phi = Math.acos(-1 + (2 * index + 1) / total);
        const theta = Math.sqrt(total * Math.PI) * phi;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        icon.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = sphere.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
      mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
    };

    positionElements();
    rotateSphere();
    sphere.addEventListener('mousemove', handleMouseMove);

    return () => {
      sphere.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box
      w="100%"
      h="100%"
      position="relative"
      ref={sphereRef}
      sx={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease',
      }}
    >
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <Box
            key={index}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color={skill.color}
            fontSize="40px"
            sx={{
              animation: 'spin 5s infinite linear', // Añadir la animación de giro
            }}
          >
            <Icon />
          </Box>
        );
      })}
    </Box>
  );
};

const SkillsSection = () => {
  return (
    <Box 
      h="100%"
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
    >
      <Heading as="h2" size="xl" mb={8} fontFamily="'Courier Prime', monospace">
        Skills
      </Heading>
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
        sx={{
          perspective: '1000px',
        }}
      >
        <Sphere3D />
      </Box>
    </Box>
  );
};

export default SkillsSection;


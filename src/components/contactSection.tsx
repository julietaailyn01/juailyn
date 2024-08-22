import { Box, SimpleGrid, Textarea, VStack, Link, Heading, Input } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CustomButton from "./customButton";

const ContactSection = () => (
    <Box 
        h="90vh"
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

  );

  export default ContactSection
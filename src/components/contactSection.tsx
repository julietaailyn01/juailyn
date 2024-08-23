import { Box, Heading, VStack, Text, Container, SimpleGrid, Link, Input, Textarea, Image, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FormattedMessage, useIntl } from 'react-intl';
import CustomButton from '@/components/customButton';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();
  const intl = useIntl();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xdknpzqd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        toast({
          title: intl.formatMessage({ id: "contactSuccessToastTitle" }),
          description: intl.formatMessage({ id: "contactSuccessToastDescription" }),
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      toast({
        title: intl.formatMessage({ id: "contactErrorToastTitle" }),
        description: intl.formatMessage({ id: "contactErrorToastDescription" }),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
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
        <FormattedMessage id="contactTitle" defaultMessage="Contáctame" />
      </Heading>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", display:"flex", flexDirection:"column", alignItems: "center" }}
      >
        <VStack spacing={4} w="50%">
          <Input 
            placeholder={intl.formatMessage({ id: "contactNamePlaceholder", defaultMessage: "Tu nombre" })}
            variant="filled" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            bg="rgba(253, 147, 149, 0.1)"
            borderColor="transparent"
            focusBorderColor="#fd9395"
            _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
            borderRadius="12px"
            color="#4b643b"
            fontFamily="'Lora', serif"
          />
          <Input 
            placeholder={intl.formatMessage({ id: "contactEmailPlaceholder", defaultMessage: "Tu correo electrónico" })}
            variant="filled" 
            value={email}
            type="email" 
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            bg="rgba(253, 147, 149, 0.1)"
            borderColor="transparent"
            focusBorderColor="#fd9395"
            _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
            borderRadius="12px"
            color="#4b643b"
            fontFamily="'Lora', serif"
          />
          <Textarea 
            placeholder={intl.formatMessage({ id: "contactMessagePlaceholder", defaultMessage: "Tu mensaje" })}
            variant="filled" 
            value={message}
            name='message'
            isRequired
            onChange={(e) => setMessage(e.target.value)}
            bg="rgba(253, 147, 149, 0.1)"
            borderColor="transparent"
            focusBorderColor="#fd9395"
            _hover={{ bg: "rgba(253, 147, 149, 0.2)" }}
            borderRadius="12px"
            color="#4b643b"
            fontFamily="'Lora', serif"
          />
          <CustomButton issubmit text={intl.formatMessage({ id: "contactSubmitButton", defaultMessage: "Enviar" })} />
        </VStack>
      </form>
      <SimpleGrid columns={4} spacing={10} mt={8}>
        <Link href="https://github.com/julietaailyn01" isExternal>
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
        <Link href="https://www.linkedin.com/in/julieta-ailyn-mosquera-14a331205" isExternal>
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
};

export default ContactSection;

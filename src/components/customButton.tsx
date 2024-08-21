import { Button, Box } from '@chakra-ui/react';

interface CustomButtonProps {
    text: string;
    }


const CustomButton = ( {text} : CustomButtonProps ) => {
  return (
    <Button
    variant="outline"
    position="relative"
    borderWidth="2px"
    borderColor="#82a56d"
    color="#82a56d"
    fontWeight="bold"
    _before={{
      content: '""',
      position: 'absolute',
      top: '10px', // Ajusta la posición para sobresalir más
      left: '10px', // Ajusta la posición para sobresalir más
      width: '100%', // Aumenta el tamaño para que sobresalga
      height: '100%', // Aumenta el tamaño para que sobresalga
      bgImage: 'linear-gradient(135deg, rgba(253, 147, 149, 0.3) 20%, transparent 10%, transparent 50%, rgba(253, 147, 149, 0.3) 50%, rgba(253, 147, 149, 0.3) 70%, transparent 70%, transparent)', // Fondo de líneas diagonales más finas
      bgSize: '10px 10px', 
      zIndex: -1,
      transition: 'top 0.5s ease, left 0.5s ease', // Transición suave
    }}
    _hover={{
      color: '#4b643b',
      borderColor: '#4b643b',
      _before: {
        top: '0px', // Las líneas vuelven a su posición original
        left: '0px',
      },
    }}
    _active={{
      transform: 'scale(0.98)',
    }}
  >
      {text}
    </Button>
  );
};

export default CustomButton;

import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';

const TypingEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState<string>(""); // Estado para el texto a mostrar
  const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true); // Estado para el cursor titilante

  useEffect(() => {
    if (!text || text.length === 0) return;
  
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      const nextChar = text[currentIndex];
      console.log('nextChar:', nextChar); // Depuración
      if (currentIndex < text.length && nextChar !== undefined) {
        setDisplayedText((prev) => {
          const newText = prev + nextChar;
          console.log('newText:', newText); // Depuración
          return newText;
        });
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500);
  
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text]);
  
  return (
    <Heading 
      as="h1" 
      size="2xl" 
      fontFamily="'Courier Prime', monospace" 
      textAlign="left" // Alineación a la izquierda
      w="100%" // Asegura que el contenedor ocupe todo el ancho
    >
      {displayedText}
      {isCursorVisible && <span>|</span>} 
    </Heading>
  );
};

export default TypingEffect;

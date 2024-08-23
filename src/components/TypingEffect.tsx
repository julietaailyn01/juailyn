import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';

interface TypingEffectProps {
  text: string;
}

const TypingEffect = ({ text }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    // Reiniciar el texto mostrado cada vez que cambie el texto prop
    setDisplayedText('');

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      const nextChar = text[currentIndex];
      if (currentIndex < text.length && nextChar !== undefined) {
        setDisplayedText((prev) => prev + nextChar);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500);

    // Limpiar intervalos cuando el componente se desmonta o cuando el texto cambia
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
      textAlign="left"
      w="100%"
    >
      {displayedText}
      {isCursorVisible && <span>|</span>}
    </Heading>
  );
};

export default TypingEffect;

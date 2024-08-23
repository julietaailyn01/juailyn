import { Box, IconButton } from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from './lenguageContext';
import CustomButton from './customButton';

const LanguageSwitcher = () => {
  const { locale, switchLanguage } = useLanguage();

  const toggleLanguage = () => {
    switchLanguage(locale === 'en' ? 'es' : 'en');
  };

  return (
    <Box position="absolute" top={4} right={4}>
        <CustomButton icon={<FaGlobe />} onClick={toggleLanguage} />
    </Box>
  );
};

export default LanguageSwitcher;

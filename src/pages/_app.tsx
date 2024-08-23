// pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../theme';
import { LanguageProvider } from '@/components/lenguageContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </LanguageProvider>
  );
}

export default MyApp;

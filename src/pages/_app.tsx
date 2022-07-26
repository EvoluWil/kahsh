import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/footer/footer.component';
import { GlobalStyle } from '../styles/global.styles';
import { theme } from '../styles/theme.styles';
import { AppContainer } from '../styles/_app.styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Component {...pageProps} />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

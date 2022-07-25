import { Footer } from './src/components/display/footer/footer.component';
import AppLoading from 'expo-app-loading';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { useApp } from './src/hooks/app.hook';
import { Home } from './src/screens/home/home.screen';

export const App: React.FC = () => {
  const { getStoredTheme, fontsLoaded, selectedTheme } = useApp();

  useEffect(() => {
    getStoredTheme();
  }, [getStoredTheme]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <StatusBar
        barStyle={selectedTheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme[selectedTheme].colors.background}
        translucent
      />

      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Home />
          <Footer />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

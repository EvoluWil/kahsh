import { Footer } from './src/components/display/footer/footer.component';
import React, { useCallback, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { useApp } from './src/hooks/app.hook';
import { Home } from './src/screens/home/home.screen';
import { hideAsync } from 'expo-splash-screen';

export const App: React.FC = () => {
  const { getStoredTheme, fontsLoaded, selectedTheme } = useApp();

  useEffect(() => {
    getStoredTheme();
  }, [getStoredTheme]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
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
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Home />
            <Footer />
          </View>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

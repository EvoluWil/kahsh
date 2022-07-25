import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFonts } from 'expo-font';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { useColorScheme } from 'react-native';

type Theme = 'dark' | 'light';

export const useApp = () => {
  const deviceTheme = useColorScheme();
  const [selectedTheme, setSelectedTheme] = useState<Theme>(
    deviceTheme || 'light'
  );

  const handleChageTheme = async (changeTheme: Theme = 'light') => {
    setSelectedTheme(changeTheme);
    AsyncStorage.setItem('@kahsh:theme', changeTheme);
  };

  const getStoredTheme = async () => {
    const storedTheme = await AsyncStorage.getItem('@kahsh:theme');
    if (storedTheme) {
      setSelectedTheme(storedTheme as Theme);
    }
  };

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  return {
    handleChageTheme,
    getStoredTheme,
    fontsLoaded,
    selectedTheme
  };
};

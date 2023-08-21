import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { ToastProvider } from 'react-native-toast-notifications';

import GamesContextProvider from '../src/context/GamesContext';
import Header from '../src/components/Header';

const MainLayout = () => {
  return (
    <GamesContextProvider>
      <ToastProvider>
        <View>
          <Header />
          <Slot />
        </View>
      </ToastProvider>
    </GamesContextProvider>
  )
}

export default MainLayout;

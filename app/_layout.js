import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { ToastProvider } from 'react-native-toast-notifications';

import GamesContextProvider from '../src/context/GamesContext';
import components from '../src/components';

const MainLayout = () => {
  return (
    <GamesContextProvider>
      <ToastProvider>
        <View>
          <components.Header />
          <Slot />
        </View>
      </ToastProvider>
    </GamesContextProvider>
  )
}

export default MainLayout;

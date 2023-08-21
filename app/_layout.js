import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import GamesContextProvider from '../src/context/GamesContext';

const MainLayout = () => {
  return (
    <GamesContextProvider>
      <View>
        <Text>The header will be here!</Text>
        <Slot />
        <StatusBar translucent={false} />
      </View>
    </GamesContextProvider>
  )
}

export default MainLayout;

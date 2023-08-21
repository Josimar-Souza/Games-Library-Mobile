import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';

const MainLayout = () => {
  return (
    <View>
      <Text>The header will be here!</Text>
      <Slot />
      <StatusBar translucent={false} />
    </View>
  )
}

export default MainLayout;

import React from 'react';
import { View, Text } from 'react-native';

import components from '../src/components';

const HomePage = () => {
  return (
    <View>
      <components.GameList />
    </View>
  );
}

export default HomePage;

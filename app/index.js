import React from 'react';

import MainPageContainer from './HomePageStyles';
import components from '../src/components';

const HomePage = () => {
  return (
    <MainPageContainer>
      <components.GameList />
    </MainPageContainer>
  );
}

export default HomePage;

import React from 'react';
import { format } from 'date-fns';

import {
  GameContainer,
  GameImage,
  InfoContainer,
  Info,
  Title,
} from './gameItemStyles';

const GameItem = ({ game }) => {
  const {
    image,
    title,
    developer,
    releaseDate,
  } = game;

  console.log(game);

  return (
    <GameContainer>
      <GameImage
        source={{uri: image}}
        alt={`Imagem do jogo ${title}`}
        resizeMode="stretch"
      />
      <Title>{title}</Title>
      <InfoContainer>
        <Info>{developer}</Info>
        <Info>{format(new Date(releaseDate), 'dd/MM/yyyy')}</Info>
      </InfoContainer>
    </GameContainer>
  )
};

export default GameItem;

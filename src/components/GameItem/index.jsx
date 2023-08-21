import React from 'react';
import { format } from 'date-fns';

import {
  GameContainer,
  GameImage,
  InfoContainer,
  Info,
  Title,
} from './gameItemStyles';
import Button from '../Button';

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
      <Button
        text="Ver detalhes"
        width="50%"
        margin="0 auto"
      />
    </GameContainer>
  )
};

export default GameItem;

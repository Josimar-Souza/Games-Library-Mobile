import React, { useContext } from 'react';

import GameListContainer from './gameListStyles';
import { gamesContext } from '../../context/GamesContext';
import GameItem from '../GameItem';

const GameList = () => {
  const { gamesToShow } = useContext(gamesContext);

  return (
    <GameListContainer
      data={gamesToShow}
      renderItem={({ item }) => <GameItem game={item} />}
    />
  );
};

export default GameList;

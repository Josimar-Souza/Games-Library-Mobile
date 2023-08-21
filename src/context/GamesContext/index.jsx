import React, { useState, useEffect, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';
import GamesAPI from '../../api/GamesAPI';
import CustomError from '../../helpers/CustomError';

const gamesApi = new GamesAPI();
export const gamesContext = createContext();

const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [gamesToShow, setGamesToShow] = useState([]);

  const GetAllGames = async () => {
    const gamesFounded = await gamesApi.GetAllGames();

    if (gamesFounded instanceof CustomError) {
      // Deal with not been able to find the games.
    } else {
      setGames(gamesFounded);
      setGamesToShow(gamesFounded);
    }
  }

  useEffect(() => {
    GetAllGames();
  }, []);

  const contextValue = useMemo(() => ({
    games,
    gamesToShow,
    GetAllGames,
  }), [games, gamesToShow]);

  return (
    <gamesContext.Provider value={contextValue}>
      {children}
    </gamesContext.Provider>
  )
};

GamesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GamesContextProvider;

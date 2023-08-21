import React, { useState, useEffect, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';
import { useToast } from 'react-native-toast-notifications';

import GamesAPI from '../../api/GamesAPI';
import CustomError from '../../helpers/CustomError';

const gamesApi = new GamesAPI();
export const gamesContext = createContext();

const GamesContextProvider = ({ children }) => {
  const toast = useToast();
  const [games, setGames] = useState([]);
  const [gamesToShow, setGamesToShow] = useState([]);

  const GetAllGames = async () => {
    const gamesFounded = await gamesApi.GetAllGames();

    if (gamesFounded instanceof CustomError) {
      // Deal with not been able to find the games.
      toast.show(gamesFounded.message, { placement: 'top', type: 'danger' });
    } else {
      setGames(gamesFounded);
      setGamesToShow(gamesFounded);
    }
  }

  const SearchGameByName = (name) => {
    const gamesFounded = games.filter((game) => game.title.includes(name));

    setGamesToShow(gamesFounded);
  };

  useEffect(() => {
    GetAllGames();
  }, []);

  const contextValue = useMemo(() => ({
    games,
    gamesToShow,
    GetAllGames,
    SearchGameByName,
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

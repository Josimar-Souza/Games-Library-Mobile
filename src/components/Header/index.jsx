import React, { useContext } from 'react';

import { HeaderContainer } from './headerStyles';
import Input from '../Input';
import { gamesContext } from '../../context/GamesContext';

const Header = () => {
  const { SearchGameByName } = useContext(gamesContext);

  const onInputChange = (text) => {
    SearchGameByName(text);
  };

  return (
    <HeaderContainer>
      <Input
        margin="55px auto 0 auto"
        width="90%"
        placeholder="Digite o nome de um jogo"
        onChange={onInputChange}
        border_width="0 0 1px 0"
        backgroundColor="rgba(0, 0, 0, 0)"
      />
    </HeaderContainer>
  );
}

export default Header;

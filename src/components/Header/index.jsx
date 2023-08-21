import React from 'react';

import { HeaderContainer } from './headerStyles';
import Input from '../Input';

const Header = () => {
  return (
    <HeaderContainer>
      <Input
        margin="55px auto 0 auto"
        width="90%"
        placeholder="Digite o nome de um jogo"
      />
    </HeaderContainer>
  );
}

export default Header;

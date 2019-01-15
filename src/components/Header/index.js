import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/30188174?v=4" alt="avatar" />
      Guilherme Motta
    </User>
  </Container>
);

export default Header;

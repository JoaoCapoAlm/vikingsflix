import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Menu.css';

import Button from '../Button';
import Logo from '../LogoVikings';

import Container from './style';

function Menu() {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <Button
        as={Link}
        className="ButtonLink"
        to="/cadastro/video"
        cor="--color-logo"
      >
        Novo vídeo
      </Button>
    </Container>
  );
}

export default Menu;

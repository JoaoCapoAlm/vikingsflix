import React from 'react';
import { Link } from 'react-router-dom';
import { MenuStyle } from './styled';
import '../../styles/Menu.css';
import Button from '../Button';
import Logo from '../LogoVikingsflix';

function Menu() {
  return (
    <MenuStyle>
      <Link to="/">
        <Logo />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
        Nova categoria
      </Button>

      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuStyle>
  );
}

export default Menu;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/Menu.css';
import Button from '../Button';
import Logo from '../LogoVikings';

const MenuStyle = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--color-logo);

  @media (max-width: 800px){
    height: 40px;
    justify-content: center;
    padding-right: 0;
  }
`;

function Menu() {
  return (
    <MenuStyle>
      <Link to="/">
        <Logo />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video" cor="--color-logo">
        Novo vídeo
      </Button>
    </MenuStyle>
  );
}

export default Menu;

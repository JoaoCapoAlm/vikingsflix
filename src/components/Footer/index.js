import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado por
        {' '}
        <a href="https://www.linkedin.com/in/joao-capoani/" target="_blank" rel="noopener noreferrer" title="Conta do LinkedIn">
          João Pedro
        </a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer" title="Site da Alura">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

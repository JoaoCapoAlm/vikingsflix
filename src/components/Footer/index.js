import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--color-logo);
  padding: 25px 16px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Criado por
        {' '}
        <a
          href="https://www.linkedin.com/in/joao-capoani/"
          target="_blank"
          rel="noopener noreferrer"
          title="Conta do LinkedIn"
        >
          João Pedro
        </a>
        {' '}
        durante a
        {' '}
        <a
          href="https://www.alura.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          title="Site da Alura"
        >
          Imersão React da Alura
        </a>
      </p>
    </FooterStyle>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';

function Error404() {
  return (
    <PageDefault>
      <h1>Erro 404</h1>
      <h2>Página não encontrada</h2>

      <Button
        as={Link}
        to="/"
      >
        Tela Inicial
      </Button>
    </PageDefault>
  );
}

export default Error404;

import React, { useState, useEffect } from 'react';
import urlBackEnd from '../../../config';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoryRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const { handleChange, values, clearForm } = useForm();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`${urlBackEnd}/categorias`)
      .then(async (respostaDoServidor) => {
        document.getElementById('erroServer').innerHTML = null;

        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      })
      .catch(() => {
        const span = document.getElementById('erroServer');
        span.innerHTML = '<h1>Erro inesperado!</h1>';
      });
  }, []);

  return (
    <PageDefault>
      <span id="erroServer" />
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        if (values.titulo === undefined || values.cor === undefined) {
          // eslint-disable-next-line no-alert
          alert('Campo vázio! Pelo menos o título e a cor precisam estar preenchidos.');
        }

        categoryRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
        }).then(() => {
          clearForm();
          // eslint-disable-next-line no-alert
          alert('Cadastrado com sucesso');
        });
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value="#000000"
          onChange={handleChange}
        />
        <Button type="submit" className="ajustePosicaoBtn">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <span className="spanLoading">
          Loading...
        </span>
      )}
      <h4>Categorias já cadastradas</h4>
      <ul>
        {categorias.map((category) => (
          <li key={category.id} className="listCadCategory">
            {category.titulo}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import createVideo from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

export default function CadastroVideo() {
  const { handleChange, values, clearForm } = useForm();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoryFromServer) => {
        setCategories(categoryFromServer);
      }).catch(() => {
        const span = document.getElementById('erroServer');
        span.innerHTML = '<h1>Erro inesperado!</h1>';
      });
  }, []);

  return (
    <PageDefault>
      <>
        <span id="erroServer" />
        <h1>Cadastro de Video</h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          // eslint-disable-next-line arrow-body-style
          const categoriaEscolhida = categories.find((category) => {
            return category.titulo === values.categoria;
          });

          if (values.titulo === undefined
              || values.url === undefined
              || categoriaEscolhida.id === undefined
          ) {
            // eslint-disable-next-line no-alert
            alert('Não cadastrado! Campo em branco.');
            return;
          }
          createVideo({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          }).then(() => {
            // eslint-disable-next-line no-alert
            alert('Cadastrado com sucesso.');
            clearForm();
          }).catch(() => {
            const erroForm = document.getElementById('erroForm');
            erroForm.innerHTML = '<h1>Erro inesperado!</h1>';
          });
        }}
        >
          <span id="erroForm" />
          <FormField
            label="Título do Vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />
          <Button type="submit" className="ajustePosicaoBtn" id="btnSubmit">
            Cadastrar
          </Button>
        </form>

        <div className="ajustePosicaoBtn">
          <Button to="/cadastro/categoria" as={Link}>
            Cadastrar Categoria
          </Button>
        </div>
      </>
    </PageDefault>
  );
}

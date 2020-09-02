import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const { handleChange, values } = useForm({ });
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoryFromServer) => {
        setCategories(categoryFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // eslint-disable-next-line arrow-body-style
        const categoriaEscolhida = categories.find((category) => {
          return category.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          // eslint-disable-next-line no-alert
          alert('Cadastrado com sucesso');
        });
      }}
      >
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
        <div className="ajustePosicaoBtn">
          <Button type="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;

import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosInicias] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideo) => {
        setDadosInicias(categoriasComVideo);
      })
      .catch((error) => {
        const span = document.getElementById('spanLoading');
        span.innerHTML = '<h1>Erro inesperado!</h1>';
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  return (
    <PageDefault paddingAll="0">
      <>
        {dadosIniciais.length === 0 && (
          <span className="spanLoading" id="spanLoading">
            Loading...
          </span>
        )}
        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}
      </>
    </PageDefault>
  );
}

export default Home;

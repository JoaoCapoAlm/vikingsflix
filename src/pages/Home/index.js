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
      .catch(() => {
        const span = document.getElementById('spanLoading');
        span.innerHTML = '<h1>Erro no servidor</h1>';
        span.innerHTML += '<p>Por favor entrar em contato com jpcapoani98@gmail.com</p>';
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

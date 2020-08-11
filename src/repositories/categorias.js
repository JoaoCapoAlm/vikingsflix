import config from '../config';

const urlCategories = `${config.urlBackEnd}/categorias?_embed=videos`;

function getAll() {
  return fetch(`${urlCategories}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não possível pegar os dados!');
    });
}

function getAllWithVideos() {
  return fetch(urlCategories)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};

import config from '../config';

const urlCategories = `${config.urlBackEnd}/categorias?_embed=videos`;

function getAll() {
  return fetch(`${urlCategories}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const answer = await serverResponse.json();
        return answer;
      }

      throw new Error('Não possível pegar os dados!');
    });
}

function getAllWithVideos() {
  return fetch(urlCategories)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const answer = await serverResponse.json();
        return answer;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};

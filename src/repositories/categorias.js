/* eslint-disable no-console */
import urlBackEnd from '../config';

const urlCategories = `${urlBackEnd}/categorias?_embed=videos`;

function getAll() {
  return fetch(`${urlCategories}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const answer = await serverResponse.json();
        return answer;
      }

      throw new Error('Não possível pegar os dados!');
    }).catch((error) => {
      console.log(error);
      return false;
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
    })
    .catch((ex) => {
      console.log(ex);
      return false;
    });
}

function create(object) {
  return fetch(urlCategories, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const answer = await serverResponse.json();
        return answer;
      }
      throw new Error('Não foi possível cadastrar os dados');
    }).catch((error) => {
      console.log(error);
      return false;
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};

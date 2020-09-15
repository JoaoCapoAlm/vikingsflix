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
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};

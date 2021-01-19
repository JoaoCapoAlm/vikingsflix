import urlBackEnd from '../config';

const urlVideos = `${urlBackEnd}/videos`;

export default function create(object) {
  return fetch(`${urlVideos}?_embed=videos`, {
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
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
}

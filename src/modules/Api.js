const key = 'FuWujjh6OTZVHOEN8zec';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;

class Api {
  get = () => {
    const result = fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .catch((error) => error);

    return result;
  };

  post = (player) => {
    const send = fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: player.name, score: player.score }),
    })
      .then((res) => res.json())
      .catch((error) => error);
    return send;
  };
}

export default Api;

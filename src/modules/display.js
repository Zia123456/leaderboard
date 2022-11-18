import { scoresList } from './access-html-elements';
import Api from './Api';

const render = async () => {
  scoresList.innerHTML = '';
  const api = new Api();
  const data = await api.get();
  const sortedScores = data.result.sort((a, b) => b.score - a.score);
  sortedScores.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'scores';
    div.innerHTML = `${element.user} : ${element.score}`;
    scoresList.append(div);
  });
};

export default render;

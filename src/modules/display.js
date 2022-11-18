import { scoresList } from './access-html-elements';
import Api from './Api';

const api = new Api();

const render = async () => {
  scoresList.innerHTML = '';
  const data = await api.get();
  data.result.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'scores';
    div.innerHTML = `${element.user} : ${element.score}`;
    scoresList.append(div);
  });
};

export default render;

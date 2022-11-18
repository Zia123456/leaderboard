import './styles.css';
import {
  submitBtn,
  refreshBtn,
  user,
  score,
} from './modules/access-html-elements';
import Player from './modules/player';
import render from './modules/display';
import Api from './modules/Api';

const api = new Api();

window.addEventListener('DOMContentLoaded', render);

refreshBtn.addEventListener('click', () => {
  render();
});

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const userValue = user.value;
  const scoreValue = score.value;
  const player = new Player(userValue, scoreValue);
  await api.post(player);
});

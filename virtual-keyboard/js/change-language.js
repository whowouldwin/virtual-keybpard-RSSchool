import { keys } from './keys.js';
import state from './state.js';

const changeKeys = () => {
  const { lang, shift } = state;
  const layout = keys[lang][shift];
  layout.forEach((row, i) => {
    const keyboardRow = document.querySelector(`.keyboard__row-${i}`).children;
    row.forEach((key, j) => {
      keyboardRow[j].textContent = key;
    });
  });
};
const changeLanguage = () => {
  state.lang = state.lang === 'eng' ? 'ru' : 'eng';
  changeKeys();
  localStorage.setItem('lang', state.lang);
};

export { changeKeys, changeLanguage };

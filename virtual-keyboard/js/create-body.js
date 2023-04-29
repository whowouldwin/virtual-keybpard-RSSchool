import { keys } from './keys.js';

const createBody = () => {
  function createElementWithClass(type, className, text) {
    const element = document.createElement(type);
    element.classList.add(...className);
    if (text) {
      element.textContent = text;
    }
    return element;
  }
  const wrapper = createElementWithClass('div', ['wrapper']);
  const title = createElementWithClass('h1', ['title'], 'RSS Virtual Keyboard');
  const textarea = createElementWithClass('textarea', ['textarea']);
  const keyboard = createElementWithClass('div', ['keyboard']);
  const description = createElementWithClass('p', ['description'], 'The keyboard was created in the Linux operating system.');
  const language = createElementWithClass('p', ['language'], 'To switch language, use the combination: left ctrl + alt.');
  wrapper.append(title, textarea, keyboard, description, language);
  document.body.append(wrapper);

  let i = 0;
  keys.code.forEach(() => {
    const keyboardRow = createElementWithClass('div', ['keyboard__row', `keyboard__row-${i}`]);
    keyboard.append(keyboardRow);
    keys.code[i].forEach((key, j) => {
      const code = keys.code[i][j];
      const keyBoardKey = createElementWithClass('div', ['keyboard__key', code]);
      keyBoardKey.textContent = key;
      keyboardRow.append(keyBoardKey);
    });
    i += 1;
  });
};
export default createBody;

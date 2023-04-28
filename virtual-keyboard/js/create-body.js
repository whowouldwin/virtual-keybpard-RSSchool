const createBody = () => {
  function createElementWithClass(type, className) {
    const element = document.createElement(type);
    element.className = className;
    return element;
  }
  const wrapper = createElementWithClass('div', 'wrapper');
  const title = createElementWithClass('h1', 'Virtual Keyboard');
  const textarea = createElementWithClass('textarea', 'textarea');
  const keyboard = createElementWithClass('div', 'keyboard');
  const description = createElementWithClass('p', 'description');
  const language = createElementWithClass('p', 'language');
  wrapper.append(title, textarea, keyboard, description, language);
  document.body.append(wrapper);
  console.log(wrapper);
};
export default createBody;

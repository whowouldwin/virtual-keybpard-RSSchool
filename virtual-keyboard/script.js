import createBody from './js/create-body.js';
import { keyUp, keyDown } from './js/keypress.js';

createBody();

document.addEventListener('keydown', (event) => keyDown(event));
document.addEventListener('keyup', (event) => keyUp(event));

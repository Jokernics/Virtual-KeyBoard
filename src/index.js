import { createKeyboard, refreshKeyboard } from './utils/createHtmlKey';
import './index.scss';

const { body } = document;

const textArea = document.createElement('textarea');
const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard-container';
textArea.className = 'text-area';
body.appendChild(textArea);
let isUpperCase = false;

let lang = localStorage.getItem('lang') || 'RU';
let register = localStorage.getItem('register') || 'down';
createKeyboard(lang, register);

function addChar(string, char, position, range) {
  const chandedString = string.split('').slice();
  chandedString.splice(position, range, char);
  return chandedString.join('');
}

function triggerMouseDown(event) {
  event.preventDefault();
  event.currentTarget.classList.add('active');
  const cursor = textArea.selectionStart;
  const range = textArea.selectionEnd - textArea.selectionStart;

  if (!event.target.dataset.isnochar) {
    textArea.value = addChar(textArea.value, event.target.textContent, cursor, range);
    textArea.setSelectionRange(cursor + 1, cursor + 1);
  } else {
    switch (event.target.dataset.code) {
      case ('Space'):
        textArea.value = addChar(textArea.value, ' ', cursor, range);
        break;
      case ('Backspace'):
        if (range !== 0) {
          textArea.value = addChar(textArea.value, '', cursor, range);
          break;
        } else {
          textArea.value = addChar(textArea.value, '', cursor - 1, range + 1);
        }
        break;
      case ('ShiftLeft'):
        isUpperCase = !isUpperCase;
        break;
      case ('Capslock'):
        isUpperCase = !isUpperCase;
        break;
      case ('ShiftRight'):
        isUpperCase = !isUpperCase;
        break;
      case ('Delete'):
        if (range !== 0) {
          textArea.value = addChar(textArea.value, '', cursor, range);
          break;
        } else {
          textArea.value = addChar(textArea.value, '', cursor, range + 1);
        }
        break;
      case ('Enter'):
        textArea.value += '\n';
        break;
      default:
        break;
    }
  }
  register = (isUpperCase) ? 'Up' : 'down';
  refreshKeyboard(lang, register);
  textArea.focus();
}

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('mousedown', triggerMouseDown);
});

window.addEventListener('mouseup', () => {
  keys.forEach((item) => {
    item.classList.remove('active');
  });

  // if (isCapsLock) {
  //   document.querySelector('[data-code="Capslock"').classList.add('active');
  // }
  // if (isShiftPressed) {
  //   document.querySelector('[data-code="Capslock"').classList.add('active');
  // }
});

textArea.addEventListener('keydown', (e) => {
  const { code } = e;
  if (!document.querySelector(`[data-code=${code}]`)) return;
  const pressedKey = document.querySelector(`[data-code=${code}]`);
  pressedKey.classList.add('active');
});

textArea.addEventListener('keyup', (e) => {
  const { code } = e;
  if (!document.querySelector(`[data-code=${code}]`)) return;
  const pressedKey = document.querySelector(`[data-code=${code}]`);
  pressedKey.classList.remove('active');
});

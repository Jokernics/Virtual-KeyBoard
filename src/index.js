import { createKeyboard, refreshKeyboard } from './utils/createHtmlKey';
import './index.scss';

const { body } = document;

const textArea = document.createElement('textarea');

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard-container';
textArea.className = 'text-area';
body.appendChild(textArea);
const isUpperCase = { ShiftLeft: false, ShiftRight: false, CapsLock: false };
const langKeys = { ControlLeft: false, AltLeft: false };

let lang = localStorage.getItem('lang') || 'RU';
let register = 'down';
createKeyboard(lang, register);

function addChar(string, char, position, range) {
  const chandedString = string.split('').slice();
  chandedString.splice(position, range, char);
  return chandedString.join('');
}

let touches = [];
function checkMultipleTouches(code) {
  const validCodes = ['ControlLeft', 'AltLeft'];
  if (validCodes.some((i) => i === code)) {
    if (touches.some((i) => i === code)) {
      touches = touches.filter((key) => key !== code);
    } else {
      touches.push(code);
    }
  }

  if (touches.length === 2) {
    lang = lang === 'RU' ? 'EN' : 'RU';
    localStorage.setItem('lang', lang);
    refreshKeyboard(lang, register);
    touches = [];
    langKeys.ControlLeft = false;
    langKeys.AltLeft = false;
  }
}

function triggerKeyDown(event) {
  event.preventDefault();
  const code = event.currentTarget.dataset.code || event.code;
  const currentPressedKey = document.querySelector(`[data-code=${code}]`);
  const cursor = textArea.selectionStart;
  const range = textArea.selectionEnd - textArea.selectionStart;

  currentPressedKey.classList.add('active');

  if (!currentPressedKey.dataset.isnochar) {
    textArea.value = addChar(textArea.value, currentPressedKey.textContent, cursor, range);
    textArea.setSelectionRange(cursor + 1, cursor + 1);
  } else {
    switch (code) {
      case ('ControlLeft'):
        langKeys.ControlLeft = true;
        break;
      case ('AltLeft'):
        langKeys.AltLeft = true;
        break;
      case ('Space'):
        textArea.value = addChar(textArea.value, ' ', cursor, range);
        textArea.setSelectionRange(cursor + 1, cursor + 1);
        break;
      case ('Enter'):
        textArea.value = addChar(textArea.value, '\n', cursor, range);
        textArea.setSelectionRange(cursor + 1, cursor + 1);
        break;
      case ('Backspace'):
        if (cursor === 0 && range === 0) break;
        if (range !== 0) {
          textArea.value = addChar(textArea.value, '', cursor, range);
          textArea.setSelectionRange(cursor, cursor);
          break;
        } else {
          textArea.value = addChar(textArea.value, '', cursor - 1, range + 1);
          textArea.setSelectionRange(cursor - 1, cursor - 1);
        }
        break;
      case ('ShiftLeft'):
        isUpperCase.ShiftLeft = !isUpperCase.ShiftLeft;
        break;
      case ('CapsLock'):
        isUpperCase.CapsLock = !isUpperCase.CapsLock;
        break;
      case ('ShiftRight'):
        isUpperCase.ShiftRight = !isUpperCase.ShiftRight;
        break;
      case ('Tab'):
        textArea.value = addChar(textArea.value, '\t', cursor, range);
        break;
      case ('Delete'):
        if (cursor === (textArea.value.length) && range === 0) {
          break;
        } else if (cursor === 0 && range === 0) {
          textArea.value = addChar(textArea.value, '', cursor, range + 1);
          textArea.setSelectionRange(cursor, cursor);
          break;
        } else if (range !== 0) {
          textArea.value = addChar(textArea.value, '', cursor, range);
          textArea.setSelectionRange(cursor, cursor);
          break;
        } else {
          textArea.value = addChar(textArea.value, '', cursor, range + 1);
          textArea.setSelectionRange(cursor, cursor);
          break;
        }
      default:
        break;
    }
  }
  const shiftPresed = !!((isUpperCase.ShiftLeft || isUpperCase.ShiftRight));
  register = shiftPresed ? 'Up' : 'down';
  refreshKeyboard(lang, register);
  if (isUpperCase.CapsLock) {
    refreshKeyboard(lang, register, 'Caps pressed');
  }
  textArea.focus();

  checkMultipleTouches(code);
}

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('mousedown', triggerKeyDown);
});

function triggerKeyUp() {
  keys.forEach((item) => {
    item.classList.remove('active');
  });

  Object.keys(isUpperCase).forEach((pressedKey) => {
    if (isUpperCase[pressedKey]) {
      document.querySelector(`[data-code=${pressedKey}]`).classList.add('active');
    }
  });
  Object.keys(langKeys).forEach((pressedKey) => {
    if (langKeys[pressedKey]) {
      document.querySelector(`[data-code=${pressedKey}]`).classList.add('active');
    }
  });
}
window.addEventListener('mouseup', triggerKeyUp);
textArea.addEventListener('keydown', triggerKeyDown);

textArea.addEventListener('keyup', (e) => {
  const { code } = e;
  keys.forEach((key) => {
    if (key.dataset.code === code) key.classList.remove('active');
    if (isUpperCase.CapsLock && key.dataset.code === 'CapsLock') key.classList.add('active');
  });

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    if (!isUpperCase.CapsLock) register = 'down';
    refreshKeyboard(lang, register);
    isUpperCase.ShiftLeft = false;
    isUpperCase.ShiftRight = false;
  }
});

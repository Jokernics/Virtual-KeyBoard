/* eslint-disable no-param-reassign */
import {
  line1, line2, line3, line4, line5,
} from '../bd';

const lines = {
  ...line1, ...line2, ...line3, ...line4, ...line5,
};

class Key {
  constructor(obj, code, lang, register) {
    this.obj = obj;
    this.code = code;
    this.lang = lang;
    this.register = register;
  }

  createHtmlKey() {
    const htmlKey = document.createElement('div');
    htmlKey.className = 'key';
    htmlKey.dataset.code = this.code;
    if (this.obj[this.code].isNoChar) htmlKey.dataset.isnochar = true;
    htmlKey.textContent = this.obj[this.code][this.lang][this.register];

    return htmlKey;
  }
}

export function createRow(obj, parent, lang, register) {
  const row = document.createElement('div');
  row.className = 'row';

  Object.keys(obj).forEach((code) => {
    const key = new Key(obj, code, lang, register, register);
    row.appendChild(key.createHtmlKey());
  });

  parent.appendChild(row);
}

export function createKeyboard(lang, register) {
  const { body } = document;
  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'keyboard-container';

  createRow(line1, keyboardContainer, lang, register);
  createRow(line2, keyboardContainer, lang, register);
  createRow(line3, keyboardContainer, lang, register);
  createRow(line4, keyboardContainer, lang, register);
  createRow(line5, keyboardContainer, lang, register);

  body.appendChild(keyboardContainer);
}

export function refreshKeyboard(lang, register, capslock = false) {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    function toggleCapsLock() {
      if (register === 'Up') {
        key.textContent = key.textContent.toLowerCase();
      } else {
        key.textContent = key.textContent.toUpperCase();
      }
    }
    if (capslock) {
      if (!key.dataset.isnochar) {
        toggleCapsLock();
      } else {
        key.textContent = lines[key.dataset.code][lang][register];
      }
    } else {
      key.textContent = lines[key.dataset.code][lang][register];
    }
  });
}

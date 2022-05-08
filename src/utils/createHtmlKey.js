import {
  line1, line2, line3, line4, line5,
} from '../bd';

const lines = {
  ...line1, ...line2, ...line3, ...line4, ...line5,
};

export function createHtmlKey(obj, code, lang, register) {
  const htmlKey = document.createElement('div');
  htmlKey.className = 'key';
  htmlKey.dataset.code = code;
  if (obj[code].isNoChar) htmlKey.dataset.isnochar = true;
  htmlKey.textContent = obj[code][lang][register];

  return htmlKey;
}

export function createRow(obj, parent, lang, register) {
  const row = document.createElement('div');
  row.className = 'row';

  Object.keys(obj).forEach((code) => {
    row.appendChild(createHtmlKey(obj, code, lang, register, register));
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

export function refreshKeyboard(lang, register) {
  const keys = document.querySelectorAll('.key');

  keys.forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    key.textContent = lines[key.dataset.code][lang][register];
  });
}

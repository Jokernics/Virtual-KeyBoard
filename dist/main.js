const data = { charcode: { RU: "123", EN: "123" } };

const test = [];

window.addEventListener("keydown", (e) => {
  test.push({[e.code]: { "RU": e.key, "EN": "" }});
  console.log(test);
});

const obj = [
  {
      "Backquote": {
          "RU": "`",
          "EN": ""
      }
  },
  {
      "Digit1": {
          "RU": "1",
          "EN": ""
      }
  },
  {
      "Digit2": {
          "RU": "2",
          "EN": ""
      }
  },
  {
      "Digit3": {
          "RU": "3",
          "EN": ""
      }
  },
  {
      "Digit4": {
          "RU": "4",
          "EN": ""
      }
  },
  {
      "Digit5": {
          "RU": "5",
          "EN": ""
      }
  },
  {
      "Digit6": {
          "RU": "6",
          "EN": ""
      }
  },
  {
      "Digit7": {
          "RU": "7",
          "EN": ""
      }
  },
  {
      "Digit8": {
          "RU": "8",
          "EN": ""
      }
  },
  {
      "Digit9": {
          "RU": "9",
          "EN": ""
      }
  },
  {
      "Digit0": {
          "RU": "0",
          "EN": ""
      }
  },
  {
      "Minus": {
          "RU": "-",
          "EN": ""
      }
  },
  {
      "Equal": {
          "RU": "=",
          "EN": ""
      }
  },
  {
      "Backspace": {
          "RU": "Backspace",
          "EN": ""
      }
  },
  {
      "Tab": {
          "RU": "Tab",
          "EN": ""
      }
  },
  {
      "KeyQ": {
          "RU": "q",
          "EN": ""
      }
  },
  {
      "KeyW": {
          "RU": "w",
          "EN": ""
      }
  },
  {
      "KeyE": {
          "RU": "e",
          "EN": ""
      }
  },
  {
      "KeyR": {
          "RU": "r",
          "EN": ""
      }
  },
  {
      "KeyT": {
          "RU": "t",
          "EN": ""
      }
  },
  {
      "KeyY": {
          "RU": "y",
          "EN": ""
      }
  },
  {
      "KeyU": {
          "RU": "u",
          "EN": ""
      }
  },
  {
      "KeyI": {
          "RU": "i",
          "EN": ""
      }
  },
  {
      "KeyO": {
          "RU": "o",
          "EN": ""
      }
  },
  {
      "KeyP": {
          "RU": "p",
          "EN": ""
      }
  },
  {
      "BracketLeft": {
          "RU": "[",
          "EN": ""
      }
  },
  {
      "BracketRight": {
          "RU": "]",
          "EN": ""
      }
  },
  {
      "Backslash": {
          "RU": "\\",
          "EN": ""
      }
  },
  {
      "Delete": {
          "RU": "Delete",
          "EN": ""
      }
  },
  {
      "CapsLock": {
          "RU": "CapsLock",
          "EN": ""
      }
  },
  {
      "KeyA": {
          "RU": "a",
          "EN": ""
      }
  },
  {
      "KeyS": {
          "RU": "s",
          "EN": ""
      }
  },
  {
      "KeyD": {
          "RU": "d",
          "EN": ""
      }
  },
  {
      "KeyF": {
          "RU": "f",
          "EN": ""
      }
  },
  {
      "KeyG": {
          "RU": "g",
          "EN": ""
      }
  },
  {
      "KeyH": {
          "RU": "h",
          "EN": ""
      }
  },
  {
      "KeyJ": {
          "RU": "j",
          "EN": ""
      }
  },
  {
      "KeyK": {
          "RU": "k",
          "EN": ""
      }
  },
  {
      "KeyL": {
          "RU": "l",
          "EN": ""
      }
  },
  {
      "Semicolon": {
          "RU": ";",
          "EN": ""
      }
  },
  {
      "Quote": {
          "RU": "'",
          "EN": ""
      }
  },
  {
      "Enter": {
          "RU": "Enter",
          "EN": ""
      }
  },
  {
      "ShiftLeft": {
          "RU": "Shift",
          "EN": ""
      }
  },
  {
      "KeyZ": {
          "RU": "z",
          "EN": ""
      }
  },
  {
      "KeyX": {
          "RU": "x",
          "EN": ""
      }
  },
  {
      "KeyC": {
          "RU": "c",
          "EN": ""
      }
  },
  {
      "KeyV": {
          "RU": "v",
          "EN": ""
      }
  },
  {
      "KeyB": {
          "RU": "b",
          "EN": ""
      }
  },
  {
      "KeyN": {
          "RU": "n",
          "EN": ""
      }
  },
  {
      "KeyM": {
          "RU": "m",
          "EN": ""
      }
  },
  {
      "Comma": {
          "RU": ",",
          "EN": ""
      }
  },
  {
      "Period": {
          "RU": ".",
          "EN": ""
      }
  },
  {
      "Slash": {
          "RU": "/",
          "EN": ""
      }
  },
  {
      "ArrowUp": {
          "RU": "ArrowUp",
          "EN": ""
      }
  },
  {
      "ShiftRight": {
          "RU": "Shift",
          "EN": ""
      }
  },
  {
      "ControlLeft": {
          "RU": "Control",
          "EN": ""
      }
  },
  {
      "MetaLeft": {
          "RU": "Meta",
          "EN": ""
      }
  },
  {
      "AltLeft": {
          "RU": "Alt",
          "EN": ""
      }
  },
  {
      "Space": {
          "RU": " ",
          "EN": ""
      }
  },
  {
      "AltRight": {
          "RU": "Alt",
          "EN": ""
      }
  },
  {
      "ControlRight": {
          "RU": "Control",
          "EN": ""
      }
  },
  {
      "ArrowLeft": {
          "RU": "ArrowLeft",
          "EN": ""
      }
  },
  {
      "ArrowDown": {
          "RU": "ArrowDown",
          "EN": ""
      }
  },
  {
      "ArrowRight": {
          "RU": "ArrowRight",
          "EN": ""
      }
  }
]
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 const alph = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const getShiftEncrypt = (symbolKey) => {
  const indexSymbolKey = alph.findIndex((item) => item === symbolKey);

  return indexSymbolKey;
};

const getSymbolByShiftEncrypt = (currentSymbol, shift) => {
  const indexInAlph = alph.findIndex((item) => item === currentSymbol);

  const indexAfterShift = indexInAlph + shift;

  if (indexAfterShift > alph.length || indexAfterShift - alph.length === 0) {
    return alph[indexAfterShift - alph.length];
  } else {
    return alph[indexAfterShift];
  }
};

const encryptSymbol = (symbol, keySymbol) => {
  const shift = getShiftEncrypt(keySymbol);

  const encryptedSymbol = getSymbolByShiftEncrypt(symbol, shift);

  return encryptedSymbol;
};

const prepareStringAndKey = (str, key) => {
  const stringToFormattedArray = str.match(/[a-z]+/giu);
  const formattedString = stringToFormattedArray
    ? stringToFormattedArray.join("")
    : "";

  const strLength = formattedString.length;
  const keyLength = key.length;
  const fullEntries = Math.floor(strLength / keyLength);
  const rest = strLength % keyLength;

  let preparedKeyString = strLength < keyLength ? key : "";

  if (strLength === keyLength)
    return { preparedString: formattedString, preparedKeyString: key };

  if (fullEntries && strLength > keyLength) {
    for (let i = 0; i < fullEntries; i += 1) {
      preparedKeyString += key;
    }
  }

  if (rest && strLength > keyLength) {
    for (let i = 0; i < rest; i += 1) {
      preparedKeyString += key[i];
    }
  }

  return { preparedString: formattedString, preparedKeyString };
};

const isValidSymbol = (symbol) => {
  return /^[a-zA-Z]+$/.test(symbol);
};

const encryptString = (str, key, isStraight) => {
  const { preparedString, preparedKeyString } = prepareStringAndKey(
    str.toUpperCase(),
    key.toUpperCase()
  );

  let encryptedString = "";

  let k = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (isValidSymbol(str[i])) {
      const encryptedSymbol = encryptSymbol(
        preparedString[k],
        preparedKeyString[k]
      );

      encryptedString += encryptedSymbol;

      k += 1;
    } else {
      encryptedString += str[i];
    }
  }

  return isStraight && encryptedString
    ? encryptedString
    : encryptedString.split("").reverse().join("");
};

const getSymbolIndexDecrypt = (symbolKey) => {
  const indexSymbolKey = alph.findIndex((item) => item === symbolKey);

  return indexSymbolKey;
};

const getSymbolDecrypt = (currentSymbol, keySymbolIndex) => {
  const indexInAlph = alph.findIndex((item) => item === currentSymbol);

  const indexAfterShift = indexInAlph - keySymbolIndex;

  console.log(indexAfterShift);

  if (indexAfterShift < 0 || indexAfterShift - alph.length === 0) {
    return alph[indexAfterShift + alph.length];
  } else {
    return alph[indexAfterShift];
  }
};

const decryptSymbol = (symbol, keySymbol) => {
  const keySymbolIndex = getSymbolIndexDecrypt(keySymbol);

  const encryptedSymbol = getSymbolDecrypt(symbol, keySymbolIndex);

  return encryptedSymbol;
};

const decryptString = (str, key, isStraight) => {
  const { preparedString, preparedKeyString } = prepareStringAndKey(
    str.toUpperCase(),
    key.toUpperCase()
  );

  console.log(preparedString, preparedKeyString);

  let decryptedString = "";

  let k = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (isValidSymbol(str[i])) {
      const encryptedSymbol = decryptSymbol(
        preparedString[k],
        preparedKeyString[k]
      );

      decryptedString += encryptedSymbol;

      k += 1;
    } else {
      decryptedString += str[i];
    }
  }

  return isStraight && decryptedString
    ? decryptedString
    : decryptedString.split("").reverse().join("");
};

class VigenereCipheringMachine {
  constructor(isStraight = true) {
    this.isStraight = isStraight;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    return encryptString(str, key, this.isStraight);
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    return decryptString(str, key, this.isStraight);
  }
}

module.exports = {
  VigenereCipheringMachine
};

import { CorrettingJsonData } from "./ModifingHelper";

import crypto from "crypto";
let Encrypt = (val, ENC_KEY, IV) => {
  if (!val) {
    window.location.replace("/not-found");
  }
  let cipher = crypto.createCipheriv("aes-256-cbc", ENC_KEY, IV);
  let encrypted = cipher.update(val, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
};

let Decrypt = (encrypted, ENC_KEY, IV) => {
  if (!encrypted) {
    window.location.replace("/not-found");
  }
  let decipher = crypto.createDecipheriv("aes-256-cbc", ENC_KEY, IV);
  let decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");
  decrypted = CorrettingJsonData(decrypted);
  return decrypted;
  // return eval(decrypted);
};

// 1 Convert to Acsii
function AsciiConverter(key) {
  let keyASCIIArry = [];
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let pos = 0;
    let ascii = char.charCodeAt(pos);
    keyASCIIArry.push(ascii);
  }

  return keyASCIIArry;
}

// 2 Resize key array to 32 or 16 char
function ArrayResizer(arr, newSize, defaultValue) {
  let newArr = [...arr];
  if (newArr.length > newSize) {
    newArr = newArr.slice(0, newSize);
  } else {
    while (newSize > newArr.length) newArr.push(defaultValue);
  }
  newArr.length = newSize;
  return newArr;
}

export { AsciiConverter, ArrayResizer, Decrypt, Encrypt };

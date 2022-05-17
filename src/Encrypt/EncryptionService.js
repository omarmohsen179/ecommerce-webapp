import {
  AsciiConverter,
  ArrayResizer,
  Decrypt,
  Encrypt,
} from "./Encryption.js";

/// Plain Data => Encrypted Data
function EncryptingData(plainData, ENC_KEY) {
  const asciiArr = AsciiConverter(ENC_KEY);
  const encKey = ArrayResizer(asciiArr, 32, 0);
  const ivArr = ArrayResizer(asciiArr, 16, 0);
  return Encrypt(plainData, encKey, ivArr);
}

/// Encrypted Data => Plain Data
function DecryptingData(encryptedData, ENC_KEY) {
  const asciiArr = AsciiConverter(ENC_KEY);
  const encKey = ArrayResizer(asciiArr, 32, 0);
  const ivArr = ArrayResizer(asciiArr, 16, 0);
  return Decrypt(encryptedData, encKey, ivArr);
}

export { EncryptingData, DecryptingData };

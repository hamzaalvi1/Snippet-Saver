import CryptoJS from "crypto-js";

export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.NEXT_PUBLIC_PERSISTENT_KEY!
  ).toString();
};

export const decryptData = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(
    ciphertext,
    process.env.NEXT_PUBLIC_PERSISTENT_KEY!
  );
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

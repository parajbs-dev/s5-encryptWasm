/* istanbul ignore file */
// Main exports.
import __wbg_init, { encrypt_file_xchacha20, generate_key } from "../encrypt_file/pkg/encrypt_file";
export { __wbg_init, encrypt_file_xchacha20, generate_key };
export { chunkSizeAsPowerOf2, getEncryptedStreamReader, calculateB3hashFromFileEncrypt, removeKeyFromEncryptedCid, combineKeytoEncryptedCid, createEncryptedCid, encryptFile, } from "./utils/encryptWasm";

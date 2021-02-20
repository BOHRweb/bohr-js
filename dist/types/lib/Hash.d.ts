/**
 * Ported from: https://github.com/BOHRweb/BoHr/blob/main/bohr-core/src/main/java/org/bohr/crypto/Hash.java
 */
export default class Hash {
    static readonly HASH_LEN: number;
    /**
     * 32-bytes blake2b hash.
     *
     * @param {Uint8Array} input
     * @returns Uint8Array
     */
    static h256(input: Uint8Array): Uint8Array;
    /**
     * 20-bytes RIPMED160(blake2b) hash.
     *
     * @param {Uint8Array} input
     * @returns Uint8Array
     */
    static h160(input: Uint8Array): Uint8Array;
}

import Long from "long";
/**
 * BOHR byte decoder.
 * Ported from: https://github.com/BOHRweb/BoHr/blob/main/bohr-core/src/main/java/org/bohr/util/SimpleDecoder.java
 */
export default class SimpleDecoder {
    private readonly bytes;
    private readonly from;
    private readonly to;
    private index;
    constructor(bytes: Uint8Array, from: number, to: number);
    readBoolean(): boolean;
    readByte(): number;
    readShort(): number;
    readInt(): number;
    readLong(): Long;
    readBytes(): Uint8Array;
    readString(): string;
    readSize(): number;
    require(n: number): void;
    getReadIndex(): number;
}

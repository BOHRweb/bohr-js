import Long from "long";
/**
 * BOHR byte encoder.
 * Ported from: https://github.com/BOHRweb/BoHr/blob/main/bohr-core/src/main/java/org/bohr/util/SimpleEncoder.java
 */
export default class SimpleEncoder {
    /**
     * Output buffer.
     */
    private out;
    constructor();
    writeBoolean(b: boolean): void;
    writeByte(b: number): void;
    writeShort(i: number): void;
    writeInt(i: number): void;
    writeLong(l: Long): void;
    writeBytes(bytes: Uint8Array): void;
    writeString(s: string): void;
    toBytes(): Uint8Array;
    getWriteIndex(): number;
    writeSize(size: number): void;
}

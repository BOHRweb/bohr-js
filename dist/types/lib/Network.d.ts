/**
 * This class represents a network byte and label.
 * Ported from: https://github.com/BOHRweb/BoHr/blob/main/bohr-core/src/main/java/org/bohr/Network.java
 */
export default class Network {
    static readonly MAINNET: Network;
    static readonly TESTNET: Network;
    static readonly DEVNET: Network;
    /**
     * @param {number} id
     * @returns {Network}
     * @throws {Error}
     */
    static of(id: number): Network;
    private readonly id;
    private readonly label;
    constructor(id: number, label: string);
    getId(): number;
    getLabel(): string;
}

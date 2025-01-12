/**
 * LB1: Assign a line breaking class to each code point of the input. Resolve
 * AI, CB, CJ, SA, SG, and XX into other line breaking classes depending on
 * criteria outside the scope of this algorithm.
 *
 * @param {number} cls
 * @param {string} char
 * @returns {number}
 */
export function resolve(cls: number, char: string): number;
export const sot: -1;
export const eot: -2;
/**
 * Information about a particular input character.
 */
export class BreakerChar {
    /**
     * @param {number} cls
     * @param {number} cp
     * @param {string} char
     * @param {number} len
     */
    constructor(cls: number, cp: number, char: string, len: number);
    /**
     * Code point
     */
    cp: number;
    /**
     * Line breaking class, or `sot` or `eot`.
     */
    cls: number;
    /**
     * The character.  Might be one or two UTF-16 JS characters.
     */
    char: string;
    /**
     * The length of the whole string up to and including char, in JS chars.
     */
    len: number;
}
/**
 * @private
 */
export class BreakerState {
    /**
     * @param {string} str
     */
    constructor(str: string);
    str: string;
    len: number;
    prevChunk: number;
    prev: BreakerChar;
    cur: BreakerChar;
    next: BreakerChar;
    LB8: boolean;
    spaces: boolean;
    RI: number;
    /** @type {number?} */
    ex7pos: number | null;
    /**
     * Extra properties, to be copied to Break when created.
     *
     * @type {Record<string,any>=}
     */
    props: Record<string, any> | undefined;
    /**
     * Extra state information, for use by tailoring subclasses.
     *
     * @type {Record<string,any>}
     */
    extra: Record<string, any>;
    /**
     * Move to the next state.
     *
     * @param {BreakerChar} step
     */
    push(step: BreakerChar): void;
    pushEnd(): void;
    /**
     * Iterate over the codepoints in the string, starting at pos.
     *
     * @param {number} pos;
     */
    codePoints(pos: number): Generator<BreakerChar, void, unknown>;
    /**
     * Look ahead in the string to see what the next linebreak class is after zero
     * or more spaces, starting at JS char offset pos.
     *
     * @param {number} pos
     * @returns {number}
     */
    classAfterSpaces(pos: number): number;
    /**
     * Get the character after next.
     *
     * @returns {BreakerChar?}
     */
    afterNext(): BreakerChar | null;
    /**
     * Set some extra information in the state that will be passed to
     * the next created Break.
     *
     * @param {string} key
     * @param {any} value
     */
    setProp(key: string, value: any): void;
}

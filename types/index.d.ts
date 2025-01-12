export function LB02(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB03(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB04(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB05(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB06(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LBspacesStop(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB07(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB08(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB08a(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB09(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB10(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB11(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB12(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB12a(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB13(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB14(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB15a(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB15b(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB16(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB17(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB18(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB19(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB20(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB21(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB21a(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB21b(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB22(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB23(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB23a(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB24(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB25(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB26(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB27(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB28(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB28a(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB29(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB30(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB30a(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB30b(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function LB31(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function Example7_13(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
export function Example7_25(state: import('./state.js').BreakerState): typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
/**
 * This rule has no opinion.
 */
export const PASS: unique symbol;
/**
 * This rule asserts that there must not be a break after the current
 * code point.
 */
export const NO_BREAK: unique symbol;
/**
 * This rule asserts that there may be a break after the current code point.
 */
export const MAY_BREAK: unique symbol;
/**
 * This rule asserts that there must be a line break after the current code point.
 */
export const MUST_BREAK: unique symbol;
/**
 * Options for how rules are applied.
 *
 * @typedef {object} RulesOptions
 * @prop {boolean} [string=false] Extract strings from input, rather than just
 *   returning char offsets.
 * @prop {boolean} [example7=false] Use the extra rules for numbers from
 *   Example 7.  Set to `true` for running the conformance tests.
 * @prop {boolean} [verbose=false] Turn on some verbose logging that is
 *   useful for debug.
 */
export class Rules {
    /**
     *
     * @param {RulesOptions} opts
     */
    constructor(opts?: RulesOptions);
    /**
     * Copy of rules, safe to tweak.
     *
     * @type {BreakRule[]}
     */
    rules: BreakRule[];
    /**
     * Remove the rules with names as indicated.
     *
     * @param  {...string} names
     * @returns {BreakRule[]} The deleted rules
     */
    removeRule(...names: string[]): BreakRule[];
    /**
     * Add rules after the one named `name`.
     *
     * @param {string} name The name of the rule before.
     * @param {...BreakRule} newRules
     * @returns {number} Index of start of the new rules
     */
    addRuleAfter(name: string, ...newRules: BreakRule[]): number;
    /**
     * Add rules before the one named `name`.
     *
     * @param {string} name The name of the rule before.
     * @param {...BreakRule} newRules
     * @returns {number} Index of start of the new rules
     */
    addRuleBefore(name: string, ...newRules: BreakRule[]): number;
    /**
     * Replace the rule named `name` with the given rules.
     *
     * @param {string} name The name of the rule before.
     * @param {...BreakRule} newRules
     * @returns {BreakRule[]} The replaced rules.
     */
    replaceRule(name: string, ...newRules: BreakRule[]): BreakRule[];
    /**
     * Enumerate all of the potential line breaks.
     *
     * @param {string} str
     */
    breaks(str: string): Generator<Break, void, unknown>;
    #private;
}
/**
 * A rule that impacts linebreaking.  Looking ahead and behind one code point
 * is fast, using `state.prev` and `state.next` respectively.  Looking ahead
 * more code points is possible with `*BreakerState.codePoints()`, but be
 * careful of causing ReDos vulnerabilities.
 */
export type BreakRule = (state: import('./state.js').BreakerState) => typeof PASS | typeof NO_BREAK | typeof MAY_BREAK | typeof MUST_BREAK;
/**
 * Options for how rules are applied.
 */
export type RulesOptions = {
    /**
     * Extract strings from input, rather than just
     * returning char offsets.
     */
    string?: boolean | undefined;
    /**
     * Use the extra rules for numbers from
     * Example 7.  Set to `true` for running the conformance tests.
     */
    example7?: boolean | undefined;
    /**
     * Turn on some verbose logging that is
     * useful for debug.
     */
    verbose?: boolean | undefined;
};
import { Break } from './break.js';
import { BreakerState } from './state.js';
import { EastAsianWidth } from './EastAsianWidth.js';
import { LineBreak } from './LineBreak.js';
import { names as LineBreakClasses } from './LineBreak.js';
import { eot } from './state.js';
import { sot } from './state.js';
export { Break, BreakerState, EastAsianWidth, LineBreak, LineBreakClasses, eot, sot };

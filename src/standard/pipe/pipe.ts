/* eslint-disable max-len */
type unknownFn = (arg: unknown) => unknown;

export function pipe<A, B>(
    fnA: (a: A) => B,
): (initialValue: A) => B;

export function pipe<A, B, C>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
): (initialValue: A) => C;

export function pipe<A, B, C, D>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
): (initialValue: A) => D;

export function pipe<A, B, C, D, E>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
): (initialValue: A) => E;

export function pipe<A, B, C, D, E, F>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
): (initialValue: A) => F;

export function pipe<A, B, C, D, E, F, G>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
): (initialValue: A) => G;

export function pipe<A, B, C, D, E, F, G, H>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
): (initialValue: A) => H;

export function pipe<A, B, C, D, E, F, G, H, I>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
): (initialValue: A) => I;

export function pipe<A, B, C, D, E, F, G, H, I, J>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
): (initialValue: A) => J;

export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
): (initialValue: A) => K;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
): (initialValue: A) => L;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
): (initialValue: A) => M;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
): (initialValue: A) => N;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
): (initialValue: A) => O;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
): (initialValue: A) => P;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
): (initialValue: A) => Q;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
    fnQ: (q: Q) => R,
): (initialValue: A) => R;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
    fnQ: (q: Q) => R,
    fnR: (r: R) => S,
): (initialValue: A) => S;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
    fnQ: (q: Q) => R,
    fnR: (r: R) => S,
    fnS: (s: S) => T,
): (initialValue: A) => T;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
    fnQ: (q: Q) => R,
    fnR: (r: R) => S,
    fnS: (s: S) => T,
    fnT: (t: T) => U,
): (initialValue: A) => U;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
    fnQ: (q: Q) => R,
    fnR: (r: R) => S,
    fnS: (s: S) => T,
    fnT: (t: T) => U,
    fnU: (u: U) => V,
): (initialValue: A) => V;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
    fnQ: (q: Q) => R,
    fnR: (r: R) => S,
    fnS: (s: S) => T,
    fnT: (t: T) => U,
    fnU: (u: U) => V,
    fnV: (v: V) => W,
): (initialValue: A) => W;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
    fnQ: (q: Q) => R,
    fnR: (r: R) => S,
    fnS: (s: S) => T,
    fnT: (t: T) => U,
    fnU: (u: U) => V,
    fnV: (v: V) => W,
    fnW: (w: W) => X,
): (initialValue: A) => X;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
    fnQ: (q: Q) => R,
    fnR: (r: R) => S,
    fnS: (s: S) => T,
    fnT: (t: T) => U,
    fnU: (u: U) => V,
    fnV: (v: V) => W,
    fnW: (w: W) => X,
    fnX: (x: X) => Y,
): (initialValue: A) => Y;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
    fnA: (a: A) => B,
    fnB: (b: B) => C,
    fnC: (c: C) => D,
    fnD: (d: D) => E,
    fnE: (e: E) => F,
    fnF: (f: F) => G,
    fnG: (g: G) => H,
    fnH: (h: H) => I,
    fnI: (i: I) => J,
    fnJ: (j: J) => K,
    fnK: (k: K) => L,
    fnL: (l: L) => M,
    fnM: (m: M) => N,
    fnN: (n: N) => O,
    fnO: (o: O) => P,
    fnP: (p: P) => Q,
    fnQ: (q: Q) => R,
    fnR: (r: R) => S,
    fnS: (s: S) => T,
    fnT: (t: T) => U,
    fnU: (u: U) => V,
    fnV: (v: V) => W,
    fnW: (w: W) => X,
    fnX: (x: X) => Y,
    fnY: (y: Y) => Z,
): (initialValue: A) => Z;

export function pipe(...fns: unknownFn[]): unknownFn {
    return initialParam => fns.reduce((curr, fn) => fn(curr), initialParam);
}

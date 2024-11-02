import { assert, it } from "vitest";
import { resolveTimeout } from "./promise.js";
import { debounce, throttle } from "./chrono.js";

const assertEquals = assert.deepStrictEqual;
const assertNotEquals = assert.notStrictEqual;

it("debounce", () => {
    const timeoutId = debounce(() => {}, 1000)();
    assertNotEquals(timeoutId, 0);
    globalThis.clearTimeout(timeoutId);
});

it("debounce", () => {
    const emptyArr: string[] = [];
    const timeoutId = debounce(() => emptyArr.push("Salvator mundi"), 0)();
    assertEquals(emptyArr, []);
    globalThis.clearTimeout(timeoutId);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    const timeoutId = debounce(() => emptyArr.push("Salvator mundi"), 0)();
    await resolveTimeout(undefined, 5);
    assertEquals(emptyArr, ["Salvator mundi"]);
    globalThis.clearTimeout(timeoutId);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(() => emptyArr.push("Salvator mundi"), 1);
    const timeoutId = returnedFn();
    returnedFn();
    returnedFn();
    await resolveTimeout(undefined, 10);
    assertEquals(emptyArr, ["Salvator mundi"]);
    globalThis.clearTimeout(timeoutId);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(() => emptyArr.push("Salvator mundi"), 30);
    returnedFn();
    await resolveTimeout(undefined, 8);
    returnedFn();
    await resolveTimeout(undefined, 8);
    returnedFn();
    await resolveTimeout(undefined, 8);
    const timeoutId = returnedFn();
    await resolveTimeout(undefined, 8);
    assertEquals(emptyArr, []);
    globalThis.clearTimeout(timeoutId);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(() => emptyArr.push("Salvator mundi"), 1);
    const timeoutId = returnedFn();
    await resolveTimeout(undefined, 5);
    returnedFn();
    await resolveTimeout(undefined, 5);
    assertEquals(emptyArr, ["Salvator mundi", "Salvator mundi"]);
    globalThis.clearTimeout(timeoutId);
});

it("throttle", () => {
    const timeoutId = throttle(() => {}, 1000)();
    assertNotEquals(timeoutId, 0);
    globalThis.clearTimeout(timeoutId);
});

it("throttle", () => {
    const emptyArr: string[] = [];
    const timeoutId = throttle(() => emptyArr.push("Salvator mundi"), 0)();
    assertEquals(emptyArr, []);
    globalThis.clearTimeout(timeoutId);
});

it("throttle", async () => {
    const emptyArr: string[] = [];
    const timeoutId = throttle(() => emptyArr.push("Salvator mundi"), 0)();
    await resolveTimeout(undefined, 5);
    assertEquals(emptyArr, ["Salvator mundi"]);
    globalThis.clearTimeout(timeoutId);
});

it("throttle", async () => {
    const emptyArr: string[] = [];
    const returnedFn = throttle(() => emptyArr.push("Salvator mundi"), 2);
    const timeoutId = returnedFn();
    returnedFn();
    returnedFn();
    await resolveTimeout(undefined, 10);
    assertEquals(emptyArr, ["Salvator mundi"]);
    globalThis.clearTimeout(timeoutId);
});

it("throttle", async () => {
    const emptyArr: string[] = [];
    const returnedFn = throttle(() => emptyArr.push("Salvator mundi"), 1);
    const timeoutId = returnedFn();
    await resolveTimeout(undefined, 5);
    returnedFn();
    await resolveTimeout(undefined, 5);
    assertEquals(emptyArr, ["Salvator mundi", "Salvator mundi"]);
    globalThis.clearTimeout(timeoutId);
});

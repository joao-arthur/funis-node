import { assert, it } from "vitest";
import { resolveTimeout } from "./promise.js";
import { debounce, throttle } from "./chrono.js";

it("debounce", () => {
    const timeoutId = debounce(() => {}, 1000)();
    assert.notStrictEqual(timeoutId, 0);
    globalThis.clearTimeout(timeoutId);
});

it("debounce", () => {
    const emptyArr: string[] = [];
    debounce(() => emptyArr.push("Salvator mundi"), 0)();
    assert.deepStrictEqual(emptyArr, []);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    debounce(() => emptyArr.push("Salvator mundi"), 0)();
    await resolveTimeout(undefined, 5);
    assert.deepStrictEqual(emptyArr, ["Salvator mundi"]);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(() => emptyArr.push("Salvator mundi"), 1);
    returnedFn();
    returnedFn();
    returnedFn();
    await resolveTimeout(undefined, 8);
    assert.deepStrictEqual(emptyArr, ["Salvator mundi"]);
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
    assert.deepStrictEqual(emptyArr, []);
    globalThis.clearTimeout(timeoutId);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(() => emptyArr.push("Salvator mundi"), 1);
    returnedFn();
    await resolveTimeout(undefined, 5);
    returnedFn();
    await resolveTimeout(undefined, 5);
    assert.deepStrictEqual(emptyArr, ["Salvator mundi", "Salvator mundi"]);
});

it("throttle", () => {
    const timeoutId = throttle(() => {}, 1000)();
    assert.notStrictEqual(timeoutId, 0);
    globalThis.clearTimeout(timeoutId);
});

it("throttle", () => {
    const emptyArr: string[] = [];
    throttle(() => emptyArr.push("Salvator mundi"), 0)();
    assert.deepStrictEqual(emptyArr, []);
});

it("throttle", async () => {
    const emptyArr: string[] = [];
    throttle(() => emptyArr.push("Salvator mundi"), 0)();
    await resolveTimeout(undefined, 5);
    assert.deepStrictEqual(emptyArr, ["Salvator mundi"]);
});

it("throttle", async () => {
    const emptyArr: string[] = [];
    const returnedFn = throttle(() => emptyArr.push("Salvator mundi"), 2);
    returnedFn();
    returnedFn();
    returnedFn();
    await resolveTimeout(undefined, 10);
    assert.deepStrictEqual(emptyArr, ["Salvator mundi"]);
});

it("throttle", async () => {
    const emptyArr: string[] = [];
    const returnedFn = throttle(() => emptyArr.push("Salvator mundi"), 1);
    returnedFn();
    await resolveTimeout(undefined, 5);
    returnedFn();
    await resolveTimeout(undefined, 5);
    assert.deepStrictEqual(emptyArr, ["Salvator mundi", "Salvator mundi"]);
});

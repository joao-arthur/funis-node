import { assert, expect, it } from "vitest";
import { resolveTimeout } from "../../prm/resolveTimeout/resolveTimeout.js";
import { throttle } from "./throttle.js";

it("throttle", () => {
    const timeoutId = throttle(() => {}, 1000)();
    assert.notStrictEqual(timeoutId, 0);
    globalThis.clearTimeout(timeoutId);
});

it("throttle", () => {
    const emptyArr: string[] = [];
    throttle(() => emptyArr.push("Salvator mundi"), 0)();
    expect(emptyArr).toEqual([]);
});

it("throttle", async () => {
    const emptyArr: string[] = [];
    throttle(() => emptyArr.push("Salvator mundi"), 0)();
    await resolveTimeout(undefined, 5);
    expect(emptyArr).toEqual(["Salvator mundi"]);
});

it("throttle", async () => {
    const emptyArr: string[] = [];
    const returnedFn = throttle(
        () => emptyArr.push("Salvator mundi"),
        2,
    );
    returnedFn();
    returnedFn();
    returnedFn();
    await resolveTimeout(undefined, 10);
    expect(emptyArr).toEqual(["Salvator mundi"]);
});

it("throttle", async () => {
    const emptyArr: string[] = [];
    const returnedFn = throttle(
        () => emptyArr.push("Salvator mundi"),
        1,
    );
    returnedFn();
    await resolveTimeout(undefined, 5);
    returnedFn();
    await resolveTimeout(undefined, 5);
    expect(emptyArr).toEqual([
        "Salvator mundi",
        "Salvator mundi",
    ]);
});

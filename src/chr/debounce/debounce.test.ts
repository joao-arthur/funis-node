import { assert, expect, it } from "vitest";
import { resolveTimeout } from "../../prm/resolveTimeout/resolveTimeout.js";
import { debounce } from "./debounce.js";

it("debounce", () => {
    const timeoutId = debounce(() => {}, 1000)();
    assert.notStrictEqual(timeoutId, 0);
    globalThis.clearTimeout(timeoutId);
});

it("debounce", () => {
    const emptyArr: string[] = [];
    debounce(() => emptyArr.push("Salvator mundi"), 0)();
    expect(emptyArr).toEqual([]);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    debounce(() => emptyArr.push("Salvator mundi"), 0)();
    await resolveTimeout(undefined, 5);
    expect(emptyArr).toEqual(["Salvator mundi"]);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(
        () => emptyArr.push("Salvator mundi"),
        1,
    );
    returnedFn();
    returnedFn();
    returnedFn();
    await resolveTimeout(undefined, 8);
    expect(emptyArr).toEqual(["Salvator mundi"]);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(
        () => emptyArr.push("Salvator mundi"),
        30,
    );
    returnedFn();
    await resolveTimeout(undefined, 8);
    returnedFn();
    await resolveTimeout(undefined, 8);
    returnedFn();
    await resolveTimeout(undefined, 8);
    const timeoutId = returnedFn();
    await resolveTimeout(undefined, 8);
    expect(emptyArr).toEqual([]);
    globalThis.clearTimeout(timeoutId);
});

it("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(
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

import { describe, expect, it } from "vitest";
import { resolveTimeout } from "../../promises/resolveTimeout/resolveTimeout.js";
import { throttle } from "./throttle.js";

describe("throttle", () => {
    it("should not execute immediately", () => {
        const emptyArr: string[] = [];
        throttle(() => emptyArr.push("Salvator mundi"), 0)();
        expect(emptyArr).toEqual([]);
    });

    it("should execute after the timeout", async () => {
        const emptyArr: string[] = [];
        throttle(() => emptyArr.push("Salvator mundi"), 0)();
        await resolveTimeout(undefined, 5);
        expect(emptyArr).toEqual(["Salvator mundi"]);
    });

    it("should execute only once during timeout", async () => {
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

    it("should execute again after the timeout", async () => {
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
});

import { describe, expect, it } from "vitest";
import { retry } from "./retry.js";

describe("retry", () => {
    it("should resolves undefined if attempts are less than one", () => {
        expect(
            retry(() => Promise.reject("Donatello"), 0),
        ).resolves.toBe(undefined);
    });

    it("should retry to solve the promise", async () => {
        let i = 1;

        await expect(
            retry(() => {
                i++;
                if (i === 5) {
                    return Promise.resolve("Ludwig van Beethoven");
                } else {
                    return Promise.reject("Johann Sebastian Bach");
                }
            }, 10),
        ).resolves.toBe("Ludwig van Beethoven");
    });

    it("should return rejected value if retry rejects", async () => {
        await expect(
            retry(() => Promise.reject("Donatello"), 5),
        ).rejects.toBe("Donatello");
    });
});

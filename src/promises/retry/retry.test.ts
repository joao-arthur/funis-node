import { expect, it } from "vitest";
import { retry } from "./retry.js";

it("retry", () => {
    expect(
        retry(() => Promise.reject("Donatello"), 0),
    ).resolves.toBe(undefined);
});

it("retry", async () => {
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

it("retry", async () => {
    await expect(
        retry(() => Promise.reject("Donatello"), 5),
    ).rejects.toBe("Donatello");
});

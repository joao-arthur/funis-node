import { describe, expect, it } from "vitest";
import { resolveTimeout } from "./resolveTimeout.js";

describe("resolveTimeout", () => {
    it("should resolve the promise after the timeout", async () => {
        await expect(
            resolveTimeout("Hello, promise!", 50),
        ).resolves.toBe("Hello, promise!");
    });
});

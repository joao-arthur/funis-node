import { describe, expect, it } from "vitest";
import { rejectTimeout } from "./rejectTimeout.js";

describe("rejectTimeout", () => {
    it("should reject the promise after the timeout", async () => {
        await expect(
            rejectTimeout("Hello, promise!", 50),
        ).rejects.toBe("Hello, promise!");
    });
});

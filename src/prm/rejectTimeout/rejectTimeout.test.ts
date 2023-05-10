import { expect, it } from "vitest";
import { rejectTimeout } from "./rejectTimeout.js";

it("rejectTimeout", async () => {
    await expect(
        rejectTimeout("Hello, promise!", 50),
    ).rejects.toBe("Hello, promise!");
});

import { expect, it } from "vitest";
import { resolveTimeout } from "./resolveTimeout.js";

it("resolveTimeout", async () => {
    await expect(
        resolveTimeout("Hello, promise!", 50),
    ).resolves.toBe("Hello, promise!");
});

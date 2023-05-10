import { expect, it } from "vitest";
import { rejectTimeout } from "../rejectTimeout/rejectTimeout.js";
import { resolveTimeout } from "../resolveTimeout/resolveTimeout.js";
import { last } from "./last.js";

it("last", async () => {
    await expect(
        last([
            resolveTimeout("Aristotle", 5),
            rejectTimeout("Aristotle", 5),
            resolveTimeout("Plato", 10),
            rejectTimeout("Plato", 10),
            resolveTimeout("Socrates", 20),
        ]),
    ).resolves.toBe("Socrates");
    await expect(
        last([
            resolveTimeout("Socrates", 5),
            rejectTimeout("Socrates", 5),
            resolveTimeout("Plato", 10),
            rejectTimeout("Plato", 10),
            rejectTimeout("Aristotle", 20),
        ]),
    ).rejects.toBe("Aristotle");
});

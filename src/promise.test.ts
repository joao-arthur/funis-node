import { assert, it } from "vitest";
import { last, objectify, rejectTimeout, resolveTimeout, retry } from "./promise.js";

const assertEquals = assert.deepStrictEqual;

it("last", async () => {
    assertEquals(
        await last([
            resolveTimeout("Aristotle", 5),
            rejectTimeout("Aristotle", 5),
            resolveTimeout("Plato", 10),
            rejectTimeout("Plato", 10),
            resolveTimeout("Socrates", 20),
        ]),
        "Socrates",
    );
    try {
        await last([
            resolveTimeout("Socrates", 5),
            rejectTimeout("Socrates", 5),
            resolveTimeout("Plato", 10),
            rejectTimeout("Plato", 10),
            rejectTimeout("Aristotle", 20),
        ]);
    } catch (e) {
        assertEquals(e, "Aristotle");
    }
});

it("objectify", async () => {
    assertEquals(
        await objectify(Promise.reject(undefined)),
        { value: undefined, error: undefined, type: "rejected" },
    );
    assertEquals(
        await objectify(Promise.resolve("Symbolic acts")),
        { value: "Symbolic acts", error: undefined, type: "resolved" },
    );
    assertEquals(
        await objectify(Promise.reject("So vivid")),
        { value: undefined, error: "So vivid", type: "rejected" },
    );
    assertEquals(
        await objectify(Promise.resolve(undefined)),
        { value: undefined, error: undefined, type: "resolved" },
    );
});

it("rejectTimeout", async () => {
    try {
        await rejectTimeout("Hello, promise!", 50);
    } catch (e) {
        assertEquals(e, "Hello, promise!");
    }
});

it("resolveTimeout", async () => {
    assertEquals(
        await resolveTimeout("Hello, promise!", 50),
        "Hello, promise!",
    );
});

it("retry", async () => {
    assertEquals(await retry(() => Promise.reject("Donatello"), 0), undefined);
});

it("retry", async () => {
    let i = 1;
    assertEquals(
        await retry(() => {
            i++;
            if (i === 5) {
                return Promise.resolve("Ludwig van Beethoven");
            } else {
                return Promise.reject("Johann Sebastian Bach");
            }
        }, 10),
        "Ludwig van Beethoven",
    );
});

it("retry", async () => {
    try {
        await retry(() => Promise.reject("Donatello"), 5);
    } catch (e) {
        assertEquals(e, "Donatello");
    }
});

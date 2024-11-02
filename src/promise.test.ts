import { assert, it } from "vitest";
import { last, objectify, rejectTimeout, resolveTimeout, retry } from "./promise.js";

it("last", async () => {
    assert.deepStrictEqual(
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
        assert.deepStrictEqual(e, "Aristotle");
    }
});

it("objectify", async () => {
    assert.deepStrictEqual(
        await objectify(Promise.reject(undefined)),
        { value: undefined, error: undefined, type: "rejected" },
    );
    assert.deepStrictEqual(
        await objectify(Promise.reject("So vivid")),
        { value: undefined, error: "So vivid", type: "rejected" },
    );
});

it("objectify", async () => {
    assert.deepStrictEqual(
        await objectify(Promise.resolve("Symbolic acts")),
        { value: "Symbolic acts", error: undefined, type: "resolved" },
    );
    assert.deepStrictEqual(
        await objectify(Promise.resolve(undefined)),
        { value: undefined, error: undefined, type: "resolved" },
    );
});

it("rejectTimeout", async () => {
    try {
        await rejectTimeout("Hello, promise!", 50);
    } catch (e) {
        assert.deepStrictEqual(e, "Hello, promise!");
    }
});

it("resolveTimeout", async () => {
    assert.deepStrictEqual(
        await resolveTimeout("Hello, promise!", 50),
        "Hello, promise!",
    );
});

it("retry", async () => {
    assert.deepStrictEqual(await retry(() => Promise.reject("Donatello"), 0), undefined);
});

it("retry", async () => {
    let i = 1;

    assert.deepStrictEqual(
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
        await retry(() => Promise.reject("Donatello!"), 5);
    } catch (e) {
        assert.deepStrictEqual(e, "Donatello!");
    }
});

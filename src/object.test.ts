import { assert, it } from "vitest";
import {
    objDisjoint,
    objFromMap,
    objIntersect,
    objMapEntries,
    objMapKeys,
    objMapValues,
    objOmit,
    objPick,
    objSerialize,
    objSerializesToSame,
} from "./object.js";

it("objDisjoint", () => {
    assert.deepStrictEqual(objDisjoint([]), {});
});

it("objDisjoint", () => {
    assert.deepStrictEqual(
        objDisjoint([{ name: "Steve Harris", country: "UK" }]),
        { name: "Steve Harris", country: "UK" },
    );
    assert.deepStrictEqual(
        objDisjoint(
            [
                { name: "Steve Harris", country: "UK" },
                { name: "Megadeth", foundation: 1983 },
            ],
        ),
        { country: "UK", foundation: 1983 },
    );
});

it("objFromMap", () => {
    assert.deepStrictEqual(objFromMap(new Map([])), {});
});

it("objFromMap", () => {
    assert.deepStrictEqual(
        objFromMap(
            new Map([
                ["Paul", "Bass"],
                ["John", "Guitar"],
                ["George", "Guitar"],
                ["Ringo", "Drums"],
            ]),
        ),
        { Paul: "Bass", John: "Guitar", George: "Guitar", Ringo: "Drums" },
    );
});

it("objIntersect", () => {
    assert.deepStrictEqual(objIntersect([]), {});
});

it("objIntersect", () => {
    assert.deepStrictEqual(
        objIntersect([{ name: "Steve Harris", country: "UK" }]),
        { name: "Steve Harris", country: "UK" },
    );
});

it("objIntersect", () => {
    assert.deepStrictEqual(
        objIntersect(
            [
                { name: "Cliff Burton", band: "Metallica", country: "US" },
                { name: "James Hetfield", band: "Metallica", country: "US" },
                { name: "Kirk Hammett", band: "Metallica", country: "US" },
            ],
        ),
        { band: "Metallica", country: "US" },
    );
});

it("objMapEntries", () => {
    assert.deepStrictEqual(
        objMapEntries({ a: 1, b: "two", c: true, 4: "nada" }, ([key, value]) => [key, value]),
        { a: 1, b: "two", c: true, 4: "nada" },
    );
    assert.deepStrictEqual(
        objMapEntries(
            { a: 1, b: "two", c: true, 4: "nada" },
            ([key, value]) => [`key_${key}`, `value_${value}`],
        ),
        { key_a: "value_1", key_b: "value_two", key_c: "value_true", key_4: "value_nada" },
    );
    assert.deepStrictEqual(
        objMapEntries({ a: 1, b: "two", c: true, 4: "nada" }, () => ["key", "value"]),
        { key: "value" },
    );
});

it("objMapKeys", () => {
    assert.deepStrictEqual(
        objMapKeys({ a: 1, b: "two", c: true, 4: "nada" }, (key) => key),
        { a: 1, b: "two", c: true, 4: "nada" },
    );
    assert.deepStrictEqual(
        objMapKeys({ a: 1, b: "two", c: true, 4: "nada" }, (key) => `v2_${key}_test`),
        { v2_a_test: 1, v2_b_test: "two", v2_c_test: true, v2_4_test: "nada" },
    );
    assert.deepStrictEqual(
        objMapKeys({ a: 1, b: "two", c: true, 4: "nada" }, () => "key"),
        { key: true },
    );
});

it("objMapValues", () => {
    assert.deepStrictEqual(
        objMapValues({ a: 1, b: "two", c: true, 4: "nada" }, (value) => value),
        { a: 1, b: "two", c: true, 4: "nada" },
    );
    assert.deepStrictEqual(
        objMapValues({ a: 1, b: "two", c: true, 4: "nada" }, (value) => value === true),
        { a: false, b: false, c: true, 4: false },
    );
    assert.deepStrictEqual(
        objMapValues({ a: 1, b: "two", c: true, 4: "nada" }, (value) => `v2_${value}_test`),
        { a: "v2_1_test", b: "v2_two_test", c: "v2_true_test", 4: "v2_nada_test" },
    );
    assert.deepStrictEqual(
        objMapValues(
            { a: 1, b: "two", c: true, 4: "nada" },
            () => "value",
        ),
        { a: "value", b: "value", c: "value", 4: "value" },
    );
});

it("objOmit", () => {
    assert.deepStrictEqual(objOmit({}, []), {});
    assert.deepStrictEqual(objOmit({}, ["animal", "species", "age"]), {});
});

it("objOmit", () => {
    assert.deepStrictEqual(
        objOmit({ animal: "dog", species: "Canis lupus", age: 5 }, []),
        { animal: "dog", species: "Canis lupus", age: 5 },
    );
    assert.deepStrictEqual(
        objOmit({ animal: "dog", species: "Canis lupus", age: 5 }, ["animal"]),
        { species: "Canis lupus", age: 5 },
    );
    assert.deepStrictEqual(
        objOmit({ animal: "dog", species: "Canis lupus", age: 5 }, ["animal", "species", "age"]),
        {},
    );
});

it("objPick", () => {
    assert.deepStrictEqual(objPick({}, []), {});
    assert.deepStrictEqual(objPick({}, ["animal", "species", "age"]), {});
});

it("objPick", () => {
    assert.deepStrictEqual(objPick({ animal: "dog", species: "Canis lupus", age: 5 }, []), {});
    assert.deepStrictEqual(
        objPick({ animal: "dog", species: "Canis lupus", age: 5 }, ["animal"]),
        { animal: "dog" },
    );
    assert.deepStrictEqual(
        objPick({ animal: "dog", species: "Canis lupus", age: 5 }, ["animal", "species", "age"]),
        { animal: "dog", species: "Canis lupus", age: 5 },
    );
});

it("objSerialize", () => {
    assert.deepStrictEqual(
        objSerialize({
            name: "Paul",
            numberOfBands: 4,
            bigNumberOfBands: 4n,
            alive: true,
            birthday: new Date("1942-06-18T03:00:00.000Z"),
            unique: Symbol("Paul"),
        }),
        "{ name: Paul, numberOfBands: 4, bigNumberOfBands: 4, alive: true, birthday: 1942-06-18T03:00:00.000Z, unique: Symbol(Paul) }",
    );
});

it("objSerialize", () => {
    assert.deepStrictEqual(
        objSerialize({
            sayHi: (): string => "hi, my name is Eminem",
            sayGoodbye: (): string => "bye, bye, baby",
        }),
        "{ }",
    );
});

it("objSerialize", () => {
    assert.deepStrictEqual(
        objSerialize({ empty: [], oneValue: [1], multiValue: [true, false, "zaphod", 42n] }),
        "{ empty: , oneValue: 1, multiValue: true, false, zaphod, 42 }",
    );
});

it("objSerialize", () => {
    class Dog {
        constructor(private readonly name: string) {}

        bark(): string {
            return `wolf! wolf! I'm ${this.name}!`;
        }
    }
    assert.deepStrictEqual(objSerialize(new Dog("Rex") as unknown as PlainObject), "{ name: Rex }");
});

it("objSerializesToSame", () => {
    assert.deepStrictEqual(objSerializesToSame([]), true);
    assert.deepStrictEqual(objSerializesToSame([{ r: 10, a: 57 }]), true);
});

it("objSerializesToSame", () => {
    assert.deepStrictEqual(
        objSerializesToSame([{ x: 10.12, y: -1.53 }, { x: 10.12, y: -1.53 }]),
        true,
    );
    assert.deepStrictEqual(
        objSerializesToSame([{ x: 10.9, y: -1.5 }, { x: 10.12, y: -1.53 }]),
        false,
    );
    assert.deepStrictEqual(objSerializesToSame([{}, {}, {}]), true);
});

it("objSerializesToSame", () => {
    class CartesianPoint {
        constructor(
            private readonly x: number,
            private readonly y: number,
        ) {}

        public objSerialize(): string {
            return `(${this.x}, ${this.y})`;
        }
    }

    assert.deepStrictEqual(
        objSerializesToSame([
            new CartesianPoint(5.25, 7.77) as unknown as PlainObject,
            { x: 5.25, y: 7.77 },
        ]),
        true,
    );
});

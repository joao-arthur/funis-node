import { expect, it } from "vitest";
import { lt } from "./lt.js";

it("lt", () => {
    expect(lt(1)(0)).toBe(false);
    expect(lt(1)(1)).toBe(false);
    expect(lt(1)(2)).toBe(true);
});

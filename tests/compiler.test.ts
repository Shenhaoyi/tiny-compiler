import { test, expect } from "vitest";
import { compiler } from "../src/compiler";
import { SOURCE_CODE, TARGET_CODE } from "../src/constant";

test("compiler", () => {
  expect(compiler(SOURCE_CODE)).toBe(TARGET_CODE);
});

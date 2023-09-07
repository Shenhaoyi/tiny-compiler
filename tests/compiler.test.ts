import { test, expect } from "vitest";
import { compiler } from "../src/compiler";
import { INPUT, OUTPUT } from "../src/constant";

test("compiler", () => {
  expect(compiler(INPUT)).toBe(OUTPUT);
});


import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { toRoman } from "./main.ts";

Deno.test("Zahl 1 ergibt I", () => {
  assertEquals(toRoman(1), "I");
});

Deno.test("Zahl 4 ergibt IV", () => {
  assertEquals(toRoman(4), "IV");
});

Deno.test("Zahl 9 ergibt IX", () => {
  assertEquals(toRoman(9), "IX");
});

Deno.test("Zahl 58 ergibt LVIII", () => {
  assertEquals(toRoman(58), "LVIII");
});

Deno.test("Zahl 1994 ergibt MCMXCIV", () => {
  assertEquals(toRoman(1994), "MCMXCIV");
});

Deno.test("Zahl 2025 ergibt MMXXV", () => {
  assertEquals(toRoman(2025), "MMXXV");
});

Deno.test("Zahl 3999 ergibt MMMCMXCIX", () => {
  assertEquals(toRoman(3999), "MMMCMXCIX");
});
Deno.test("Zahl 500 ergibt D", () => {
  assertEquals(toRoman(500), "D");
});



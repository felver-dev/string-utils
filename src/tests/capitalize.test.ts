import { capitalize } from "../capitalize";

describe("capitalize", () => {
  it("should capitalize first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });

  it("should handle mixed case", () => {
    expect(capitalize("hELLO")).toBe("Hello");
    expect(capitalize("WORld")).toBe("World");
  });

  it("should handle empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("should handle single character", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("Z")).toBe("Z");
  });

  it("should handle invalid input", () => {
    expect(capitalize(null as any)).toBe("");
    expect(capitalize(undefined as any)).toBe("");
    expect(capitalize(123 as any)).toBe("");
  });
});

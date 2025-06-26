import { removeAccents } from "../removeAccent";

describe("removeAccents", () => {
  it("should remove accents", () => {
    expect(removeAccents("café")).toBe("cafe");
    expect(removeAccents("résumé")).toBe("resume");
    expect(removeAccents("naïve")).toBe("naive");
  });

  it("should handle mixed text", () => {
    expect(removeAccents("Hôtel & Café")).toBe("Hotel & Cafe");
    expect(removeAccents("École française")).toBe("Ecole francaise");
  });

  it("should handle text without accents", () => {
    expect(removeAccents("Hello World")).toBe("Hello World");
    expect(removeAccents("JavaScript")).toBe("JavaScript");
  });

  it("should handle empty string", () => {
    expect(removeAccents("")).toBe("");
  });

  it("should handle invalid input", () => {
    expect(removeAccents(null as any)).toBe("");
    expect(removeAccents(undefined as any)).toBe("");
  });
});

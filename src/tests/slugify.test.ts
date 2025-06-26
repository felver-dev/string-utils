import { slugify } from "../slugify";

describe("slugify", () => {
  it("should create basic slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
    expect(slugify("JavaScript is Awesome")).toBe("javascript-is-awesome");
  });

  it("should handle accents", () => {
    expect(slugify("Café & Restaurant")).toBe("cafe-restaurant");
    expect(slugify("naïve résumé")).toBe("naive-resume");
  });

  it("should handle special characters", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
    expect(slugify("100% JavaScript")).toBe("100-javascript");
  });

  it("should handle custom separator", () => {
    expect(slugify("Hello World", "_")).toBe("hello_world");
    expect(slugify("Test Case", ".")).toBe("test.case");
  });

  it("should handle multiple spaces", () => {
    expect(slugify("Hello    World")).toBe("hello-world");
    expect(slugify("  Trim  Spaces  ")).toBe("trim-spaces");
  });

  it("should handle empty string", () => {
    expect(slugify("")).toBe("");
    expect(slugify("   ")).toBe("");
  });

  it("should handle invalid input", () => {
    expect(slugify(null as any)).toBe("");
    expect(slugify(undefined as any)).toBe("");
  });
});

import { describe, it, expect } from "vitest";
import { writeValue } from "./contact-form";

describe("contact-form utils", () => {
  describe("writeValue", () => {
    it("returns a modified copy of the object", () => {
      const formFields = { name: "", email: "", message: "" };
      const name = "maddie";

      const result = writeValue(formFields, "name", name);

      expect(result).toEqual({ ...formFields, name });
      expect(result).not.toBe(formFields); // verify a new object was created
    });
  });
});

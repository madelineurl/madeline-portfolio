import {
  toggleButtonDisabled,
  toggleInputValidity,
  toggleWarningMessage,
  writeValue
} from "./contact-form";

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

  describe("toggleInputValidity", () => {
    it("adds a 1px solid red outline to the element if value is an empty string", () => {
      const input = document.createElement("input");

      toggleInputValidity(input, "");

      expect(input.style.outline).toEqual("1px solid red");
    });

    it("does not add an outline to the element if value is a non-empty string", () => {
      const input = document.createElement("input");

      toggleInputValidity(input, "test");

      expect(input.style.outline).not.toEqual("1px solid red");
    });

    it("does not add an outline to the element if value has not been touched (is null)", () => {
      const input = document.createElement("input");

      toggleInputValidity(input, null);

      expect(input.style.outline).not.toEqual("1px solid red");
    });
  });

  describe("toggleWarningMessage", () => {
    const warning = document.createElement("div");

    it("removes the visible class on the warning element if all fields are populated", () => {
      const formFields = {
        name: "maddie",
        email: "url.madeline@gmail.com",
        message: "populated"
      };

      toggleWarningMessage(formFields, warning);

      expect(warning.classList).not.toContain("visible");
      expect(warning.textContent).toEqual("");
    });

    it("adds the visible class and updates the warning message if any touched inputs are not populated", () => {
      const formFields = {
        name: "maddie",
        email: "url.madeline@gmail.com",
        message: "" // touched but not populated
      };

      toggleWarningMessage(formFields, warning);

      expect(warning.classList).toContain("visible");
      expect(warning.textContent).toEqual("message is required");
    });

    it("warning message handles two invalid fields", () => {
      const formFields = {
        name: "maddie",
        email: "",
        message: ""
      };

      toggleWarningMessage(formFields, warning);

      expect(warning.classList).toContain("visible");
      expect(warning.textContent).toEqual("email and message are required");
    });

    it("warning message handles three invalid fields", () => {
      const formFields = {
        name: "",
        email: "",
        message: ""
      };

      toggleWarningMessage(formFields, warning);

      expect(warning.classList).toContain("visible");
      expect(warning.textContent).toEqual(
        "name, email, and message are required"
      );
    });
  });

  describe("toggleButtonDisabled", () => {
    const btn = document.createElement("button");

    it("disables the button if all inputs are populated", () => {
      const formFields = {
        name: "maddie",
        email: "url.madeline@gmail.com",
        message: "populated"
      };

      toggleButtonDisabled(formFields, btn);

      expect(btn.disabled).toEqual(false);
    });

    it("enables the button element if any input is not populated", () => {
      const formFields = {
        name: "maddie",
        email: "url.madeline@gmail.com",
        message: ""
      };

      toggleButtonDisabled(formFields, btn);

      expect(btn.disabled).toEqual(true);
    });
  });
});

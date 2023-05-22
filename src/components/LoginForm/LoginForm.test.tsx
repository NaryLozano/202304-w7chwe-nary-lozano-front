import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import LoginForm from "./LoginForm.js";

describe("Given a LoginForm component ", () => {
  describe("When it is Rendered", () => {
    test("Then it should show an input element with the text username", () => {
      const handleFormSubmit = vi.fn();
      render(<LoginForm loginSubmitForm={handleFormSubmit} />);

      const inputText = screen.getByPlaceholderText("Username");

      expect(inputText).toBeInTheDocument();
    });
  });
});

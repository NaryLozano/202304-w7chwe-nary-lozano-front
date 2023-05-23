import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import appRouter, { routes } from "./appRouter";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import GlobalStyle from "../styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "../store";
import { test } from "vitest";

const WrapperWithProviders = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

describe("Given an appRouter", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with accesible name 'The social network logotype'", () => {
      const altText = "The social network logotype";

      render(<RouterProvider router={appRouter} />, {
        wrapper: WrapperWithProviders,
      });

      const image = screen.getByAltText(altText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When its rendered in path '/login'", () => {
    test("Then it should show text fields with the text 'Username' and 'Password' ", () => {
      const router = createMemoryRouter(routes, { initialEntries: ["/login"] });
      const usernamePlaceHolder = /Username/i;
      const passwordPlaceholder = /Password/i;

      render(<RouterProvider router={router} />, {
        wrapper: WrapperWithProviders,
      });

      const usernameTextField =
        screen.getByPlaceholderText(usernamePlaceHolder);
      const passwordTextField =
        screen.getByPlaceholderText(passwordPlaceholder);

      expect(usernameTextField).toBeInTheDocument();
      expect(passwordTextField).toBeInTheDocument();
    });
  });
});

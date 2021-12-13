import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LandingPage from "../components/LandingPage";
import store from "../model/reduxStore";

test("renders landing page", () => {
  render(
    <Provider store={store}>
      <LandingPage
        questionaireMetadata={{
          name: "Test landing",
          description: "",
          questionCount: 5,
        }}
        goNext={() => {}}
      />
    </Provider>
  );

  const textElement = screen.getByText(/Dauert 1/i);
  const buttonElement = screen.getByRole("button");

  expect(textElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ThanksPage from "../components/ThanksPage";
import store from "../model/reduxStore";

test("renders landing page", () => {
  render(
    <Provider store={store}>
      <ThanksPage />
    </Provider>
  );

  const title = screen.getByText(/Antworten/i);
  const subtitle = screen.getByText(
    "Sie können dieses Fenster jetzt schließen"
  );

  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});

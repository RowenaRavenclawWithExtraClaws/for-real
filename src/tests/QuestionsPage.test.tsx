import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import QuestionPage from "../components/QuestionPage";
import store from "../model/reduxStore";

test("renders landing page", () => {
  render(
    <Provider store={store}>
      <QuestionPage questionCount={20} goNext={() => {}} />
    </Provider>
  );

  const radioGroupElement = screen.getByRole("radiogroup");
  const buttonElements = screen.getAllByRole("button");

  expect(radioGroupElement).toBeInTheDocument();
  buttonElements.forEach((element) => expect(element).toBeInTheDocument());
});

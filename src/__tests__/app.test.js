import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";
import renderer from "react-test-renderer";
afterEach(() => {
  cleanup();
});

test("not completed todo", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };
  render(<Counter todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");
});
test("completed todo", () => {
  const todo = { id: 2, title: "wash car", completed: true };
  render(<Counter todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash car");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };
  const tree = renderer.create(<Counter todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});

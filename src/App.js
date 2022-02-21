import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import ClassCounter2 from "./components/ClassCounter2";
function App() {
  /* const counter = useSelector((state) => state.counter);
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  //console.log(loggedIn);
  return (
    <>
      <h1>Hello</h1>
      <h3>Counter Value is {counter}</h3>
      <button type="button" onClick={() => dispatch(increment(5))}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
    </>
  ); */

  /* const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "Make Dinner", completed: true },
  ];
  return (
    <div className="App">
      {todos.map((todo) => {
        return <Counter todo={todo} />;
      })}
    </div>
  ); */

  return (
    <>
      <ClassCounter />
      <ClassCounter2 />
    </>
  );
}

export default App;

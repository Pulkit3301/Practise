const increment = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export { increment, decrement };

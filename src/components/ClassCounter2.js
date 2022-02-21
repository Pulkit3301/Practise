import React, { Component } from "react";
import UpdatedComponent from "./updatedComponent";
class ClassCounter2 extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <>
        <h1 onMouseOver={increment}>Hello {count}</h1>
      </>
    );
  }
}
export default UpdatedComponent(ClassCounter2);

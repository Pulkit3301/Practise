import React, { Component } from "react";
import UpdatedComponent from "./updatedComponent";
class ClassCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <>
        <button onClick={increment}>Clicked {count} times</button>
      </>
    );
  }
}
export default UpdatedComponent(ClassCounter);

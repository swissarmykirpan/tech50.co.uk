import React from "react";
import Test from "./test";
export interface HelloProps {
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    var x = new Test();
    return (
      <h1>
        Hello from {x.firstName}
        {x.lastName}
      </h1>
    );
  }
}

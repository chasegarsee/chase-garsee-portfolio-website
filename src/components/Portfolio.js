import React from "react";
import { StyledDivWrapper } from "./Styles";
import "./CSS.css";

export class Portfolio extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {} = this.state;

    return (
      <StyledDivWrapper>
        <div>Portfolio</div>
      </StyledDivWrapper>
    );
  }
}

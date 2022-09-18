import React from "react";
import {
  Bar,
  ButtonWrapper,
  ResetBTN,
  ShowBTN,
  Title,
} from "../styles/navStyles";

interface Props {
  resetAll: Function;
  showSolution: Function;
}

const Nav = ({ resetAll, showSolution }: Props) => {
  return (
    <Bar>
      <Title>Wordle</Title>
      <ButtonWrapper>
        <ShowBTN onClick={() => showSolution()}>Show</ShowBTN>
        <ResetBTN onClick={() => resetAll()}>Reset</ResetBTN>
      </ButtonWrapper>
    </Bar>
  );
};

export default Nav;

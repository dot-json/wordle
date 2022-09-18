import React from "react";
import {
  AlerWrapper,
  Window,
  BackDrop,
  Top,
  Title,
  Close,
  Solution,
} from "../styles/alertStyles";

interface Props {
  showSolution: Function;
  solution: string;
}

const Alert = ({ showSolution, solution }: Props) => {
  return (
    <AlerWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Window>
        <Top>
          <Title>The solution is...</Title>
          <Close onClick={() => showSolution()}>CLOSE</Close>
        </Top>
        <Solution>{solution}</Solution>
      </Window>
      <BackDrop onClick={() => showSolution()} />
    </AlerWrapper>
  );
};

export default Alert;

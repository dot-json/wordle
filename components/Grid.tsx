import React, { useEffect, useState } from "react";
import { LetterGrid, LetterWrapper } from "../styles/indexStyles";

interface Props {
  entries: string[];
  solution: string;
  currentRow: number;
  setChecked: Function;
  checked: React.CSSProperties[][];
}

const Grid = ({
  entries,
  solution,
  currentRow,
  setChecked,
  checked,
}: Props) => {
  const almost = { backgroundColor: "#eee062" };
  const correct = { backgroundColor: "#4ced74" };
  const incorrect = { backgroundColor: "#a7a8a9" };

  const getChar = (row: number, id: number) => {
    return entries[row][id] == undefined ? "" : entries[row][id];
  };

  const evaluate = (row: number) => {
    let current: React.CSSProperties[] = [];
    for (let i = 0; i < solution.length; i++) {
      if (solution[i] === getChar(row, i)) {
        current.push(correct);
      } else if (solution.includes(getChar(row, i))) {
        current.push(almost);
      } else {
        current.push(incorrect);
      }
    }
    setChecked(checked.map((e, i) => (i === row ? current : checked[i])));
  };

  useEffect(() => {
    if (currentRow > 0) {
      evaluate(currentRow - 1);
    }
  }, [currentRow]);

  return (
    <LetterGrid>
      <LetterWrapper style={checked[0][0]}>{getChar(0, 0)}</LetterWrapper>
      <LetterWrapper style={checked[0][1]}>{getChar(0, 1)}</LetterWrapper>
      <LetterWrapper style={checked[0][2]}>{getChar(0, 2)}</LetterWrapper>
      <LetterWrapper style={checked[0][3]}>{getChar(0, 3)}</LetterWrapper>
      <LetterWrapper style={checked[0][4]}>{getChar(0, 4)}</LetterWrapper>
      <LetterWrapper style={checked[1][0]}>{getChar(1, 0)}</LetterWrapper>
      <LetterWrapper style={checked[1][1]}>{getChar(1, 1)}</LetterWrapper>
      <LetterWrapper style={checked[1][2]}>{getChar(1, 2)}</LetterWrapper>
      <LetterWrapper style={checked[1][3]}>{getChar(1, 3)}</LetterWrapper>
      <LetterWrapper style={checked[1][4]}>{getChar(1, 4)}</LetterWrapper>
      <LetterWrapper style={checked[2][0]}>{getChar(2, 0)}</LetterWrapper>
      <LetterWrapper style={checked[2][1]}>{getChar(2, 1)}</LetterWrapper>
      <LetterWrapper style={checked[2][2]}>{getChar(2, 2)}</LetterWrapper>
      <LetterWrapper style={checked[2][3]}>{getChar(2, 3)}</LetterWrapper>
      <LetterWrapper style={checked[2][4]}>{getChar(2, 4)}</LetterWrapper>
      <LetterWrapper style={checked[3][0]}>{getChar(3, 0)}</LetterWrapper>
      <LetterWrapper style={checked[3][1]}>{getChar(3, 1)}</LetterWrapper>
      <LetterWrapper style={checked[3][2]}>{getChar(3, 2)}</LetterWrapper>
      <LetterWrapper style={checked[3][3]}>{getChar(3, 3)}</LetterWrapper>
      <LetterWrapper style={checked[3][4]}>{getChar(3, 4)}</LetterWrapper>
      <LetterWrapper style={checked[4][0]}>{getChar(4, 0)}</LetterWrapper>
      <LetterWrapper style={checked[4][1]}>{getChar(4, 1)}</LetterWrapper>
      <LetterWrapper style={checked[4][2]}>{getChar(4, 2)}</LetterWrapper>
      <LetterWrapper style={checked[4][3]}>{getChar(4, 3)}</LetterWrapper>
      <LetterWrapper style={checked[4][4]}>{getChar(4, 4)}</LetterWrapper>
      <LetterWrapper style={checked[5][0]}>{getChar(5, 0)}</LetterWrapper>
      <LetterWrapper style={checked[5][1]}>{getChar(5, 1)}</LetterWrapper>
      <LetterWrapper style={checked[5][2]}>{getChar(5, 2)}</LetterWrapper>
      <LetterWrapper style={checked[5][3]}>{getChar(5, 3)}</LetterWrapper>
      <LetterWrapper style={checked[5][4]}>{getChar(5, 4)}</LetterWrapper>
    </LetterGrid>
  );
};

export default Grid;

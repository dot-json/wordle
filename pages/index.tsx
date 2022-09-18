import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Keyboard from "../components/Keyboard";
import Nav from "../components/Nav";
import { Container, Wrapper } from "../styles/indexStyles";
import { PageWrapper } from "../styles/mainStyles";
import React from "react";
import Grid from "../components/Grid";
import Alert from "../components/Alert";
import { AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  const [solution, setSolution] = useState<string>("");
  const [currentRow, setCurrentRow] = useState<number>(0);
  const [entries, setEntries] = useState<string[]>(["", "", "", "", "", ""]);
  const [show, setShow] = useState<boolean>(false);

  const [checked, setChecked] = useState<React.CSSProperties[][]>([
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ]);

  const getSolution = async () => {
    const res = await fetch(
      "https://random-word-api.herokuapp.com/word?length=5"
    );
    const newWord = await res.json();
    setSolution(newWord[0].toUpperCase());
  };

  useEffect(() => {
    getSolution();
  }, []);

  const resetAll = () => {
    setCurrentRow(0);
    setEntries(["", "", "", "", "", ""]);
    setChecked([
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
    ]);
    getSolution();
    setShow(false);
  };

  const showSolution = () => {
    setShow(!show);
  };

  const triggerKey = (val: string) => {
    if (val !== "ENTER" && val !== "DEL" && entries[currentRow].length < 5) {
      setEntries(
        entries.map((_e, i) =>
          i == currentRow ? entries[currentRow] + val : entries[i]
        )
      );
    } else if (val === "DEL") {
      setEntries(
        entries.map((_e, i) =>
          i == currentRow ? entries[currentRow].slice(0, -1) : entries[i]
        )
      );
    } else if (
      val === "ENTER" &&
      currentRow < 6 &&
      entries[currentRow].length == 5
    ) {
      setCurrentRow(currentRow + 1);
    }
  };

  return (
    <PageWrapper>
      <Nav resetAll={resetAll} showSolution={showSolution} />
      <Wrapper>
        <Container style={{ height: "100%" }}>
          <Grid
            entries={entries}
            solution={solution}
            currentRow={currentRow}
            setChecked={setChecked}
            checked={checked}
          />
        </Container>
        <Container>
          <Keyboard triggerKey={triggerKey} />
        </Container>
      </Wrapper>
      <AnimatePresence mode="wait">
        {show && <Alert showSolution={showSolution} solution={solution} />}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Home;

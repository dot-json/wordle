import React, { useCallback, useEffect } from "react";
import { KBContainer, KBRow, Key } from "../styles/kbStyles";

interface Props {
  triggerKey: Function;
}

const Keyboard = ({ triggerKey }: Props) => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyInput = (event: any) => {
    if (event.code === "Enter") {
      triggerKey("ENTER");
    } else if (event.code === "Backspace") {
      triggerKey("DEL");
    }

    row1.concat(row2, row3).map((elem) => {
      if (event.code === "Key" + elem) {
        triggerKey(elem);
      }
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyInput);
    return () => {
      document.removeEventListener("keydown", handleKeyInput);
    };
  }, [handleKeyInput]);

  return (
    <KBContainer onKeyPress={handleKeyInput}>
      <KBRow>
        {row1.map((e, i) => (
          <Key
            key={i}
            onClick={() => {
              triggerKey(e);
            }}
          >
            {e}
          </Key>
        ))}
      </KBRow>
      <KBRow>
        {row2.map((e, i) => (
          <Key
            key={i}
            onClick={() => {
              triggerKey(e);
            }}
          >
            {e}
          </Key>
        ))}
      </KBRow>
      <KBRow>
        <Key
          onClick={() => {
            triggerKey("ENTER");
          }}
          style={{ padding: "0 1rem" }}
        >
          ENTER
        </Key>
        {row3.map((e, i) => (
          <Key
            key={i}
            onClick={() => {
              triggerKey(e);
            }}
          >
            {e}
          </Key>
        ))}
        <Key
          onClick={() => {
            triggerKey("DEL");
          }}
          style={{ padding: "0 1rem" }}
        >
          DEL
        </Key>
      </KBRow>
    </KBContainer>
  );
};

export default Keyboard;

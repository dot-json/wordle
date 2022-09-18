import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const LetterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
  @media screen and (max-width: 760px) {
  }
`;
export const LetterWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 2px solid #5d6165;
  color: #202122;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  user-select: none;
  transition: all 71ms ease;
`;

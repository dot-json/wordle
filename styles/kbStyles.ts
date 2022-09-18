import styled from "styled-components";

export const KBContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  @media screen and (max-width: 760px) {
    margin: 1rem 0;
  }
`;
export const KBRow = styled.div`
  display: flex;
  gap: 0.8rem;
  @media screen and (max-width: 760px) {
    gap: 0.3rem;
  }
`;
export const Key = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.8rem;
  height: 3.5rem;
  background-color: #3c3e40;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: whitesmoke;
  user-select: none;
  cursor: pointer;
  @media screen and (max-width: 760px) {
    font-size: 1rem;
    min-width: 2.2rem;
    height: 2.6rem;
  }
`;

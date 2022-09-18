import styled from "styled-components";

export const Bar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
  padding: 0 2rem;
  background-color: #edeeed;
  border-bottom: 1px solid #babec2;
`;
export const Title = styled.span`
  font-family: "Reem Kufi Fun", sans-serif;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 1em;
  color: #000;
  user-select: none;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export const ResetBTN = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  color: whitesmoke;
  background-color: #ff004d;
  border: none;
  cursor: pointer;
`;
export const ShowBTN = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  color: whitesmoke;
  background-color: #202122;
  border: none;
  cursor: pointer;
`;

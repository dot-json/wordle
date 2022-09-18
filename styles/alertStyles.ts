import styled from "styled-components";
import { motion } from "framer-motion";

export const AlerWrapper = styled(motion.div)``;
export const Window = styled.div`
  position: absolute;
  z-index: 71;
  top: 50%;
  left: 50%;
  width: 24rem;
  height: 15rem;
  transform: translate(-50%, -50%);
  background-color: #f2f5f3;
  border: 1px solid #babec2;
`;
export const BackDrop = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Top = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;
export const Title = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  color: #202122;
`;
export const Close = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 0.8rem;
  padding: 0.6rem 0.8rem;
  width: fit-content;
  height: fit-content;
  border: none;
  color: whitesmoke;
  background-color: #202122;
  border: none;
  cursor: pointer;
`;
export const Solution = styled.span`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 4rem;
  color: #202122;
`;

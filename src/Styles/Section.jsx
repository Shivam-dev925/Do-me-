import styled from "styled-components";

export const Section = styled.div`
  min-height: ${({minHeight})=>minHeight&&minHeight};
  height: fit-content;
  width: 100%;
  padding: ${({ pd }) => pd && pd};
  color: ${({ color }) => color && color};
  background: ${({ bg }) => bg && bg};
`;

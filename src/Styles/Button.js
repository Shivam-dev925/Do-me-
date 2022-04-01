import styled from "styled-components";

export const Button = styled.button`
  padding: ${({ pd }) => pd && pd};
  color: ${({ color }) => color && color};
  background: ${({ bg }) => bg && bg};
  border: none;
  border-radius: 5px;
  transition: 0.2s linear;
  margin: ${({ margin }) => margin && margin};
  font-weight: 600;
  width: ${({ width }) => width && width};

  &:hover {
    background: ${({ bgHover }) => bgHover && bgHover};
    transition: 0.2s linear;
  }
`;

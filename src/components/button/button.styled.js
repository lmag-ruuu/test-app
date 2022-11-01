import styled from "styled-components";

export const SButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  width: 100%;
  max-width: 380px;
  height: 40px;
  background-color: ${(props) => props.theme.colors["primary-light"]};
  color: ${(props) => props.theme.colors.background};
  transition: 0.6s background-color ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.light};
  }
`;

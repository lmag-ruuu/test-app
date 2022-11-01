import styled from "styled-components";

const SButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  max-width: 380px;
  height: 40px;
  background-color: ${(props) => props.theme.colors["primary-light"]};
  color: $color-background;
  transition: 0.3s background-color ease;
  &:hover {
    background-color: ${(props) => props.theme.colors["primary-light-hover"]};
  }
`;

export default SButton;

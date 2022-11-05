import styled from "styled-components";

const SAnchor = styled.a`
  color: ${(props) => props.theme.colors.background};
  transition: 0.3s color ease;
  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default SAnchor;

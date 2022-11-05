import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  background-color: ${(props) => props.theme.colors.light};
  padding: ${(props) => props.theme.variables.padding};
`;

export default MainContainer;

import HeaderMenu from "./HeaderMenu";
import styled from "styled-components";
import type {MenuItems} from "../../App.tsx";



export const Header
    = (props: { menuItems: MenuItems }) => {
  return (
    <StyledHeader>
      <HeaderMenu menuItems={props.menuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;

  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  backdrop-filter: blur(4px);
  background-color: rgba(31, 31, 32, 0.6);
  top: 0;
`;

import styled from "styled-components";
import theme from "../../styles/Theme.Styled";


export const Link = styled.a`
  font-size: 14px;
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  
  &:hover {
    &:before {
      height: 10px;
      transform: scale(1);
    }
  }


  &:before {
    transition: all .3s ease-in-out;
    transform: scale(0);
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -4px;
    left: 0px;
    right: 0px;
    background-color: ${theme.colors.accent};
    z-index: -2;
    //height: 0;
  }
`

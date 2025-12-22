import styled, {css} from "styled-components";
import theme from "../../styles/Theme.Styled";

type ModalButton = {
    $isModalButton?: boolean;
}

export const Button = styled.button<ModalButton>`
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;

  width: 170px;
  height: 32px;
  position: relative;
  text-align: center;
  padding-bottom: 10px;
  z-index: 1;
  

  &:hover {
    &:before {
      height: 100%;
      width: 100%;
      ${(props) =>
      props.$isModalButton &&
      css<ModalButton>`
        width: 140px;
    `}
      z-index: -1;
      height: 43px;
    }
  }

  &:before {
    transition: all .3s ease-in-out;
    content: '';
    display: inline-block;
    height: 10px;
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.accent};
  }
`
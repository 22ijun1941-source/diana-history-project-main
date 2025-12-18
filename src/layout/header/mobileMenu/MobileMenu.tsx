import styled, {css} from "styled-components";
import theme from "../../../styles/Theme.Styled";
import React, {useState} from "react";

export const MobileMenu: React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {


    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <>
            <StyledNavigation>
                <MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                    setMenuIsOpen(false)
                }}>
                    <StyledListNavigation>
                        {
                            props.menuItems.map((item, index) => {
                                return (
                                    <ListItem key={index}>
                                        <NavLink
                                            // TODO ne rabotaet s mobilemenu react-scroll
                                            // to={item}
                                            //      smooth={true}
                                            href={`#${item}`}
                                            aria-label={item}>
                                            {item}
                                            <Mask>
                                                {item}
                                            </Mask>
                                            <Mask>
                                            <span>
                                                {item}
                                            </span>
                                            </Mask>
                                        </NavLink>
                                    </ListItem>
                                )
                            })
                        }
                    </StyledListNavigation>
                </MobileMenuPopup>
            </StyledNavigation>

            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                    <span>
                    </span>
            </BurgerButton>
        </>
    )
}


const StyledNavigation = styled.nav
    `
      //display: none;
      padding: 0;
      width: 0;
      height: 0;

      @media ${theme.media.tablet} {
        display: block;
      }
    `

const MobileMenuPopup = styled.div<{ isOpen: boolean }>
    `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      background-color: rgba(31, 31, 32, 0.9);

      display: none;

      // propisivaem chto budet pri otkritii popupa
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    `

const StyledListNavigation = styled.ul
    `

      display: flex;
      gap: 20px;
      align-items: center;
      flex-direction: column;

    `

const Mask = styled.span
    `
      color: ${theme.colors.accent};
      position: absolute;
      top: 0;
      left: 0;
      height: 50%;
      overflow-y: hidden;

      & + & {
        top: 50%;

        span {
          display: inline-block;
          transform: translateY(-50%);
        }
      }
    `

const ListItem = styled.li
    `
      position: relative;
      color: ${theme.colors.accent};
      font-family: Josefin Sans;
      font-size: 30px;
      font-weight: 400;
      line-height: 55px;
    `

// const NavLink = styled(Link)
const NavLink = styled.a
    `
      color: transparent;


      &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 3;
        transform: scale(0);
      }


      &:hover {
        &::before {
          transition: all .3s ease-in-out;
          transform: scale(1);
        }

        ${Mask} {

          transition: all .3s ease-in-out;
          transform: skewX(12deg) translateX(5px);
          color: ${theme.colors.white};

          & + ${Mask} {
            transform: skewX(12deg) translateX(-5px);
          }
        }
      }
    `

const BurgerButton = styled.button<{ isOpen: boolean }>
    `
      display: none;
      width: 50px;
      height: 50px;
      z-index: 3;
      justify-content: center;
      align-items: center;
      padding-top: 10px;

      @media ${theme.media.tablet} {
        display: flex;
      }
      // srednjaja cherta burger menu
      span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};


        transition: .5s ease-in-out;
        ${props => props.isOpen && css<{ isOpen: boolean }>`
          background-color: rgba(255, 255, 255, 0);
          //pochemu ne opacity => togda k before i after tozhe primenitsja opacity 
        `}
        &::before {
          content: '';
          display: block;
          width: 36px;
          height: 2px;
          background-color: ${theme.colors.accent};
          position: absolute;
          transform: translateY(-10px);
          transition: 1s ease-in-out;
          
          ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(-45deg) translateY(0px);
          `}
        }

        &::after {
          content: '';
          display: block;
          width: 24px;
          height: 2px;
          background-color: ${theme.colors.accent};
          position: absolute;
          transform: translateY(10px);
          transition: 1s ease-in-out;
          
          ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0px);
            width: 36px;
          `}
        }
      }
    `
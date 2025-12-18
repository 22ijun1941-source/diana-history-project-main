import styled from "styled-components";
import theme from "../../../styles/Theme.Styled";
import React from "react";
import {Link} from "react-scroll";

export const DesktopMenu: React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {
    return (
        <StyledNavigation>
            <StyledListNavigation>
                {
                    props.menuItems.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <NavLink to={item}
                                         activeClass="active"
                                         smooth={true}
                                         spy={true}
                                         // href={`#${item}`}
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
        </StyledNavigation>
    )
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: end;
  padding: 0;
  width: fit-content;

  @media ${theme.media.tablet} {
    //display: none;
  }
`

const StyledListNavigation = styled.ul`
  display: flex;
  gap: 20px;
  align-items: end;
`

const Mask = styled.span`
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

  @media ${theme.media.desktop971px} {
    font-size: 25px;
  }
`

const NavLink = styled(Link)`
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


  &:hover, &.active {
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
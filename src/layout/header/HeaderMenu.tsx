import React, {useEffect, useState} from "react";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import Logo from "../../components/logo/Logo";
import styled from "styled-components";
import {Container} from "../../components/container/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";


const HeaderMenu: React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {

    return (
        <StyledHeaderContainer>
            <Logo/>
            <MenuChanger menuItems={props.menuItems}/>

            {/*<DesktopMenu menuItems={props.menuItems}/>*/}
            {/*<MobileMenu menuItems={props.menuItems}/>*/}
        </StyledHeaderContainer>
    )
};

const MenuChanger = (props: { menuItems: string[] }) => {
    const breakPoint = 768;
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    })

    return width < breakPoint ?
        <MobileMenu menuItems={props.menuItems}/> :
        <DesktopMenu menuItems={props.menuItems}/>;
}

export default HeaderMenu;

const StyledHeaderContainer = styled(Container)`
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
`
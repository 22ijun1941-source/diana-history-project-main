import React from 'react';
import Icon from "../Icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

const Logo: React.FC = () => {
    const options = {
        // your options here, for example:
        duration: 500,
        smooth: true,
    };
    return (
        <SLogo onClick={() => scroll.scrollToTop(options)}>
            <Icon iconId={'code'} width={'50'} height={'50'}/>
        </SLogo>
    );
};

export default Logo;

const SLogo = styled.a`
  width: 50px;
  height: inherit;
  display: flex;
  align-items: center;
`
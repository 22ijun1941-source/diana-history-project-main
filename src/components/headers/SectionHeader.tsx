import React from 'react';
import styled from "styled-components";
import theme from "../../styles/Theme.Styled";
import FlexWrapper from "../flexWrapper/FlexWrapper";

type SectionHeaderPropsType = {
    text: string,
    mb: string,
    fontSize?: string,
}

const SectionHeader: React.FC<SectionHeaderPropsType> = (props: SectionHeaderPropsType) => {
    return (
        <FWSectionHeader justify={'center'} direction={"column"} align={'center'} mb={props.mb}>
            <SH2 fontSize={props.fontSize}>
                {props.text}
            </SH2>
            <SUnderline/>
        </FWSectionHeader>
    )
};

const SUnderline = styled.div`
  width: 55px;
  height: 1px;
  background-color: ${theme.colors.accent};
`

type Sh2PropsType = {
    fontSize?: string,
}


const SH2 = styled.h2<Sh2PropsType>`
  font-family: ${theme.fonts.JosefinSans};
  font-size: ${props => props.fontSize || "36px"};
  letter-spacing: 3px;
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: 30px;
  text-align: center;
`

const FWSectionHeader = styled(FlexWrapper)`
  margin-bottom: ${props => props.mb || "0px"}
}
`

export default SectionHeader;
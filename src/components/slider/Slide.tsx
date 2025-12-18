import FlexWrapper from "../flexWrapper/FlexWrapper";
import {StyledParagraph} from "../paragraph";
import styled from "styled-components";
import theme from "../../styles/Theme.Styled";


type sliderPropsType = {
    text: string,
    author: string,
}

export const Slide = (props: sliderPropsType) => {
    return (
        <FlexWrapper justify={'center'}
                     direction={'column'}
                     mb={'42px'}
        >
            <StyledParagraph
                maxHeight={'63px'}
                clamp={'3'}
                mb={'22px'}
            >
                {props.text}
            </StyledParagraph>
            <StyledSpan>
                {props.author}
            </StyledSpan>
        </FlexWrapper>
    )
}

const StyledSpan = styled.span`
  text-align: center;
  font-family: ${theme.fonts.JosefinSans};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`

import FlexWrapper from "../flexWrapper/FlexWrapper";
import {StyledParagraph} from "../paragraph";
import styled from "styled-components";
import theme from "../../styles/Theme.Styled";


type sliderPropsType = {
    text?: string,
    author?: string,
    image?: string,
}

export const Slide = (props: sliderPropsType) => {
    return (
        <FlexWrapper justify={'center'}
                     direction={'column'}
                     mb={'42px'}
        >
            <ImageWrapper>
                <Image src={props.image} alt={props.author}/>
            </ImageWrapper>
            <StyledParagraph
                $maxHeight={'73px'}
                clamp={'5'}
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


const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;


const StyledSpan = styled.span`
  text-align: center;
  font-family: ${theme.fonts.JosefinSans};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`

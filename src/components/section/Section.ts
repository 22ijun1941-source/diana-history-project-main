import styled from "styled-components";
import theme from "../../styles/Theme.Styled";


type SectionPropsType = {
    paddingTop?: string,
    paddingBottom?: string,
    backGrColor?: string,
}

export const StyledSection = styled.section<SectionPropsType>`
  padding-top: ${props => props.paddingTop || "100px"};
  padding-bottom: ${props => props.paddingBottom || "100px"};
  background-color: ${props => props.backGrColor || theme.backgroundColor.primary};
`
import styled from "styled-components";
import theme from "../styles/Theme.Styled";


type ParagraphPropsType = {
    fontSize?: string,
    fontWeight?: string,
    textAlign?: string,
    maxWidth?: string,
    maxHeight?: string,
    clamp?: string,
    mb?: string,
    color?: string,
    minWidth?: string,
}

export const StyledParagraph = styled.p<ParagraphPropsType>`
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || '400'};
  text-align: ${props => props.textAlign || 'center'};
  max-width: ${props => props.maxWidth || 'unset'};
  min-width: ${props => props.minWidth || 'unset'};
  max-height: ${props => props.maxHeight || 'unset'};
  width: 100%;
  height: 100%;

  color: ${props => props.color || theme.colors.white};

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => props.clamp || 'unset'};

  margin-bottom: ${props => props.mb || 'unset'};
}
`
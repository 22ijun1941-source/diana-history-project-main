import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled, {css} from "styled-components";
import theme from "../../styles/Theme.Styled";


type IconTypeProps = {
    iconId: string,
    width: string,
    height: string,
    rotate?: string,
    fill?: string,
    color?: string,
    changeViewBox?: boolean,
    boxWidth?: string,
    boxHeight?: string,
}

const Icon: React.FC<IconTypeProps> = (props: IconTypeProps) => {
    return (
        <StyledIcon width={props.width}
                    height={props.height}
                    color={props.color}
                    transform={`rotate(${props.rotate || '0'} 0 0)`}
                    //4 0 20 50
                    viewBox={`0 0 ${props.changeViewBox ? props.boxWidth : props.width} ${props.changeViewBox ? props.boxHeight : props.height}`}
                    xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </StyledIcon>
    );
};

export default Icon;

type StyledIconPropsType = {
    color?: string,
}

const StyledIcon = styled.svg<StyledIconPropsType>`
  color: ${theme.colors.accent} ${props => props.color && css<StyledIconPropsType>`
    color: ${props.color}
  `}
`
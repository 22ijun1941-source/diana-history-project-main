import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import styled from "styled-components";
import theme from "../../../styles/Theme.Styled";
import Icon from "../../../components/Icon/Icon";

type SkillPropsType = {
  skillText: string;
  skillTitle: string;
  skillIconId: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkillBlock justify={"start"} direction={"column"} align={"center"}>
      <RombusWithIcon skillIconId={props.skillIconId} />
      <SkillTitle>{props.skillTitle}</SkillTitle>
      <SkillText>{props.skillText}</SkillText>
    </StyledSkillBlock>
  );
};

export const RombusWithIcon = (props: { skillIconId: string }) => {
  return (
    <SRhombus justify={"center"} align={"center"}>
      <Icon
        iconId={props.skillIconId}
        width={"50"}
        height={"50"}
        rotate={"-45"}
      />
    </SRhombus>
  );
};

const StyledSkillBlock = styled(FlexWrapper)`
  max-width: 380px;
  height: 338px;
  padding: 70px 20px 0px 20px;
`;

const SRhombus = styled(FlexWrapper)`
  transform: rotate(45deg);
  background-color: ${theme.colors.greyTwo};
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
`;

const SkillTitle = styled.h3`
  margin-bottom: 15px;
  font-family: ${theme.fonts.JosefinSans};
  font-size: 16px;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: ${theme.fontWeight.regular};
`;

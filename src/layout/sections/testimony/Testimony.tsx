import { StyledSection } from "../../../components/section/Section";
import SectionHeader from "../../../components/headers/SectionHeader";
import { RombusWithIcon } from "../skills/Skill";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import theme from "../../../styles/Theme.Styled";
import { Container } from "../../../components/container/Container";
import { Slider } from "../../../components/slider/Slider";
import styled from "styled-components";

type TestimonyPropsType = {
  headerName: string;
};

export const Testimony = (props: TestimonyPropsType) => {
  return (
    <TestimonyStyledSection
      id={props.headerName}
      backGrColor={theme.backgroundColor.secondary}
    >
      <Container>
        <SectionHeader text={props.headerName} mb={"60px"} />
        <FlexWrapper justify={"center"} direction={"column"} align={"center"}>
          <RombusWithIcon skillIconId={"code"} />
          <Slider />
        </FlexWrapper>
      </Container>
    </TestimonyStyledSection>
  );
};

const TestimonyStyledSection = styled(StyledSection)`
  position: relative;
`;

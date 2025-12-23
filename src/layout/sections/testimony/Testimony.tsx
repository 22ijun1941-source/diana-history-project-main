import {StyledSection} from "../../../components/section/Section";
import SectionHeader from "../../../components/headers/SectionHeader";
import {RombusWithIcon} from "../skills/Skill";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import theme from "../../../styles/Theme.Styled";
import {Container} from "../../../components/container/Container";
import {Slider} from "../../../components/slider/Slider";
import styled from "styled-components";
import type {Item} from "../../main/Main.tsx";


export const Testimony = ({itemMenu: testimony}: Item) => {
    return (
        <TestimonyStyledSection
            id={testimony.link}
            $backGrColor={theme.backgroundColor.secondary}
        >
            <Container>
                <SectionHeader text={testimony.name} mb={"60px"}/>
                <FlexWrapper justify={"center"} direction={"column"} align={"center"}>
                    <RombusWithIcon skillIconId={"code"}/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </TestimonyStyledSection>
    );
};

export const TestimonyStyledSection = styled(StyledSection)`
  position: relative;
`;
type TestProps = { $isOpen: boolean };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SecondStyledSection = styled(TestimonyStyledSection)<TestProps>`
  padding-top: ${(prop) => prop.$isOpen ? '134' : '345'};
`;
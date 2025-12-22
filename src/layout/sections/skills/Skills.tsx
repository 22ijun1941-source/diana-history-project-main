import { Container } from "../../../components/container/Container";
import theme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from "../../../components/headers/SectionHeader";
import { Skill } from "../skills/Skill";
import { StyledSection } from "../../../components/section/Section";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import type {Item} from "../../main/Main.tsx";

export const Skills = ({itemMenu: skills}: Item) => {
  const skillStuff = [
    {
      skillIconId: "code",
      skillTitle: "html5",
      skillText:
        "Использую семантическую разметку для создания структурированных и доступных интерфейсов. Обеспечиваю корректную работу страниц во всех современных браузерах",
    },
    {
      skillIconId: "css3",
      skillTitle: "css3",
      skillText:
        "Верстаю адаптивные и кроссбраузерные интерфейсы с использованием современных возможностей CSS. Уделяю внимание анимациям, сеткам и поддерживаемости стилей",
    },
    {
      skillIconId: "react",
      skillTitle: "react",
      skillText:
        "Разрабатываю компонентные интерфейсы с управлением состоянием и логикой приложения. Использую хуки и принципы переиспользуемого кода",
    },
    {
      skillIconId: "typescript",
      skillTitle: "typescript",
      skillText:
        "Применяю строгую типизацию для повышения надёжности и масштабируемости кода. Снижаю количество ошибок на этапе разработки и поддержки",
    },
    {
      skillIconId: "styledcomponents",
      skillTitle: "styledcomponents",
      skillText:
        "Создаю изолированные и переиспользуемые стили внутри компонентов. Поддерживаю читаемость и гибкость стилевой архитектуры",
    },
    {
      skillIconId: "figma",
      skillTitle: "figma",
      skillText:
        "Работаю с дизайн-макетами, компонентами и автолэйаутами. Готовлю дизайн к передаче в разработку без потери деталей",
    },
  ];
  return (
    <SkillsStyledSection
      id={skills.link}
      backGrColor={theme.backgroundColor.secondary}
    >
      <Container>
        <SectionTitle text={`${skills.name}`} mb={"80px"} />
        <FlexWrapper wrap={"wrap"} justify={"center"}>
          <Fade cascade={true} damping={0.25}>
            {skillStuff.map((item, index) => {
              return (
                <Skill
                  key={index}
                  skillIconId={item.skillIconId}
                  skillTitle={item.skillTitle}
                  skillText={item.skillText}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </SkillsStyledSection>
  );
};

const SkillsStyledSection = styled(StyledSection)`
  position: relative;
`;

import {useState} from "react";
import styled, {css} from "styled-components";
import {Container} from "../../../components/container/Container";
import theme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from "../../../components/headers/SectionHeader";
import {StyledSection} from "../../../components/section/Section";
import {Work} from "./Work";
import {TabMenu} from "./TabMenu";
import {AnimatePresence, motion} from "framer-motion";
import type {Item} from "../../main/Main.tsx";
// import {Fade} from "react-awesome-reveal";
export type TabStatus = "all" | "old" | "aftermath" | "petr";

const tabsItems: Array<{
    status: TabStatus;
    title: string;
}> = [
    {
        title: "Все",
        status: "all",
    },
    {
        title: "Древняя русь",
        status: "old",
    },
    {
        title: "Правление Петра",
        status: "petr",
    },
    {
        title: "После войны",
        status: "aftermath",
    },
];

const images = import.meta.glob('../../../assets/images/works/*.{png,jpg,jpeg,webp}', {eager: true});
console.log(' images: ', images);
const imageArray = Object.values(images).map((img: any) => img.default || img);

console.log(' imageArray: ', imageArray);
let count = 0;

const worksData = [
    {
        id: 1,
        title: "Строительство парусного корабля на верфь",
        source: imageArray[count],
        text: "Вервь (от слав. «вервь» — веревка; участок земли, отмеренный веревкой) — община в Древней Руси.",
        type: "petr",
    },
    {
        id: 2,
        title: "Вече",
        source: imageArray[++count],
        text: "Вече(собрание) — народное собрание у восточных славян, а также в средневековой Руси",
        type: "old",
    },
    {
        id: 3,
        title: "Эпоха Петра I (Петра Великого)",
        source: imageArray[++count],
        text: "Самодержавие — неограниченная монархическая форма правления, существовала в России до марта 1917 года",
        type: "petr",
    },
    {
        id: 4,
        title: "Оккупация Чехии Германией",
        source: imageArray[++count],
        text: "Аннексия — насильственное присоединение одним государством всей или части территории другого государства"
        +"Аннексия — насильственное присоединение одним государством всей или части территории другого государства",
        type: "aftermath",
    },
    {
        id: 5,
        title: "Союзники второй мировой войны",
        source: imageArray[++count],
        text: "Антигитлеровская коалиция — союз государств и народов, сложившийся в ходе Второй мировой войны против агрессивного блока Германии, Италии, Японии и их сателлитов",
        type: "aftermath",
    },
    {
        id: 6,
        title: "Англосаксонское рабство",
        source: imageArray[++count],
        text: "Колониализм (колонии)— система господства развитых государств над остальным миром, существовала в XV(19)–XX(20)  векахКолониализм (колонии)— система господства развитых государств над остальным миром, существовала в XV(19)–XX(20)  векахКолониализм (колонии)— система господства развитых государств над остальным миром, существовала в XV(19)–XX(20)  веках",
        type: "aftermath",
    },
    {
        id: 7,
        title: "Оброк с побеждённого государства",
        source: imageArray[++count],
        text: "Контрибуция — платежи, налагаемые на побеждённое государство в пользу государства-победителя",
        type: "old",
    },
];

console.log(' worksData: ', worksData);

export const Works = ({itemMenu: works}: Item) => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks;

    switch (currentFilterStatus) {
        case "old":
            filteredWorks = worksData.filter((x) => x.type === "old");
            break;
        case "aftermath":
            filteredWorks = worksData.filter((x) => x.type === "aftermath");
            break;
        case "petr":
            filteredWorks = worksData.filter((x) => x.type === "petr");
            break;
        default:
            filteredWorks = worksData;
            break;
    }

    function changeFilterStatus(value: "all" | "old" | "aftermath" | "petr") {
        setCurrentFilterStatus(value);
    }

    return (
        <StyledSection id={works.link}>
            <Container>
                <SectionTitle text={`${works.name}`} mb={"69px"}/>

                <FlexWrapper
                    wrap={"wrap"}
                    justify={"center"}
                    align={"center"}
                    $minHeight={"30px"}
                    direction={"column"}
                >
                    <StyledWorkNav>
                        <TabMenu
                            tabsItems={tabsItems}
                            changeFilterStatus={changeFilterStatus}
                        />
                    </StyledWorkNav>

                    <StyledWorkFlexWrapper
                        $isCentered={filteredWorks.length === 1 ? true : false}
                        wrap={"wrap"}
                        gap={"60px"}
                        justify={"space-between"}
                    >
                        <AnimatePresence>
                            {/*<Fade cascade={true} damping={0.25}>*/}
                            {filteredWorks.map((v) => {
                                return (
                                    <motion.div
                                        initial={{scale: 0, opacity: 0}}
                                        animate={{scale: 1, opacity: 1}}
                                        // exit={{scale: 0, opacity: 0}}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        // animate={["visible", "active"]}

                                        key={v.id}
                                    >
                                        <Work title={v.title} src={v.source} text={v.text}/>
                                    </motion.div>
                                );
                            })}
                            {/*</Fade>*/}
                        </AnimatePresence>
                    </StyledWorkFlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

type isCenteredProps = { $isCentered: boolean };

const StyledWorkFlexWrapper = styled(FlexWrapper)<isCenteredProps>`
  width: 100%;
  ${(props) =>
    props.$isCentered &&
    css<isCenteredProps>`
      justify-content: center;
    `} @media ${theme.media.desktop1169px} {
  justify-content: center;
}
`;

const StyledWorkNav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  color: ${theme.colors.accent};

  @media ${theme.media.tablet} {
    margin-bottom: 25px;
  }
`;

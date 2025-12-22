import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../../components/container/Container";
import theme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from "../../../components/headers/SectionHeader";
import { StyledSection } from "../../../components/section/Section";
import { Work } from "./Work";
import timer from "./../../../assets/images/0c92c8a2d9105549989393fee63d52d5.png";
import socialImg from "./../../../assets/images/0f6c9eae25a0122b383d52e1e9a7182e.png";
import { TabMenu } from "./TabMenu";
import { AnimatePresence, motion } from "framer-motion";
import type {Item} from "../../main/Main.tsx";

const tabsItems: Array<{
  status: "all" | "landing" | "react" | "spa";
  title: string;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "spa",
    status: "spa",
  },
];

const worksData = [
  {
    id: 1,
    title: "Social Network",
    source: socialImg,
    text: "Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus, ea eaque eius eum facere fugit laboriosam magni molestiae nemo nostrum quaerat quam quos recusandae reprehenderit sit tempore! Ullam.",
    type: "spa",
  },
  {
    id: 2,
    title: "Timer",
    source: timer,
    text: "Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus, ea eaque eius eum facere fugit laboriosam magni molestiae nemo nostrum quaerat quam quos recusandae reprehenderit sit tempore! Ullam.",
    type: "react",
  },
  {
    id: 3,
    title: "Social Network",
    source: socialImg,
    text: "Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus, ea eaque eius eum facere fugit laboriosam magni molestiae nemo nostrum quaerat quam quos recusandae reprehenderit sit tempore! Ullam.",
    type: "spa",
  },
  {
    id: 4,
    title: "Timer",
    source: timer,
    text: "Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus, ea eaque eius eum facere fugit laboriosam magni molestiae nemo nostrum quaerat quam quos recusandae reprehenderit sit tempore! Ullam.",
    type: "react",
  },
  {
    id: 5,
    title: "Social Network",
    source: socialImg,
    text: "Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus, ea eaque eius eum facere fugit laboriosam magni molestiae nemo nostrum quaerat quam quos recusandae reprehenderit sit tempore! Ullam.",
    type: "spa",
  },
  {
    id: 6,
    title: "Timer",
    source: timer,
    text: "Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus, ea eaque eius eum facere fugit laboriosam magni molestiae nemo nostrum quaerat quam quos recusandae reprehenderit sit tempore! Ullam.",
    type: "react",
  },
];

export const Works = ({itemMenu: works}: Item) => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks;

  switch (currentFilterStatus) {
    case "landing":
      filteredWorks = worksData.filter((x) => x.type === "landing");
      break;
    case "react":
      filteredWorks = worksData.filter((x) => x.type === "react");
      break;
    case "spa":
      filteredWorks = worksData.filter((x) => x.type === "spa");
      break;
    default:
      filteredWorks = worksData;
      break;
  }

  function changeFilterStatus(value: "all" | "landing" | "react" | "spa") {
    setCurrentFilterStatus(value);
  }

  return (
    <StyledSection id={works.link}>
      <Container>
        <SectionTitle text={`My ${works.name}`} mb={"69px"} />

        <FlexWrapper
          wrap={"wrap"}
          justify={"center"}
          align={"center"}
          minHeight={"30px"}
          direction={"column"}
        >
          <StyledWorkNav>
            <TabMenu
              tabsItems={tabsItems}
              changeFilterStatus={changeFilterStatus}
            />
          </StyledWorkNav>

          <StyledWorkFlexWrapper
            wrap={"wrap"}
            gap={"60px"}
            justify={"space-between"}
          >
            <AnimatePresence>
              {filteredWorks.map((v) => {
                return (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    // exit={{scale: 0, opacity: 0}}
                    transition={{
                      duration: 0.3,
                    }}
                    // animate={["visible", "active"]}

                    key={v.id}
                  >
                    <Work title={v.title} src={v.source} text={v.text} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </StyledWorkFlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledWorkFlexWrapper = styled(FlexWrapper)`
  width: 100%;
  @media ${theme.media.desktop1169px} {
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

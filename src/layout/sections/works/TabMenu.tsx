import styled from "styled-components";
import { Link } from "../../../components/link/Link";
import theme from "../../../styles/Theme.Styled";

type tabMenuPropsType = {
  tabsItems: Array<{
    status: "all" | "landing" | "react" | "spa";
    title: string;
  }>;
  changeFilterStatus: (value: "all" | "landing" | "react" | "spa") => void;
};

export const TabMenu = (props: tabMenuPropsType) => {
  return (
    <StyledTabMenu>
      {props.tabsItems.map((item, index) => {
        return (
          <ListItem key={index}>
            <Link
              as={"button"}
              onClick={() => {
                props.changeFilterStatus(item.status);
              }}
              aria-label={item.title}
            >
              {item.title}
            </Link>
          </ListItem>
        );
      })}
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.ul`
  min-height: inherit;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  @media ${theme.media.tablet} {
    gap: 10px;
  }
`;

const ListItem = styled.li`
  position: relative;
  padding: 0 10px;
  z-index: 1;
`;

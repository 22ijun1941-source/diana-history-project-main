import styled, {css} from "styled-components";
import theme from "../../../styles/Theme.Styled";
import {Button} from "../../../components/button/Button";
import {Modal, ScrollArea} from "../../../components/modal/Modal.tsx";
import {useState} from "react";

type WorkPropsType = {
    title: string;
    text: string;
    src: string;
};

export const Work = (props: WorkPropsType) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledWork>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ScrollArea className={'123'}>
                    <ImageWrapperModal>
                        <Image src={props.src} alt={props.title}/>
                        <StyledTextBlock>
                            <Title>{props.title}</Title>
                            <Text $isOpen={true}>{props.text}</Text>
                        </StyledTextBlock>
                    </ImageWrapperModal>
                </ScrollArea>
                <Button $isModalButton={true} onClick={() => setIsOpen(false)}>Закрыть</Button>
            </Modal>
            <ImageWrapper>
                <Image src={props.src} alt={props.title}/>
                <Button onClick={() => setIsOpen(true)}>Посмотреть</Button>
            </ImageWrapper>

            <StyledAboutSubblock>
                <Title>{props.title}</Title>
                <Text $isOpen={false}>{props.text}</Text>
            </StyledAboutSubblock>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  flex-grow: 1;
  width: 100%;
  max-height: 500px;
  height: 100%;
  background-color: ${theme.backgroundColor.secondary};
  position: relative;

  @media ${theme.media.mobile689px} {
    width: 100%;
  }

  @media ${theme.media.mobile349px} {
    width: unset;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

const ImageWrapperModal = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

// div dlja dobablenija blur effecta
const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  margin-bottom: 25px;


  // before rastyagivaetsya na ves div s kartinkoy
  // i dobavlyaetsya blur s transition  i opacity 0 (0 - nachanl'noe sostoyanie)

  &::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: all 1s ease-in-out;
  }

  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 0;

    opacity: 0;
    height: 43px;
    transition: opacity 1s ease-in-out;

    &:before {
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  &:not(:hover) {
    &::before {
      opacity: 0;
      transition: 1.5s ease-in-out;
    }

    ${Button} {
      opacity: 0;
      transition: 1.5s ease-in-out;
    }
  }
`;

const Title = styled.h3`
  margin-bottom: 14px;
`;


type StyledTextBlockProps = {
    $isOpen: boolean
}

const Text = styled.p<StyledTextBlockProps>`
  max-width: 540px;
  overflow: hidden;
  display: -webkit-box;
  ${(props) =>
    !props.$isOpen &&
    css<StyledTextBlockProps>`
      text-align: left;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      margin-bottom: 19px;
    `}
  ${(props) =>
    props.$isOpen &&
    css<StyledTextBlockProps>`
      -webkit-box-orient: unset;
      margin-bottom: 0px;
    `}
`;


const StyledTextBlock = styled.div`

  padding: 0 20px 0px 20px;
`;

const StyledAboutSubblock = styled.div`
  padding: 0 20px 30px 20px;
`;

// const LinkList = styled.ul`
//   display: flex;
//   gap: 20px;
// `;
//
// const ListItem = styled.li`
//   position: relative;
//   padding: 0 2px;
//   z-index: 1;
// `;

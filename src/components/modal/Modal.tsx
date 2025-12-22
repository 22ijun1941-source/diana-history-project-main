import {type ReactNode} from "react";
import {createPortal} from "react-dom";
import {motion, AnimatePresence} from "framer-motion";
import styled from "styled-components";
import theme from "../../styles/Theme.Styled.ts";
import useLockBodyScroll from "./useLockBodyScroll.ts";


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export const Modal = ({isOpen, onClose, children}: ModalProps) => {
    // useEffect(() => {
    //     document.body.style.overflow = isOpen ? "hidden" : "auto";
    // }, [isOpen]);

    useLockBodyScroll(isOpen);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <Overlay
                    as={motion.div}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={onClose}
                >
                    <Content
                        as={motion.div}
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                        transition={{duration: 0.3}}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/*<ScrollArea>*/}
                            {children}
                        {/*</ScrollArea>*/}
                    </Content>
                </Overlay>
            )}
        </AnimatePresence>,
        document.body
    );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: ${theme.backgroundColor.secondary};
  padding: 20px;
  border-radius: 12px;
  max-width: 700px;
  width: 100%;
  height: 612px;
  overflow: hidden;
`;

export const ScrollArea = styled.div`
  height: 526px;
  padding: 16px;
  padding-right: 9px; /* отступ скролла от края */
  padding-bottom: 0px; /* отступ скролла от края */
  overflow-y: auto;
  margin-bottom: 15px;

  /* Chrome / Edge / Safari */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.4) transparent;
`;

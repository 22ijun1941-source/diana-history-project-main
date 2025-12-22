import {type ReactNode, useEffect} from "react";
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
                        {children}
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
  padding: 32px;
  border-radius: 12px;
  max-width: 700px;
  width: 100%;
`;

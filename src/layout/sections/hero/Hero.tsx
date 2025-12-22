import {useEffect, useState} from "react";
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import theme from "../../../styles/Theme.Styled";
import DeveloperPhoto from "../../../assets/images/hero-photo.jpg";
import backgroundImage from "../../../assets/images/photo-background.jpg";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import type {Item} from "../../main/Main.tsx";

const Hero = ({itemMenu: hero}: Item) => {

    return (
        <SHeroSection id={hero.link}>
            <Container>
                <HeroContent/>
            </Container>
        </SHeroSection>
    );
};

const SHeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const HeroContent = () => {
    return (
        <SHeroDiv1>
            <SHeroDiv2>
                <p>Привет</p>
                <StyledWhoAmI>
                    <span>Меня&nbsp;зовут</span> <span>Диана</span>
                </StyledWhoAmI>
                <h2 className={"visually-hidden"}>Я Вэб Разработчик</h2>
                <StyledH2Text>
                    <Typewriter
                        options={{
                            strings: [
                                "Я Вэб Разработчик",
                                "Я Вам расскажу про",
                                "Исторические справки и документы",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 150,
                        }}
                    />
                </StyledH2Text>
            </SHeroDiv2>
            <TiltChanger/>
        </SHeroDiv1>
    );
};

const HeroImageWrapper = () => {
    return (
        <SHeroDiv3>
            <img src={DeveloperPhoto} alt="Diana"/>
        </SHeroDiv3>
    );
};

const TiltChanger = () => {
    const breakPoint = 768;
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    });

    return width < breakPoint ? (
        <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={0}
            tiltMaxAngleY={15}
            gyroscope={true}
        >
            <HeroImageWrapper/>
        </Tilt>
    ) : (
        <>
            <Tilt
                className="parallax-effect-img"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true}
                // trackOnWindow={true}
            >
                <HeroImageWrapper/>
            </Tilt>
        </>
    );
};

const StyledWhoAmI = styled.div`
  font-weight: ${theme.fontWeight.bold};
  font-size: 42px;
  letter-spacing: 2.5px;
  font-family: ${theme.fonts.JosefinSans};
  max-width: 584px;
  margin-bottom: 10px;
  display: flex;
  gap: 15px;

  @media ${theme.media.mobile597px} {
    flex-direction: column;
  }

  @media ${theme.media.mobile459px} {
    font-size: 36px;
    gap: 0px;
  }

  @media screen and (max-width: 461px) {
    font-size: 26.5px;

    span {
      line-height: 33px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 79%;
    height: 20px;
    top: 57px;
    right: 1px;
    background-color: ${theme.colors.accent};
    opacity: 0.8;
    z-index: -1;

    @media ${theme.media.mobile597px} {
      width: 99.5%;
      height: 20px;
      top: 114px;
      right: 1px;
      bottom: 1px;
    }
    @media screen and (max-width: 461px) {
      top: 97px;
    }

    @media screen and (max-width: 459px) {
      top: 82px;
    }
  }
`;

const SHeroDiv3 = styled.div`
  width: 350px;
  height: 430px;
  position: relative;
  transform: translateX(-34px);

  @media screen and (max-width: 971px) {
    transform: translateX(0px);
  }

  @media screen and (max-width: 597px) {
    width: 310px;
    height: 380px;
  }

  @media screen and (max-width: 368px) {
    width: 266px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 360px;
    height: 480px;
    z-index: -1;
    border: 5px solid #7572d5;
    top: -34px;
    left: 24px;
    @media screen and (max-width: 597px) {
      width: 314px;
      height: 434px;
    }

    @media screen and (max-width: 368px) {
      width: 266px;
    }

    background-image: url(${backgroundImage});
    background-size: cover;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    background-repeat: no-repeat;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SHeroDiv2 = styled.div`
  position: relative;
  margin-bottom: 45px;

  p:nth-child(1) {
    font-weight: ${theme.fontWeight.regular};
    font-size: 14px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 597px) {
    p:nth-child(2) {
      font-size: 36px;
      letter-spacing: 1.8px;
    }

    div:nth-child(3) {
      font-size: 20px;
    }
  }
`;

const StyledH2Text = styled.h2`
  font-weight: ${theme.fontWeight.regular};
  font-size: 27px;

  @media screen and (max-width: 597px) {
    font-size: 20px;
  }
`;

const SHeroDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;

  @media screen and (max-width: 998px) {
    justify-content: center;
  }

  @media screen and (max-width: 414px) {
    justify-content: start;
  }
`;

export default Hero;

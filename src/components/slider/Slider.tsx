import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import {Slide} from './Slide';
import './../../styles/slider.scss'
import Icon from "../Icon/Icon";

const lorem20 = `Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit.
             Ab dolor exercitationem,
              itaque ratione sequi sunt ullam 
              voluptatibus. Illum, iusto, perferendis?`

const items = [
    <Slide text={lorem20 + ` 1`}
           author={'ivan ivanov'}
    />,
    <Slide text={lorem20 + ` 2`}
           author={'petr petrov'}
    />,
    <Slide text={lorem20 + ` 3`}
           author={'sidor sidorov'}
    />,
];

const sliderBtns = {
    width: "33",
    height: "66",
    boxWidth: '20',
    boxHeight: '50',
    changeViewBox: true,
    color: '#af05db'
}

const renderPrevButton = ({isDisabled}: { isDisabled?: boolean | undefined }) => {
    return <span className={'prev-btn-span'} style={
        {
            opacity: isDisabled ? '0.5' : 1,
        }}>
        <Icon
            iconId={"slider-prev-button"}
            width={sliderBtns.width}
            height={sliderBtns.height}
            changeViewBox={sliderBtns.changeViewBox}
            boxWidth={sliderBtns.boxWidth}
            boxHeight={sliderBtns.boxHeight}
            color={sliderBtns.color}
        />
    </span>;
};


const renderNextButton = ({isDisabled}: { isDisabled?: boolean | undefined }) => {
    return <span className={'next-btn-span'}
                 style={{
                     opacity: isDisabled ? '0.5' : 1,
                 }}>
        <Icon
            iconId={"slider-next-button"}
            width={sliderBtns.width}
            height={sliderBtns.height}
            changeViewBox={sliderBtns.changeViewBox}
            boxWidth={'27'}
            boxHeight={'50'}
            color={sliderBtns.color}
        />
    </span>;
};



export const Slider: React.FC = () => (
    <StyledSlider direction={'column'} align={'center'}>

        <AliceCarousel
            items={items}
            mouseTracking
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
        />

    </StyledSlider>
);


const StyledSlider = styled(FlexWrapper)`
  max-width: 500px;
  padding: 0 35px;
  width: 100%;
`
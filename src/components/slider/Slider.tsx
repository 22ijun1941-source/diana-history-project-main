import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import {Slide} from './Slide';
import './../../styles/slider.scss'
import Icon from "../Icon/Icon";

// const lorem20 = `Lorem ipsum dolor sit amet,
//             consectetur adipisicing elit.
//              Ab dolor exercitationem,
//               itaque ratione sequi sunt ullam
//               voluptatibus. Illum, iusto, perferendis?`

const authors = import.meta.glob('../../assets/images/quotes/*.{png,jpg,jpeg,webp}', {eager: true});
console.log(' authors: ', authors);
const authorsArray = Object.values(authors).map((img: any) => img.default || img);
const sortedAuthors = authorsArray
    .filter(path =>
        /-authors-(\d+).png$/i.test(path)
    )
    .sort((a, b) => {
            const getNum = (path: string) => {
                const match = path.match(/-authors-(\d+).png$/i);
                return match ? parseInt(match[1]) : 999;
            }

            return getNum(a) - getNum(b);
        }
    )

console.log(' sortedAuthors: ', sortedAuthors);
let count = 0;
const items = [
    <Slide
        text={"«История — сокровищница наших деяний, свидетельница прошлого, пример и поучение для настоящего, предостережение для будущего»"}
        author={'Мигель де Сервантес Сааведра'}
        image={sortedAuthors[count]}
    />,
    <Slide text={"«Достоинство архивов в том, что они приводят нас в соприкосновение с чистой историчностью»"}
           author={"Клод Леви-Строс"}
           image={sortedAuthors[++count]}
    />,
    <Slide text={"«Тот, кто не помнит своего прошлого, осуждён на то, чтобы пережить его вновь»"}
           author={"Джордж Сантаяна"}
           image={sortedAuthors[++count]}
    />,
    <Slide text={"«Не я принадлежу прошлому, а прошлое принадлежит мне»"}
           author={"Мери Антин"}
           image={sortedAuthors[++count]}
    />,
    <Slide text={"«Народ, желающий быть великим народом, должен знать свою историю»"}
           author={"К.Н. Бестужев-Рюмин"}
           image={sortedAuthors[++count]}
    />,
    <Slide
        text={"«Изучая предков, узнаем самих себя. Без знания истории мы должны признать себя случайностями, не знающими, как и зачем пришли в мир, как и для чего живём, как и к чему должны стремиться»"}
        author={"В.О. Ключевский"}
        image={sortedAuthors[++count]}
    />,
    <Slide text={"«Современность — это не только настоящее, но и великое прошлое, нами воспринятое»"}
           author={"Д.С. Лихачёв"}
           image={sortedAuthors[++count]}
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
            // autoPlay={true}
            // autoPlayInterval={8000}
        />

    </StyledSlider>
);


const StyledSlider = styled(FlexWrapper)`
  max -width: 500px;
  padding: 0 35px;
  width: 100%;
`
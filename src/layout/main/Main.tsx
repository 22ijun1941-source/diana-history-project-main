import Hero from '../sections/hero/Hero';
import {Skills} from "../sections/skills/Skills";
import {Works} from '../sections/works/Works';
import {Testimony} from "../sections/testimony/Testimony";
import {Contact} from "../sections/contact/Contact";
import type {MenuItems} from "../../App.tsx";
// import {HireMe} from '../sections/hireme/HireMe';

export type Item = { [link: string]: { link: string, name: string } }
const Main = (props: { menuItems: MenuItems }) => {


    const items: Item = {};

    props.menuItems.forEach((item) =>
        items[item.link.toLowerCase()] = {link: item.link, name: item.name})

    console.log(' items: ', items);

    return (
        <main>
            <Hero itemMenu={items.hero}/>
            <Skills itemMenu={items.skills}/>
            <Works itemMenu={items.works}/>
            <Testimony itemMenu={items.testimony}/>
            <Contact itemMenu={items.contact}/>
            {/*<HireMe/>*/}
        </main>
    );
};

export default Main;


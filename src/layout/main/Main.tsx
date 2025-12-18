import React from 'react';
import Hero from '../sections/hero/Hero';
import {Skills} from "../sections/skills/Skills";
import {Works} from '../sections/works/Works';
import {Testimony} from "../sections/testimony/Testimony";
import {Contact} from "../sections/contact/Contact";
import {HireMe} from '../sections/hireme/HireMe';

const Main: React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {

    const itemsObj: { [index: string]: string } = {};

    props.menuItems.forEach((item) =>
        itemsObj[`${item}`] = item)


    return (
        <main>
            <Hero headerName={itemsObj.Hero}/>
            <Skills headerName={itemsObj.Skills}/>
            <Works headerName={itemsObj.Works}/>
            <Testimony headerName={itemsObj.Testimony}/>
            <Contact headerName={itemsObj.Contact}/>
            <HireMe/>
        </main>
    );
};

export default Main;


import styled from "styled-components";
import { Header } from "./layout/header/Header.tsx";
import Main from "./layout/main/Main.tsx";
import { Footer } from "./layout/footer/Footer.tsx";
import { Particle } from "./components/particle/Particle.tsx";


export type MenuItem = {name: string, link: string}
export type MenuItems = MenuItem[]

const menuItems: MenuItems = [
    {link: "Hero", name: "Обо мне"},
    {link: "Works", name: "Моя Работа"},
    {link: "Testimony", name: "Цитаты"},
    {link: "Skills", name: "Мои Навыки"},
    {link: "Contact", name: "Связь со мной"},
];

function App() {
  return (
    <StyledApp className="App">
      <Particle />
      <h1 className={"visually-hidden"}>исторический сайт</h1>
      <Header menuItems={menuItems} />
      <Main menuItems={menuItems} />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  position: relative;
`;

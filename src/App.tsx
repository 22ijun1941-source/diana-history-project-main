import styled from "styled-components";
import { Header } from "./layout/header/Header.tsx";
import Main from "./layout/main/Main.tsx";
import { Footer } from "./layout/footer/Footer.tsx";
import { Particle } from "./components/particle/Particle.tsx";

const menuItems = ["Hero", "Skills", "Works", "Testimony", "Contact"];
//
function App() {
  return (
    <StyledApp className="App">
      <Particle />
      <h1 className={"visually-hidden"}>мой сайт</h1>
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

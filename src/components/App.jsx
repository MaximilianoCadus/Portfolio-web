import Header from "./header/Header";
import Footer from "./footer/Footer";
import Presentation from "./presentation/Presentation";
import AboutMe from "./about me/AboutMe";
import Projects from "./projects/Projects";
import ContactMe from "./contact me/ContactMe";
import "../css/App.css";
import { HeaderContextProvider } from "../contexts/header/HeaderContext";

function App() {
  return (
    <>
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <main>
        <Presentation />
        <AboutMe />
        <Projects />
        <ContactMe />
      </main>

      <Footer />
    </>
  );
}

export default App;

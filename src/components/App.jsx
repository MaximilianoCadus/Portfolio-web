import Header from "./header/Header";
import Footer from "./footer/Footer";
import Presentation from "./presentation/Presentation";
import AboutMe from "./about me/AboutMe";
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
      </main>
      <Footer />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Presentation from "./presentation/Presentation";
import AboutMe from "./about me/AboutMe";
import Projects from "./projects/Projects";
import ContactMe from "./contact me/ContactMe";
import Spinner from "./spinner/Spinner";
import "../css/App.css";
import { HeaderContextProvider } from "../contexts/header/HeaderContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}

export default App;

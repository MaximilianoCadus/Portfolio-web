import { useContext } from "react";
import { HeaderContext } from "../../contexts/header/HeaderContext";
import Logo from "./Logo";
import Navbar from "./Navbar";
import BurguerButton from "./BurguerButton";
import "../../css/header/Header.css";

function Header() {
  const { clicked } = useContext(HeaderContext);

  return (
    <>
      <header className="header">
        <Logo />
        <BurguerButton />
        <div className={`initial ${clicked ? "active" : ""}`}>
          <Navbar />
        </div>
      </header>
    </>
  );
}

export default Header;

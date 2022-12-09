import { useContext } from "react";
import { HeaderContext } from "../../contexts/header/HeaderContext";

function BurguerButton(props) {
  const { clicked, handleClick } = useContext(HeaderContext);

  return (
    <div
      onClick={handleClick}
      className={`icon nav-icon ${clicked ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurguerButton;

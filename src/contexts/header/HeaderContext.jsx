import { useState, createContext } from "react";

export const HeaderContext = createContext();

export function HeaderContextProvider(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <HeaderContext.Provider value={{ clicked, handleClick }}>
      {props.children}
    </HeaderContext.Provider>
  );
}

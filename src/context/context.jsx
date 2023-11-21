import React, { useContext } from "react";
import { useState } from "react";
import { removeDuplicate } from "../utils/removeDuplicate";

const AppContext = React.createContext();

const AppStateProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const getCartCount = removeDuplicate(cartData).length;
  return (
    <AppContext.Provider value={{ cartData, setCartData, getCartCount }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppStateProvider;

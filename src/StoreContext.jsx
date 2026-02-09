import { createContext } from "react";
import { product } from "./product";

export const productContext = createContext();

const StoreContext = ({ children }) => {
  return (
    <productContext.Provider value={product}>
      {children}
    </productContext.Provider>
  );
};

export default StoreContext;

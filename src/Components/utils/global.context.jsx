import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useReducer } from "react";

export const initialState = { theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { theme: state.theme === "light" ? "dark" : "light" };

    default:
      throw new Error();
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
 
  const [theme, dispatch] = useReducer(reducer, initialState);
  const [dentist, setDentist] = useState([]);
  const [favs, setFavs] = useState([]);

  const KEY = "card.info";

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem(KEY));
    if (storedFavs) {
      setFavs(storedFavs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favs));
  }, [favs]);

  const getDentist = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setDentist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <ContextGlobal.Provider value={{ dentist, theme, dispatch, favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};

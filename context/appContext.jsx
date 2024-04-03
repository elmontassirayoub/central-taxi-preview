import { createContext, useContext, useEffect, useState } from "react";

const appContext = createContext()

const AppContextProvider = (props) => {

    const [lang, setLang] = useState("fr")

    useEffect(() => {
      const storedLang = localStorage.getItem("lang")
      if (storedLang && storedLang !== lang) setLang(storedLang)
    }, [])
  
  
    const changeLanguage = (val) => {
      setLang(val);
      localStorage.setItem("lang", val)
    }


    return (
        <appContext.Provider value={{lang, changeLanguage}} >
            {props.children}
        </appContext.Provider>
    )
}

export default AppContextProvider

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context === undefined) {
      throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}
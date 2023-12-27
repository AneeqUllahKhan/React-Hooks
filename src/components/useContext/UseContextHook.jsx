import { createContext } from "react";


const AppContext = createContext();

const AppProvider = ({children})=>{
    const TestData={
        name: "Aneeq",
        age: 19,
    }

    return <AppContext.Provider value={TestData} >{children}</AppContext.Provider>
}

export {AppContext, AppProvider};                                                                                                                                                                         
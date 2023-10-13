import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import MainCard from "./components/MainCard";

export const MyContext = createContext({ isAnnual: false });

function App() {
  const [annual, setAnnually] = useState({ isAnnual: false });
  console.log(annual);
  return (
    <>
      <MyContext.Provider value={annual}>
        <Header setAnnually={setAnnually} annual={annual.isAnnual} />
        <MainCard />
      </MyContext.Provider>
    </>
  );
}

export default App;

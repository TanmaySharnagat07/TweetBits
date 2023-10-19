import React ,{useState} from "react";
import "./App.css";
import SideNav from "./components/SideNav";
import { ClassNames } from "@emotion/react";
import Contents from "./components/Contents";
import Sidebar from "./components/Sidebar";
import RightNav from "./components/RightNav";

function App() {

  const [Theme, setTheme] = useState({
    backgroundColor: "red",
    color: "black",
  });

  const ChangeTheme = () => {
    if (Theme.color == "black") {
      setTheme({
        backgroundColor: "black",
        color: "white",
      });
    } else {
      setTheme({
        backgroundColor: "white",
        color: "black",
      });
    }
  };

  return (
    <div className="flex mx-0 ">
      <Sidebar/>
      <Contents/>
      <RightNav/>
  </div>
  );
}

export default App;

import React ,{useState} from "react";
import "./App.css";
import SideNav from "./components/Left/SideNav";
import { ClassNames } from "@emotion/react";
import Contents from "./components/Center/Contents";
import Sidebar from "./components/Left/SideBar";
import RightNav from "./components/Right/RightNav";

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
    <div className="flex mx-0 relative w-full h-full">
      <Sidebar/>
      <Contents/>
      <RightNav/>
  </div>
  );
}

export default App;

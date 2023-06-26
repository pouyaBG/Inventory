import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  // all
  const [categorys, setCategorys] = useState([]);
  return (
    <div className="h-full flex flex-col justify-start items-center pb-10">
      <NavBar />
      <Category categorys={categorys} setCategorys={setCategorys}/>
      <Products categorys={categorys} />
    </div>
  );
}

export default App;

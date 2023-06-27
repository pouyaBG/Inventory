import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ListProducts from "./components/ListProducts";

function App() {
  // all
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <div className="h-full flex flex-col justify-start items-center pb-10">
      <NavBar />
      <Category categorys={categorys} setCategorys={setCategorys} />
      <Products categorys={categorys} products={products} setProducts={setProducts} />
      <ListProducts  products={products}/>
    </div>
  );
}

export default App;

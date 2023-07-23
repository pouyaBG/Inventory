import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ListProducts from "./components/ListProducts";
import Filter from "./components/Filterl";

function App() {
  // all
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {}, [products]);
  return (
    <div className="h-full flex flex-col justify-start items-center pb-10">
      <NavBar />
      <Category categorys={categorys} setCategorys={setCategorys} />
      <Products
        categorys={categorys}
        products={filterProducts}
        setProducts={setProducts}
      />
      <Filter products={products} setFilterProducts={setFilterProducts} />
      <ListProducts products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;

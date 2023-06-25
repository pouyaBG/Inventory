import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  return (
    <div className="h-full flex flex-col justify-start items-center pb-10">
      <NavBar />
      <Products />
      <Category />
    </div>
  );
}

export default App;

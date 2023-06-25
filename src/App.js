import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  return (
    <div className="bg-[#0e599f] w-screen h-screen flex flex-col justify-start items-center">
      <NavBar />
      <Products />
      <Category />
    </div>
  );
}

export default App;

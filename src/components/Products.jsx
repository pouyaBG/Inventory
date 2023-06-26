import { useState } from "react";

const Products = ({ categorys }) => {
  const [product, setProduct] = useState({
    title: "",
    quantity: "",
    category: "",
  });
  return (
    <>
      <div className="w-[56%] mt-12">
        <h2 className="text-xl text-black font-bold mb-2">Add New Product</h2>
        <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="product-title"
              className="block mb-1 text-slate-200"
            >
              Title
            </label>
            <input
              type="text"
              name="product-title"
              id="product-title"
              className="bg-transparent rounded-xl border-2 border-slate-500 text-slate-400 "
            ></input>
          </div>
          <div>
            <label
              htmlFor="product-quantity"
              className="block mb-1 text-slate-200"
            >
              quantity
            </label>
            <input
              type="number"
              name="product-quantity"
              id="product-quantity"
              className="bg-transparent rounded-xl border-2 border-slate-500 text-slate-400"
            ></input>
          </div>
          <div>
            <label
              htmlFor="product-category"
              className="block mb-1 text-slate-200"
            >
              Category
            </label>
            <select
              name="product-category"
              id="product-category"
              className="bg-transparent border-2 border-white text-slate-400 rounded-xl w-full"
            >
              {categorys.map((item, id) => (
                <option key={id} className="bg-slate-500 text-slate-200">
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-4">
            <button
              id="add-new-product"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-1"
            >
              Add new Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Products;

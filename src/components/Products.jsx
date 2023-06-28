import { useState } from "react";

const Products = ({ categorys, products, setProducts }) => {
  const [product, setProduct] = useState({
    title: "",
    quantity: 0,
    category: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const addNewProduct = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        ...product,
        createAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setProduct({
      title: "",
      quantity: 0,
      category: "",
    });
    console.log(products);
  };
  return (
    <>
      <div className="w-[56%] transition-all">
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
              onChange={handleChange}
              value={product.title}
              name="title"
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
              onChange={handleChange}
              value={product.quantity}
              name="quantity"
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
              name="category"
              id="product-category"
              onChange={handleChange}
              value={product.category}
              className="bg-transparent border-2 border-white text-slate-400 rounded-xl w-full"
            >
              <option className="bg-slate-500 text-slate-200">
                select a category
              </option>
              {categorys.map((item, id) => (
                <option
                  key={id}
                  value={item.id}
                  className="bg-slate-500 text-slate-200"
                >
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-4">
            <button
              onClick={addNewProduct}
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

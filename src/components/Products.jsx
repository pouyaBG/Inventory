const Products = () => {
  return (
    <>
      <div class="w-[60%] mt-20">
        <h2 class="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
        <form class="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4">
          <div>
            <label for="product-title" class="block mb-1 text-slate-200">
              Title
            </label>
            <input
              type="text"
              name="product-title"
              id="product-title"
              class="bg-transparent rounded-xl border-2 border-slate-500 text-slate-400"
            ></input>
          </div>
          <div>
            <label for="product-quantity" class="block mb-1 text-slate-200">
              quantity
            </label>
            <input
              type="number"
              name="product-quantity"
              id="product-quantity"
              class="bg-transparent rounded-xl border-2 border-slate-500 text-slate-400"
            ></input>
          </div>
          <div>
            <label for="product-category" class="block mb-1 text-slate-200">
              Category
            </label>
            <select
              name="product-category"
              id="product-category"
              class="bg-transparent text-slate-400 rounded-xl w-full"
            ></select>
          </div>
          <div class="flex flex-row items-center justify-between gap-x-4">
            <button
              id="add-new-product"
              class="flex-1 bg-slate-500 text-slate-200 rounded-xl py-1"
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

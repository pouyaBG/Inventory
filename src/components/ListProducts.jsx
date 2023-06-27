const ListProducts = ({ products }) => {
  console.log(products.length);
  return (
    <>
      <h2 className="text-xl flex justify-start items-center text-black font-bold w-[56%] mt-2">
        Products list 
        {products.length === 0 ? (
          <span className="ml-2 text-[19px] text-red-500">is empty</span>
        ) : (
          <>
            <span className=" ml-2 flex items-center justify-center text-[18px] w-7 h-7 rounded-full bg-slate-500 text-white border-2 border-slate-400">
              {products.length}
            </span>
          </>
        )}
      </h2>
      <div className="w-[56%] flex flex-col justify-center items-center bg-slate-700 p-4 rounded-lg mt-5  ">
        {products?.map((item) => (
          <div className="flex items-center justify-between mb-2 w-full text-center">
            <span className="text-white">{item.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-white">
                {new Date(item.createAt).toLocaleDateString("fa-IR")}
              </span>
              <span
                className="block px-3 py-0.5 text-white border border-white text-sm rounded-full"
                id="edit"
              >
                {item.title}
              </span>
              <button
                id="edit-product"
                className=" border px-2 py-o.5 rounded-2xl border-green-400 text-green-400 data-product-id={item.id
              } "
              >
                Edit
              </button>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-white text-white">
                {item.quantity}
              </span>
              <button className="delete-product border px-2 py-o.5 rounded-2xl border-red-400 text-red-400">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProducts;

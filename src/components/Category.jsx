const Category = () => {
  return (
    <>
      <div className="w-[60%] mt-5">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4">
          <div>
            <label for="category-title" className="block mb-1 text-slate-200">
              Title
            </label>
            <input
              type="text"
              name="category-title"
              id="category-title"
              className="bg-transparent rounded-xl border-2 border-slate-500 text-slate-400"
            ></input>
          </div>
          <div>
            <label
              for="category-descreption"
              className="block mb-1 text-slate-200"
            >
              Descreption
            </label>
            <textarea
              type="text"
              name="category-descreption"
              id="category-description"
              className="bg-transparent rounded-xl border-2 border-slate-500 text-slate-400 w-full"
            ></textarea>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-4">
            <button className="flex-1 border-2 border-slate-400 text-slate-300 rounded-xl py-1">
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-1"
            >
              Add new category
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Category;

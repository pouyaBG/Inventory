import { useState } from "react";
import "animate.css";
const Category = () => {
  const [category, setCategory] = useState({
    title: "",
    discription: "",
  });
  const [isShow, setIsShow] = useState(false);
  const CategoryModal = () => {
    setIsShow(!isShow);
  };
  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div>
        <button
          onClick={CategoryModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        >
          {isShow ? "Close" : "Add new Categort"}
        </button>
      </div>
      {isShow ? (
        <div className="w-[56%] mt-5 ">
          <h2 className="text-xl text-black font-bold mb-2 animate__animated animate__fadeInUp">
            Add New Category
          </h2>
          <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4 animate__animated animate__fadeInUp">
            <div>
              <label
                htmlFor="category-title"
                className="block mb-1 text-slate-200"
              >
                Title
              </label>
              <input
                name="title"
                value={category.title}
                onChange={handleChange}
                type="text"
                id="category-title"
                className="bg-transparent rounded-xl border-2 border-slate-500 text-slate-400"
              ></input>
            </div>
            <div>
              <label
                htmlFor="category-descreption"
                className="block mb-1 text-slate-200"
              >
                Descreption
              </label>
              <textarea
                name="discription"
                value={category.discription}
                onChange={handleChange}
                type="text"
                id="category-description"
                className="bg-transparent rounded-xl border-2 border-slate-500 text-slate-400 w-full"
              ></textarea>
            </div>
            <div className="flex flex-row items-center justify-between gap-x-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsShow(false);
                }}
                className="flex-1 border-2 border-slate-400 text-slate-300 rounded-xl py-1"
              >
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Category;

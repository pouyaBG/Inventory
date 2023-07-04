import { useState } from "react";

const Filter = ({ products, setFilterProducts }) => {
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");

  const sortHanlder = (e) => { };
  const searchHandler = (e) => {
    const value = e.target.value.trim().toLowerCase();
    const fillteredProducts = products.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFilterProducts(fillteredProducts);
  };
  return (
    <>
      <div className="w-[56%] bg-slate-700 p-2 mt-2 rounded-lg">
        <div className=" w-full flex items-center py-2 ">
          <label htmlFor="search-input" className="text-slate-100 mr-2 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </label>
          <input
            type="text"
            name="search"
            id="search-input"
            className="bg-transparent w-[50%] rounded-xl border border-white text-white"
            value={searchValue}
            onChange={searchHandler}
          ></input>
          <div className="flex items-center justify-between  ml-[15%]">
            <label for="sort-product" className="text-slate-100 mr-3 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-filter"
                viewBox="0 0 16 16"
              >
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            </label>
            <select
              name="sort-product"
              id="sort-product"
              className="bg-transparent  rounded-xl border border-white text-white"
              value={sort}
              onChange={sortHanlder}
            >
              <option className=" bg-slate-500 text-slate-300" value="">
                Selected a Category
              </option>
              <option className=" bg-slate-500 text-slate-300" value="latest">
                latest
              </option>
              <option className=" bg-slate-500 text-slate-300" value="earliest">
                earliest
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

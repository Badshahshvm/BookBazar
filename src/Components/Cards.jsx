import React from "react";

const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <span className="badge badge-secondary">{item.category}</span>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between flex">
              <span className="badge badge-outline">${item.price}</span>
              <span className="badge badge-outline hover:bg-pink-600 duration-200 hover:text-white px-2 py-2 cursor-pointer rounded-full border-[2px]">
                Buy now
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

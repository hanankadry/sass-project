import React from "react";
import { Link } from "react-router-dom";

export default function MealCard({ mealData }) {
  return (
    <>
      <div className="meal text-center hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-white p-12 pb-4 rounded-[35px]">
        <img
          src={mealData.strMealThumb}
          className="w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl -translate-y-20 shadow-2xl"
          alt={mealData.strMeal}
        />
        <h3 className="font-semibold -mt-12 font-Pacifico tracking-wider text-xl">
          {mealData.strMeal.split(" ").slice(0, 2).join(" ")}
        </h3>
        {mealData.strArea && (
          <h5 className="flex justify-center items-center gap-2 text-emerald-600">
            <i className="fa-solid fa-earth-americas"></i>
            {mealData.strArea}
          </h5>
        )}
        <button className="text-white bg-gradient-to-r mt-4 bg-emerald-500 hover:bg-emerald-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-2 rounded-full">
          <Link to={`/mealdetails/${mealData.idMeal}`}> View Recipe</Link>
        </button>
      </div>
    </>
  );
}

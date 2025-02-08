import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import CategoryTags from "../../components/CategoryTags/CategoryTags";
import AllMeals from "../../components/AllMeals/AllMeals";

export default function MealsByCategory() {
  const { name } = useParams();
  return (
    <>
      <div className="container py-8 px-4">
        <Title />
        <CategoryTags />
        <AllMeals endpoint={`filter.php?c=${name}`} queryKey={name} />
      </div>
    </>
  );
}

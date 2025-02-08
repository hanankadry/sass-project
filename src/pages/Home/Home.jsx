import React from "react";
import CategoryTags from "../../components/CategoryTags/CategoryTags.jsx";
import AllMeals from "../../components/AllMeals/AllMeals";
import Title from "../../components/Title/Title.jsx";

export default function Home() {
  return (
    <>
      <div className="container py-8 px-4">
        <Title />
        <CategoryTags />
        <AllMeals endpoint="search.php?s=" queryKey="allMeals" />
      </div>
    </>
  );
}

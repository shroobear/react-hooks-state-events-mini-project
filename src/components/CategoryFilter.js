import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {


  const catButtons = categories.map((category) => (
    <button
      key={category}
      className={selectedCategory === category ? "selected" : ""}
      onClick={() => onCategoryChange(category)}
    >
      {category}
    </button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;

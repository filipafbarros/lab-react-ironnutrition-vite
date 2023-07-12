import React from "react";

function FoodBox({ food, handleDelete }) {
  const { id, name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <div>
      <p>{name}</p>

      <img src={image} />

      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>

      <p>
        <b>Total Calories:{totalCalories} </b> kcal
      </p>

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default FoodBox;

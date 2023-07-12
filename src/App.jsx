import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });
    setFoods(filteredFoods);
  };

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];

    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <div>
        <AddFoodForm addFood={addNewFood} />
      </div>
      <div>
        {foods.map((food, i) => (
          <FoodBox key={food.id || i} food={food} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;

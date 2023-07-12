import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };

    props.addFood(newFood);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <div>
      <h4>Add a Food</h4>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Image </label>
        <input type="text" name="image" value={image} onChange={handleImage} />

        <label>Calories </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalories}
        />

        <label>Servings </label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServings}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;

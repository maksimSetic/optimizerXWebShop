import React from "react";
import "./CartGrid.css";

const CartGrid = ({ cartItems, handleRemoveItem }) => {
  return (
    <>
      <ul class="triumvirate">
        {cartItems?.map((car, index) => (
          <>
            <li id="kirk">
              <span class="actor">
                {car.Name.charAt(0).toUpperCase() + car.Name.slice(1)}
              </span>
              <span class="character">Horsepower: {car.Horsepower}</span>
              <span class="character">Acceleration: {car.Acceleration}</span>
              <span class="character">Cylinders: {car.Cylinders}</span>
              <span class="character">Displacement: {car.Displacement}</span>
              <span class="character">Origin: {car.Origin}</span>
              <span class="character">Year: {car.Year}</span>
              <button
                onClick={() => handleRemoveItem(index)}
                style={{ marginTop: "15px" }}
              >
                Remove
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default CartGrid;

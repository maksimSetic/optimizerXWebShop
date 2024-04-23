import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaymentButton from "../Utils/PaymentButton";

const CheckoutPage = ({
  isCheckoutOpen,
  setIsCheckoutOpen,
  setIsCartPageOpen,
  cartItems,
  handleRemoveItem,
}) => {
  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const backToShop = () => {
    setIsCheckoutOpen(false);
    setIsCartPageOpen(false);
  };

  const totalPrice = cartItems.reduce((total, car) => total + car.Price, 0);
  const currency = "USD";

  return (
    <>
      <button onClick={closeCheckout}>Back to cart</button>
      <Link to="/">
        <button onClick={backToShop}>Back to shop</button>
      </Link>
      <div className="checkout_wrapper">
        <div className="checkout_left">
          <ul className="checkout_items">
            {cartItems?.map((car, index) => (
              <li key={index} className="checkout_item">
                <span className="actor">
                  {car.Name.charAt(0).toUpperCase() + car.Name.slice(1)}
                </span>
                <span className="character">Horsepower: {car.Horsepower}</span>
                <span className="character">
                  Acceleration: {car.Acceleration}
                </span>
                <span className="character">Cylinders: {car.Cylinders}</span>
                <span className="character">
                  Displacement: {car.Displacement}
                </span>
                <span className="character">Origin: {car.Origin}</span>
                <span className="character">Year: {car.Year}</span>
                <span className="character">Price: {car.Price}</span>
                <button
                  onClick={() => handleRemoveItem(index)}
                  style={{ marginTop: "15px" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="checkout_right">
          <div>Total Price: {totalPrice}</div>
          {totalPrice === 0 ? (
            <div></div>
          ) : (
            <div>
              <PaymentButton totalPrice={totalPrice} currency={currency} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;

import React from "react";
import CartGrid from "../Utils/CartGrid";
import CheckoutPage from "./CheckoutPage";
import CartCounterDisplay from "../Utils/CardCounterDisplay";
import { Link } from "react-router-dom";
import "./styles.css";

const CartPage = ({
  handleCloseCart,
  handleClearCart,
  handleGoToCheckout,
  cartItems,
  handleRemoveItem,
  isCheckoutOpen,
  setIsCheckoutOpen,
  setIsCartPageOpen,
}) => {
  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <>
      {!isCheckoutOpen && (
        <>
          <button onClick={handleCloseCart}>Back</button>

          <button onClick={handleClearCart}>Clear</button>

          <button onClick={handleOpenCheckout}>Checkout</button>

          <CartGrid cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
        </>
      )}
      {isCheckoutOpen && (
        <>
          <CheckoutPage
            cartItems={cartItems}
            isCheckoutOpen={isCheckoutOpen}
            setIsCheckoutOpen={setIsCheckoutOpen}
            handleRemoveItem={handleRemoveItem}
            setIsCartPageOpen={setIsCartPageOpen}
          />
        </>
      )}
    </>
  );
};

export default CartPage;

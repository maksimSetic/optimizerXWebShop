import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartCounterDisplay = ({ cartItems, handleCartOpen }) => {
  return (
    <>
      <div style={{ fontSize: "1em" }} onClick={handleCartOpen}>
        <IoCartOutline style={{ marginTop: "5px", cursor: "pointer" }} />
        {cartItems && <span className="cart_counter">{cartItems.length}</span>}
        {!cartItems && "0"}
      </div>
    </>
  );
};

export default CartCounterDisplay;

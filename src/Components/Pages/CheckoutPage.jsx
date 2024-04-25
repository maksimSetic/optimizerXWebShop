import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import axios from "../API/axios";
import PaymentSuccessPage from "./PaymentSuccessPage";
import PaymentForm from "../Utils/PaymentForm";
import "react-dropdown/style.css";

const CheckoutPage = ({
  isCheckoutOpen,
  setIsCheckoutOpen,
  setIsCartPageOpen,
  cartItems,
  setCartItems,
  handleRemoveItem,
  userName,
}) => {
  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const backToShop = () => {
    setIsCheckoutOpen(false);
    setIsCartPageOpen(false);
  };

  const amount = cartItems.reduce((total, car) => total + car.Price, 0);
  const [currency, setCurrency] = useState("USD");
  const [email, setEmail] = useState("ghostwarrior222@gmail.com");
  const [password, setPassword] = useState("Lala123!");
  const [cardNumber, setCardNumber] = useState("42424242424242");
  const [cVV, setCVV] = useState("123");

  const [paymentObject, setPaymentObject] = useState({
    amount: amount,
    currency: currency,
    userName: userName,
    email: email,
    password: password,
    cardNumber: cardNumber,
    cVV: cVV,
  });

  const options = ["USD", "EUR", "RUB"];
  const defaultOption = options[0];

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handleCurrencyChange = (selectedOption) => {
    setCurrency(selectedOption.value);
    setPaymentObject({ ...paymentObject, currency: selectedOption.value });
  };

  const apiCall = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/create-payment-intent",
        paymentObject
      );

      console.log("Payment object posted successfully:", response.data);
      setIsPaymentSuccess(true);
      setCartItems([]);
    } catch (error) {
      console.error("Error posting payment object:", error.message);
    }
  };

  return (
    <>
      {!isPaymentSuccess && (
        <button onClick={closeCheckout}>Back to cart</button>
      )}
      <Link to="/">
        <button onClick={backToShop}>Back to shop</button>
      </Link>
      {!isPaymentSuccess && (
        <>
          <PaymentForm
            userName={userName}
            email={email}
            password={password}
            cardNumber={cardNumber}
            cVV={cVV}
          />
          <div className="checkout_wrapper">
            <div className="checkout_left">
              <ul className="checkout_items">
                {cartItems?.map((car, index) => (
                  <li key={index} className="checkout_item">
                    <span className="actor">
                      {car.Name.charAt(0).toUpperCase() + car.Name.slice(1)}
                    </span>
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
              <div>Total Price: {amount}</div>
              {amount === 0 ? (
                <div></div>
              ) : (
                <>
                  <div>
                    <Dropdown
                      options={options}
                      onChange={handleCurrencyChange}
                      placeholder="Select currency"
                    />
                  </div>
                  <div>
                    <button type="submit" onClick={apiCall}>
                      PAY NOW
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
      {isPaymentSuccess && <PaymentSuccessPage />}
    </>
  );
};

export default CheckoutPage;

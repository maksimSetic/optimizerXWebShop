import React, { useState, useEffect } from "react";
import "./paymentForm.css";

const PaymentForm = ({ userName }) => {
  const [email, setEmail] = useState("ghostwarrior222@gmail.com");
  const [password, setPassword] = useState("Lala123!");
  const [cardNumber, setCardNumber] = useState("42424242424242");
  const [cVV, setCVV] = useState("123");

  const [nameFocused, setNameFocused] = useState(
    userName && userName.length > 0
  );
  const [emailFocused, setEmailFocused] = useState(email && email.length > 0);
  const [passwordFocused, setPasswordFocused] = useState(
    password && password.length > 0
  );
  const [cardNumberFocused, setCardNumberFocused] = useState(
    cardNumber && cardNumber.length > 0
  );
  const [cVVFocused, setCVVFocused] = useState(cVV && cVV.length > 0);

  useEffect(() => {
    setNameFocused(userName && userName.length > 0);
  }, [userName]);
  useEffect(() => {
    setEmailFocused(email && email.length > 0);
  }, [email]);
  useEffect(() => {
    setPasswordFocused(password && password.length > 0);
  }, [password]);
  useEffect(() => {
    setCardNumberFocused(cardNumber && cardNumber.length > 0);
  }, [cardNumber]);
  useEffect(() => {
    setCVVFocused(cVV && cVV.length > 0);
  }, [cVV]);

  const handleNameFocus = (event) => {
    setNameFocused(event.target.value.length > 0);
  };

  const handleEmailFocus = (event) => {
    setEmailFocused(event.target.value.length > 0);
  };

  const handlePasswordFocus = (event) => {
    setPasswordFocused(event.target.value.length > 0);
  };

  const handleCardNumberFocus = (event) => {
    setCardNumberFocused(event.target.value.length > 0);
  };

  const handleCVVFocus = (event) => {
    setCVVFocused(event.target.value.length > 0);
  };

  return (
    <>
      <div className="payment_form_container">
        <h1>Checkout</h1>
        <form>
          <div className="row">
            <div className="input_wrapper">
              <input
                type="text"
                id="name"
                defaultValue={userName}
                onFocus={handleNameFocus}
                onBlur={handleNameFocus}
              />
              <label
                htmlFor="name"
                className={nameFocused ? "focused" : ""}
                style={nameFocused ? { left: 0, top: "-15px" } : {}}
              >
                Name
              </label>
            </div>
            <div className="input_wrapper">
              <input
                type="email"
                id="email"
                defaultValue={email}
                onFocus={handleEmailFocus}
                onBlur={handleEmailFocus}
              />
              <label
                htmlFor="email"
                className={emailFocused ? "focused" : ""}
                style={emailFocused ? { left: 0, top: "-15px" } : {}}
              >
                Email
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input_wrapper">
              <input
                type="password"
                id="password"
                defaultValue={password}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordFocus}
              />
              <label
                htmlFor="password"
                className={passwordFocused ? "focused" : ""}
                style={passwordFocused ? { left: 0, top: "-15px" } : {}}
              >
                Password
              </label>
            </div>
            <div className="d-flex">
              <input
                type="text"
                id="card_number"
                className="card_number_input"
                maxLength="16"
                defaultValue={cardNumber}
                onFocus={handleCardNumberFocus}
                onBlur={handleCardNumberFocus}
              />
              <label
                htmlFor="card_number"
                className={
                  cardNumberFocused ? " card_number_label focused" : ""
                }
                style={cardNumberFocused ? { left: 0, top: "-15px" } : {}}
              >
                Card Number
              </label>
              <div className="input_wrapper">
                <input
                  type="text"
                  id="cvv"
                  maxLength="3"
                  defaultValue={cVV}
                  onFocus={handleCVVFocus}
                  onBlur={handleCVVFocus}
                />
                <label
                  htmlFor="cvv"
                  className={cVVFocused ? "focused" : ""}
                  style={cVVFocused ? { left: 0, top: "-15px" } : {}}
                >
                  CVV
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default PaymentForm;

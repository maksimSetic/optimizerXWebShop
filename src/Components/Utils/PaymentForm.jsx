import React from "react";

const PaymentForm = () => {
  return (
    <>
      <div class="container">
        <h1>Payment form</h1>

        <span class="fieldRow">
          <input id="name" type="name" placeholder="" />
          <label for="name">First name</label>
          <i for="name" class="fa fa-user"></i>
        </span>

        <span class="fieldRow">
          <input id="surname" type="name" placeholder="" />
          <label for="surname">Last name</label>
          <i for="surname" class="fa fa-user"></i>
        </span>

        <div class="blank_space">
          <span class="fieldRow credit_card">
            <input
              id="cc"
              class="credit_card_number"
              type="text"
              placeholder=""
            />
            <label for="cc">Credit card number</label>
            <i for="cc" class="fa fa-credit-card"></i>
            <div class="zoomBtn">ZOOM</div>
            <div class="closeBtn">
              <i class="fa fa-times"></i>
            </div>
          </span>
        </div>

        <span class="fieldRow col2">
          <input id="cvv" type="text" placeholder="XXX" />
          <label for="cvv">CVV</label>
          <i for="cvv" class="fa fa-lock"></i>
        </span>

        <span class="fieldRow col2 last">
          <input id="date" type="text" placeholder="mm/yy" />
          <label for="date">Date</label>
          <i for="date" class="fa  fa-calendar"></i>
        </span>

        <button type="submit">PAY NOW</button>
      </div>
      <div class="overlay"></div>
    </>
  );
};

export default PaymentForm;

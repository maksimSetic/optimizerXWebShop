import React, { useState } from "react";
import axios from "axios";

const PaymentButton = ({ totalPrice, currency }) => {
  const [paymentObject, setPaymentObject] = useState({
    amount: totalPrice,
    currency: currency,
  });

  const apiCall = async () => {
    try {
      const response = await axios.post(
        "/create-payment-intent",
        paymentObject
      );

      console.log("Payment object posted successfully:", response.data);
      // You can handle the response data here, such as updating the UI
    } catch (error) {
      console.error("Error posting payment object:", error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  return <button onClick={apiCall}>Make Payment</button>;
};

export default PaymentButton;

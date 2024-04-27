import React from "react";
import "./paymentForm.css";

const PaymentForm = ({ userName, email, password, cardNumber, cVV }) => {
  return (
    <>
      <div className="container">
        <form className="form-horizontal" role="form">
          <fieldset>
            <legend>
              <h1 className="form-top d-flex justify-content-center">
                Payment
              </h1>
            </legend>
            <div className="form-group mb-2">
              <label htmlFor="card-holder-name" className="d-flex">
                Name
              </label>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  name="card-holder-name"
                  id="card-holder-name"
                  placeholder="Card Holder's Name"
                  defaultValue={userName}
                />
              </div>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="card-email" className="d-flex">
                Email
              </label>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="e-mail"
                  placeholder="Email"
                  defaultValue={email}
                />
              </div>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="card-number" className="d-flex">
                Card Number
              </label>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  name="card-number"
                  id="card-number"
                  placeholder="Debit/Credit Card Number"
                  defaultValue={cardNumber}
                />
              </div>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="expiry-month" className="d-flex">
                Expiration
              </label>
              <div className="">
                <div className="row">
                  <div className="">
                    <select
                      className="form-control"
                      name="expiry-month"
                      id="expiry-month"
                    >
                      <option>Month</option>
                      <option value="01">Jan (01)</option>
                      <option value="02">Feb (02)</option>
                      <option value="03">Mar (03)</option>
                      <option value="04">Apr (04)</option>
                      <option value="05">May (05)</option>
                      <option value="06">June (06)</option>
                      <option value="07">July (07)</option>
                      <option value="08">Aug (08)</option>
                      <option value="09">Sep (09)</option>
                      <option value="10">Oct (10)</option>
                      <option value="11">Nov (11)</option>
                      <option value="12">Dec (12)</option>
                    </select>
                  </div>
                  <div className="">
                    <select className="form-control" name="expiry-year">
                      <option>Year</option>
                      <option value="17">2017</option>
                      <option value="18">2018</option>
                      <option value="19">2019</option>
                      <option value="20">2020</option>
                      <option value="21">2021</option>
                      <option value="22">2022</option>
                      <option value="23">2023</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cvv" className="d-flex">
                Card CVV
              </label>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  name="cvv"
                  id="cvv"
                  placeholder="Security Code"
                  defaultValue={cVV}
                />
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="">
                <button
                  type="button"
                  className="btn btn-success mb-2"
                  id="pay-now"
                >
                  <span>Pay Now</span>
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CartCounterDisplay from "../Utils/CardCounterDisplay";
import Popup from "../Utils/Popup";

const VehicleDetailsPage = ({
  handleCloseDetails,
  selectedCarIndex,
  filteredCars,
  cartItems,
  setCartItems,
  setCartCounter,
  isPopupOpen,
  setIsPopupOpen,
  togglePopup,
  handleCartOpen,
  isCartPageOpen,
  setIsCartPageOpen,
}) => {
  const selectedCar = filteredCars[selectedCarIndex];

  const handleAddItemDetails = () => {
    setCartItems((prevCartItems) => [...prevCartItems, selectedCar]);
    setCartCounter((prevCounter) => prevCounter + 1);
    togglePopup();
  };

  console.log(cartItems);

  return (
    <>
      <div className="details_title_container">
        <div className="details_title">
          {selectedCar.Name.charAt(0).toUpperCase() + selectedCar.Name.slice(1)}
        </div>
        <div>
          <div style={{ fontSize: "40px" }}>
            <CartCounterDisplay
              cartItems={cartItems}
              handleCartOpen={handleCartOpen}
              isCartPageOpen={isCartPageOpen}
              setIsCartPageOpen={setIsCartPageOpen}
            />
          </div>
          <p>
            <span className="details_excerpt">Price:</span>
            {selectedCar.Price}
          </p>
        </div>
      </div>
      <Tabs>
        <TabList style={{ marginBottom: "2rem" }}>
          <Tab>
            <span style={{ fontSize: "1.3rem" }}>Power</span>
          </Tab>
          <Tab>
            <span style={{ fontSize: "1.3rem" }}>Registry</span>
          </Tab>
        </TabList>
        <TabPanel>
          <p>
            <span className="details_excerpt">Horsepower: </span>
            {selectedCar.Horsepower}
          </p>
          <p>
            <span className="details_excerpt">Acceleration: </span>
            {selectedCar.Acceleration}
          </p>
          <p>
            <span className="details_excerpt">Cylinders: </span>
            {selectedCar.Cylinders}
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <span className="details_excerpt">Displacement: </span>
            {selectedCar.Displacement}
          </p>
          <p>
            <span className="details_excerpt">Origin: </span>
            {selectedCar.Origin}
          </p>
          <p>
            <span className="details_excerpt">Year: </span>
            {selectedCar.Year}
          </p>
        </TabPanel>
      </Tabs>
      <button onClick={handleAddItemDetails}>Add</button>
      <button onClick={handleCloseDetails}>Back</button>
      <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </>
  );
};

export default VehicleDetailsPage;

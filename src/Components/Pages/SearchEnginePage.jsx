import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomModal from "../Utils/CustomModal";
import Popup from "../Utils/Popup";
import CartCounterDisplay from "../Utils/CardCounterDisplay";
import VehicleDetailsPage from "./VehicleDetailsPage";
import CartPage from "./CartPage";
import { Link } from "react-router-dom";
import "./styles.css";

const SearchEnginePage = () => {
  const endpoint = "https://api.npoint.io/cf5db5290dfcf4eca704";
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, ascending: true });
  const itemsPerPage = 10;
  const [visibleModal, setVisibleModal] = useState(false);
  const [clickedCarIndex, setClickedCarIndex] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);
  const [viewModalSuccess, setViewModalSuccess] = useState(false);
  const [isCartPageOpen, setIsCartPageOpen] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
      });
  }, []);

  useEffect(() => {
    renderTable();
  }, [filteredCars, currentPage]);

  const togglePopup = () => {
    setIsPopupOpen(true);
    if (!isPopupOpen) {
      setTimeout(() => {
        setIsPopupOpen(false);
      }, 2000);
    }
  };

  const renderTable = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let currentCars = filteredCars.slice(startIndex, endIndex);

    currentCars = currentCars.filter(
      (car, index, self) => index === self.findIndex((c) => c.Name === car.Name)
    );

    return currentCars.map((car, index) => (
      <tr
        key={car.Name}
        className="optimizer-table-row"
        onClick={() => handleClickItem(index)}
      >
        <td
          style={{ whiteSpace: "nowrap" }}
          data-label="Name"
          className="optimizer-table-data"
        >
          {car.Name.charAt(0).toUpperCase() + car.Name.slice(1)}
        </td>
        <td data-label="Horsepower" className="optimizer-table-data">
          {car.Horsepower}
        </td>
        <td data-label="Acceleration" className="optimizer-table-data">
          {car.Acceleration}
        </td>
        <td data-label="MPG" className="optimizer-table-data">
          {car.Miles_per_Gallon}
        </td>
        <td data-label="Cylinders" className="optimizer-table-data">
          {car.Cylinders}
        </td>
        <td data-label="Displacement" className="optimizer-table-data">
          {car.Displacement}
        </td>
        <td data-label="Origin" className="optimizer-table-data">
          {car.Origin}
        </td>
        <td data-label="Year" className="optimizer-table-data">
          {car.Year}
        </td>
        <td className="optimizer-table-data">
          <button onClick={(event) => handleAddItem(event, index)}>
            Add to Cart
          </button>
        </td>
      </tr>
    ));
  };

  const handleViewDetails = () => {
    setViewDetails(true);
    setViewModalSuccess(true);
  };

  const handleCloseDetails = () => {
    setViewDetails(false);
    setViewModalSuccess(false);
  };

  const handleAddItem = (event, index) => {
    event.stopPropagation();
    const selectedCar = filteredCars[index];
    setCartItems((prevCartItems) => [...prevCartItems, selectedCar]);
    setCartCounter((prevCounter) => prevCounter + 1);
    togglePopup();
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(
      (item, index) => index !== itemId
    );
    setCartItems(updatedCartItems);
    setCartCounter((prevCounter) => prevCounter - 1);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = cars.filter((car) =>
      car.Name.toLowerCase().includes(searchTerm)
    );
    setFilteredCars(filtered);
    setCurrentPage(1);
    setSortConfig({ key: null, ascending: true });
  };

  const handleSort = (key) => {
    const ascending = sortConfig.key === key ? !sortConfig.ascending : true;

    const unsortedCars = [...cars];
    setFilteredCars(unsortedCars);

    const sortedCars = [...unsortedCars].sort((a, b) => {
      const modifier = ascending ? 1 : -1;
      if (a[key] < b[key]) return -1 * modifier;
      if (a[key] > b[key]) return modifier;
      return 0;
    });
    setFilteredCars(sortedCars);
    setSortConfig({ key, ascending });
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleClickItem = (index) => {
    setClickedCarIndex(index);
    setVisibleModal(true);
  };

  const handleCartOpen = () => {
    setIsCartPageOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartPageOpen(false);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  const handleGoToCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      {!isCartPageOpen && !viewModalSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.2 }}
        >
          <div style={{ display: "flex", fontSize: "40px" }}>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "2rem",
              }}
            >
              OptimizerX Vehicles
            </div>
            <CartCounterDisplay
              handleCartOpen={handleCartOpen}
              cartItems={cartItems}
              isCartPageOpen={isCartPageOpen}
              setIsCartPageOpen={setIsCartPageOpen}
            />
          </div>
          <input
            type="text"
            id="searchInput"
            className="optimizer-search-input"
            onChange={handleSearch}
          />
          <button
            onClick={() => handleSort("Name")}
            style={{
              fontWeight: sortConfig.key === "Name" ? "bold" : "normal",
            }}
          >
            Sort by Name
          </button>
          <button
            onClick={() => handleSort("Horsepower")}
            style={{
              fontWeight: sortConfig.key === "Horsepower" ? "bold" : "normal",
            }}
          >
            Sort by Horsepower
          </button>
          <button
            onClick={() => handleSort("Year")}
            style={{
              fontWeight: sortConfig.key === "Year" ? "bold" : "normal",
            }}
          >
            Sort by Year
          </button>
          <div className="pagination">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="optimizer-button"
            >
              Previous
            </button>
            <span className="optimizer-page-number">{currentPage}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="optimizer-button"
            >
              Next
            </button>
          </div>
          {
            <CustomModal
              isOpen={visibleModal}
              selectedCarIndex={clickedCarIndex}
              filteredCars={filteredCars}
              onRequestClose={closeModal}
              style={customStyles}
              handleViewDetails={handleViewDetails}
            ></CustomModal>
          }
          <table className="optimizer-table">
            <thead>
              <tr>
                <th scope="col" className="optimizer-table-header">
                  Name
                </th>
                <th scope="col" className="optimizer-table-header">
                  Horsepower
                </th>
                <th scope="col" className="optimizer-table-header">
                  Acceleration
                </th>
                <th scope="col" className="optimizer-table-header">
                  Miles per gallon
                </th>
                <th scope="col" className="optimizer-table-header">
                  Cylinders
                </th>
                <th scope="col" className="optimizer-table-header">
                  Displacement
                </th>
                <th scope="col" className="optimizer-table-header">
                  Origin
                </th>
                <th scope="col" className="optimizer-table-header">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </motion.div>
      )}
      <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      {viewModalSuccess && (
        <VehicleDetailsPage
          handleCloseDetails={handleCloseDetails}
          filteredCars={filteredCars}
          cartItems={cartItems}
          setCartItems={setCartItems}
          setCartCounter={setCartCounter}
          selectedCarIndex={clickedCarIndex}
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
          togglePopup={togglePopup}
        />
      )}
      {isCartPageOpen && (
        <CartPage
          handleCloseCart={handleCloseCart}
          handleClearCart={handleClearCart}
          cartItems={cartItems}
          handleRemoveItem={handleRemoveItem}
          handleGoToCheckout={handleGoToCheckout}
          isCheckoutOpen={isCheckoutOpen}
          setIsCheckoutOpen={setIsCheckoutOpen}
          handleCartOpen={handleCartOpen}
          setIsCartPageOpen={setIsCartPageOpen}
        />
      )}
    </>
  );
};

export default SearchEnginePage;

import React from "react";
import Modal from "react-modal";

const CustomModal = ({
  isOpen,
  onRequestClose,
  selectedCarIndex,
  filteredCars,
  handleViewDetails,
}) => {
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

  if (selectedCarIndex === null || selectedCarIndex === undefined) return null;

  const selectedCar = filteredCars[selectedCarIndex];

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <h2>
        {selectedCar.Name.charAt(0).toUpperCase() + selectedCar.Name.slice(1)}
      </h2>
      <p>Horsepower: {selectedCar.Horsepower}</p>
      <p>Acceleration: {selectedCar.Acceleration}</p>
      <p>Cylinders: {selectedCar.Cylinders}</p>
      <p>Displacement: {selectedCar.Displacement}</p>
      <p>Origin: {selectedCar.Origin}</p>
      <p>Year: {selectedCar.Year}</p>
      <p>Price: {selectedCar.Price}</p>
      <button onClick={handleViewDetails}>View</button>
    </Modal>
  );
};

export default CustomModal;

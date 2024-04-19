// Import React and Modal from 'react-modal'
import React from "react";
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, selectedCarIndex, filteredCars, handleViewDetails }) => {
  // Define custom styles for the modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // If no car is selected, return null to render nothing
  if (selectedCarIndex === null || selectedCarIndex === undefined) return null;

  // Retrieve the selected car based on the selectedCarIndex
  const selectedCar = filteredCars[selectedCarIndex];

  return (
    <Modal
      isOpen={isOpen} // Set isOpen based on the visibleModal state
      onRequestClose={onRequestClose} // Handle closing the modal
      style={customStyles} // Apply custom styles
    >
      <h2>{selectedCar.Name.charAt(0).toUpperCase() + selectedCar.Name.slice(1)}</h2>
      <p>Horsepower: {selectedCar.Horsepower}</p>
      <p>Acceleration: {selectedCar.Acceleration}</p>
      <p>Cylinders: {selectedCar.Cylinders}</p>
      <p>Displacement: {selectedCar.Displacement}</p>
      <p>Origin: {selectedCar.Origin}</p>
      <p>Year: {selectedCar.Year}</p>
      <button onClick={handleViewDetails}>View</button> 
    </Modal>
  );
};

export default CustomModal;

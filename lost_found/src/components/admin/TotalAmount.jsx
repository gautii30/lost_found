// TotalAmount.jsx
import React from 'react';

const TotalAmount = ({ type, totalAmount }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Total Amount for {type} Items:</h2>
      <p className="text-lg font-medium">{totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default TotalAmount;
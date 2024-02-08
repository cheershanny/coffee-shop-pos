"use client";
import React, { useState } from "react";

interface newOrder {
  price: number;
  name: string;
}

const AddToOrder: React.FC<newOrder> = ({ price, name }) => {

  return (
    <div>
      <button className="btn btn-xs" onClick={() => {alert(`Add ${name} - ${price} into your order!`)}}>
        +
      </button>
    </div>
  );
};

export default AddToOrder;
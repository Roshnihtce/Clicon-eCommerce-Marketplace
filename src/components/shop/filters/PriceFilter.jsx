import React, { useState } from "react";


const priceOptions = [
  "All Price",
  "Under $20",
  "$25 to $100",
  "$100 to $300",
  "$300 to $500",
  "$500 to $1,000",
  "$1,000 to $10,000",
];

const PriceFilter = () => {
  const [selectedPrice, setSelectedPrice] = useState("$300 to $500");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div className="price-filter">
      
      {/* Heading */}
      <h4 className="price-filter__title">
        Price Range
      </h4>

      {/* Range Slider */}
      <div className="price-filter__slider">
        <input
          type="range"
          min="0"
          max="1000"
        />
      </div>

      {/* Min Max Inputs */}
      <div className="price-filter__inputs">
        <input
          type="text"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Radio Options */}
      <div className="price-filter__options">
        {priceOptions.map((item, index) => (
          <label
            key={index}
            className="price-filter__option"
          >
            <input
              type="radio"
              name="price"
              value={item}
              checked={selectedPrice === item}
              onChange={() => setSelectedPrice(item)}
            />

            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
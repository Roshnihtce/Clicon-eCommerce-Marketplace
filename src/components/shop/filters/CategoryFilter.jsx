const categories = [
  'Electronics Devices',
  'Computer & Laptop',
  'Computer Accessories',
  'SmartPhone',
  'Headphone',
  'Mobile Accessories',
  'Gaming Console',
  'Camera & Photo',
  'TV & Homes Appliances',
  'Watches & Accessories',
  'GPS & Navigation',
  'Warable Technology',
]

export default function CategoryFilter() {
  return (
    <div className="category-filter">
      {/* TITLE */}

      <h4 className="filter-title">
        CATEGORY
      </h4>

      {/* CATEGORY LIST */}

      <div className="category-list">
        {categories.map((item, index) => (
          <label
            key={index}
            className="category-item"
          >
            <input
              type="radio"
              name="category"
              defaultChecked={index === 0}
            />

            <span className="radio-circle"></span>

            <span className="category-text">
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
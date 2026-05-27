import popularBrands from '../../../data/popularBrands'

export default function BrandFilter() {
  return (
    <div className="brand-filter">
      <h4 className="filter-title">
        POPULAR BRANDS
      </h4>

      <div className="brand-grid">
        {popularBrands.map((brand) => (
          <label
            key={brand}
            className="brand-item"
          >
            <input type="checkbox" />

            <span className="checkmark"></span>

            <span>{brand}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
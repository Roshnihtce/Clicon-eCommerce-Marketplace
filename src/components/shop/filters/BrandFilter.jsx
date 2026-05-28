import { useDispatch, useSelector } from 'react-redux'
import { toggleBrand } from '../../../store/slices/filterSlice'
import popularBrands from '../../../data/popularBrands'

export default function BrandFilter() {
  const dispatch = useDispatch()

  const selectedBrands = useSelector(
    (state) => state.filters.brand
  )

  return (
    <div className="brand-filter">

      {/* TITLE */}
      <h4 className="filter-title">
        POPULAR BRANDS
      </h4>

      {/* BRAND GRID */}
      <div className="brand-grid">

        {popularBrands.map((brand) => (
          <label
            key={brand}
            className="brand-item"
            style={{ cursor: 'pointer' }}
          >

            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() =>
                dispatch(toggleBrand(brand))
              }
            />

            <span className="checkmark"></span>

            <span>{brand}</span>

          </label>
        ))}

      </div>
    </div>
  )
}
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../../store/slices/filterSlice'

const categories = [
  'All',
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
  const dispatch = useDispatch()

  const selectedCategory = useSelector(
    (state) => state.filters.category
  )

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
            style={{ cursor: 'pointer' }}
          >

            <input
              type="radio"
              name="category"
              checked={selectedCategory === item}
              onChange={() =>
                dispatch(setCategory(item))
              }
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
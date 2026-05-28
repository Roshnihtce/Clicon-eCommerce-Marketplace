import { useDispatch, useSelector } from 'react-redux'
import { setPriceRange } from '../../../store/slices/filterSlice'

const priceOptions = [
  'All Price',
  'Under $20',
  '$25 to $100',
  '$100 to $300',
  '$300 to $500',
  '$500 to $1,000',
  '$1,000 to $10,000',
]

export default function PriceFilter() {
  const dispatch = useDispatch()

  const price = useSelector(
    (state) => state.filters.price
  )

  // handle radio presets
  const handlePriceOption = (value) => {
    let min = 0
    let max = 100000

    switch (value) {
      case 'Under $20':
        max = 20
        break

      case '$25 to $100':
        min = 25
        max = 100
        break

      case '$100 to $300':
        min = 100
        max = 300
        break

      case '$300 to $500':
        min = 300
        max = 500
        break

      case '$500 to $1,000':
        min = 500
        max = 1000
        break

      case '$1,000 to $10,000':
        min = 1000
        max = 10000
        break

      default:
        min = 0
        max = 100000
    }

    dispatch(setPriceRange({ min, max }))
  }

  return (
    <div className="price-filter">

      {/* TITLE */}
      <h4 className="price-filter__title">
        Price Range
      </h4>

      {/* SLIDER */}
      <div className="price-filter__slider">
        <input
          type="range"
          min="0"
          max="10000"
          value={price.max}
          onChange={(e) =>
            dispatch(
              setPriceRange({
                ...price,
                max: Number(e.target.value),
              })
            )
          }
        />
      </div>

      {/* MIN MAX INPUTS */}
      <div className="price-filter__inputs">

        <input
          type="number"
          placeholder="Min price"
          value={price.min}
          onChange={(e) =>
            dispatch(
              setPriceRange({
                ...price,
                min: Number(e.target.value),
              })
            )
          }
        />

        <input
          type="number"
          placeholder="Max price"
          value={price.max}
          onChange={(e) =>
            dispatch(
              setPriceRange({
                ...price,
                max: Number(e.target.value),
              })
            )
          }
        />

      </div>

      {/* RADIO OPTIONS */}
      <div className="price-filter__options">

        {priceOptions.map((item, index) => (
          <label
            key={index}
            className="price-filter__option"
          >
            <input
              type="radio"
              name="price"
              checked={
                item !== 'All Price' &&
                price.min ===
                  handlePriceOptionCheck(item).min &&
                price.max ===
                  handlePriceOptionCheck(item).max
              }
              onChange={() =>
                handlePriceOption(item)
              }
            />

            <span>{item}</span>

          </label>
        ))}

      </div>

    </div>
  )
}

// helper function
function handlePriceOptionCheck(value) {
  switch (value) {
    case 'Under $20':
      return { min: 0, max: 20 }

    case '$25 to $100':
      return { min: 25, max: 100 }

    case '$100 to $300':
      return { min: 100, max: 300 }

    case '$300 to $500':
      return { min: 300, max: 500 }

    case '$500 to $1,000':
      return { min: 500, max: 1000 }

    case '$1,000 to $10,000':
      return { min: 1000, max: 10000 }

    default:
      return { min: 0, max: 100000 }
  }
}
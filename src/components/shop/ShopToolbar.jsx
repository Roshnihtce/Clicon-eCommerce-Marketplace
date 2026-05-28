import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import { setSearch, setSort, clearFilters } from '../../store/slices/filterSlice'

export default function ShopToolbar() {
  const dispatch = useDispatch()

  const filters = useSelector((state) => state.filters)

  const activeFilters = []

  if (filters.category !== 'All') activeFilters.push(filters.category)
  if (filters.tag) activeFilters.push(filters.tag)
  if (filters.brand.length) activeFilters.push(...filters.brand)

  return (
    <div className="shop-toolbar p-3 bg-white rounded shadow-sm">

      {/* TOP BAR */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

        {/* SEARCH */}
        <div className="position-relative flex-grow-1">
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) =>
              dispatch(setSearch(e.target.value))
            }
          />

          <Search
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0.5,
            }}
          />
        </div>

        {/* SORT */}
        <div className="d-flex align-items-center gap-2">
          <span>Sort:</span>

          <Form.Select
            value={filters.sort}
            onChange={(e) =>
              dispatch(setSort(e.target.value))
            }
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </Form.Select>
        </div>

      </div>

      {/* ACTIVE FILTERS */}
      <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">

        <div className="d-flex flex-wrap gap-2 align-items-center">

          <span className="fw-bold">Active Filters:</span>

          {activeFilters.length === 0 ? (
            <span className="text-muted">None</span>
          ) : (
            activeFilters.map((item, i) => (
              <button
                key={i}
                className="btn btn-sm btn-outline-dark"
                onClick={() => dispatch(clearFilters())}
              >
                {item} ✕
              </button>
            ))
          )}

        </div>

        <button
          className="btn btn-sm btn-danger"
          onClick={() => dispatch(clearFilters())}
        >
          Clear All
        </button>

      </div>

    </div>
  )
}
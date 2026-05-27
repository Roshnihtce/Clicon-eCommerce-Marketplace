import { Form } from 'react-bootstrap'

import { Search } from 'react-bootstrap-icons'

export default function ShopToolbar() {
  return (
    <div className="shop-toolbar">
      {/* TOP */}

      <div className="shop-toolbar-top">
        {/* SEARCH */}

        <div className="toolbar-search">
          <Form.Control
            type="text"
            placeholder="Search for anything..."
            className="shadow-none"
          />

          <Search className="search-icon" />
        </div>

        {/* SORT */}

        <div className="toolbar-sort">
          <span>Sort by:</span>

          <Form.Select className="shadow-none">
            <option>
              Most Popular
            </option>

            <option>Newest</option>
          </Form.Select>
        </div>
      </div>

      {/* FILTER BAR */}

      <div className="active-filters">
        <div className="filters-left">
          <span className="filter-title">
            Active Filters:
          </span>

          <button>
            Electronics Devices ✕
          </button>

          <button>
            5 Star Rating ✕
          </button>
        </div>

        <div className="filters-result">
          <strong>65,867</strong> Results found.
        </div>
      </div>
    </div>
  )
}
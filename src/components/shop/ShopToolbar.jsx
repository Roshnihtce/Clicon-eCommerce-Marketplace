import { Form } from 'react-bootstrap'

export default function ShopToolbar() {
  return (
    <div className="shop-toolbar">
      {/* SEARCH */}

      <div className="toolbar-search">
        <Form.Control placeholder="Search for anything..." />
      </div>

      {/* SORT */}

      <div className="toolbar-sort">
        <span>Sort by:</span>

        <Form.Select>
          <option>Most Popular</option>
        </Form.Select>
      </div>
    </div>
  )
}
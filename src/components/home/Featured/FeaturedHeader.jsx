export default function FeaturedHeader() {
  return (
    <div className="featured-header">
      <h2>Featured Products</h2>

      <div className="featured-tabs">
        <button className="active">
          All Product
        </button>

        <button>Smart Phone</button>

        <button>Laptop</button>

        <button>Headphone</button>

        <button>TV</button>

        <button className="browse-btn">
          Browse All Product →
        </button>
      </div>
    </div>
  )
}
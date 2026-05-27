export default function ShowcaseHeader() {
  return (
    <div className="showcase-header">
      <h2>Computer Accessories</h2>

      <div className="showcase-tabs">
        <button className="active">
          All Product
        </button>

        <button>
          Keyboard & Mouse
        </button>

        <button>Headphone</button>

        <button>Webcam</button>

        <button>Printer</button>

        <button className="browse-btn">
          Browse All Product →
        </button>
      </div>
    </div>
  )
}
export default function ProductGallery({
  product,
}) {
  return (
    <div className="product-gallery">
      {/* MAIN IMAGE */}

      <div className="main-image">
        <img
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
        />
        
      </div>

      {/* THUMBS */}

      <div className="gallery-thumbs">
        {product.gallery?.map(
          (image, index) => (
            <div
              key={index}
              className={`thumb ${
                index === 0
                  ? 'active'
                  : ''
              }`}
            >
              <img
                src={image}
                alt=""
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}
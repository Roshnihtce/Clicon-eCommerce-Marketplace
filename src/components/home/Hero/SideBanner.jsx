import { ArrowRight } from 'react-bootstrap-icons'

import phoneImage from '../../../assets/images/Phones.webp'

import budsImage from '../../../assets/images/EarBuds.webp'

export default function SideBanner() {
  return (
    <div className="d-flex flex-column gap-4 h-100">
      {/* TOP BANNER */}

      <div
        className="position-relative overflow-hidden rounded-3"
        style={{
          background: '#191C1F',
          height: '280px',
          padding: '32px 28px',
        }}
      >
        {/* CONTENT */}

        <div
          style={{
            maxWidth: '180px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <span
            className="d-block mb-3 fw-medium"
            style={{
              color: '#EBC80C',
              fontSize: '13px',
              letterSpacing: '0.5px',
            }}
          >
            SUMMER SALES
          </span>

          <h3
            className="text-white fw-semibold mb-4"
            style={{
              fontSize: '24px',
              lineHeight: '40px',
            }}
          >
            New Google Pixel 6 Pro
          </h3>

          <button
            className="border-0 text-white fw-bold d-flex align-items-center justify-content-center gap-2"
            style={{
              width: '156px',
              height: '48px',
              background: '#FA8232',
              fontSize: '14px',
            }}
          >
            SHOP NOW

            <ArrowRight />
          </button>
        </div>

        {/* PHONE IMAGE */}

        <img
          src={phoneImage}
          alt="phone"
          className="position-absolute"
          style={{
            right: '-5px',
            bottom: '0',
            width: '220px',
            objectFit: 'contain',
          }}
        />

        {/* DISCOUNT */}

        <div
          className="position-absolute fw-bold d-flex align-items-center justify-content-center"
          style={{
            width: '100px',
            height: '56px',
            background: '#EFD33D',
            top: '18px',
            right: '18px',
            fontSize: '24px',
            color: '#191C1F',
          }}
        >
          29% OFF
        </div>
      </div>

      {/* BOTTOM BANNER */}

      <div
        className="rounded-3 d-flex align-items-center justify-content-between overflow-hidden"
        style={{
          background: '#F2F4F5',
          height: '248px',
          padding: '32px 28px',
        }}
      >
        {/* LEFT IMAGE */}

        <div>
          <img
            src={budsImage}
            alt="buds"
            style={{
              width: '170px',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* RIGHT CONTENT */}

        <div
          style={{
            maxWidth: '200px',
          }}
        >
          <h3
            className="fw-semibold mb-3"
            style={{
              fontSize: '24px',
              lineHeight: '30px',
              color: '#191C1F',
            }}
          >
            Xiaomi FlipBuds Pro
          </h3>

          <p
            className="fw-semibold mb-4"
            style={{
              color: '#2DA5F3',
              fontSize: '28px',
            }}
          >
            $299 USD
          </p>

          <button
            className="border-0 text-white fw-bold d-flex align-items-center justify-content-center gap-2"
            style={{
              width: '156px',
              height: '48px',
              background: '#FA8232',
              fontSize: '14px',
            }}
          >
            SHOP NOW

            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
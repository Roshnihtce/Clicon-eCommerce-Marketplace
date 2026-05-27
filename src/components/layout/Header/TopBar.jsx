// import { Container, Row, Col } from 'react-bootstrap'
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
// } from 'react-bootstrap-icons'

// export default function TopBar() {
//   return (
//     <div className="topbar">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={6}>
//             <p className="topbar-text font-secondary">
//               Welcome to Clicon online eCommerce store.
//             </p>
//           </Col>

//           <Col md={6}>
//             <div className="topbar-right">
//               <span>Follow us:</span>

//               <div className="social-icons">
//                 <Facebook />
//                 <Twitter />
//                 <Instagram />
//                 <Youtube />
//               </div>

//               <select>
//                 <option>Eng</option>
//               </select>

//               <select>
//                 <option>USD</option>
//               </select>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }


import { Container, Row, Col } from 'react-bootstrap'

import {
  Twitter,
  Facebook,
  Pinterest,
  Reddit,
  Youtube,
  Instagram,
  ChevronDown,
} from 'react-bootstrap-icons'

export default function TopBar() {
  return (
    <div className="topbar">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}

          <Col lg={6}>
            <p className="topbar-text">
              Welcome to Clicon online
              eCommerce store.
            </p>
          </Col>

          {/* RIGHT SIDE */}

          <Col lg={6}>
            <div className="topbar-right">
              {/* FOLLOW US */}

              <div className="follow-us">
                <span>Follow us:</span>

                <div className="social-icons">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter />
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook />
                  </a>

                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Pinterest />
                  </a>

                  <a
                    href="https://reddit.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Reddit />
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Youtube />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>

              {/* LANGUAGE & CURRENCY */}

              <div className="topbar-select">
                <button>
                  Eng
                  <ChevronDown />
                </button>

                <button>
                  USD
                  <ChevronDown />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
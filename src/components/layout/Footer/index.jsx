// import { Container, Row, Col } from 'react-bootstrap'

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <Container>
//         <div className="footer-top">
//           <Row>
//             <Col lg={3} md={6}>
//               <div className="footer-logo">
//                 <h2>CLICON</h2>

//                 <p>Customer Supports:</p>

//                 <h4>(629) 555-0129</h4>

//                 <span>
//                   4517 Washington Ave.
//                   <br />
//                   Manchester, Kentucky 39495
//                 </span>

//                 <a href="mailto:info@kinbo.com">
//                   info@kinbo.com
//                 </a>
//               </div>
//             </Col>

//             <Col lg={2} md={6}>
//               <div className="footer-links">
//                 <h5>TOP CATEGORY</h5>

//                 <ul>
//                   <li>Computer & Laptop</li>
//                   <li>SmartPhone</li>
//                   <li>Headphone</li>
//                   <li>Accessories</li>
//                   <li>Camera & Photo</li>
//                   <li>TV & Homes</li>
//                 </ul>
//               </div>
//             </Col>

//             <Col lg={2} md={6}>
//               <div className="footer-links">
//                 <h5>QUICK LINKS</h5>

//                 <ul>
//                   <li>Shop Product</li>
//                   <li>Shopping Cart</li>
//                   <li>Wishlist</li>
//                   <li>Compare</li>
//                   <li>Track Order</li>
//                   <li>Customer Help</li>
//                 </ul>
//               </div>
//             </Col>

//             <Col lg={2} md={6}>
//               <div className="footer-links">
//                 <h5>DOWNLOAD APP</h5>

//                 <button className="app-btn">
//                   Google Play
//                 </button>

//                 <button className="app-btn">
//                   App Store
//                 </button>
//               </div>
//             </Col>

//             <Col lg={3} md={12}>
//               <div className="footer-links">
//                 <h5>POPULAR TAG</h5>

//                 <div className="tags">
//                   <span>Game</span>
//                   <span>iPhone</span>
//                   <span>TV</span>
//                   <span>Asus Laptops</span>
//                   <span>SSD</span>
//                   <span>Graphics Card</span>
//                   <span>Speaker</span>
//                   <span>Samsung</span>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>

//         <div className="footer-bottom">
//           <p>
//             Kinbo - eCommerce Template © 2021.
//             Design by Templatecookie
//           </p>
//         </div>
//       </Container>
//     </footer>
//   )
// }






import { Container, Row, Col } from 'react-bootstrap'

import {
  ArrowRight,
} from 'react-bootstrap-icons'

import googlePlay from '../../../assets/logo&icons/googlePlay.svg'

import appStore from '../../../assets/logo&icons/AppleWhite.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/* FOOTER TOP */}

        <div className="footer-top">
          <Row className="gx-3">
            {/* LOGO SECTION */}

            <Col lg={3} md={6}>
              <div className="footer-logo">
                <div className="logo">
                  <div className="logo-circle">
                    O
                  </div>

                  <h2>CLICON</h2>
                </div>

                <p>
                  Customer Supports:
                </p>

                <h4>(629) 555-0129</h4>

                <span>
                  4517 Washington Ave.
                  <br />
                  Manchester, Kentucky
                  39495
                </span>

                <a href="mailto:info@kinbo.com">
                  info@kinbo.com
                </a>
              </div>
            </Col>

            {/* TOP CATEGORY */}

            <Col lg={2} md={6}>
              <div className="footer-links">
                <h5>TOP CATEGORY</h5>

                <ul>
                  <li>
                    Computer & Laptop
                  </li>

                  <li>SmartPhone</li>

                  <li>Headphone</li>

                  <li className="active">
                    Accessories
                  </li>

                  <li>
                    Camera & Photo
                  </li>

                  <li>TV & Homes</li>
                </ul>

                <div className="browse-product">
                  Browse All Product

                  <ArrowRight />
                </div>
              </div>
            </Col>

            {/* QUICK LINKS */}

            <Col lg={2} md={6}>
              <div className="footer-links">
                <h5>QUICK LINKS</h5>

                <ul>
                  <li>Shop Product</li>

                  <li>
                    Shopping Cart
                  </li>

                  <li>Wishlist</li>

                  <li>Compare</li>

                  <li>Track Order</li>

                  <li>
                    Customer Help
                  </li>

                  <li>About Us</li>
                </ul>
              </div>
            </Col>

            {/* DOWNLOAD APP */}

            <Col lg={2} md={6}>
              <div className="footer-links">
                <h5>DOWNLOAD APP</h5>

                {/* GOOGLE PLAY */}

                <button className="app-btn">
                  <img
                    src={googlePlay}
                    alt="google-play"
                  />

                  <div className="app-content">
                    <span>
                      Get it now
                    </span>

                    <h6>
                      Google Play
                    </h6>
                  </div>
                </button>

                {/* APP STORE */}

                <button className="app-btn">
                  <img
                    src={appStore}
                    alt="app-store"
                  />

                  <div className="app-content">
                    <span>
                      Get it now
                    </span>

                    <h6>App Store</h6>
                  </div>
                </button>
              </div>
            </Col>

            {/* POPULAR TAG */}

            <Col lg={3} md={12}>
              <div className="footer-links">
                <h5>POPULAR TAG</h5>

                <div className="tags">
                  <span>Game</span>

                  <span>iPhone</span>

                  <span>TV</span>

                  <span>Asus Laptops</span>

                  <span>Macbook</span>

                  <span>SSD</span>

                  <span>
                    Graphics Card
                  </span>

                  <span>
                    Power Bank
                  </span>

                  <span>Smart TV</span>

                  <span>Speaker</span>

                  <span>Tablet</span>

                  <span>Microwave</span>

                  <span>Samsung</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">
          <p>
            Kinbo - eCommerce Template ©2021. Design by Templatecookie
          </p>
        </div>
      </Container>
    </footer>
  )
}
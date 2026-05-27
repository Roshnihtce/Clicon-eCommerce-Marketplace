// import { Container, Row, Col, Form } from 'react-bootstrap'

// import {
//   Cart3,
//   Heart,
//   Person,
//   Search,
// } from 'react-bootstrap-icons'

// export default function MainHeader() {
//   return (
//     <div className="main-header">
//       <Container>
//         <Row className="align-items-center">
//           <Col lg={2}>
//             <div className="logo">
//               <h2>CLICON</h2>
//             </div>
//           </Col>

//           <Col lg={7}>
//             <div className="search-box">
//               <Form.Control
//                 type="text"
//                 placeholder="Search for anything..."
//               />

//               <button>
//                 <Search />
//               </button>
//             </div>
//           </Col>

//           <Col lg={3}>
//             <div className="header-icons">
//               <button>
//                 <Cart3 />
//               </button>

//               <button>
//                 <Heart />
//               </button>

//               <button>
//                 <Person />
//               </button>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }





import { Container, Row, Col, Form } from 'react-bootstrap'

import {
  Cart3,
  Heart,
  Person,
  Search,
} from 'react-bootstrap-icons'

export default function MainHeader() {
  return (
    <div className="main-header">
      <Container>
        <Row className="align-items-center">
          {/* LOGO */}

          <Col lg={2}>
            <div className="logo">
              <div className="logo-circle">
                O
              </div>

              <h2>CLICON</h2>
            </div>
          </Col>

          {/* SEARCH */}

          <Col lg={7}>
            <div className="search-box">
              <Form.Control
                type="text"
                placeholder="Search for anything..."
              />

              <button>
                <Search />
              </button>
            </div>
          </Col>

          {/* ICONS */}

          <Col lg={3}>
            <div className="header-icons">
              {/* CART */}

              <button className="cart-btn">
                <Cart3 />

                <span>2</span>
              </button>

              {/* HEART */}

              <button>
                <Heart />
              </button>

              {/* USER */}

              <button>
                <Person />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <Container fluid className="bg-dark text-light">
      <Row className="p-3">
        <Col className="text-center">
          <p>Follow us on social media:</p>
          <div className="d-flex justify-content-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-light"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-light"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-light"
            >
              <FaInstagram size={32} />
            </a>
          </div>
          <div className='pt-4'>
            
          <p>Copyright © 2023 Switch_Music</p>
          <p>Maruthamalai Road, Coimbatore</p>
          <p>PinCode: 641 046</p>
          </div>
        </Col>
      </Row>
    </Container>
        </footer>
    )
}

export default Footer;

{/* <Container fluid className="bg-dark text-light">
                <Row className="p-3">
                    <Col className='text-center py-3'>
                        Copyright &copy; ProShop
                    </Col>
                </Row>
            </Container> */}
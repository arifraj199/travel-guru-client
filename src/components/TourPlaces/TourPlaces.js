import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import coxBazar from "../../assets/images/Rectangle 1.png";

const TourPlaces = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/gJp6rNr/bg-Image-11zon.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "90vh",
      }}
    >
      <Container>
        <Row
          style={{
            paddingTop: "170px",
          }}
          className="d-flex align-items-center"
        >
          <Col lg="4" className="text-white">
            <h1>Cox's Bazar</h1>
            <p>
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>
            <Button variant="warning">
              <span className="me-2">Booking</span>
              <FaArrowRight></FaArrowRight>
            </Button>
          </Col>
          <Col lg="8">
            <Row>
              <Col
                className="border border-warning me-4"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/X2pFhNr/Rectangle-1-11zon.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "50vh",
                  borderRadius: "20px",
                }}
                lg="3"
              >
                <h4
                  style={{
                    paddingBottom: "80px",
                  }}
                  className="text-white position-absolute bottom-0 fw-bold"
                >
                  COX'S BAZAR
                </h4>
              </Col>
              <Col
                className="border border-warning me-4"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/Yj5mCy2/Sreemongol-11zon.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "50vh",
                  borderRadius: "20px",
                }}
                lg="3"
              >
                <h4
                  style={{
                    paddingBottom: "80px",
                  }}
                  className="text-white position-absolute bottom-0 fw-bold"
                >
                  SREEMANGAL
                </h4>
              </Col>
              <Col
                className="border border-warning"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/WvK9nkb/sundorbon-11zon.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "50vh",
                  borderRadius: "20px",
                }}
                lg="3"
              >
                <h4
                  style={{
                    paddingBottom: "80px",
                  }}
                  className="text-white position-absolute bottom-0 fw-bold"
                >
                  SUNDARBAN
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TourPlaces;

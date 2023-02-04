import React from "react";
import { Col, Row } from "react-bootstrap";

const TourPlaces = ({ tour, setTourInfo }) => {
  const { picture, name } = tour;
  const handlePlaces = (tour) => {
    setTourInfo(tour);
  };
  return (
    <Col>
      <Row onClick={() => handlePlaces(tour)}>
        <Col
          className="border border-warning ms-4"
          style={{
            backgroundImage: `url(${picture})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "50vh",
            borderRadius: "20px",
          }}
          lg="11"
        >
          <h4
            style={{
              paddingBottom: "80px",
            }}
            className="text-white position-absolute bottom-0 fw-bold"
          >
            {name}
          </h4>
        </Col>
      </Row>
    </Col>
  );
};

export default TourPlaces;

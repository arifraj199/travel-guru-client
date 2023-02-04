import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const VisitPlace = () => {
  const place = useLoaderData();
  const { picture, name, description } = place;
  console.log(place);
  return (
    <div
      style={{
        backgroundImage: `url(${picture})`,
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
          <Col className="text-white" lg="6">
            <h1 className="fw-bold" style={{ fontSize: "50px" }}>
              {name}
            </h1>
            <p>{description}</p>
          </Col>
          <Col lg="6">
            <Form className="w-75 bg-white p-3 rounded rounded-lg">
              <Form.Group className="mb-3" controlId="formBasicOrigin">
                <Form.Label className="fw-semibold">Origin</Form.Label>
                <Form.Control type="text" placeholder="From..." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDestination">
                <Form.Label className="fw-semibold">Destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="To..."
                  value={name}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-between mb-3">
                <div className="">
                  <Form.Label className="fw-semibold">From</Form.Label>
                  <Form.Control type="date" placeholder="" />
                </div>
                <div className="">
                  <Form.Label className="fw-semibold">To</Form.Label>
                  <Form.Control type="date" placeholder="" />
                </div>
              </Form.Group>
              <Button
                variant="warning"
                type="submit"
                className="w-100 fw-semibold"
              >
                Start Booking
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VisitPlace;

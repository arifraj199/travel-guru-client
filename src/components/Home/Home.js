import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import TourPlaces from "../TourPlaces/TourPlaces";

const Home = () => {
  const tourData = useLoaderData();
  // console.log(tourData);
  const [tourInfo, setTourInfo] = useState({ id: 1 });
  //   console.log(tourInfo);
  const navigate = useNavigate();

  const handleBooking = (id) => {
    if (id) {
      console.log("clicked id:", id);
      navigate(`/places/${id}`);
    }
  };

  return (
    <div
      style={{
        backgroundImage: tourInfo.picture
          ? `url(${tourInfo.picture})`
          : `url('https://i.ibb.co/WvK9nkb/sundorbon-11zon.jpg')`,
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
            <h1>{tourInfo.name ? tourInfo.name : <span>Sundarban</span>}</h1>
            <p>
              {tourInfo.description ? (
                tourInfo.description.slice(0, 200)
              ) : (
                <span>
                  Sundarban is a town on the southeast coast of Bangladesh. It’s
                  known for its very long, sandy beachfront, stretching from Sea
                  Beach in the north to Kolatoli Beach in the south. Aggameda
                  Khyang monas
                </span>
              )}
            </p>
            <Button
              onClick={() => handleBooking(tourInfo.id)}
              variant="warning"
            >
              <span className="me-2">Booking</span>
              <FaArrowRight></FaArrowRight>
            </Button>
          </Col>

          {tourData.map((tour) => (
            <TourPlaces
              key={tour.id}
              tour={tour}
              setTourInfo={setTourInfo}
            ></TourPlaces>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

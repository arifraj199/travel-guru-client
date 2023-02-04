import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import TourPlaces from "../TourPlaces/TourPlaces";

const Home = () => {
  const tourData = useLoaderData();
  // console.log(tourData);
  const [tourInfo, setTourInfo] = useState({});
  console.log(tourInfo);
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
                tourInfo.description
              ) : (
                <span>
                  Sundarban is a town on the southeast coast of Bangladesh. It’s
                  known for its very long, sandy beachfront, stretching from Sea
                  Beach in the north to Kolatoli Beach in the south. Aggameda
                  Khyang monastery is home to bronze statues and centuries-old
                  Buddhist manuscripts. South of town, the tropical rainforest
                  of Himchari National Park has waterfalls and many birds.
                  North, sea turtles breed on nearby Sonadia Island.
                </span>
              )}
            </p>
            <Button variant="warning">
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

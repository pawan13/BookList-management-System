import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import Carousels from "../../components/carosuels/Carousels";
import CustomCard from "../../components/customCard/CustomCard";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return <DefaultLayout>
    <Carousels/>

    <Container>
      <Row>
        <Col>
        <h1 className="mt-5">Book </h1>
        <hr/>
        </Col>
      </Row>

      <Row>
        <CustomCard />
      </Row>
    </Container>
  </DefaultLayout>;
};

export default Home;

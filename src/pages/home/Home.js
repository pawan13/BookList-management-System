import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import Carousels from "../../components/carosuels/Carousels";
import CustomCard from "../../components/customCard/CustomCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Home.css"

const Home = () => {
  const {bookList} = useSelector((state)=> state.books)
  return   <DefaultLayout>
    <Carousels/>
    <Container>
      <Row>
        <Col>
        <h1 className="mt-5">Book </h1>
        <hr/>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-around flex-wrap gap-2 ">
          {bookList.map((item, i)=>
            <CustomCard key={item.id} {...item}/>
          )}
        
        </Col>
      </Row>
    </Container>
  </DefaultLayout>;
};

export default Home;

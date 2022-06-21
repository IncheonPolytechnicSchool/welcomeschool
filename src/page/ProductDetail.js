import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import { faSchoolCircleCheck } from '@fortawesome/free-solid-svg-icons';


const ProductDetail = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/IncheonPolytechnicSchool/welcomeschool/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
};

useEffect(() => {
  getProductDetail();
}, []);


  return (
    <BrowserRouter>
    <Container>
      <Row>
        <Col>
  <a name="tag0"></a>      
  <Table striped bordered hover>
  <thead className="tHead">
    <tr>  
      <td></td>
      <td>페이지구성</td>
    </tr>
  </thead> 
  <tbody>
  <tr>
      <td><FontAwesomeIcon icon={faSchoolCircleCheck} /><a href={product?.table0_1_0_href}> {product?.table0_1_0}</a></td>
      <td><Route path={product?.table0_1_1_Route}>{product?.table0_1_1}</Route></td>
    </tr>
    <tr>
      <td><FontAwesomeIcon icon={faVideo} /> 유튜브</td>
      <td><a href="#tag1">{product?.table0_2_1}</a></td>
    </tr>
    <tr>
      <td><FontAwesomeIcon icon={faPhotoVideo} /> 포토슬라이더</td>
      <td><a href="#tag2">{product?.table0_3_1}</a></td>
    </tr>
      </tbody>
    </Table>
  </Col>
</Row>

<Row>
  <a name="tag1"></a>
  <Button variant="outline-primary"><a href="#tag0"><FontAwesomeIcon icon={faVideo} /> YouTube영상</a></Button>
  <div class="video-container">
    <iframe width="560" height="315" src={product?.youtube} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</Row>
<br></br>

     <a name ="tag3"></a>
     <Button variant="outline-primary"><a href="#tag0"><FontAwesomeIcon icon={faPhotoFilm} /> 포토슬라이더</a></Button>
     <br></br>
     <Button variant="outline-danger"><a href="/food/#tag2"><FontAwesomeIcon icon={faPhotoVideo} />-포토슬라이더 더보기</a></Button>
<Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src={product?.slider1}
                />
            <Carousel.Caption>
                <h3>{product?.slider1_caption1}</h3>
                <p>{product?.slider1_caption2}</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                src={product?.slider2}
                />
            <Carousel.Caption>
                <h3>{product?.slider2_caption1}</h3>
                <p>{product?.slider2_caption2}</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
              className="d-block w-100"
              src={product?.slider3}
              />
              <Carousel.Caption>
                <h3>{product?.slider3_caption1}</h3>
                <p>{product?.slider3_caption2}</p>
              </Carousel.Caption>

        </Carousel.Item>
    </Carousel>
    </Container>
    </BrowserRouter>
 
  )
}

export default ProductDetail
import React from 'react'
import { Container, Row, Col, Table, Button, Carousel } from "react-bootstrap" ;

const Food = () => {
  return (
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
    <td><a href="#tag1">학교 홈페이지</a></td>
    <td><a href="#tag1">이달의 급식 식단표</a></td>
  </tr>
  <tr>
    <td><a href="#tag2">포토 슬라이더</a></td>
    <td><a href="#tag2">학교 급식 소개</a></td>
  </tr>
  <tr>
    <td></td>
    <td><a href="#tag4"></a></td>
  </tr>
  <tr>
    <td></td>
    <td><a href="#tag3"></a></td>
  </tr>
    </tbody>
  </Table>
</Col>
</Row>
    <Row>
      <a name ="tag1"></a>
      <Button variant="outline-primary"><a href="#tag0">카카오지도<br></br>인천산업정보학교</a></Button>
      <div className="web-container_2">
        <iframe name="ips" src="http://sanup.icesc.kr/foodlist.do?m=030406&s=sanup" frameborder="0" onload="window.frames['ips'].scrollTo(0,200)"></iframe>
      </div>
     </Row>
     <br></br>
     <br></br>
    <Row>
       <a name="tag2"></a>
       <Button variant="outline-primary"><a href="#tag0">[포토]급식 소개</a></Button>
        <Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="http://sanup.icesc.kr/upload/foodlist/sanup/1653275209912.jpg"
                />
            <Carousel.Caption>
                <h3>투움바 바스타</h3>
                <p>2022-05-18</p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel>
    </Row>  
  </Container>
  )
}

export default Food
import React from 'react'
import { Container, Row, Col, Table, Button } from "react-bootstrap" ;

const Test = () => {
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
      <td><a href="#tag1">카카오 지도</a></td>
      <td><a href="#tag1">길찾기, 지도</a></td>
    </tr>
    <tr>
      <td><a href="#tag2">오시는길 안내</a></td>
      <td><a href="#tag2">도원역에서 오시는 길</a></td>
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
        <div className="web-container">
          <iframe src="https://map.kakao.com/?urlX=420632&urlY=1103549&urlLevel=3&itemId=8054040&q=%EC%9D%B8%EC%B2%9C%EC%82%B0%EC%97%85%EC%A0%95%EB%B3%B4%ED%95%99%EA%B5%90&srcid=8054040&map_type=TYPE_MAP" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       </Row>
       <br></br>
       <Row> 
        <a name="tag2"></a>
        <Button variant="outline-primary"><a href="#tag0">도원역에서 오시는길</a></Button>
        <div className="web-container">
          <iframe src="https://ipsmap.netlify.app" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Row> 
    </Container>
  )
}

export default Test
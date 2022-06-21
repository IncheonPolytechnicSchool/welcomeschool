import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


const ProductAll = () => {
  const navigate = useNavigate();
  const goToLogin = () =>{
    navigate("/login");
  }
  const [productList, setProductList] = useState([]);
  const [query,setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery=query.get("q") || "";
      console.log("쿼리값은?", searchQuery);
    let url =  `https://my-json-server.typicode.com/IncheonPolytechnicSchool/welcomeschool/products?q=${searchQuery}` ;
    let response = await fetch(url) ;
    let data = await response.json() ;
    setProductList(data)
  };
  useEffect(()=>{
    getProducts();
  },[query]);
  return (
  <div>
      <Container>
        <Row>
          {productList.map((menu) => ( 
          <Col lg={3}>
            <ProductCard item={menu} />
          </Col>
          ))}
        </Row>
        <Row> 
          <Col lg={3}>
          </Col>
        </Row>
      </Container>
  </div>
  );
};

export default ProductAll
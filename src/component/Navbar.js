import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Table, Button, Carousel } from "react-bootstrap";


const Navbar = () => {
  const menuList = ['호텔조리과','뷰티아트과', '사진영상예술과', '시각디자인과', '펫케어과', '소프트웨어과'];
  const navigate = useNavigate();
  const goToLogin = () =>{
    navigate("/login");}
  const home = () =>{
      navigate("/");}

  const search = (event) => {
    if(event.key === "Enter"){
      let keyword = event.target.value;
      console.log("keyword", keyword);
      navigate(`/?q=${keyword}`);
    }
  }
  return <div>
       <div>
        <div class="login-button">
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:032-765-5471">_대표전화: 032-765-5471 </a>
        <div></div>
        </div>
      </div>
      
     
      <div className="nav-section">
  
      <img
        width = {350} 
        src="https://drive.google.com/uc?export=view&id=1-L6CbPyCqwzD_Y-LdzXIKfsmmRcTZ0Rr" 
        onClick = {home}
        />
      </div>
      <div className="menu-area">
              <div>
                <FontAwesomeIcon icon={faSearch} />
                <input type = "text" placeholder="검색어를 입력해주세요" onKeyPress={ (event) =>search(event) }/>
              </div>
          
       </div>

      </div>

      

}

export default Navbar
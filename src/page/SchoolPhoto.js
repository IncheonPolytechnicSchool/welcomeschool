import React from 'react'
import { Container, Carousel, Row, Col, Table, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut, faMagicWandSparkles, faGraduationCap, faCoffee, faBreadSlice, faFileCode, faMobileAndroid, faMobileAndroidAlt, faTabletAndroid, faLaptopCode, faUtensils, faBowlFood, faBezierCurve, faBaseball, faBasketball, faVolleyball, faFutbol, faDumbbell, faBook, faHandHoldingMedical, faComments, faWrench, faMicrophoneLines, faDroplet, faChalkboardTeacher, faArrowAltCircleRight, faPhotoVideo, faCompassDrafting, faCamera, faPaw, faDog, faUsers, faVrCardboard, faHandHoldingHeart, faBowlRice, faCookie, faCookieBite, faComputer, faFile, faFolder, faMicrophone, faDatabase, faBroom, faBicycle } from '@fortawesome/free-solid-svg-icons';

const SchoolPhoto = () => {
  return (
    <div>
        <Container>
        <Row>
              <Col>
              
              <Table striped bordered hover className="vertical">
                
                 <thead className="tHead">
                    <tr>
                     <th colSpan={3}><a name="tag0">페이지 구성</a> / <a href="#tag30">배치도 이동</a></th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}><a href="#tag1">학교전경</a></td>
                        <td>
                            실습동, 본관동, <FontAwesomeIcon icon={faBowlFood} />학교식당, <FontAwesomeIcon icon={faBasketball} />농구코트, <FontAwesomeIcon icon={faVolleyball} />운동코트, <FontAwesomeIcon icon={faFutbol} />운동장, 학생쉼터 등
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>실습동</td>
                    </tr>
                    <tr>
                        <td><a href="#tag2">3층</a></td>
                        <td>시각디자인과, <a href="#tag11"><FontAwesomeIcon icon={faCamera} />사진영상실</a>, 미디어제작실, <a href="#tag12"><FontAwesomeIcon icon={faBook} />도서관</a>, 강당, <FontAwesomeIcon icon={faChalkboardTeacher} />제3교무실</td>
                    </tr>
                    <tr>
                        <td><a href="#tag3">2층</a></td>
                        <td><FontAwesomeIcon icon={faMagicWandSparkles}/>뷰티아트과, <FontAwesomeIcon icon={faPaw}/>펫케어과, 취업상담실, VR체험실, <FontAwesomeIcon icon={faChalkboardTeacher} />제2교무실</td>
                    </tr>
                    <tr>
                        <td><a href="#tag4">1층</a></td>
                        <td>제빵실, 제과실, 한식조리실(&바리스타실), 서양조리실, <FontAwesomeIcon icon={faChalkboardTeacher} />교무실(호텔조리과)</td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>본관동</td>
                        <td><a href="#tag13">3층</a></td>
                        <td>소프트웨어과, <FontAwesomeIcon icon={faChalkboardTeacher} />교무실(소프트웨어과), 회의실, 서고 </td>
                    </tr>
                    <tr>
                        <td>2층</td>
                        <td><FontAwesomeIcon icon={faChalkboardTeacher} />제1교무실, 행정실, 교장실, 장학협의실, <FontAwesomeIcon icon={faMicrophoneLines} />방송실 </td>
                    </tr>
                    <tr>
                        <td><a href="#tag7">1층</a></td>
                        <td><FontAwesomeIcon icon={faHandHoldingMedical} />보건실, <FontAwesomeIcon icon={faComments} />Wee클래스(상담실), <FontAwesomeIcon icon={faWrench} />시설관리실, 교실, 숙직실 </td>
                    </tr>
                </tbody>
  </Table>
              </Col>
          </Row>
          <Row>
              <Col>
              
              <Table striped bordered hover className="vertical">
                
                 <thead className="tHead">
                    <tr>
                     <th colSpan={12}><a name="tag30"></a>배치도 / <a href="#tag0">'페이지 구성' 이동</a></th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td rowSpan={6}>실습동</td>
                        <td rowSpan={2}><a href="#tag2">3층</a></td>
                        <td colSpan={4}>
                            다목적<br></br>강당
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faChalkboardTeacher} />제3<br></br>교무실
                        </td>
                        <td>
                            시각<br></br>디자인<br></br>9반
                        </td>
                        <td>
                            사진<br></br>영상<br></br>8반
                        </td>
                        <td colSpan={3}>
                            <a href="#tag12"><FontAwesomeIcon icon={faBook} />도서관</a>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faBezierCurve}/>컴퓨터<br></br>디자인실
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faCompassDrafting}/>시각<br></br>디자인실
                        </td>
                        <td colSpan={2}>사진영상<br></br>예술과<br></br>준비실</td> 
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faPhotoVideo}/>미디어<br></br>제작실
                        </td> 
                        <td colSpan={2}>
                            <a href="#tag11"><FontAwesomeIcon icon={faCamera}/>사진<br></br>영상실</a>
                        </td> 
                    </tr>
                    <tr>
                        <td rowSpan={2}>
                            <a href="#tag3">2층</a>
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faDog}/>애완동물<br></br>미용실습실
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faChalkboardTeacher} />제2<br></br>교무실
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faMagicWandSparkles}/>메이크업<br></br>실
                        </td>
                        <td >
                            <FontAwesomeIcon icon={faVrCardboard}/>VR<br></br>체험실
                        </td>
                        <td >
                            뷰티<br></br>아트<br></br>5반
                        </td>
                        <td >
                            뷰티<br></br>아트<br></br>6반
                        </td>
                        <td >
                            뷰티<br></br>아트<br></br>7반
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faPaw}/>반려동물<br></br>마케팅실습실<br></br>(펫케어10반)
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faUsers}/>취업<br></br>정보<br></br>센터
                        </td>
                        <td>
                            뷰티<br></br>아트과<br></br>준비실
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faCut}/>헤어<br></br>실습실
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faCut}/>토탈<br></br>미용실
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faHandHoldingHeart}/>피부<br></br>관리실
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>
                            <a href="#tag3">1층</a>
                        </td>
                        <td colSpan={4}>
                            <FontAwesomeIcon icon={faCookieBite}/><br></br>제과<br></br>실습실
                        </td>
                        <td colSpan={4}>
                            <FontAwesomeIcon icon={faBreadSlice}/><br></br>제빵<br></br>실습실
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <FontAwesomeIcon icon={faBowlFood}/><br></br>한국<br></br>조리실
                        </td>
                        <td colSpan={4}>
                            <FontAwesomeIcon icon={faUtensils}/><br></br>서양<br></br>조리실
                        </td>
                        <td>호텔<br></br>조리과<br></br>준비실</td>
                        <td>            
                            <FontAwesomeIcon icon={faChalkboardTeacher} />교무실<br></br>(호텔<br></br>조리과)
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>
                            본관동
                        </td>
                        
                        <td><a href="#tag13">3층</a></td>
                        <td colSpan={3}>
                            <FontAwesomeIcon icon={faUsers}/>대회의실
                        </td>
                        <td>
                            여직원<br></br>휴게실
                        </td>
                        <td colSpan={4}>
                            <FontAwesomeIcon icon={faComputer}/>소프트웨어과실습실(11반)
                        </td>
                        <td>            
                            <FontAwesomeIcon icon={faChalkboardTeacher} />교무실<br></br>(교육정보부)
                        </td>
                        <td>            
                            <FontAwesomeIcon icon={faFolder} />문서고
                        </td>
                    </tr>
                    <tr>
                        <td>2층</td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faUsers}/>장학협의실
                        </td>
                        <td colSpan={3}>
                            <FontAwesomeIcon icon={faChalkboardTeacher} />제1교무실
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faMicrophone} />방송실<br></br>(<FontAwesomeIcon icon={faDatabase} />서버실)
                        </td>
                        <td colSpan={2}>
                            교장실
                        </td>
                        <td colSpan={2}>
                            행정실
                        </td>
                    </tr>  
                    <tr>
                        <td><a href="#tag7">1층</a></td>
                        <td>
                            <FontAwesomeIcon icon={faWrench}/>시설<br></br>관리실
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faBroom} /><br></br>청소원<br></br>휴게실
                        </td>
                        <td>
                            호텔<br></br>조리<br></br>3반
                        </td>
                        <td>
                            호텔<br></br>조리<br></br>4반
                        </td>
                        <td>
                            호텔<br></br>조리<br></br>5반
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faHandHoldingMedical} /><br></br>보건실
                        </td>
                        <td colSpan={2}>
                            <FontAwesomeIcon icon={faComments} /> Wee클래스
                        </td>
                        <td>
                            당직실
                        </td>
                    </tr>  
                </tbody>
  </Table>
              </Col>
          </Row>
          <Row>
       <a name="tag1"></a>
        <h3><a href="#tag0">#학교전경</a></h3>
        <Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=15Fmv0sUJjvdWJZ6Pu2pk6gsg__N15Nul"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>학교 전경</h3>
                <p>본관동&실습동</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1b7pVlbAVCbNzTY40zwt-2NLrrmPzDLb-"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>농구코트</h3>
                <p>비온뒤 농구코트</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1TzB8DJAG3SQvN0mYePQnGwsDyqcfvGVu"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>학교 전경</h3>
                <p>농구장&학생쉼터</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1f4LwFT2SACRosN_-bDy5OTNo0a_xLqr1"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>학교 전경</h3>
                <p>실습동&학교식당</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1xSJhoeL-9UmjgLVS4DvAYU4yU8dgda8-"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>학교 전경</h3>
                <p>농구코트&학생쉼터</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1J_8ycNTdI5YPJvS966RMmkhiwzapVAPp"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>학교 전경</h3>
                <p>농구코트&학교식당</p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel> 
    </Row>
    <br></br>
    <Row>
       <a name="tag2"></a>
       <h3><a href="#tag0">#실습동<FontAwesomeIcon icon={faArrowAltCircleRight} />3층</a></h3>
        <Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1K3g6IZuMVQ6y_oid0Ayz5L_e1vRODa4j"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-3층</h3>
                <p>3층 안내</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1USTF3vWTXmp9lqAvKtyxcUKWJ7ZDLDvd"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-3층</h3>
                <p>강당&시각디자인과</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1Z5nCT3HlrQG49Bw6oubV64j3YZBlqefU"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>사진영상실</h3>
                <p>모델촬영실습</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1Qej-E6r500Vmp8ihW9mYFm-SUQoCBIoY"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-3층</h3>
                <p>복도</p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel>
    </Row>
    <br></br>
    <Row>
       <a name="tag11"></a>
       <h3><a href="#tag0"><FontAwesomeIcon icon={faCamera} />실습동<FontAwesomeIcon icon={faArrowAltCircleRight} />3층<FontAwesomeIcon icon={faArrowAltCircleRight} />사진영상실</a></h3>
        <Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1Z5nCT3HlrQG49Bw6oubV64j3YZBlqefU"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>사진영상실</h3>
                <p>모델촬영실습</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1lcqaJqgewouZarOxAjQqslDu7WQFwHLZ"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>사진영상실</h3>
                <p>모델촬영실습</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1JMx0swgBeijlLxG4aehsR8G5u7n95x3P"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>사진영상실</h3>
                <p>학과 실습</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1uVTse7UbQot-HI0JIaCoSpnBTyktSDH6"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>사진영상실</h3>
                <p>조명 실습</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1lqPNjkwI7uhmBkLpn_4CgsJ5KGiPa6wl"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>사진영상실</h3>
                <p>학과 실습</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=18pgyIYxsWtru0hzwmt6lrVThiDo2iQt4"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>사진영상실</h3>
                <p>학과의날 체험활동</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=13ms-bwmWhIV_k1TyKR-BktfJ-dPylIfu"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>사진영상실</h3>
                <p>학과의날 체험활동</p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel>
    </Row>
    <br></br>
    <Row>
       <a name="tag12"></a>
       <h3><a href="#tag0"><FontAwesomeIcon icon={faBook} />실습동<FontAwesomeIcon icon={faArrowAltCircleRight} />3층<FontAwesomeIcon icon={faArrowAltCircleRight} />도서관</a></h3>
        <Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1oDhunVkxbLa--ERYQIkYfEnli-Lg_0Hv"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>도서관</h3>
                <p>서고</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1caZaVt1saSIz2FdEMG7lgu3vGyI6tnqD"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>도서관</h3>
                <p>서고</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1jf1p1hclk9H_iBWWFztaVmN_fcylIxqD"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>도서관</h3>
                <p>독서 공간</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1t4SVUOxeHwhck3pEgbueqsVDYtaFrA9K"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>도서관</h3>
                <p>북카페</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1JGe5uVbVc5bOAiirBpPl2xEoSEvHU7vH"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>도서관</h3>
                <p></p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel>
    </Row>
    <br></br>
    <Row>
       <a name="tag3"></a>
       <h3><a href="#tag0">#실습동<FontAwesomeIcon icon={faArrowAltCircleRight} />2층</a></h3>
        <Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1YPneJhUl87CoSPAZvs9XTV1-8DSQPoAS"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-2층</h3>
                <p>펫케어과 입구</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1frDReoBxTg8YMBOAuxlKKzgv-W8f-hjj"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-2층</h3>
                <p>2층 안내</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1g07zYj_r50KtE0g6bPyscdwKal59_Xnr"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-2층</h3>
                <p>복도</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=19X5Vs9aZ1PguY1RPHzWOeEuqxmmEj-Z1"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-2층</h3>
                <p>메이크업실</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1FcpzTWtbPWYq4WkJ_JkjCaZ3TLh1f9aS"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-2층</h3>
                <p>헤어실습실</p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel>
    </Row>
    <br></br>
    <Row>
       <a name="tag4"></a>
       <h3><a href="#tag0">#실습동<FontAwesomeIcon icon={faArrowAltCircleRight} />1층</a></h3>
        <Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1Aj5LXvEYKHilmuIgddjEiTbj-dTeIj0g"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-1층</h3>
                <p>한국조리실</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1Efu5_eM24fW8vepkdH9jsFPmn2C7FIZb"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-1층</h3>
                <p>한국조리실</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1_VCRDNsQP9Y83wBb5-IiJMqk6k0N11c8"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-1층</h3>
                <p>실습동 출입구</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1IerGWMlhlDL5DsG_nq6Us3fP_TXSCAll"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>실습동-1층</h3>
                <p>1층 안내</p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel>
    </Row>
    <br></br>
    <Row>
       <a name="tag13"></a>
       <h3><a href="#tag0">#본관동<FontAwesomeIcon icon={faArrowAltCircleRight} />3층</a></h3>
        <Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=187QfiKg2VONZiqCwbBrz0oBEEJQ9KmSr"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>본관동-3층</h3>
                <p>대회의실</p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel>
    </Row>
    <br></br>
    <Row>
       <a name="tag7"></a>
       <h3><a href="#tag0">#본관동<FontAwesomeIcon icon={faArrowAltCircleRight} />1층</a></h3>
        <Carousel fade>
        <Carousel.Item interval ={3000}>
            <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=17T7IfBCfRZ9Lr-GqfJtVyFIucnqMhFif"
                alt="First Slide"
                />
            <Carousel.Caption>
                <h3>본관동-1층</h3>
                <p>Wee클래스(상담실)</p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel>
    </Row>
    </Container>
    </div>
  )
}

export default SchoolPhoto
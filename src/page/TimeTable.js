import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut, faMagicWandSparkles, faGraduationCap, faCoffee, faBreadSlice, faFileCode, faMobileAndroid, faMobileAndroidAlt, faTabletAndroid, faLaptopCode, faUtensils, faBowlFood, faBezierCurve, faSmile } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons';



const TimeTable = () => {

  return (
  <Container>
    <Row>
    <a name="tag0"></a>
    <h1>#수업시간표(2022학년도 기준)</h1>   
     <Table striped bordered hover className="vertical">
  <thead className="tHead">
    <tr>
      <th colSpan={2}>
        학과  
      </th>
      <th>
       반 
      </th>
      <th colSpan={2}>
        시간표 형식
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={3}>호텔조리과</td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faCoffee} /> 카페디저트<br></br>&바리스타과정
      </td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
    </tr>
    <tr>
      <td><FontAwesomeIcon icon={faUtensils} /> 프로페셔널쉐프과정</td>
    </tr>
    <tr>
      <td colSpan={2} rowSpan={3}><FontAwesomeIcon icon={faMagicWandSparkles} /> 뷰티아트과</td>
      <td>5</td>
      <td><a href="#tag50">교시/요일</a></td>
      <td><a href="#tag51">요일/교시</a></td>
    </tr>
    <tr>
      <td>6</td>
    </tr>
    <tr>
      <td>7</td>
    </tr>
  </tbody>
  </Table>
</Row>
<Row>
<h1>#3반 수업시간표</h1>
<Table striped bordered hover className="vertical">
  <thead className="tHead">
    <tr>
      <th>교시</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faCut} /> 헤어미용6
        <br></br>
        (기초드라이)
      </td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faCoffee}/> 바리스타<br></br>(커피원두선택) </td>
      <td>
        <FontAwesomeIcon icon={faGraduationCap} /> 진로
      </td>
      <td>헤어미용</td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faBreadSlice}/> 제빵
        <br></br>
      (빵류제품스트레이트반죽)
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faUtensils} /> 서양조리
        <br></br>
        (양식조식조리)
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td rowSpan={2}>
          <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용5
          <br></br>
          (피부미용얼굴각질관리)
      </td>
    </tr>
    <tr>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td></td>
      <td rowSpan={3}><FontAwesomeIcon icon={faCoffee} /> 바리스타
        <br></br>
        (커피추출운용)
      </td>
      <td rowSpan={3}><FontAwesomeIcon icon={faMagicWandSparkles} /> 메이크업</td>
      <td rowSpan={3}><FontAwesomeIcon icon={faCut} /> 헤어미용7
        <br></br>
        (두피모발관리)</td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>6</td>
      <td></td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>7</td>
      <td></td>
      <td>헤어미용</td>
    </tr>
  </tbody>
  </Table>
</Row>
<Row>
<h1>#4반 수업시간표</h1>
<Table striped bordered hover className="vertical">
  <thead className="tHead">
    <tr>
      <th>교시</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faCut} /> 헤어미용6
        <br></br>
        (기초드라이)
      </td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faCoffee}/> 바리스타<br></br>(커피원두선택) </td>
      <td>
        <FontAwesomeIcon icon={faGraduationCap} /> 진로
      </td>
      <td>헤어미용</td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faBreadSlice}/> 제빵
        <br></br>
      (빵류제품스트레이트반죽)
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td >
        <FontAwesomeIcon icon={faUtensils} /> 서양조리
        <br></br>
        (양식조식조리)
      </td>
      <fd rowSpan={2}><FontAwesomeIcon icon={faBowlFood} /> 한국조리
        <br></br>
        (한식기초조리실무)
      </fd>
    </tr>
    <tr>
      <td>3</td>
      <td >
          <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용5
          <br></br>
          (피부미용얼굴각질관리)
      </td>
    </tr>
    <tr>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td></td>
      <td rowSpan={3}><FontAwesomeIcon icon={faCoffee} /> 바리스타
        <br></br>
        (커피추출운용)
      </td>
      <td rowSpan={3}><FontAwesomeIcon icon={faMagicWandSparkles} /> 메이크업</td>
      <td rowSpan={3}><FontAwesomeIcon icon={faCut} /> 헤어미용7
        <br></br>
        (두피모발관리)</td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>6</td>
      <td></td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>7</td>
      <td></td>
      <td>헤어미용</td>
    </tr>
  </tbody>
  </Table>
</Row>

<Row>
<h1><a name="tag50"><a href="#tag0">#5반</a> 수업시간표(<a href="#tag51">교시/요일</a>)</a></h1>
<Table striped bordered hover className="vertical">
  <thead className="tHead">
    <tr>
      <th>교시/요일</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faCut} /> 헤어미용
        <br></br>
        (기초드라이)
      </td>
      <td><FontAwesomeIcon icon={faGraduationCap}/> 진로</td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용
        <br></br>
        (피부미용얼굴메뉴얼테크닉)
      </td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faCut} /> 헤어미용
        <br></br>
        (원랭스헤어커트)  
      </td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faMagicWandSparkles} /> 메이크업
        <br></br>
        (웨딩메이크업)
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td rowSpan={3}>
        <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용
        <br></br>
        (피부미용얼굴각질관리)
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td rowSpan={2}>
          <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용
          <br></br>
          (피부미용얼굴각질관리)
      </td>
      <td rowSpan={2}>
          <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용
          <br></br>
          (피부미용얼굴메뉴얼테크닉)
      </td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faHandSparkles} /> 네일미용
        <br></br>
        (네일기본관리)</td>
    </tr>
    <tr>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td rowSpan={2}>
      <FontAwesomeIcon icon={faSmile}/> 창의적<br></br>체험활동
      </td>
      <td rowSpan={3}><FontAwesomeIcon icon={faCut} /> 헤어미용
        <br></br>
        (두피모발관리)
      </td>
      <td rowSpan={3}>
        <FontAwesomeIcon icon={faMagicWandSparkles} /> 메이크업
        <br></br>
        (웨딩메이크업)
      </td>
      <td rowSpan={3}><FontAwesomeIcon icon={faCut} /> 헤어미용
        <br></br>
        (두피모발관리)</td>
        <td rowSpan={3}><FontAwesomeIcon icon={faCut} /> 헤어미용
        <br></br>
        (원랭스헤어커트)</td>
    </tr>
    <tr>
      <td>6</td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td></td>
    </tr>
  </tbody>
  </Table>
  </ Row>
  <Row>
<h1><a name="tag51"><a href="#tag0">#5반</a> 수업시간표(<a href="#tag50">요일/교시</a>)</a></h1>
<Table striped bordered hover className="vertical">
  <thead className="tHead">
    <tr>
      <th>요일/교시</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>월</td>
      <td colSpan={2}>
        <FontAwesomeIcon icon={faCut} />헤어미용(기초드라이)
      </td>
      <td colSpan={2}>
        <FontAwesomeIcon icon={faHandHoldingHeart}/>피부미용(피부미용얼굴각질관리)
      </td>
      <td colSpan={2}>
      <FontAwesomeIcon icon={faSmile}/>창의적 체험활동
      </td>
    </tr>
    <tr>
      <td>화</td>
      <td>
        <FontAwesomeIcon icon={faGraduationCap}/>진로
      </td>
      <td colSpan={3}>
        <FontAwesomeIcon icon={faHandHoldingHeart}/>피부미용(피부미용얼굴각질관리)
      </td>
      <td colSpan={3}>
        <FontAwesomeIcon icon={faCut} />헤어미용(두피모발관리)
      </td>
    </tr>
    <tr>
      <td>수</td>
      <td colSpan={4}>
          <FontAwesomeIcon icon={faHandHoldingHeart} />피부미용(피부미용얼굴메뉴얼테크닉)
      </td>
      <td colSpan={3}>
        <FontAwesomeIcon icon={faMagicWandSparkles} />메이크업(웨딩메이크업)
      </td>
    </tr>
    <tr>
      <td>목</td>
      <td colSpan={2}>
        <FontAwesomeIcon icon={faCut} />헤어미용(원랭스헤어커트)
      </td>
      <td colSpan={2}>
        <FontAwesomeIcon icon={faHandHoldingHeart} />피부미용(피부미용얼굴메뉴얼테크닉)
      </td>
      <td colSpan={3}>
        <FontAwesomeIcon icon={faCut} />헤어미용(두피모발관리)
      </td>
    </tr>
    <tr>
      <td>금</td>
      <td colSpan={2}>
        <FontAwesomeIcon icon={faMagicWandSparkles} />메이크업(웨딩메이크업)
      </td>
      <td colSpan={2}>
        <FontAwesomeIcon icon={faHandSparkles} />네일미용(네일기본관리)
      </td>
      <td colSpan={3}>
        <FontAwesomeIcon icon={faCut} />헤어미용(원랭스헤어커트)
      </td>
    </tr>
  </tbody>
  </Table>
  </ Row>
    <Row>
     <Table striped bordered hover>
  <thead className="tHead">
    <tr>
      <th>교시</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>헤어미용</td>
      <td>진로</td>
      <td>피부미용</td>
      <td>헤어미용</td>
      <td>메이크업</td>
    </tr>
    <tr>
      <td>2</td>
      <td>헤어미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>헤어미용</td>
      <td>메이크업</td>
    </tr>
    <tr>
      <td>3</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>네일미용</td>
    </tr>
    <tr>
      <td>4</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>네일미용</td>
    </tr>
    <tr>
      <td>5</td>
      <td></td>
      <td>헤어미용</td>
      <td>메이크업</td>
      <td>헤어미용</td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>6</td>
      <td></td>
      <td>헤어미용</td>
      <td>메이크업</td>
      <td>헤어미용</td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>7</td>
      <td></td>
      <td>헤어미용</td>
      <td>메이크업</td>
      <td>헤어미용</td>
      <td>헤어미용</td>
    </tr>
  </tbody>
  </Table>
</Row>
<Row>
<a name="tag7"></a> 
<Table striped bordered hover>
  <thead className="tHead">
    <tr>
      <th><a href="#tag0">교시</a></th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>헤어미용</td>
      <td>진로</td>
      <td>피부미용</td>
      <td>헤어미용</td>
      <td>메이크업</td>
    </tr>
    <tr>
      <td>2</td>
      <td>헤어미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>헤어미용</td>
      <td>메이크업</td>
    </tr>
    <tr>
      <td>3</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>네일미용</td>
    </tr>
    <tr>
      <td>4</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>피부미용</td>
      <td>네일미용</td>
    </tr>
    <tr>
      <td>5</td>
      <td></td>
      <td>헤어미용</td>
      <td>메이크업</td>
      <td>헤어미용</td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>6</td>
      <td></td>
      <td>헤어미용</td>
      <td>메이크업</td>
      <td>헤어미용</td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>7</td>
      <td></td>
      <td>헤어미용</td>
      <td>메이크업</td>
      <td>헤어미용</td>
      <td>헤어미용</td>
    </tr>
  </tbody>
  </Table>

</Row>
<Row>
<h1>#9반(시각디자인과)</h1>
<Table striped bordered hover className="vertical">
  <thead className="tHead">
    <tr>
      <th>교시</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faCut} /> 헤어미용6
        <br></br>
        (기초드라이)
      </td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faBezierCurve}/> 바리스타<br></br>(커피원두선택) </td>
      <td>
        <FontAwesomeIcon icon={faGraduationCap} /> 진로
      </td>
      <td>헤어미용</td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faBreadSlice}/> 제빵
        <br></br>
      (빵류제품스트레이트반죽)
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faUtensils} /> 서양조리
        <br></br>
        (양식조식조리)
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td rowSpan={2}>
          <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용5
          <br></br>
          (피부미용얼굴각질관리)
      </td>
    </tr>
    <tr>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td></td>
      <td rowSpan={3}><FontAwesomeIcon icon={faCoffee} /> 바리스타
        <br></br>
        (커피추출운용)
      </td>
      <td rowSpan={3}><FontAwesomeIcon icon={faMagicWandSparkles} /> 메이크업</td>
      <td rowSpan={3}><FontAwesomeIcon icon={faCut} /> 헤어미용7
        <br></br>
        (두피모발관리)</td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>6</td>
      <td></td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>7</td>
      <td></td>
      <td>헤어미용</td>
    </tr>
  </tbody>
  </Table>
</Row>
<Row>
<h1>#11반(소프트웨어과)</h1>
<Table striped bordered hover className="vertical">
  <thead className="tHead">
    <tr>
      <th>교시</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td rowSpan={2}>
        <FontAwesomeIcon icon={faCut} /> 헤어미용6
        <br></br>
        (기초드라이)
      </td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faFileCode}/> 응용프로그래밍개발<br></br>(프로그래밍언어활용)</td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용5
        <br></br>
        (피부미용얼굴메뉴얼테크닉)
      </td>
      <td>헤어미용</td>
      <td rowSpan={4}>
        <FontAwesomeIcon icon={faBreadSlice}/> 제빵
        <br></br>
      (빵류제품스트레이트반죽)
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td rowSpan={3}>
        <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용5
        <br></br>
        (피부미용얼굴각질관리)
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td rowSpan={2}>
          <FontAwesomeIcon icon={faHandHoldingHeart} /> 피부미용5
          <br></br>
          (피부미용얼굴각질관리)
      </td>
    </tr>
    <tr>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td></td>
      <td rowSpan={3}><FontAwesomeIcon icon={faLaptopCode} /> 스마트문화앱콘텐츠제작
        <br></br>
        (스마트문화앱개발환경구축)
      </td>
      <td rowSpan={3}><FontAwesomeIcon icon={faMagicWandSparkles} /> 메이크업</td>
      <td rowSpan={3}><FontAwesomeIcon icon={faCut} /> 헤어미용7
        <br></br>
        (두피모발관리)</td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>6</td>
      <td></td>
      <td>헤어미용</td>
    </tr>
    <tr>
      <td>7</td>
      <td></td>
      <td>헤어미용</td>
    </tr>
  </tbody>
  </Table>
</Row>
</Container>
  )
}

export default TimeTable
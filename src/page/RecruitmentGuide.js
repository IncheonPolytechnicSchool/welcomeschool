

import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCoffee, faExclamationCircle, faFile, faMagicWandSparkles, faMapMarked, faQuestionCircle, faSchool, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope }  from '@fortawesome/free-solid-svg-icons';
import { faEnvelopesBulk }  from '@fortawesome/free-solid-svg-icons';
import { faFax }  from '@fortawesome/free-solid-svg-icons';
import { faUserGroup }  from '@fortawesome/free-solid-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';  

const RecruitmentGuide = () => {
  return (
      <Container>
          <Row>
              <Col>
              <a name="tag0"></a>
              <Table striped bordered hover className="vertical">
                 <thead className="tHead">
                    <tr> 
                     <th colSpan={4}> 페이지 구성</th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td rowSpan={10}>2023학년도<br></br>인천산업정보학교<br></br>신입생 모집 요강</td>
                    <td colSpan={3}><a href="#tag1"><FontAwesomeIcon icon={faUserGroup} />모집학과 및 정원</a></td>
                    </tr>
                    <tr>
                        <td colSpan={3}><a href="#tag2"><FontAwesomeIcon icon={faFile} />지원자격</a></td>
                    </tr>
                    <tr>
                        <td colSpan={3}><a href="#tag3"><FontAwesomeIcon icon={faCalendar} />위탁교육기간</a></td>
                    </tr>
                    <tr>
                        <td colSpan={3}><a href="#tag4"><FontAwesomeIcon icon={faMapMarked} />모집지역</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={6}>전형일정<br></br>및<br></br>전형방법</td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>일반<br></br>전형</td>
                        <td>전형일정</td>
                    </tr>
                    <tr>
                        <td>전형방법</td>
                    </tr>
                    <tr>
                        <td>전형절차</td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>추가<br></br>전형</td>
                        <td>전형일정</td>
                    </tr>
                    <tr>
                        <td>전형방법</td>
                    </tr>
                    <tr>
                        <td>전형절차</td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>지원자 유의사항</td>
                        <td>전형일정</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><FontAwesomeIcon icon={faExclamationCircle} />신입생 전형 시 유의사항</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><a href ="#tag40"><FontAwesomeIcon icon={faQuestionCircle} />신입생 전형에 대한 문의</a></td>
                    </tr>
                    <tr>
                        <td colSpan={4}><a href="#tag50"><FontAwesomeIcon icon={faSchool} />지원자격 학교명단</a></td> 
                    </tr>
                </tbody>
  </Table>
              </Col>
          </Row>
          <br></br>
          <Row>
              <Col>
              <a name="tag1"></a> 
              <h1><a href="#tag0"><FontAwesomeIcon icon={faUserGroup} />모집학과 및 정원</a></h1>
              <Table striped bordered hover className="vertical">
                 <thead className="tHead">
                    <tr>
                     <th colSpan={2}>학과명</th>
                     <th>학급수</th>
                     <th>모집정원</th>
                     <th>비고</th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2}>호텔조리과</td>
                        <td><FontAwesomeIcon icon={faUtensils} /> 마스터쉐프과정</td>
                        <td>1</td>
                        <td>20</td>
                        <td rowSpan={10}>남·녀<br></br>공학</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faCoffee} /> 카페베이커리과정</td>
                        <td>2</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><FontAwesomeIcon icon={faMagicWandSparkles} /> 뷰티아트과</td>
                        <td>3</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><FontAwesomeIcon icon={faCamera} /> 사진영상예술과</td>
                        <td>1</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><FontAwesomeIcon icon={faPaintBrush} /> 시각디자인과</td>
                        <td>1</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><FontAwesomeIcon icon={faDog}/> 펫케어과</td>
                        <td>1</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><FontAwesomeIcon icon={faComputer}/> 소프트웨어과</td>
                        <td>1</td>
                        <td>20</td>
                    </tr>
                    <tr className="SUM">
                        <td colSpan={2}>계</td>
                        <td>10</td>
                        <td>200</td>
                    </tr>
                </tbody>
  </Table>
              </Col>
          </Row>
          <br></br>
          <Row>
              <Col>
              <h1><a name="tag2"></a> <a href="#tag0"><FontAwesomeIcon icon={faFile}/> 지원자격</a></h1>
              <Table striped bordered hover className="vertical">
                 <thead className="tHead">
                    <tr>
                     <th colSpan={2}>[일반전형] & [추가전형]</th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td>2022학년도 인천광역시 관내 <a name="tag26"></a><a href="#tag16">일반고</a> 등의 2학년 재학생 및 2023학년도 3학년 재학생</td>
                    </tr>
                    <tr>
                        <td>2022학년도 인천광역시 소재 <a href="#tag16">일반고</a>, <a href="#tag18">자율고</a>, <a href="#tag20">대안교육특성화고</a> 2학년 재학생</td>
                    </tr>
                    <tr>
                        <td>2022학년도 <a href="#tag20">대안학교</a> 2학년 재학생</td>
                    </tr>
                    <tr>
                        <td>
                            2022학년도 <a href="#tag22">대안위탁학교</a> 2학년 재학생으로 위탁 종료 예정인 자
                            <br></br>
                            (2023학년도 3학년 재학생으로 타기관에 위탁중인 자는 입교 불가)
                        </td>
                    </tr>
                </tbody>
              </Table>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
              <Table striped bordered hover className="vertical">
                <thead className="tHead">
                    <tr>
                     <th><a name="tag3"></a> <a href="#tag0"><h1><FontAwesomeIcon icon={faCalendar}/>위탁교육기간</h1></a></th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td>1년 이내 (2023년 3월 ~ 2024년 1월)</td>
                    </tr>
                </tbody>
              </Table>
              </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
            <h1><a name="tag4"></a><a href="#tag0"><FontAwesomeIcon icon={faMapMarked}/>모집지역</a></h1>
            <Table striped bordered hover className="vertical">
                <thead className="tHead">
                    <tr>
                     <th>[일반전형] & [추가전형]</th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td>인천광역시</td>
                    </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <br></br>
          <Row>
              <Col>
              <h1><a name="tag30"></a><a href="#tag0"><FontAwesomeIcon icon={faCalendar} />전형일정(일반전형)</a></h1>
              <Table striped bordered hover className="vertical">
                 <thead className="tHead">
                    <tr>
                     <th>일정</th>
                     <th>주요 업무</th>
                     <th colSpan={2}>세부 내용</th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td rowSpan={4}>
                            <a href="/test">2022-10-04(화)</a>
                            <br></br>
                            ~
                            <br></br>
                            <a href="/test">2022-11-18(금)</a>
                        </td>
                        <td rowSpan={4}>
                            원서접수
                       </td>
                       <td><FontAwesomeIcon icon={faEnvelope}/> 이메일</td>
                       <td>rlekfla904@ice.go.kr</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faFax}/> 팩스</td>
                        <td>032-765-5474</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faEnvelopesBulk} /> 인편, 우편</td>
                        <td>인천 동구 금창로31 신입생업무담당자앞</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faUserGroup} /> 아이스메신저</td>
                        <td>
                            [인천산업정보학교'박가희'] 
                            <br></br>
                            로 스캔 파일를 전송하여 접수
                            (이 방법은 교사가 직접해야 함)
                            </td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>
                            <a href="/test">2022-11-22(화)</a>
                        </td>
                        <td rowSpan={3}>
                            면접(유선) 대상자 발표
                        </td>
                        <td colSpan={2}>
                            <a href="http://sanup.icesc.kr">본교 홈페이지 <FontAwesomeIcon icon={faExternalLink} /></a> 게시
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>해당 원적교에 공문발송</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>개별 문자발송</td>
                    </tr>
                </tbody>
                </Table>

              </Col>  
          </Row>
          <br></br>
          <Row>
              <Col>
              <h1><a name="tag40"></a><a href="#tag0"><FontAwesomeIcon icon={faQuestionCircle} />신입생전형에 대한 문의</a></h1>
              <Table striped bordered hover className="vertical">
                 <thead className="tHead">
                    <tr>
                     <th colSpan={2}>문의처</th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon icon={faHome} /> 홈페이지</td>
                        <td>
                            <a href="http://sanup.icesc.kr">
                                http://sanup.icesc.kr <FontAwesomeIcon icon={faExternalLink} />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faMapMarkedAlt} /> 주소</td>
                        <td>
                            <a href="/Map">인천 동구 금창로31</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faFax} /> 팩스
                        </td>
                        <td>
                            032-765-5474
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faPhone} /> 교무실
                        </td>
                        <td>
                            <a href="tel:032-765-5471 ">032-765-5471</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faPhone} /> 행정실
                        </td>
                        <td>
                            <a href="tel:032-765-3606 ">032-765-3606</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faPhone} /> 담당자
                        </td>
                        <td>
                            <a href="tel:032-627-2806 ">032-627-2806</a>
                        </td>
                    </tr>

                </tbody>
                </Table>

              </Col>  
          </Row>

          <Row>
              <Col>
              <h1><a name="tag50"></a><a href="#tag0"><FontAwesomeIcon icon={faSchool} />지원자격 학교명단</a></h1>
              <Table striped bordered hover className="vertical">
                 <thead className="tHead">
                    <tr>
                     <th>구분</th>
                     <th>학교명</th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td><a href="#tag26">일반고</a></td>
                        <td>
                            <a name="tag16"></a>
                            가림고등학교, 가정고등학교, 가좌고등학교, 강화여자고등학교, 검단고등학교,
                            계산고등학교, 계산여자고등학교, 계양고등학교, 광성고등학교, 교동고등학교,
                            대안고등학교, 대청고등학교, 덕신고등학교, 덕적고등학교, 도림고등학교, 
                            동산고등학교, 명신여자고등학교, 문일여자고등학교, 박문여자고등학교, 
                            백령고등학교, 백석고등학교, 부개고등학교, 부개여자고등학교, 부광고등학교,
                            부광여자고등학교, 부평고등학교, 부평여자고등학교, 삼산고등학교, 서도고등학교,
                            서운고등학교, 서인천고등학교, 석정여자고등학교, 선인고등학교, 세일고등학교,
                            송도고등학교, 숭덕여자고등학교, 신명여자고등학교, 신송고등학교, 안남고등학교,
                            연수고등학교, 연수여자고등학교, 연평고등학교, 옥련여자고등학교, 인명여자고등학교,
                            인성여자고등학교, 인일여자고등학교, 인제고등학교, 인천고등학교, 인천고잔고등학교,
                            인천남고등학교, 인천남동고등학교, 인천논현고등학교, 인천대건고등학교, 
                            인천마전고등학교, 인천만수고등학교, 인천부흥고등학교, 인천산곡고등학교, 
                            인천세원고등학교, 인천송천고등학교, 인천여자고등학교, 인천연송고등학교, 
                            인천영선고등학교, 인천영종고등학교, 인천영흥고등학교, 인천예일고등학교, 
                            인천원당고등학교, 인천중산고등학교, 인천청라고등학교, 인천청라고등학교,
                            인천초은고등학교, 인천해송고등학교, 인천해원고등학교, 인천효성고등학교,
                            인하대학교사범대학부속고등학교, 인항고등학교, 인화여자고등학교, 작전고등학교,
                            작전여자고등학교, 제물포고등학교, 제일고등학교, 학익고등학교, 학익여자고등학교
                            <br></br>
                            (학교수: 81)
                       </td>
                    </tr>
                    <tr>
                        <td><a href="#tag26">자율고</a></td>
                        <td><a name="tag18"></a>
                            강화고등학교, 동인천고등학교, 인천공항고등학교, 인천상정고등학교, 인천신현고등학교,
                            인천포스코고등학교, 인천하늘고등학교
                            <br></br>
                            (학교수: 7)
                        </td>
                    </tr>
                    <tr>
                        <td><a href="#tag26">대안교육특성화고</a></td>
                        <td><a name="tag20"></a>
                            산마을고등학교
                            <br></br>
                            (학교수: 1)
                        </td>
                    </tr>
                    <tr>
                        <td><a href="#tag26">대안학교</a></td>
                        <td><a name="tag22"></a>
                            인천청담고, 인천한누리학교
                            <br></br>
                            (학교수: 2)
                        </td>
                    </tr>
                    <tr>
                        <td><a href="#tag26">대안위탁학교</a></td>
                        <td><a name="tag24"></a>
                            인천해밀학교
                            <br></br>
                            (학교수: 1)
                        </td>

                    </tr>
                </tbody>
                </Table>

              </Col>  
          </Row>
      </Container>
  )
}

export default RecruitmentGuide
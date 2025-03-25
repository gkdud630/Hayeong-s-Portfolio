import React, { useEffect, useState } from 'react'
import ic_name from '../assets/ic_name.png'
import ic_birth from '../assets/ic_birth.png'
import ic_address from '../assets/ic_address.png'
import ic_tel from '../assets/ic_tel.png'
import ic_email from '../assets/ic_email.png'
import ic_school from '../assets/ic_school.png'
import link from '../assets/link.png'
import frontend2 from '../assets/frontend2.png'
import tools from '../assets/tools.png'
import SuwonPj from '../components/projects/SuwonPj'
import SeongbukPj from '../components/projects/SeongbukPj'
import DonguramiPj from '../components/projects/DonguramiPj'
import EnergyPj from '../components/projects/EnergyPj'
import GwangsanPj from '../components/projects/GwangsanPj'
import DobanjangPj from '../components/projects/DobanjangPj'

const Mainpage = () => {
  const [activeTab, setActiveTab] = useState<string>('1');

  return (
    <div>
      <article className="visual">
        <div className="visual_inner">
          <div className="visual_tit">
            - 주하영 -
            <br />
            경력 웹 프론트 개발자 포트폴리오
          </div>
          <hr className="visual_divider" />
          <div className="visual_des">
            안녕하세요.
            <br />
            React 웹 개발자, 주하영입니다.
          </div>
          <div className="btn_more">더 알아보기 ↓</div>
        </div>
      </article>
      <article className="aboutme">
        <div className="aboutme_inner">
          <div className="comm_tit">
            <div className="comm_tit_img">
              <img src="images/link.png" alt="" />
            </div>
            <div className="comm_tit_txt">ABOUT ME</div>
          </div>
          <ul className="info">
            <li className="name">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_name} alt="" />
                </div>
                <div className="txt">
                  <h4>이름</h4>
                  <p>주하영</p>
                </div>
              </div>
            </li>
            <li className="birth">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_birth} alt="" />
                </div>
                <div className="txt">
                  <h4>생년월일</h4>
                  <p>96.06.30</p>
                </div>
              </div>
            </li>
            <li className="address">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_address} alt="" />
                </div>
                <div className="txt">
                  <h4>주소</h4>
                  <p>광주광역시 북구 문흥동</p>
                </div>
              </div>
            </li>
            <li className="tel">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_tel} alt="" />
                </div>
                <div className="txt">
                  <h4>연락처</h4>
                  <p>010-4763-9413</p>
                </div>
              </div>
            </li>
            <li className="email">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_email} alt="" />
                </div>
                <div className="txt">
                  <h4>이메일</h4>
                  <p>gkdud630@naver.com</p>
                </div>
              </div>
            </li>
            <li className="school">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_school} alt="" />
                </div>
                <div className="txt">
                  <h4>학력</h4>
                  <p>조선대학교 화학과(졸업)</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <article className="skills">
        <div className="skills_inner">
          <div className="comm_tit">
            <div className="comm_tit_img">
              <img src={link} alt="" />
            </div>
            <div className="comm_tit_txt" style={{ borderBottomColor: '#000000' }}>SKILLS</div>
          </div>
          <ul className="skill_info">

            <li>
              <div className="skill_tit">Frontend</div>
              <img src={frontend2} alt="" />
            </li>
            <li>
              <div className="skill_tit">Tools</div>
              <img src={tools} alt="" />
            </li>
          </ul>
        </div>
      </article>
      <article className="certificate">
        <div className="certificate_inner">
          <div className="comm_tit">
            <div className="comm_tit_img">
              <img src="images/link2.png" alt="" />
            </div>
            <div className="comm_tit_txt" style={{ color: '#ffffff', borderBottomColor: '#6c757d' }}>CERTIFICATE</div>
          </div>
          <ul className="certificate_list">
            {/* <li>
              <h3>전자정부 프레임워크 개발자 교육 수료</h3>
              <h4>표준프레임워크 포털</h4>
              <p>2025.03.16</p>
            </li> */}
            <li>
              <h3>SQL 개발자 (SQLD)</h3>
              <h4>한국데이터산업진흥원</h4>
              <p>2023.04.14</p>
            </li>
          </ul>
        </div>
      </article>
      <div className="project-container" >
        {/* 탭 버튼 */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "1" ? "active" : ""}`}
            onClick={() => setActiveTab("1")}
          >
            Project01
          </button>
          <button
            className={`tab ${activeTab === "2" ? "active" : ""}`}
            onClick={() => setActiveTab("2")}
          >
            Project02
          </button>
          <button
            className={`tab ${activeTab === "3" ? "active" : ""}`}
            onClick={() => setActiveTab("3")}
          >
            Project03
          </button>
          <button
            className={`tab ${activeTab === "4" ? "active" : ""}`}
            onClick={() => setActiveTab("4")}
          >
            Project04
          </button>
          <button
            className={`tab ${activeTab === "5" ? "active" : ""}`}
            onClick={() => setActiveTab("5")}
          >
            Project05
          </button>
          <button
            className={`tab ${activeTab === "6" ? "active" : ""}`}
            onClick={() => setActiveTab("6")}
          >
            Project06
          </button>
        </div>

        {/* 탭 컨텐츠 */}
        <div className="tab-content">
          {activeTab === "1" ? <SuwonPj /> : activeTab === "2" ? <SeongbukPj /> : activeTab === "3" ? <DonguramiPj />:activeTab === "4" ? <EnergyPj />:activeTab === "5" ? <GwangsanPj />:activeTab === "6" ? <DobanjangPj />:<></>}
        </div>
      </div>
      <article className="career">
        <div className="career_inner">
          <div className="comm_tit">
            <div className="comm_tit_img">
              <img src="images/link.png" alt="" />
            </div>
            <div className="comm_tit_txt" style={{ borderBottomColor: '#ccc' }}>CAREER</div>
          </div>
          <div className="career_info">
            <div className="career_info_inner">
              <div className="career_img">
                <div className="career_img_inner">
                  <img src="images/nubiz.png" alt="" />
                </div>
              </div>
              <div className="career_txt">
                <div className="career_tit">(주) 엔유비즈</div>
                <div className="career_period">2023.03.27 ~ 현재</div>
                <div className="career_description">
                  광주광역시에 위치한 응용 소프트웨어 개발 및 공급업 회사인 주식회사 엔유비즈에서 프론트엔드 개발자로 재직중입니다.
                  <br /><br />
                  HTML로 된 퍼블리싱 코드를 React 및 TypeScript로 변환하고 컴포넌트 단위로 분리하여 웹 화면 구현, WebView 연동, API 통신, 성능 최적화 및 유지보수를 주로 담당합니다.
                  <br /><br />
                  여러 프로젝트를 진행함으로써 웹과 앱의 연계를 깊이 이해하게 되었으며, 성능 최적화와 유지보수를 고려한 효율적인 코드 작성 역량이 향상되었습니다.
                  <br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Mainpage
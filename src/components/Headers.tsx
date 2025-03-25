import React, { useEffect } from 'react'
import hamburger from '../assets/hamburger.svg'


const Headers = () => {

    return (
        <header>
            <div className="header_inner">
                <div className="logo">Hayeong's Portfolio</div>
                <ul className="gnb">
                    <li>
                        <a className="btn_aboutme">About me</a>
                    </li>
                    <li>
                        <a className="btn_skills">Skills</a>
                    </li>
                    <li>
                        <a className="btn_certificate">Certificate</a>
                    </li>
                    <li>
                        <a className="btn_projects">Projects</a>
                    </li>
                    <li>
                        <a className="btn_career">Career</a>
                    </li>
                </ul>
                <div className="mobile_menu">
                    <img src={hamburger} alt="" />
                </div>
                <ul className="mobile_gnb">
                    <li>
                        <a className="btn_aboutme">About me</a>
                    </li>
                    <li>
                        <a className="btn_skills">Skills</a>
                    </li>
                    <li>
                        <a className="btn_certificate">Certificate</a>
                    </li>
                    <li>
                        <a className="btn_projects">Projects</a>
                    </li>
                    <li>
                        <a className="btn_career">Career</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Headers
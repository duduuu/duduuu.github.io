import React from 'react';
import '../styles/work.css';
import ku_logo from '../images/ku_logo.svg';
import ishs_logo from '../images/ishs_logo.png';

const Education = () => (
    <section class="experience-section">
        <div class="title-block">
            <div class="circle">
                <div class="inner-circle"></div>
            </div>
            <div class="experience-title">
                Education
            </div>
        </div>
        <div class="experience-block">
            <div class="experience-left">
                <div class="company-date">2019.07 ~ </div>
            </div>        
            <div class="experience-right">
                <div class="company-info">
                    <img src={ku_logo} class="company-logo"></img>
                    <span class="company-name">고려대학교 정보보호대학원 석사 수료</span>
                </div>
            </div>
        </div>
        <div class="experience-block">
            <div class="experience-left">
                <div class="company-date">2014.03 ~ 2018.02</div>
            </div>        
            <div class="experience-right">
                <div class="company-info">
                    <img src={ku_logo} class="company-logo"></img>
                    <span class="company-name">고려대학교 사이버국방학과 학사 졸업</span>
                </div>
            </div>
        </div>
        <div class="experience-block">
            <div class="experience-left">
                <div class="company-date">2012.03 ~ 2014.02</div>
            </div>        
            <div class="experience-right">
                <div class="company-info">
                    <img src={ishs_logo} class="company-logo"></img>
                    <span class="company-name">인천과학고등학교</span>
                </div>
            </div>
        </div>
    </section>
);

export default Education;
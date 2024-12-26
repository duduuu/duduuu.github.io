import React from 'react';
import '../styles/work.css';
import coc_logo from '../images/coc_logo.svg';
import toc_logo from '../images/2oc_logo.svg';
import add_logo from '../images/add_logo.png';

const Honor = () => (
    <section class="experience-section">
        <div class="title-block">
            <div class="circle">
                <div class="inner-circle"></div>
            </div>
            <div class="experience-title">
                OTHER EXPERIENCE
            </div>
        </div>
        <div class="experience-block">
            <div class="experience-left">
                <div class="company-date">2024.08 ~ 2024.10</div>
            </div>        
            <div class="experience-right">
                <div class="company-info">
                    <span class="company-name">FSI AIxDATA Challenge 2024</span>
                    <span class="badge badge-blue">AI</span>
                </div>
            </div>
        </div>

        <div class="experience-block">
            <div class="experience-left">
                <div class="company-date">2020.07 ~ 2023.06</div>
            </div>
            <div class="experience-right">
                <div class="company-info">
                    <span class="company-name">육군 사이버보안 경진대회 2022</span>
                    <span class="badge badge-green">Security</span>
                </div>
            </div>
        </div>
        <div class="position-block">
            <div class="experience-left">
                <span class="position-date">2023.06 ~ 2024.06</span>
            </div>
            <div class="experience-right">
                <div class="position-name">Incident Response Team Leader</div>
                <div class="text">• LLM을 활용한 취약점 분석 기술 연구</div>
            </div>
        </div>
        <div class="position-block">
            <div class="experience-left">
                <span class="position-date">2023.06 ~ 2024.06</span>
            </div>
            <div class="experience-right">
                <div class="position-name">Security Analyst</div>
                <div class="text">• 방어 임무 수행 계획 수립</div>
                <div class="text">• 침해사고 조사분석 매뉴얼 작성 및 전군 배포</div>
                <div class="text">• 유관기관(경찰청, KISA, OO원 등) 공조</div>
            </div>
        </div>

        <div class="experience-block">
            <div class="experience-left">
                <div class="company-date">2011 ~ 2013</div>
            </div>
            <div class="experience-right">
                <div class="company-info">
                    <span class="company-name">한국정보올림피아드</span>
                    <span class="badge badge-green">Algorithm</span>
                </div>
            </div>
        </div>

        <div class="position-block">
            <div class="experience-left">
            </div>
            <div class="experience-right">
                <div class="text">• 2013 고등부 지역 동상, 전국 동상 수상</div>
                <div class="text">• 2012 IOI 여름학교 수료</div>
                <div class="text">• 2011 중등부 지역 대상, 전국 은상 수상</div>
                <div class="text">• 2010 중등부 지역 은상, 전국 장려상 수상</div>
            </div>
        </div>
    </section>
);

export default Honor;
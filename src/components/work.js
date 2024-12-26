import React from 'react';
import '../styles/work.css';
import coc_logo from '../images/coc_logo.svg';
import toc_logo from '../images/2oc_logo.svg';
import add_logo from '../images/add_logo.png';

const Work = () => (
    <section class="experience-section">
        <div class="title-block">
            <div class="circle">
                <div class="inner-circle"></div>
            </div>
            <div class="experience-title">
                WORK EXPERIENCE
            </div>
        </div>
        <div class="experience-block">
            <div class="experience-left">
                <div class="company-date">2023.07 ~ 2025.05</div>
            </div>        
            <div class="experience-right">
                <div class="company-info">
                    <img src={coc_logo} class="company-logo"></img>
                    <span class="company-name">사이버작전사령부</span>
                    <span class="badge badge-blue">재직중</span>
                    <span class="badge badge-green">1년 11개월</span>
                </div>
            </div>
        </div>
        <div class="position-block">
            <div class="experience-left">
                <span class="position-date">2023.06 ~ 2024.06</span>
            </div>
            <div class="experience-right">
                <div class="position-name">Security Research Team Leader</div>
                <div class="text">• LLM을 활용한 취약점 분석 기술 연구</div>
            </div>
        </div>
        <div class="position-block">
            <div class="experience-left">
                <span class="position-date">2023.06 ~ 2024.06</span>
            </div>
            <div class="experience-right">
                <div class="position-name">Security Engineer</div>
                <div class="text">• 방어 임무 수행 계획 수립</div>
                <div class="text">• 침해사고 조사분석 매뉴얼 작성 및 전군 배포</div>
                <div class="text">• 유관기관(경찰청, KISA, OO원 등) 공조</div>
            </div>
        </div>

        <div class="experience-block">
            <div class="experience-left">
                <div class="company-date">2020.07 ~ 2023.06</div>
            </div>
            <div class="experience-right">
                <div class="company-info">
                    <img src={toc_logo} class="company-logo"></img>
                    <span class="company-name">육군제2작전사령부</span>
                    <span class="badge badge-green">3년</span>
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
                <div class="company-date">2018.06 ~ 2020.06</div>
            </div>
            <div class="experience-right">
                <div class="company-info">
                    <img src={add_logo} class="company-logo"></img>
                    <span class="company-name">국방과학연구소</span>
                    <span class="badge badge-green">2년 1개월</span>
                </div>
            </div>
        </div>

        <div class="position-block">
            <div class="experience-left">
            </div>
            <div class="experience-right">
                <div class="position-name">Security Researcher</div>
                <div class="text">• 생성 모델(GAN)을 활용한 퍼징 시드 생성 기술 연구</div>
            </div>
        </div>
    </section>
);

export default Work;
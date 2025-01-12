import React from 'react';
import profile from '../images/my2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const content = {
  title: {
    en: "About me",
    ko: "소개",
  },
  name: {
    en: "Duhyeon Baek",
    ko: "백두현",
  },
  jobTitle: {
    en: "ML & Security Engineer",
    ko: "ML & 보안 엔지니어",
  },
  paragraphs: [
    {
      en: "I served as an Army officer for seven years, gaining extensive experience in various cybersecurity tasks such as incident analysis and anomaly detection. In particular, I have a strong interest in the integration of AI and cybersecurity technologies and have been conducting research in this area.",
      ko: "저는 7년 동안 육군 장교로 복무하며 침해사고 분석, 이상 탐지 등 다양한 사이버 보안 업무를 수행하며 폭넓은 경험을 쌓아왔습니다. 특히, AI와 사이버 보안 기술의 융합에 깊은 관심을 가지고 관련 연구를 지속적으로 진행해왔습니다.",
    },
    {
      en: "Currently, I am pursuing a master’s degree at Korea University, focusing on reinforcement learning. My goal is to develop innovative AI-driven cybersecurity technologies to address rapidly evolving security threats and create a safe and trustworthy digital environment.",
      ko: "현재는 고려대학교 대학원에서 강화학습 관련 주제로 석사 학위를 취득 중에 있습니다. 제 목표는 AI 기반의 혁신적인 사이버 보안 기술을 개발하여, 급변하는 보안 위협에 대응하여 안전하고 신뢰할 수 있는 디지털 환경을 만드는 것입니다.",
    },
  ],
  contact: {
    email: {
      en: "Email",
      ko: "이메일",
    },
    phone: {
      en: "Phone",
      ko: "전화번호",
    },
    birthday: {
      en: "Birthday",
      ko: "생년월일",
    },
    address: {
      en: "Address",
      ko: "주소",
    },
    details: {
      email: "engus367@gmail.com",
      phone: {
        en: "+82 10-7745-4785",
        ko: "010-7745-4785"
      },
      birthday: {
        en: "July 9, 1996",
        ko: "1996년 7월 9일",
      },
      address: {
        en: "Seoul, Republic of Korea",
        ko: "서울시 관악구",
      },
    },
  },
};


const About = ({ language }) => {
  return (
    <div>
      <header>
        <h2 className="h2 article-title">{content.title[language]}</h2>
      </header>

      <div className="profile-container mb-4">
        <img
          src={profile}
          alt={"Profile"}
          className="w-48 h-48 rounded-full mx-auto mb-4 bg-gray-200"
        />
      </div>

      <h1 className="text-center text-2xl font-bold text-gray-900 mb-1">
        {content.name[language]}
      </h1>
      <h2 className="text-center text-l font-bold text-gray-500 mb-4">
        {content.jobTitle[language]}
      </h2>

      <section className="about-text">
        {content.paragraphs.map((para, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {para[language]}
          </p>
        ))}
      </section>

      <div className="contact-list mt-6 text-gray-700">
        <div className="mb-4">
          <span className="font-semibold">{content.contact.email[language]}:</span>{" "}
          {content.contact.details.email}
        </div>
        <div className="mb-4">
          <span className="font-semibold">{content.contact.phone[language]}:</span>{" "}
          {content.contact.details.phone[language]}
        </div>
        <div className="mb-4">
          <span className="font-semibold">{content.contact.birthday[language]}:</span>{" "}
          {content.contact.details.birthday[language]}
        </div>
        <div>
          <span className="font-semibold">{content.contact.address[language]}:</span>{" "}
          {content.contact.details.address[language]}
        </div>
      </div>

      <div class="social-icons flex justify-center space-x-4 sm:mt-2">
        <a href="mailto:engus367@gmail.com" title="Download CV" class="relative group">
          <div class="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition">
            <i class="fa fa-file text-gray-600"></i>
          </div>
        </a>

        <a href="mailto:engus367@gmail.com" title="Email" class="relative group">
          <div class="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition">
            <i class="fa fa-envelope text-gray-600"></i>
          </div>
        </a>

        <a href="https://github.com/duduuu" title="Follow On GitHub" class="relative group">
          <div class="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition">
            <i class="fab fa-github text-gray-600"></i>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/duhyeon-baek-390174311/" title="Follow On LinkedIn" class="relative group">
          <div class="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition">
            <i class="fab fa-linkedin text-gray-600"></i>
          </div>
        </a>
      </div>
      
    </div>
  );
};




/*
const About = () => (
    <div class="max-w-3xl mx-auto mt-4">
      <h1 class="text-4xl font-bold text-gray-900">
        Duhyeon Baek
      </h1>
      <h2 class="text-xl font-bold text-gray-500 mb-4">
        AI & Security Engineer
      </h2>

      <p class="text-gray-700 leading-relaxed">
        I served as an Army officer for seven years, gaining extensive experience in the field of cyber security. 
      </p>
      <p class="text-gray-700 leading-relaxed">
        For the first two years, I worked at the Agency for Defense Development (ADD), where I conducted research on
        applying deep learning techniques to cybersecurity. I then spent three years at the Army’s 2nd Operational
        Command, taking on various security-related tasks such as intrusion response analysis, anomaly detection, and
        vulnerability assessments. After that, I spent one year at the Cyber Operations Command, where I was responsible
        for developing defensive mission strategies and security policies.
      </p>
      <p class="text-gray-700 leading-relaxed">
        I am currently working as an R&D Team Lead,
        researching ways to incorporate LLMs into cybersecurity, while also pursuing a M.S. degree in deep learning at
        Korea University.
      </p>

      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 text-gray-700">
        <div class="mb-4 sm:mb-0">
          <span class="font-semibold">Email:</span> engus367@gmail.com
        </div>
        <div class="mb-4 sm:mb-0">
          <span class="font-semibold">Phone:</span> +82 10-7745-4785
        </div>
        <div class="mb-4 sm:mb-0">
          <span class="font-semibold">Birthday:</span> July 9, 1996
        </div>
        <div>
          <span class="font-semibold">Address:</span> 
          <span> Seoul, Republic of Korea</span> 
        </div>
      </div>

    <div class="social-icons flex justify-center space-x-4 mt-6">
      <a href="mailto:engus367@gmail.com" title="CV" class="relative group">
        <div class="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:bg-gray-800 transition">
          <i class="fa fa-file text-white"></i>
        </div>
      </a>

      <a href="mailto:engus367@gmail.com" title="Email" class="relative group">
        <div class="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:bg-gray-800 transition">
          <i class="fa fa-envelope text-white"></i>
        </div>
      </a>

      <a href="https://github.com/duduuu" title="Follow On GitHub" class="relative group">
        <div class="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:bg-gray-800 transition">
          <i class="fab fa-github text-white"></i>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/duhyeon-baek-390174311/" title="Follow On LinkedIn" class="relative group">
        <div class="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:bg-gray-800 transition">
          <i class="fab fa-linkedin text-white"></i>
        </div>
      </a>

    </div>
    </div>
);
*/
export default About;
import React, { useState } from 'react';
//import Header from './components/header';
//import WorkExperience from './components/workexp';
//import Education from './components/education';
//import Award from './components/award';
//import Skills from './components/skills';
import About from './components/about';
import Resume from './components/resume';
import Toggle from './components/toggle';
import './styles/output.css';
import './styles/maincontent.css';
//import './styles/main.css';

const pageComponents = {
  about: About,
  resume: Resume
};

const App = () => {
  /*
  const [language, setLanguage] = useState('en'); // 초기 언어 설정
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <div className="p-4 sm:p-6 md:p-8">
          <About />
          <WorkExperience language={language}/>
          <Education />
          <Award language={language}/>
          <Skills />
        </div>
      </main>
    </>
  );
 */
  const [activePage, setActivePage] = useState("about");
  const [language, setLanguage] = useState('en'); // 초기 언어 설정
  const pages = [
    { id: "about", name: "About" },
    { id: "resume", name: "Resume" },
  ];
  const languagues = [
    { id: "ko", name: "KOR" },
    { id: "en", name: "ENG" },
  ];
  const ActivePageComponent = pageComponents[activePage];
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ko" : "en";
    setLanguage(newLanguage);
  };

  return (
   <main>
    <div class="main-content">
      <nav class="navbar">
        <ul class="navbar-list">
          {pages.map((page) => (
            <li key={page.id} className="navbar-item">
              <button class={`navbar-link ${activePage === page.id ? "active":""}`} data-nav-link="" onClick={() => setActivePage(page.id)}>
                {page.name}
              </button> 
            </li>
          ))}
          <li className="navbar-item">    
                  <label className="inline-flex cursor-pointer items-center">
              {/* 토글 입력 */}
              <input
                type="checkbox"
                checked={language === "ko"} // 한국어일 때 체크 상태
                onChange={toggleLanguage} // 체크 변경 시 언어 토글
                className="peer sr-only"
              />
              {/* 토글 상태 텍스트 */}
              <span className="navbar-link">
                {language === "en" ? "English" : "한국어"}
              </span>
              {/* 토글 스위치 */}
              <div className="ms-2 peer relative h-6 w-11 rounded-full bg-gray-600 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full">
              </div>
            </label>
          </li>
        </ul>
      </nav>
        <article data-page="about" className={`about ${activePage === "about" ? "active":""}`}>
          <About language={language}/>
        </article>

        <article data-page="resume" className={`resume ${activePage === "resume" ? "active":""}`}>
          <Resume language={language}/>
        </article>
    </div>
   </main>
  );
};

export default App;

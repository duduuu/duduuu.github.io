import React from "react";
import '../styles/output.css';

const experiences = [
    {
      company: {
        ko: "사이버작전사령부",
        en: "Cyber Operations Command",
      },
      period: {
        ko: "2024년 7월 - 현재",
        en: "July 2024 - Present",
      },
      role: {
        ko: "보안 연구원 / 팀 리더",
        en: "Security Researcher / Team Leader",
      },
      description: {
        ko: [
          "ML를 활용한 오펜시브 보안 기술 연구", 
          "오펜시브 보안 분야 신기술 정보 수집 및 도입 타당성 검토"
        ],
        en: [
          "Lead a security research team investigating offensive security technologies using machine learning (ML).",
          "Identify and evaluate emerging offensive security technologies for potential adoption.",
        ],
      },
      skills: ["ML", "LLM", "Vulnerability Detection", "Python"]
    },
    {
      company: {
        ko: "사이버작전사령부",
        en: "Cyber Operations Command",
      },
      period: {
        ko: "2023년 7월 - 2024년 6월",
        en: "Jul 2023 - Jun 2024",
      },
      role: {
        ko: "보안 엔지니어",
        en: "Security Engineer",
      },
      description: {
        ko: [
          "침해사고 분석/대응 전략 수립 및 정책 개발",
          "전군의 침해사고 분석능력 향상을 위한 매뉴얼 제작 및 배포, 교육 프로그램 운영",
          "침해대응 유관기관과 협력 체계 구축을 위한 관계관 회의 운영",
          "디펜시브 보안 분야 AI 기술 자문의원 활동",
        ],
        en: [
          "Developed strategies and policies for incident analysis and response",
          "Organized councils and collaboration systems with relevant organizations",
          "Created and distributed manuals for military-wide incident analysis and conducted training programs",
          "Served as a technical advisor on AI technologies for cyber defense",
        ],
      },
      skills: ["Forensic", "AI"]
    },
    {
      company: {
        ko: "육군제2작전사령부",
        en: "ROK Army 2nd Operations Command",
      },
      period: {
        ko: "2022년 1월 - 2023년 6월",
        en: "Jan 2022 - Jun 2023",
      },
      role: {
        ko: "보안 엔지니어 / 팀 리더",
        en: "Security Engineer / Team Leader",
      },
      description: {
        ko: [
          "조직 내 사이버 침해사고 분석/대응 총괄",
          "주요 위협 시나리오(랜섬웨어, DDoS 등)별 조직 맞춤형 대응 전략 개발",
          "SIEM 솔루션(Splunk)을 통한 위협 로그 탐지 시나리오 개발 및 관제 대시보드 구성",
          "팀원들의 포렌식 역량 강화을 위한 스터디 진행 및 동반 CTF 대회 참여",
        ],
        en: [
          "Oversaw end-to-end analysis and response for cyber incidents within the organization.",
          "Developed customized strategies to address key threat scenarios such as ransomware and DDoS.",
          "Utilized Splunk (SIEM) to create threat detection scenarios and real-time monitoring dashboards.",
          "Conducted forensic skills workshops for team members and participated in CTF competitions together.",
        ],
      },
      skills: ["Forensic", "Reversing", "Sandbox", "Splunk"]
    },
    {
      company: {
        ko: "육군제2작전사령부",
        en: "ROK Army 2nd Operations Command",
      },
      period: {
        ko: "2020년 7월 - 2021년 12월",
        en: "Jul 2020 - Dec 2021",
      },
      role: {
        ko: "보안 엔지니어",
        en: "Security Engineer",
      },
      description: {
        ko: [
          "보안 로그 및 네트워크 트래픽 분석을 통한 사이버 침해사고 분석/대응 수행",
          "침해사고 탐지, 분석, 복구 과정을 체계화한 표준 대응 절차를 개발하여 사고 대응 효율성 30% 향상",
          "다양한 보안 관제 솔루션(UTM, IPS, NAC 등) 관제 및 운용",
          "조직 내 정보시스템을 대상으로 보안 취약점 진단 수행, 우수 보안조직 선정에 기여 (✯✯✯✯ 표창 수상)",
        ],
        en: [
          "Investigated and mitigated cyber incidents by analyzing security logs and network traffic.",
          "Implemented standardized procedures for incident detection, analysis, and recovery, increasing response efficiency by 30%.",
          "Managed and operated a range of security monitoring solutions (UTM, IPS, NAC).",
          "Conducted vulnerability assessments on organizational systems, contributing to the unit’s outstanding security recognition (✯✯✯✯)."
        ],
      },
      skills: ["Incident Analysis", "Threat Detection", "Splunk", "Snort"]
    },
    {
      company: {
        ko: "국방과학연구소",
        en: "Agency for Defense Development",
      },
      period: {
        ko: "2018년 6월 - 2020년 6월",
        en: "Jun 2018 - Jun 2020",
      },
      role: {
        ko: "보안 연구원",
        en: "Cybersecurity Researcher",
      },
      description: {
        ko: [
          "'딥러닝을 활용한 퍼징 성능 향상 기술 연구' 프로젝트 참여",
          "생성 모델(GAN)을 활용한 퍼징 시드 생성 기술 연구/개발 (관련 특허 1건)",
        ],
        en: [
          "Contributed to the 'Enhancing Fuzzing Performance Using Deep Learning' research project.",
          "Developed fuzzing seed generation techniques using GANs, resulting in one registered patent."
        ],
      },
      skills: ["GAN", "Fuzzing", "Pytorch", "Python", "R&D"]
    }
];

const experiences_ml = [
  {
    company: {
      ko: "사이버작전사령부",
      en: "Cyber Operations Command",
    },
    period: {
      ko: "2024년 7월 - 현재",
      en: "July 2024 - Present",
    },
    role: {
      ko: "보안 연구원 / 팀 리더",
      en: "Security Researcher / Team Leader",
    },
    description: {
      ko: [
        "ML를 활용한 오펜시브 보안 기술 연구"
      ],
      en: [
        "Lead a security research team investigating offensive security technologies using machine learning (ML).",
      ],
    },
    skills: ["ML", "LLM", "Vulnerability Detection", "Python"]
  },
  {
    company: {
      ko: "사이버작전사령부",
      en: "Cyber Operations Command",
    },
    period: {
      ko: "2023년 7월 - 2024년 6월",
      en: "Jul 2023 - Jun 2024",
    },
    role: {
      ko: "보안 엔지니어",
      en: "Security Engineer",
    },
    description: {
      ko: [
        "침해사고 분석/대응 전략 수립 및 정책 개발",
        "디펜시브 보안 분야 AI 기술 자문의원 활동",
      ],
      en: [
        "Developed strategies and policies for incident analysis and response",
        "Served as a technical advisor on AI technologies for cyber defense",
      ],
    },
    skills: ["Forensic", "AI"]
  },
  {
    company: {
      ko: "육군제2작전사령부",
      en: "ROK Army 2nd Operations Command",
    },
    period: {
      ko: "2022년 1월 - 2023년 6월",
      en: "Jan 2022 - Jun 2023",
    },
    role: {
      ko: "보안 엔지니어 / 팀 리더",
      en: "Security Engineer / Team Leader",
    },
    description: {
      ko: [
        "조직 내 사이버 침해사고 분석/대응 총괄",
        "SIEM 솔루션(Splunk)을 통한 위협 로그 탐지 시나리오 개발 및 관제 대시보드 구성"
      ],
      en: [
        "Oversaw end-to-end analysis and response for cyber incidents within the organization.",
        "Developed customized strategies to address key threat scenarios such as ransomware and DDoS.",
      ],
    },
    skills: ["Forensic", "Reversing", "Sandbox", "Splunk"]
  },
  {
    company: {
      ko: "국방과학연구소",
      en: "Agency for Defense Development",
    },
    period: {
      ko: "2018년 6월 - 2020년 6월",
      en: "Jun 2018 - Jun 2020",
    },
    role: {
      ko: "보안 연구원",
      en: "Cybersecurity Researcher",
    },
    description: {
      ko: [
        "'딥러닝을 활용한 퍼징 성능 향상 기술 연구' 프로젝트 참여",
        "생성 모델(GAN)을 활용한 퍼징 시드 생성 기술 연구/개발 (관련 특허 1건)",
      ],
      en: [
        "Contributed to the 'Enhancing Fuzzing Performance Using Deep Learning' research project.",
        "Developed fuzzing seed generation techniques using GANs, resulting in one registered patent."
      ],
    },
    skills: ["GAN", "Fuzzing", "Pytorch", "Python", "R&D"]
  }
];

const education = [
    {
        school: {
          ko: "고려대학교",
          en: "Korea University",
        },
        period: {
            ko: "2019년 7월 - 현재",
            en: "Jul 2019 - Present",
          },
          major: {
            ko: "정보보호학, 석사",
            en: "Cyber Security, M.S.",
          },
          description: {
            ko: [
              "강화학습을 활용한 차량 제어 알고리즘 설계 연구 진행중",
            ],
            en: [
              "Researching reinforcement learning algorithm",
            ],
          },
    },
    {
        school: {
            ko: "고려대학교",
            en: "Korea University",
          },
          period: {
            ko: "2014년 3월 - 2018년 2월",
            en: "Mar 2014 - Feb 2018",
          },
          major: {
            ko: "사이버국방학, 학사",
            en: "Cyber Defense, B.S.",
          },
          description: {
            ko: [
              "컴퓨터공학, 사이버보안 등 전공 수강",
              "국방부 전액 장학금 수혜",
            ],
            en: [
              "GPA : 3.63 / 4.5",
              "Full tuition scholarship from Ministry of National Defense, Republic of Korea",
            ],
          },
    },
    {
        school: {
            ko: "인천과학고등학교",
            en: "Incheon Science High School",
          },
          period: {
            ko: "2012년 3월 - 2014년 2월",
            en: "Mar 2012 - Feb 2014",
          },
          major: {
            ko: "정보과학",
            en: "Informatics",
          },
          description: {
            ko: [
            ],
            en: [
            ],
          },
    }
];

const awards = [
    {
      name: {
        ko: "FSI AIxData Challenge",
        en: "FSI AIxData Challenge",
      },
      period: "Oct 2024",
      badge: "2nd",
      description: {
        ko: [
            "주최 / 주관 : 금융보안원",
            "AI 모델을 활용하여 이상 금융거래를 분류"
        ],
        en: [
            "Organizer : Financial Security Institute (FSI)",
            "Detect anomalous financial transactions using AI models."
        ],
      },
      skills: ["ML", "Python", "Pytorch", "LightGBM", "GAN"],
    },
    {
      name: {
        ko: "육군 사이버보안 경진대회",
        en: "ROKA Cyber Security Challange",
      },
      period: "Oct 2022",
      badge: "2nd",
      description: {
        ko: [
            "주최 / 주관 : 육군본부",
            "CTF (포렌식, 포너블, 웹, 암호학)"
        ],
        en: [
            "Organizer : Republic of Korea Army Headquarters",
            "CTF (Forensic, Pwnable, Web, Crypto)"
        ],
      },
      skills: ["Forensic", "Crypto", "Pwanble"],
    },
    {
      name: {
        ko: "한국정보올림피아드 (KOI)",
        en: "Korea Olympiad in Informatics",
      },
      period: "2011 - 2013",
      badge: "Silver",
      description: {
        ko: [
          "주최 / 주관 : 한국정보과학회",
          "2013년 고등부 동상",
          "2012년 국제정보올림피아드 (IOI) 여름학교 수료",
          "2011년 중등부 은상",
        ],
        en: [
          "Organizer : Ministry of Science and ICT",
          "2013 Bronze Medal (High School Division)",
          "2012 Completion of the International Olympiads in Informatics (IOI) Summer School",
          "2011 Silver Medal (Middle School Division)",
        ],
      },
      skills: ["C/C++", "Algorithm"],
    },
];

const certificates = [
  {
    name: {
      ko: "정보처리기사",
      en: "Engineer Information Processing",
    },
    period: {
      ko: "2019년 5월",
      en: "May 2019",
    },
    description: {
      ko: [
      ],
      en: [
      ],
    },
  },
];

const skills = [
  {
    type: "Programming",
    skills: ["C/C++", "Python", "Java", "JavaScript", "SQL"]
  },
  {
    type: "Frameworks / Tools",
    skills: ["PyTorch", "Tensorflow", "Git"]
  }
];

const getBadgeClasses = (badge) => {
  switch (badge) {
    default:
      return "bg-zinc-100 text-zinc-800 border border-zinc-400";
  }
};

const Resume = ({ language }) => {
  return (
    <div>
    <header>
      <h2 class="h2 article-title">
        Resume
      </h2>
    </header>

    <section class="timeline">
        <div className="flex items-center space-x-3">
          <i className="fa-solid fa-briefcase"></i>
          <h1 className="text-xl font-bold">Work Experience</h1>
        </div>
        <hr className="border-t-1.5 border-gray-300 mt-3 mb-3" />
        <ol class="timeline-list">
            {experiences_ml.map((exp, index) => (
              <li class="timeline-item">
                <h2 className="font-semibold">{exp.role[language]}</h2>
                <span className="block sm:inline text-gray-700">
                  {exp.company[language]}
                </span>
                <span className="block sm:inline sm:ml-2 text-gray-700">
                  <span className="hidden sm:inline">| </span>
                  {exp.period[language]}
                </span>
                <div className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {exp.description[language].map((desc, idx) => (
                    <p key={idx}>- {desc}</p>
                  ))}
                </div>
                <div className="flex space-x-2 mt-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-gray-700 bg-gray-100 rounded-lg text-tiny"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </li>
          ))}
        </ol>
    </section>

    <section class="timeline mt-12">
        <div className="flex items-center space-x-3">
          <i className="fa-solid fa-graduation-cap"></i>
          <h1 className="text-xl font-bold">Education</h1>
        </div>
        <hr className="border-t-1.5 border-gray-300 mt-3 mb-3" />
        <ol class="timeline-list">
            {education.map((exp, index) => (
              <li class="timeline-item">
                <h2 className="block sm:inline text-l font-semibold">{exp.school[language]}</h2>
                <div className="space-y-1 sm:space-y-0">
                    <span className="inline text-gray-600">{exp.major[language]}</span>
                    <span className="inline ml-2 text-gray-600">| {exp.period[language]}</span>
                </div>
                <div className="text-sm text-gray-700 mt-2 leading-relaxed">
                    {exp.description[language].map((desc, idx) => (
                        <p key={idx}>- {desc}</p>
                    ))}
                </div>
              </li>
          ))}
        </ol>
    </section>

    <section class="timeline mt-12">
        <div className="flex items-center space-x-3">
            <i className="fa-solid fa-award"></i>
            <h1 className="text-xl font-bold text-black-600">Award</h1>
        </div>
        <hr className="border-t-1.5 border-gray-300 mt-3 mb-3" />
        <ol class="table-list">
            {awards.map((exp, index) => (
              <li class="table-item">
                <div className="flex items-center space-x-2">
                <span className={`${getBadgeClasses(exp.badge)} w-20 text-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-full`}>
                    <i className="fas fa-medal mr-1" style={{color: 'silver'}} />
                    {exp.badge}
                  </span>
                  <div className="space-y-1 sm:space-y-0">
                      <h2 className="block sm:inline text-l font-semibold">{exp.name[language]}</h2>
                      <span className="block sm:inline sm:ml-2 text-gray-600">{exp.period}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 mt-2 leading-relaxed">
                    {exp.description[language].map((desc, idx) => (
                    <p key={idx}>- {desc}</p>
                    ))}
                </div>
                <div className="flex space-x-2 mt-2">
                    {exp.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 text-gray-700 bg-gray-100 rounded-lg text-tiny">
                        {skill}
                    </span>
                    ))}
                </div>
              </li>
          ))}
        </ol>
    </section>


    <section class="timeline mt-12">
      <div class="flex items-center space-x-3">
        <i class="fa-solid fa-certificate"></i>
        <h1 class="text-xl font-bold text-blck-600">Certificate</h1>
      </div>
      <hr className="border-t-1.5 border-gray-300 mt-3 mb-3" />
        <ol class="table-list">
            {certificates.map((exp, index) => (
              <li class="table-item">
                <div className="space-y-2">
                    <h2 className="inline text-l font-semibold">{exp.name[language]}</h2>
                    <span className="inline ml-2 text-gray-600">{exp.period[language]}</span>
                </div>
              </li>
          ))}
        </ol>
    </section>

    <section class="timeline mt-12">
      <div class="flex items-center space-x-3">
        <i class="fa-solid fa-bolt"></i>
        <h1 class="text-xl font-bold text-blck-600">Skills</h1>
      </div>
      <hr className="border-t-1.5 border-gray-300 mt-3 mb-3" />
      <ol class="table-list">
          {skills.map((exp, index) => (
            <li class="table-item">
              <div className="space-y-2">
                  <h2 className="block sm:inline text-l font-semibold">{exp.type}</h2>
                  <div className="flex space-x-2 ml-2">
                      {exp.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 text-gray-700 bg-gray-100 rounded-lg text-tiny">{skill}</span>
                      ))}
                  </div>
              </div>
            </li>
        ))}
      </ol>
    </section>

    </div>
  );
};
  
export default Resume;
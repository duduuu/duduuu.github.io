import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [language, setLanguage] = useState("en"); // 기본 언어는 영어로 설정

  // 언어 스위치
  const switchLanguage = () => {
    const newLanguage = language === "en" ? "ko" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  // 컴포넌트 마운트 시 로컬 스토리지에서 언어 상태 불러오기
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  return (
    <button
      className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={switchLanguage}
    >
      <div
        className={`w-12 h-12 relative rounded-full transition duration-500 transform p-1 text-white ${
          language === "ko"
            ? "bg-blue-500 translate-x-full"
            : "bg-blue-500 translate-x-full"
        }`}
      >
        {language === "ko" ? (
          <span className="text-sm font-semibold">KOR</span>
        ) : (
          <span className="text-sm font-semibold">ENG</span>
        )}
      </div>
    </button>
  );
};

export default Toggle;
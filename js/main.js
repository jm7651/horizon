document.addEventListener("DOMContentLoaded", function () {
  const barContainers = document.querySelectorAll(".graphic_bar");
  const numberOfBars = 6; // 생성할 바의 개수
  const animationDuration = 1000; // 애니메이션 지속 시간 (ms)
  const delayBetweenAnimations = 200; // 각 바 애니메이션 사이의 딜레이 (ms)
  const repeatInterval =
    animationDuration + delayBetweenAnimations * (numberOfBars - 1) + 0; // 반복 간격

  barContainers.forEach((barContainer) => {
    for (let i = 0; i < numberOfBars; i++) {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      barContainer.appendChild(bar);

      animateBar(bar, i * delayBetweenAnimations);
    }
  });

  function animateBar(bar, delay) {
    setInterval(() => {
      setTimeout(() => {
        bar.style.transform = "scaleY(1)";
        setTimeout(() => {
          bar.style.transform = "scaleY(0)";
        }, animationDuration); // 바가 커진 후 다시 작아지기까지의 시간
      }, delay);
    }, repeatInterval);
  }

  const section002 = document.getElementById("section002");
  const container = document.querySelector(".container");
  const bannerText = document.querySelector(".banner_text");
  const bars = document.querySelectorAll(".bar");
  window.addEventListener("scroll", function () {
    const bannerRect = bannerText.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const bannerMidpoint = bannerRect.top + bannerRect.height / 1.5;

    if (bannerMidpoint < windowHeight / 1.5) {
      section002.style.backgroundColor = "#000";
      container.style.backgroundColor = "#000";
      bannerText.style.color = "#fff";
      bars.forEach((bar) => (bar.style.backgroundColor = "#fff")); // bar 배경색 변경
    } else {
      section002.style.backgroundColor = "#fff";
      container.style.backgroundColor = "#fff";
      bannerText.style.color = "#282c35";
      bars.forEach((bar) => (bar.style.backgroundColor = "#282c35")); // bar 배경색 변경
    }
  });
});
const parallax001 = document.getElementById("parallax_001");
const parallax002 = document.getElementById("parallax_002");
const parallax003 = document.getElementById("parallax_003");
const parallax002Img = document.querySelector("#parallax_002 img");
const parallax003Img = document.querySelector("#parallax_003 img");
window.addEventListener("scroll", () => {
  parallax001.style.transform = `translateY(${window.scrollY * -1.2}px)`;
  parallax002.style.transform = `translateY(${window.scrollY * -2.3}px)`;
  parallax002Img.style.transform = `rotate(${window.scrollY / 2}deg)`;
  parallax003.style.transform = `translateY(${window.scrollY * -0.7}px)`;
  parallax003Img.style.transform = `rotate(${window.scrollY / 2}deg)`;
});

// 뷰포트 높이를 CSS 변수로 설정하는 함수
function setViewportHeight() {
  const vh = window.innerHeight * 0.01; // 뷰포트 높이의 1%
  document.documentElement.style.setProperty("--vh", `${vh}px`); // CSS 변수 설정
}

// 페이지 로드 시 및 윈도우 리사이즈 시 뷰포트 높이 설정
window.addEventListener("load", setViewportHeight);
window.addEventListener("resize", setViewportHeight);

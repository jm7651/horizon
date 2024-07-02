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
  const bannerText = document.querySelector(".banner_text");

  window.addEventListener("scroll", function () {
    const bannerRect = bannerText.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const bannerMidpoint = bannerRect.top + bannerRect.height / 1.5;

    if (bannerMidpoint < windowHeight / 1.5) {
      section002.style.backgroundColor = "#9656ff";
    } else {
      section002.style.backgroundColor = "#fff";
    }
  });
});
const parallax001 = document.getElementById("parallax_001");
const parallax002 = document.getElementById("parallax_002");
const parallax003 = document.getElementById("parallax_003");
const parallax003Img = document.querySelector("#parallax_003 img");
window.addEventListener("scroll", () => {
  parallax001.style.transform = `translateY(${window.scrollY * -1.2}px)`;
  parallax002.style.transform = `rotate(${
    window.scrollY / 360
  }deg) translateY(${window.scrollY * -2}px)`;

  parallax003.style.transform = `translateY(${window.scrollY * -1.2}px)`;
  parallax003Img.style.transform = `rotate(${window.scrollY / 2}deg)`;
});

document.addEventListener("DOMContentLoaded", function () {
  var section001 = document.getElementById("section001");
  var title = document.querySelector(".title");
  var subtitle = document.querySelector(".subtitle");
  var video = document.querySelector(".video");
  var sectionHeight = section001.clientHeight;
  var scrollThreshold = sectionHeight * 1.3;

  function isMobile() {
    return window.innerWidth <= 768;
  }
  if (!isMobile()) {
    var newContent = "";
    for (let char of title.childNodes) {
      if (char.nodeType === Node.TEXT_NODE) {
        newContent += char.textContent
          .split("")
          .map((letter) => `<span>${letter}</span>`)
          .join("");
      } else if (
        char.nodeType === Node.ELEMENT_NODE &&
        char.tagName === "SPAN" &&
        char.classList.contains("image")
      ) {
        newContent += char.outerHTML;
      }
    }
    title.innerHTML = newContent;
  }

  var titleSpans = document.querySelectorAll(".title span");

  function handleScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    // Sticky position handling
    if (scrollY <= scrollThreshold) {
      section001.style.position = "sticky";
      section001.style.top = "0";
    } else {
      section001.style.position = "relative";
      section001.style.top = scrollThreshold + "px";
    }

    // Title animation (one letter at a time)
    titleSpans.forEach((span, index) => {
      var spanOpacity = Math.min(
        (scrollY - index * 50) / (scrollThreshold - index * 50),
        1
      );
      span.style.opacity = spanOpacity;
      span.style.transform = `translateY(${20 * (1 - spanOpacity)}px)`;
    });

    // Subtitle animation (starts after title is fully visible)
    var subtitleOpacity = Math.min(scrollY / scrollThreshold, 1);
    var subtitleTranslateY = 10 - subtitleOpacity * 10;
    subtitle.style.opacity = subtitleOpacity;
    subtitle.style.transform = `translateY(${subtitleTranslateY}px)`;

    // Video size animation
    var videoWidth;
    if (window.innerWidth <= 768) {
      // 모바일 화면에서는 90%에서 95%로 증가
      videoWidth = 90 + Math.min(scrollY / scrollThreshold, 1) * 5;
    } else {
      // 데스크탑 화면에서는 60%에서 50%로 감소
      videoWidth = 75 - Math.min(scrollY / scrollThreshold, 1) * 10;
    }
    video.style.width = videoWidth + "%";
  }

  window.addEventListener("scroll", handleScroll, { passive: true });

  // 초기 로드 시 한 번 실행하여 초기 위치를 설정합니다.
  handleScroll();
});

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
});

document.addEventListener("DOMContentLoaded", function () {
  const section002 = document.getElementById("section002");
  const bannerText = document.querySelector(".banner_text");

  window.addEventListener("scroll", function () {
    const bannerRect = bannerText.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const bannerMidpoint = bannerRect.top + bannerRect.height / 1.1;

    if (bannerMidpoint < windowHeight / 1.1) {
      section002.style.backgroundColor = "#AA7CF6";
    } else {
      section002.style.backgroundColor = "white";
    }
  });
});
const parallax001 = document.getElementById("parallax_001");
const parallax002 = document.getElementById("parallax_002");
const parallax002Img = document.querySelector("#parallax_002 img");
const parallax003 = document.getElementById("parallax_003");
const parallax003Img = document.querySelector("#parallax_003 img");

function applyParallaxEffect() {
  const scrollY = window.scrollY || window.pageYOffset; // 모바일 호환성
  // parallax001.style.transform = `translateY(${scrollY * -1.2}px)`;
  parallax002.style.transform = `translateY(${scrollY * -1.2}px)`;
  parallax002Img.style.transform = `rotate(${scrollY / 2}deg)`;
  // parallax003.style.transform = `translateY(${scrollY * -1.2}px)`;
  parallax003Img.style.transform = `rotate(${scrollY / 2}deg)`;
}

window.addEventListener("scroll", applyParallaxEffect);
window.addEventListener("resize", applyParallaxEffect); // 모바일에서

// 모바일에서 스크롤 이벤트가 원활하게 동작하도록 하는 추가 코드
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
  window.addEventListener("touchmove", applyParallaxEffect);
}

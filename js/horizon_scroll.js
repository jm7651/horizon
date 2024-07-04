gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

function createScrollTrigger() {
  // 기본 설정
  let xPercent = -100 * (sections.length - 1);
  let endValue = "+=" + document.querySelector(".container").offsetWidth * 0.3;

  // 모바일 대응 설정
  if (window.innerWidth < 768) {
    xPercent = -100 * (sections.length - 1); // 모바일에서도 동일하게 설정
    endValue = "+=" + document.querySelector(".container").offsetWidth * 0.6; // 모바일에 맞게 종료 지점 조정
  }

  // 기존 애니메이션 제거
  ScrollTrigger.getAll().forEach((st) => st.kill());
  gsap.killTweensOf(sections);

  // 새 애니메이션 설정
  gsap.to(sections, {
    xPercent: xPercent,
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: endValue,
    },
  });
}

// 초기 호출
createScrollTrigger();

// 윈도우 크기 변경 시 호출
window.addEventListener("resize", createScrollTrigger);

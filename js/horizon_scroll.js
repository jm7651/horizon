gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(".container", {
  // backgroundImage: "linear-gradient(180deg, #c2c2ff, #ffffff)",
  scrollTrigger: {
    trigger: ".container", // 스크롤 트리거가 되는 요소
    start: "top center", // 애니메이션 시작 위치
    end: "+=200", // 애니메이션 종료 위치 (이전 질문에서 요청한 200px 추가)
    scrub: true, // 스크롤에 따라 애니메이션이 진행되도록 설정
    markers: false,
  },
});
let mm = gsap.matchMedia();
mm.add("(max-width:500px)", () => {
  gsap.to(sections, {
    xPercent: -120 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1, // 애니메이션 반응을 매우 빠르게 설정
      snap: {
        snapTo: 1 / (sections.length - 1), // 패널 간 스냅 설정
        duration: { min: 0.2, max: 0.5 }, // 스냅 애니메이션의 최소 및 최대 지속 시간 설정
        ease: "power1.inOut", // 스냅 애니메이션의 이징 설정
      },
      markers: false,
      end: () => "+=" + document.querySelector(".container").offsetWidth,
    },
  });
});
mm.add("(min-width:501px)", () => {
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.4, // 애니메이션 반응을 매우 빠르게 설정
      snap: {
        snapTo: 1 / (sections.length - 1), // 패널 간 스냅 설정
        duration: { min: 0.2, max: 0.5 }, // 스냅 애니메이션의 최소 및 최대 지속 시간 설정
        ease: "power1.inOut", // 스냅 애니메이션의 이징 설정
      },
      markers: false,
      // markers: {
      //   startColor: "purple",
      //   endColor: "fuchsia",
      //   indent: 100,
      //   fontWeight: "bold",
      // },
      end: () => "+=" + document.querySelector(".container").offsetWidth,
    },
  });
});
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap
  .to(".marquee__part", {
    xPercent: -100,
    repeat: -1,
    duration: 10,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".marquee__inner", { xPercent: -50 });

window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  currentScroll = window.pageYOffset;
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

document.querySelectorAll(".split").forEach((text) => {
  let theText = text.innerText;
  let newText = "";
  for (let i = 0; i < text.innerText.length; i++) {
    newText += "<span aria-hidden='true'>";
    if (text.innerText[i] == " ") {
      newText += "&nbsp";
    } else {
      newText += text.innerText[i];
    }
    newText += "</span>";
  }
  text.innerHTML = newText;
  text.setAttribute("aria-label", theText);
});

gsap.utils.toArray(".split").forEach((text) => {
  gsap.from(text.querySelectorAll("span"), {
    yPercent: 30,
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
    //stagger: 0.04,
    stagger: 0.1,
    scrollTrigger: {
      trigger: text,
      start: "-=400",
      end: "-=1000",
      scrub: 1,
      markers: false,
    },
  });
});
gsap.utils.toArray(".section_sub_text").forEach((text) => {
  gsap.from(text, {
    yPercent: 50,
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
    //stagger: 0.04,
    stagger: 0.1,
    scrollTrigger: {
      trigger: text,
      start: "-=400",
      end: "-=1000",
      scrub: 1,
      markers: false,
    },
  });
});

let sectionDescWrapper = gsap.utils.toArray(".section_desc_wrapper div");
let videoSections = gsap.utils.toArray(".video_section");
let horizonImgSection = gsap.utils.toArray(".horizon_img_section");
videoSections.forEach((videoSection) => {
  gsap.from(videoSection, {
    yPercent: 30,
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
    stagger: 1,
    scrollTrigger: {
      trigger: videoSection,
      start: "top 50%", // 스크롤 트리거 시작 지점
      end: "top 50%", // 스크롤 트리거 종료 지점
      scrub: 2,
      markers: false,
    },
  });
});
sectionDescWrapper.forEach((sectionDescWrapper) => {
  gsap.from(sectionDescWrapper, {
    yPercent: 30,
    autoAlpha: 0,
    duration: 2,
    ease: "circ.out",
    stagger: 1,
    scrollTrigger: {
      trigger: sectionDescWrapper,
      start: "top 80%", // 스크롤 트리거 시작 지점
      end: "top 50%", // 스크롤 트리거 종료 지점
      scrub: 2,
      markers: false,
    },
  });
});
horizonImgSection.forEach((horizonImgSection) => {
  gsap.from(horizonImgSection, {
    yPercent: 30,
    autoAlpha: 0,
    duration: 2,
    ease: "circ.out",
    stagger: 1,
    scrollTrigger: {
      trigger: horizonImgSection,
      start: "top 80%", // 스크롤 트리거 시작 지점
      end: "top 50%", // 스크롤 트리거 종료 지점
      scrub: 2,
      markers: false,
    },
  });
});
// gsap.from(".targetrag_architecture", {
//   yPercent: 10,
//   autoAlpha: 0,
//   duration: 2,
//   ease: "circ.out",
//   stagger: 1,
//   scrollTrigger: {
//     trigger: ".targetrag_architecture", // 스크롤 트리거가 되는 요소
//     start: "-=200", // 애니메이션 시작 위치
//     end: "-=200", // 애니메이션 종료 위치 (이전 질문에서 요청한 200px 추가)
//     scrub: 2, // 스크롤에 따라 애니메이션이 진행되도록 설정
//     markers: false,
//   },
// });

const parallax001 = document.getElementById("parallax_001");
const parallax002 = document.getElementById("parallax_002");
const parallax003 = document.getElementById("parallax_003");
const parallax005 = document.getElementById("parallax_005");
const parallax006 = document.getElementById("parallax_006");
const parallax002Img = document.querySelector("#parallax_002 img");
const parallax003Img = document.querySelector("#parallax_003 img");
const llmopsSection = document.querySelector("#llmops_secion");
const llmopsVideo = document.getElementById("llmops_video");
const metadataSection = document.querySelector("#metadata_section");

window.addEventListener("scroll", () => {
  const rect = llmopsSection.getBoundingClientRect();
  const yPosition = rect.top + window.scrollY;
  const parallax006Position = yPosition - window.scrollY;

  parallax001.style.transform = `translateY(${window.scrollY * -1}px)`;
  parallax002.style.transform = `translateY(${window.scrollY * -0.7}px)`;
  parallax002Img.style.transform = `rotate(${window.scrollY / 2}deg)`;
  parallax003.style.transform = `translateY(${window.scrollY * -0.5}px)`;
  parallax003Img.style.transform = `rotate(${window.scrollY / 2}deg)`;
  parallax005.style.transform = `translateY(${window.scrollY * -0.8}px)`;
  parallax006.style.transform = `translate(-50%,${
    parallax006Position * -1.5
  }px)`;

  // 겹침 확인 및 opacity 설정 for llmopsVideo
  const videoRect = llmopsVideo.getBoundingClientRect();
  const parallaxRect = parallax006.getBoundingClientRect();
  const metadataRect = metadataSection.getBoundingClientRect();
  const videoThreshold = videoRect.top + videoRect.height * 0.5; // llmopsVideo의 30% 위치
  const metaThreshold = metadataRect.top + metadataRect.height * 0.7;
  if (
    parallaxRect.top < metaThreshold ||
    parallaxRect.bottom > videoThreshold
  ) {
    // parallax006이 metadataSection보다 위에 있거나 llmopsVideo의 30% 위치보다 아래에 있을 때
    parallax006.style.opacity = "0";
    parallax006.style.transform = `translate(-50%,-50%)`;
  } else {
    // parallax006이 그 사이에 있을 때
    parallax006.style.opacity = "1";
  }
});
const contents = document.querySelectorAll(".final_contents");

contents.forEach((content, index) => {
  gsap.to(content, {
    opacity: 1, // 최종 상태는 보이도록 설정
    scrollTrigger: {
      trigger: content, // 각 content 요소를 트리거로 설정
      start: "top 75%", // 트리거가 시작되는 시점 (뷰포트의 75% 지점에서 시작)
      end: "top 50%", // 트리거가 끝나는 시점 (뷰포트의 50% 지점에서 끝)
      toggleActions: "play none none reverse", // 스크롤에 따라 애니메이션 재생 및 역재생 설정
      onEnter: () => content.classList.add("show"), // 스크롤 진입 시 show 클래스 추가
      onLeaveBack: () => content.classList.remove("show"), // 스크롤 되돌아갈 때 show 클래스 제거
    },
  });
});

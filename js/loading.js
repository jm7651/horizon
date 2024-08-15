// 페이지가 새로고침될 때마다 스크롤을 맨 위로 초기화
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// 로더 시작 함수
function startLoader() {
  let counterElement = document.querySelector(".loading_counter");
  let currentValue = 0;

  // 카운터 업데이트 함수
  function updateCounter() {
    if (currentValue === 100) {
      document.body.classList.remove("no-scroll"); // 로딩 완료 시 스크롤 허용
      return;
    }
    currentValue += Math.floor(Math.random() * 10) + 1;
    if (currentValue > 100) {
      currentValue = 100;
    }
    counterElement.textContent = currentValue;
    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

// 로딩 시작 시 스크롤 금지
document.body.classList.add("no-scroll");

// 로더 시작
startLoader();

// Lottie 애니메이션 설정
var animation = lottie.loadAnimation({
  container: document.getElementById("lottie"), // 애니메이션을 담을 DOM 요소
  renderer: "svg",
  loop: false,
  autoplay: false, // 자동 재생 끔
  path: "images/horizon.json", // 애니메이션 JSON 경로
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet",
  },
});

// Lottie 애니메이션이 로드 완료되면 재생
animation.addEventListener("DOMLoaded", function () {
  animation.play();
});

// 애니메이션이 완료된 후 실행되는 코드
animation.addEventListener("complete", function () {
  animation.goToAndStop(animation.totalFrames - 1, true); // 마지막 프레임 유지

  // Lottie 애니메이션이 끝난 후 1.5초 대기 후 GSAP 애니메이션 실행
  setTimeout(function () {
    // 로딩 카운터 숨기기
    gsap.to(".loading_counter", {
      opacity: 0,
    });

    // 로딩 블록 축소
    gsap.to(".loading_block", {
      height: "0%",
      duration: 0.8,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
      onComplete: function () {
        var mainVideo = document.getElementById("video_main");
        console.log(mainVideo);
        mainVideo.play(); // 비디오 재생 시작
      },
    });

    // Lottie 컨테이너 숨기기
    gsap.to(".lottie-container", {
      opacity: 0,
      duration: 0.8,
      ease: "power4.inOut",
    });
  }, 0);
});

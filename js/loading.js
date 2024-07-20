window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function startLoader() {
  let counterElement = document.querySelector(".loading_counter");
  let currentValue = 0;

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

document.body.classList.add("no-scroll"); // 로딩 시작 시 스크롤 금지

startLoader();

var animation = lottie.loadAnimation({
  container: document.getElementById("lottie"), // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "images/horizon.json", // the path to the animation json
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet",
  },
});

animation.addEventListener("complete", function () {
  animation.goToAndStop(animation.totalFrames - 1, true); // 마지막 프레임 유지
  setTimeout(function () {
    gsap.to(".loading_counter", {
      opacity: 0,
    });

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
        mainVideo.play();
      },
    });

    gsap.to(".lottie-container", {
      opacity: "0",
      duration: 0.8,
      ease: "power4.inOut",
    });
  }, 1500); // 1.5초 후에 애니메이션 제거
});

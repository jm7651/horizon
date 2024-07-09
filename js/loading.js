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

gsap.to(".loading_counter", {
  delay: 3.5,
  opacity: 0,
});

gsap.to(".loading_block", {
  height: "0%",
  duration: 0.8,
  delay: 3.5,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

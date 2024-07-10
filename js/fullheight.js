function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// 페이지 로드 시와 리사이즈 시 높이 설정
window.addEventListener("resize", setViewportHeight);
setViewportHeight();

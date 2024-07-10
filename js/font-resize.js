const finalEnText = document.querySelectorAll(".final_en_text");
const finalKrText = document.querySelectorAll(".final_kr_text");

function setFontSize() {
  const width = window.innerWidth;
  let enfontSize, krfontSize;

  if (width <= 768) {
    // 모바일 기준, 768px 이하일 경우
    enfontSize = width / 16;
    krfontSize = width / 17;
  } else {
    // 데스크톱 기준, 768px 초과일 경우
    enfontSize = width / 14;
    krfontSize = width / 15;
  }

  finalEnText.forEach((element) => {
    element.style.fontSize = `${enfontSize}px`;
  });
  finalKrText.forEach((element) => {
    element.style.fontSize = `${krfontSize}px`;
  });
}

window.addEventListener("resize", setFontSize);
setFontSize();

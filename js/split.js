// document.querySelectorAll(".split").forEach((text) => {
//   let splitWrap = text.innerText
//     .split("")
//     .join("</span><span aria-hidden='true'>");
//   text.innerHTML = "<span aria-hidden='true'>" + splitWrap + "</span>";
//   text.setAttribute("aria-label", text.innerText);
// });

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

gsap.registerPlugin(ScrollTrigger);
gsap.from(".split span", {
  yPercent: 100,
  autoAlpha: 0,
  durationL2,
  ease: "circ.out",
  stagger: 0.1,
  ScrollTrigger: {
    trigger: ",split",
    start: "top center",
    end: "+=400",
    markers: true,
    scrub: 1,
  },
});

function animateDigit(numberElement, start, end, totalDuration, callback) {
  const stepTime = 10; // 각 증가 단계의 시간 간격 (ms)
  const totalSteps = Math.floor(totalDuration / stepTime);
  const stepSize = (end - start) / totalSteps;
  let current = start;
  let steps = 0;

  function run() {
    current += stepSize;
    steps++;
    if (steps >= totalSteps) {
      current = end;
      clearInterval(timer);
      callback(); // 애니메이션 종료 시 콜백 호출
    }
    numberElement.innerText = "0" + current.toFixed(3).slice(1); // "0." 포함해서 표시
  }

  const timer = setInterval(run, stepTime);
}

function resetAnimation(numberElement) {
  numberElement.innerText = "0.000";
  numberElement.classList.remove("finished"); // 색상 초기화
}

document.addEventListener("DOMContentLoaded", () => {
  const countBox = document.querySelector(".count_box");
  const metaTitle = document.querySelector(".meta_title");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const box = entry.target;
        const numbers = box.querySelectorAll(".number");

        if (entry.isIntersecting) {
          box.classList.remove("hidden");
          box.classList.add("visible");

          const totalDuration = 2000; // 모든 애니메이션의 총 지속 시간 (ms)
          let animationsFinished = 0;

          numbers.forEach((numberElement) => {
            const id = numberElement.id;
            let endValue;
            if (id === "number1") endValue = 0.837;
            else if (id === "number2") endValue = 0.963;
            else if (id === "number3") endValue = 0.992;
            animateDigit(numberElement, 0, endValue, totalDuration, () => {
              animationsFinished++;
              if (animationsFinished === numbers.length) {
                metaTitle.style.transition = "opacity 1s";
                metaTitle.style.opacity = 1; // 애니메이션 종료 후 meta_title의 opacity 변경
              }
              if (endValue === 0.992) {
                numberElement.classList.add("finished"); // 애니메이션 종료 후 색상 변경
              }
            });
          });
        } else {
          box.classList.remove("visible");
          box.classList.add("hidden");

          numbers.forEach((numberElement) => {
            resetAnimation(numberElement);
          });

          // IntersectionObserver에서 보이지 않게 되면 meta_title의 opacity를 초기화
          metaTitle.style.opacity = 0;
        }
      });
    },
    {
      threshold: 0.1, // count_box가 10% 정도 보일 때 애니메이션 시작 및 리셋
    }
  );

  observer.observe(countBox);
});

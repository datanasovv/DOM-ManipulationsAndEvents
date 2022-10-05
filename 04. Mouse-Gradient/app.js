function attachGradientEvents() {
  let gradientElement = document.getElementById("gradient");
  let resultElement = document.getElementById("result");

  let gradientHandler = (e) => {
    let percent = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
    resultElement.textContent = `${percent}%`;
  };

  gradientElement.addEventListener("mousemove", gradientHandler);
}

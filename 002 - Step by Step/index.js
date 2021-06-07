const steps = document.getElementById("steps");
const prev = document.getElementById("prev");
const text = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentAcctcive = 1;

next.addEventListener("click", () => {
  currentAcctcive++;

  if (currentAcctcive > circles.length) {
    currentAcctcive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentAcctcive--;

  if (currentAcctcive < 1) {
    currentAcctcive = 1;
  }

  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentAcctcive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  steps.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentAcctcive === 1) {
    prev.disabled = true;
  } else if (currentAcctcive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

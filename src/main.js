import "./style.css";

// console.log("hello");

const clock = document.querySelector(".clock");

function updateClock() {
  const now = new Date();

  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  clock.textContent = now.toLocaleTimeString("en-US", options);
}

updateClock();
setInterval(updateClock, 1000);

import "./style.css";

// console.log("hello");

const clock = document.querySelector(".clock");
const prevTitle = document.querySelector(".Title");
const btn = document.querySelector(".btn");
const select = document.querySelector("#select");
const countries = {
  india: {
    title: "Indian Standard Time",
    timeZone: "Asia/Kolkata",
  },

  usa: {
    title: "USA",
    timeZone: "America/New_York",
  },

  japan: {
    title: "Japan",
    timeZone: "Asia/Tokyo",
  },
};

let timeZone = "Asia/Kolkata";

function updateClock() {
  const now = new Date();

  const options = {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  clock.textContent = now.toLocaleTimeString("en-US", options);
}
btn.addEventListener("click", () => {
  let selected_countries = countries[select.value];
  prevTitle.textContent = selected_countries.title;
  timeZone = selected_countries.timeZone;

  updateClock();
});

updateClock();
setInterval(updateClock, 1000);

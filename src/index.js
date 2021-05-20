import "./styles.css";
const date = new Date();
const todayDate = date.getDate();
const month = date.getMonth();
const day = date.getDay();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const h4 = document.querySelector("h4");
h4.innerHTML = `Today: ${month}월 ${todayDate}일 ${days[day]}`;

const td = document.getElementById("click");
function cl() {
  td.innerHTML = "bye";
}
td.addEventListener("click", cl);

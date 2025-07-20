document.addEventListener("DOMContentLoaded", () => {
  alert("popup.js loaded successfully!"); // Debug alert
  let count = 0;
  const button = document.getElementById("trackButton");
  const counter = document.getElementById("counter");

  if (button && counter) {
    button.addEventListener("click", () => {
      count++;
      counter.textContent = `Tracked: ${count} mins`;
    });
  } else {
    alert("Button or counter element not found!");
  }
});
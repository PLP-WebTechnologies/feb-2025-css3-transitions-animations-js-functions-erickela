const saveBtn = document.getElementById("saveBtn");
const nameInput = document.getElementById("nameInput");
const themeSelect = document.getElementById("themeSelect");
const username = document.getElementById("username");
const animatedBox = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");

// Load Preferences on Page Load
window.onload = () => {
  const savedName = localStorage.getItem("name");
  const savedTheme = localStorage.getItem("theme");

  if (savedName) {
    username.textContent = savedName;
    nameInput.value = savedName;
  }

  if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeSelect.value = savedTheme;
  }
};

// Save Preferences to localStorage
saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const theme = themeSelect.value;

  if (name) {
    localStorage.setItem("name", name);
    username.textContent = name;
  }

  localStorage.setItem("theme", theme);

  // Remove previous theme classes
  document.body.classList.remove("light", "dark", "funky");
  document.body.classList.add(theme);
});

// Trigger Animation
animateBtn.addEventListener("click", () => {
  animatedBox.classList.remove("animate");
  void animatedBox.offsetWidth; // restart animation trick
  animatedBox.classList.add("animate");
});

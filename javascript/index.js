const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    const isDarkTheme = body.classList.contains("dark-theme");
    
    sunIcon.style.display = isDarkTheme ? "none" : "inline";
    moonIcon.style.display = isDarkTheme ? "inline" : "none";
    
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
});


if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
} else {
    body.classList.add("light-theme");
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
}

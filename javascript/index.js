const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        moonIcon.classList.add("active");  
        sunIcon.classList.remove("active");  
    } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        moonIcon.classList.remove("active");   
        sunIcon.classList.add("active");  
    }
    console.log('Tema aplicado:', savedTheme);
}

themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    const isDarkMode = body.classList.contains("dark-theme");

    moonIcon.classList.toggle("active", isDarkMode);
    sunIcon.classList.toggle("active", !isDarkMode);

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    console.log('Tema alterado para:', isDarkMode ? "dark" : "light");
});

applySavedTheme();

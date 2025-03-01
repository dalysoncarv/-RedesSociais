const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        moonIcon.style.display = "inline";  
        sunIcon.style.display = "none";  
    } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        moonIcon.style.display = "none";   
        sunIcon.style.display = "inline";  
    }
    console.log('Tema aplicado:', savedTheme);
}

themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    const isDarkMode = body.classList.contains("dark-theme");

    moonIcon.style.display = isDarkMode ? "inline" : "none";
    sunIcon.style.display = isDarkMode ? "none" : "inline";

    
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    console.log('Tema alterado para:', isDarkMode ? "dark" : "light");
});


applySavedTheme();
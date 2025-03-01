const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    moonIcon.style.display = 'inline-block';
    sunIcon.style.display = 'none';
} else {
    body.classList.add('light-theme');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline-block';
}


themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        localStorage.setItem('theme', 'dark'); 
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'light'); 
    }
});

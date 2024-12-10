// Get the toggle button element
var themeToggle = document.getElementById('themeToggle');
// Add a click event listener to toggle the theme
themeToggle.addEventListener('click', function () {
    // Get the current theme attribute
    var currentTheme = document.body.getAttribute('data-theme') || 'dark';
    // Toggle between light and dark themes
    document.body.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
});
// Set default theme to dark
document.body.setAttribute('data-theme', 'dark');

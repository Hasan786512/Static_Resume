// Get the toggle button element
const themeToggle = document.getElementById('themeToggle') as HTMLButtonElement;

// Add a click event listener to toggle the theme
themeToggle.addEventListener('click', () => {
    // Get the current theme attribute
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';

    // Toggle between light and dark themes
    document.body.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
});

// Set default theme to dark
document.body.setAttribute('data-theme', 'dark');

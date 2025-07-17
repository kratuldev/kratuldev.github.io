// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// You could add more here, like:
// - A "back to top" button
// - A simple dark/light mode toggle
// - Any dynamic content loading if needed (though for a basic GH Pages, it's usually static)

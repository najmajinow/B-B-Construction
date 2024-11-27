// Counter Logic (Optimized with requestAnimationFrame)
document.addEventListener("DOMContentLoaded", () => {
    const counters = [
        { element: document.getElementById("yearsOfExperience"), target: 10 },
        { element: document.getElementById("projectsCompleted"), target: 100 },
        { element: document.getElementById("clientsServed"), target: 100 },
    ];

    counters.forEach((counter) => {
        let count = 0; // Start counting from 0
        const increment = counter.target / 100; // Divide target into 100 steps for smoother animation
        let animationFrameId;

        const updateCounter = () => {
            if (count < counter.target) {
                count += increment; // Increment the counter
                counter.element.textContent = Math.ceil(count); // Display the rounded count
                animationFrameId = requestAnimationFrame(updateCounter); // Schedule the next update
            } else {
                counter.element.textContent = counter.target; // Ensure the final value is exact
                cancelAnimationFrame(animationFrameId); // Stop the animation
            }
        };

        updateCounter();
    });
});

// Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the active class on the menu when clicked
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Optional: Close the menu when a link is clicked (for single-page apps)
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

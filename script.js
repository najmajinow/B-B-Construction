// Counter Logic (Optimized with requestAnimationFrame)
document.addEventListener("DOMContentLoaded", () => {
    const counters = [
        { element: document.getElementById("yearsOfService"), target: 10 },
        { element: document.getElementById("clientsServed"), target: 100 },
        { element: document.getElementById("projectsCompleted"), target: 100 },
    ];

    counters.forEach((counter) => {
        let count = 0;
        const increment = counter.target / 100;
        let animationFrameId;

        const updateCounter = () => {
            if (count < counter.target) {
                count += increment;
                counter.element.textContent = Math.ceil(count);
                animationFrameId = requestAnimationFrame(updateCounter); // Smooth animation frame
            } else {
                counter.element.textContent = counter.target;
                cancelAnimationFrame(animationFrameId); // Stop the animation once it reaches the target
            }
        };

        updateCounter();
    });
});

// JavaScript for sliding paragraphs in About Us (Optimized with IntersectionObserver)
document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll("#about-us p");

    const slideInObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in");
                    observer.unobserve(entry.target); // Stop observing after animation is triggered
                }
            });
        },
        { threshold: 0.5} // Trigger animation when 30% of the element is in view
    );

    paragraphs.forEach((paragraph, index) => {
        paragraph.style.animationDelay = `${index * 0.3}s`; // Staggered animation for each paragraph
        slideInObserver.observe(paragraph);
    });
});

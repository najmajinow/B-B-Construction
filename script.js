// Counter Logic
document.addEventListener("DOMContentLoaded", () => {
    const counters = [
        { element: document.getElementById("yearsOfService"), target: 10 },
        { element: document.getElementById("clientsServed"), target: 500 },
        { element: document.getElementById("projectsCompleted"), target: 300 },
    ];

    counters.forEach((counter) => {
        let count = 0;
        const increment = counter.target / 100;

        const updateCounter = () => {
            if (count < counter.target) {
                count += increment;
                counter.element.textContent = Math.ceil(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.element.textContent = counter.target;
            }
        };

        updateCounter();
    });
});


// JavaScript for sliding paragraphs in About Us
document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll("#about-us p");

    const slideInObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in");
                }
            });
        },
        { threshold: 0.3 } // Trigger animation when 30% of the element is in view
    );

    paragraphs.forEach((paragraph, index) => {
        paragraph.style.animationDelay = `${index * 0.3}s`; // Staggered animation for each paragraph
        slideInObserver.observe(paragraph);
    });
});

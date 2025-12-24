document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('is-active');
            hamburger.classList.toggle('is-active'); // For animation if added later

            // Accessibility update could go here
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (nav && nav.classList.contains('is-active')) {
                    nav.classList.remove('is-active');
                    hamburger.classList.remove('is-active');
                }

                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Accordion for FAQ
    const accordionItems = document.querySelectorAll('.accordion__item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion__header');
        header.addEventListener('click', () => {
            // Toggle current item
            const wasOpen = item.classList.contains('is-open');

            // Optional: Close others? implementation spec doesn't require it, 
            // but commonly better UX. Let's keep it simple (multi-open allowed) as per "Accordion"
            item.classList.toggle('is-open');

            // Accessibility: Update aria-expanded if we added it (omitted for brevity but good practice)
        });
    });
});

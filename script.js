// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const contactForm = document.querySelector('.contact-form form');

    /* 📱 Toggle Mobile Menu */
    if (hamburger && nav) {
        const bars = hamburger.querySelectorAll('.bar');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');

            // Animate hamburger
            bars[0].style.transform = hamburger.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
            bars[1].style.opacity = hamburger.classList.contains('active') ? '0' : '1';
            bars[2].style.transform = hamburger.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    hamburger.classList.remove('active');
                    bars.forEach(bar => {
                        bar.style.transform = 'none';
                        bar.style.opacity = '1';
                    });
                }
            });
        });
    }

    /* 🧭 Header Scroll Effect */
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    /* 🎨 Portfolio Filtering */
    if (filterButtons.length && portfolioItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;
                portfolioItems.forEach(item => {
                    const match = filter === 'all' || item.dataset.category === filter;
                    item.style.display = match ? 'block' : 'none';
                    item.style.opacity = match ? '1' : '0';
                    item.style.transform = match ? 'scale(1)' : 'scale(0.8)';
                });
            });
        });
    }

    /* 🧭 Smooth Scroll for Anchor Links */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                const offset = header ? header.offsetHeight : 0;
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* 📬 Contact Form Validation */
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();

            if (!name || !email || !message) {
                alert('⚠️ Please fill in all required fields.');
                return;
            }

            alert('✅ Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    /* ✨ Scroll Animation */
    const elementsToAnimate = document.querySelectorAll('.skill-card, .portfolio-item, .contact-item');
    const animateOnScroll = () => {
        elementsToAnimate.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) el.classList.add('animate');
        });
    };

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation underline effect
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }

        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const themes = ['light', 'dark']; // Two themes: light, dark
    let storedTheme = localStorage.getItem('theme') || 'light';
    if (!themes.includes(storedTheme)) {
        storedTheme = 'light';
        localStorage.setItem('theme', 'light');
    }
    let currentThemeIndex = themes.indexOf(storedTheme);
    // Update theme icon function
    const updateThemeIcon = (theme) => {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-toggle-off' : 'fas fa-toggle-on';
    };
    // Initial icon update
    updateThemeIcon(themes[currentThemeIndex]);
    // Theme toggle handler
    themeToggle.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });


    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => {
        if (scrollTopBtn) {
            if (window.pageYOffset > 100) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    // Transparent navbar on scroll for index.html
    if (currentPath === 'index.html') {
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                navbar.classList.add('transparent');
            } else {
                navbar.classList.remove('transparent');
            }
        });
        // initialize 3D scene when on home page
        initThree();
    }

    // 3D animation setup (uses Three.js library loaded via CDN)
    function initThree() {
        const canvas = document.getElementById('canvas3d');
        if (!canvas || !window.THREE) return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.position.z = 5;

        // simple rotating cube example
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0x00b4d8 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // lights
        const ambient = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambient);
        const directional = new THREE.DirectionalLight(0xffffff, 0.8);
        directional.position.set(5, 5, 5);
        scene.add(directional);

        function animate3D() {
            requestAnimationFrame(animate3D);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate3D();

        // handle resize
        window.addEventListener('resize', () => {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        });
    }

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Project Filter (if on projects page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                projectItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Form Validation (if on contact page)
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, message });
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Download CV animation and show current year
    const downloadBtn = document.querySelector('#download-cv-btn');
    const yearDisplay = document.getElementById('current-year-display');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            const icon = downloadBtn.querySelector('i');
            icon.className = 'fas fa-spinner fa-spin';

            // Show current year on click
            const currentYear = new Date().getFullYear();
            if (yearDisplay) {
                yearDisplay.textContent = `Year: ${currentYear}`;
            }
            
            setTimeout(() => {
                icon.className = 'fas fa-check';
                setTimeout(() => {
                    icon.className = 'fas fa-download';
                }, 1000);
            }, 1000);
        });
    }

    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Form validation
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, message });
        });
    }
    // IntersectionObserver to reveal skill bars, experience/education items and social icons
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('in-view');
                // if social icons, stagger animation delays
                if (el.classList.contains('social-icon')) {
                    // delay is already set in JS loop below for initial pass; keep for safety
                    // do nothing else here
                }

                obs.unobserve(el);
            }
        });
    }, {
        threshold: 0.15
    });
    // Observe skill blocks, experience items, education items, and section titles
    document.querySelectorAll('.skill-card, .experience-card, .education-item, .skills-section .section-title, .experience-section .section-title')
        .forEach(el => revealObserver.observe(el));
    // Stagger and observe social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, i) => {
        icon.style.animationDelay = `${i * 120}ms`; // stagger
        revealObserver.observe(icon);
    });
    // Also trigger skill-level widths immediately for any skills already in view
    // (observer will handle most cases, this is safety)
    document.querySelectorAll('.skill').forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            skill.classList.add('in-view');
        }
    });
    // Profile photo click animation
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        profilePhoto.addEventListener('click', () => {
            profilePhoto.classList.add('clicked');
            setTimeout(() => {
                profilePhoto.classList.remove('clicked');
            }, 500); // Match animation duration
        });
    }
});

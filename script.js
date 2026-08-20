document.addEventListener('DOMContentLoaded', function() {

    // ==========================================================
    // 1. CENTRALIZED LINK & PROJECT CONFIGURATION (EASY EDIT)
    // ==========================================================
    const portfolioLinks = {
        github: "https://github.com/Nimra-shehzadi",
        linkedin: "https://www.linkedin.com/in/nimra-shehzadi-22262338a/",
        email: "mailto:nimra.shehzadi.5094@gmail.com"
    };

    const projectLinks = {
        pethub: {
            github: "GITHUB_URL_HERE",
            live: "https://pet-hub-seven.vercel.app/"
        },
        technova: {
            github: "GITHUB_URL_HERE",
            live: "LIVE_DEMO_LINK_HERE"
        },
        loc8: {
            github: "GITHUB_URL_HERE",
            live: "LIVE_DEMO_LINK_HERE"
        },
        watchLuxora: {
            github: "GITHUB_URL_HERE",
            live: "LIVE_DEMO_LINK_HERE"
        },
        nutrivision: {
            github: "GITHUB_URL_HERE",
            live: "LIVE_DEMO_LINK_HERE"
        }
    };

    // Replace the raw link targets in the static DOM with our config objects
    function bindStaticUrls() {
        // LinkedIn links
        document.querySelectorAll('a[href="ADD_LINKEDIN_LINK"]').forEach(el => {
            el.href = portfolioLinks.linkedin;
        });
        // GitHub links
        document.querySelectorAll('a[href="https://github.com/Nimra-shehzadi"]').forEach(el => {
            el.href = portfolioLinks.github;
        });
        // Email links
        document.querySelectorAll('a[href="mailto:nimra.shehzadi.5094@gmail.com"]').forEach(el => {
            el.href = portfolioLinks.email;
        });
    }
    bindStaticUrls();

    // ==========================================
    // 1.5. DETAILED DYNAMIC PROJECT DATA
    // ==========================================
    const projects = [
        // --- Web Projects ---
        {
            id: "pethub",
            title: "PetHub — Smart Pet Adoption & Care Platform",
            description: "A web-based platform designed to simplify pet adoption and pet care through a user-friendly interface, structured databases, and organized care information.",
            image: "public/projects/pethub.png",
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "XAMPP"],
            github: projectLinks.pethub.github,
            live: projectLinks.pethub.live,
            category: "web",
            featured: false
        },
        {
    id: "careerpilot-ai",
    title: "CareerPilot AI – AI-Powered Career Platform",
    description: "An AI-powered career platform designed to help users explore career paths, improve resumes and discover personalized opportunities.",
    image: "public/projects/careerpilot.png",
    technologies: ["React", "JavaScript", "AI", "Tailwind CSS"],
    github: "https://github.com/Nimra-Shehzadi/Flyrank-Capstone",
    live: "https://flyrank-capstone-nine.vercel.app/",
    category: "web",
    featured: true
},
        {
            id: "technova",
            title: "TechNova — Enterprise ERP Portal",
            description: "A modern full-stack web application designed for enterprise resource planning, workflow tracking, and seamless team collaboration.",
            image: "public/projects/technova.png",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/Nimra-Shehzadi/Tech-Nova",
            live:"https://tech-nova-sepia.vercel.app/",
            category: "web",
            featured: false
        },
        {
            id: "loc8",
            title: "LOC8 — On-Demand Service Finder",
            description: "A location-based service application that connects local service providers with users in real-time using GPS mapping.",
            image: "public/projects/loc8.png",
            technologies: ["Next.js", "React Native", "Firebase", "Google Maps API", "Tailwind CSS"],
            github: "https://github.com/Nimra-Shehzadi/loc8",
            live:"https://loc8-gules.vercel.app/",
            category: "web",
            featured: false
        },
        {
            id: "watch-luxora",
            title: "Watch Luxora — Luxury Watch Platform",
            description: "An immersive e-commerce digital store for luxury timepieces featuring high-end scroll animations and interactive product pages.",
            image: "public/projects/watch-luxora.png",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP Animations", "Three.js"],
            github: "https://github.com/Nimra-Shehzadi/luxora-watch-store",
            live: "https://watch-ten-plum.vercel.app/",
            category: "web",
            featured: false
        },

        // --- AI / ML Projects (NutriVision featured exclusively) ---
        {
            id: "nutrivision-ai",
            title: "NutriVision AI — Food Recognition & Analysis",
            description: "An AI-powered application that uses image-based food recognition and computer vision models to identify food items and generate accurate nutritional profiles.",
            image: "public/projects/nutrivision.png",
            technologies: ["Python", "TensorFlow", "Machine Learning", "Computer Vision", "AI"],
            github: "https://github.com/Nimra-Shehzadi/NutriVision-AI",
            live: projectLinks.nutrivision.live,
            category: "ai",
            featured: true
        },

        // --- Systems / Academic Projects ---
        {
            id: "cisco-networking",
            title: "Cisco Enterprise Topology Simulations",
            description: "Simulations configuring routing protocols (OSPF, RIP), DHCP email servers, virtual networking topologies (VLAN), and smart network systems.",
            image: "",
            technologies: ["Cisco Packet Tracer", "OSPF Routing", "DHCP", "VLAN", "RIP", "Networks"],
            github: "",
            live: "",
            category: "systems",
            featured: false,
            modalId: "cisco-modal",
            icon: "fa-solid fa-network-wired"
        },
        {
            id: "assembly-apps",
            title: "x86 Assembly Low-Level Apps",
            description: "Retro utilities and mini-games built directly in x86 assembly language, showcasing system interrupts and registers.",
            image: "",
            technologies: ["Assembly Language", "x86 ASM", "DosBox Emulator", "BIOS Interrupts"],
            github: "",
            live: "",
            category: "systems",
            featured: false,
            modalId: "asm-modal",
            icon: "fa-solid fa-microchip"
        },
        {
            id: "python-arcade-games",
            title: "Python Arcade Games & Tools",
            description: "Mini gaming tools (Snake, Crosswords) and media parsing scripts built in Python utilizing Tkinter and Pygame.",
            image: "",
            technologies: ["Python", "Tkinter", "Pygame", "Scripts"],
            github: "",
            live: "",
            category: "systems",
            featured: false,
            modalId: "python-modal",
            icon: "fa-brands fa-python"
        }
    ];

    // ==========================================
    // 2. DYNAMICALLY RENDER PROJECTS BY CATEGORY
    // ==========================================
    function createTechBadgesHTML(techArray) {
        return techArray.map(tech => `<span class="skill-badge">${tech}</span>`).join('');
    }

    function createLinksHTML(project) {
        let linksHTML = '';
        
        if (project.github !== undefined) {
            const isPlaceholder = project.github.startsWith('GITHUB_') || project.github === '';
            const displayUrl = isPlaceholder ? '#' : project.github;
            const extraClass = isPlaceholder ? 'disabled-placeholder' : '';
            linksHTML += `<a href="${displayUrl}" target="_blank" class="btn btn-secondary ${extraClass}" aria-label="GitHub Repository"><i class="fab fa-github"></i> GitHub</a>`;
        }

        if (project.live !== undefined) {
            const isPlaceholder = project.live.startsWith('LIVE_') || project.live === '';
            const displayUrl = isPlaceholder ? '#' : project.live;
            const extraClass = isPlaceholder ? 'disabled-placeholder' : '';
            linksHTML += `<a href="${displayUrl}" target="_blank" class="btn btn-primary ${extraClass}" aria-label="Live Demo Website"><i class="fas fa-external-link-alt"></i> Demo</a>`;
        }

        if (project.modalId) {
            linksHTML += `<button class="btn btn-secondary open-modal-trigger" data-modal="${project.modalId}"><i class="fas fa-list-ul"></i> Details</button>`;
        }

        return linksHTML;
    }

    function renderCategoryProjects(categoryName, gridContainerId) {
        const gridContainer = document.getElementById(gridContainerId);
        if (!gridContainer) return;
        gridContainer.innerHTML = '';

        const categoryProjects = projects.filter(p => p.category === categoryName);

        categoryProjects.forEach(project => {
            let imageHTML = '';
            if (project.image && project.image !== '') {
                imageHTML = `<img src="${project.image}" alt="${project.title}" onerror="this.outerHTML='<div class=\\'project-placeholder-img\\'><i class=\\'${project.icon || 'fa-solid fa-code'}\\'></i><span>${project.title}</span></div>';">`;
            } else {
                imageHTML = `
                    <div class="project-placeholder-img">
                        <i class="${project.icon || 'fa-solid fa-laptop-code'}"></i>
                        <span>${project.title}</span>
                    </div>
                `;
            }

            // Render inside the regular category grid
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-image-wrapper">
                    ${imageHTML}
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${createTechBadgesHTML(project.technologies)}
                    </div>
                    <div class="project-links">
                        ${createLinksHTML(project)}
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });
    }

    // Custom rendering function for NutriVision AI featured container (Page 05)
    function renderAIFeatured() {
        const featuredContainer = document.getElementById('ai-featured-container');
        if (!featuredContainer) return;
        featuredContainer.innerHTML = '';
        
        const aiProject = projects.find(p => p.category === 'ai' && p.featured);
        if (!aiProject) return;

        const githubUrl = (aiProject.github.startsWith('GITHUB_') || aiProject.github === '') ? '#' : aiProject.github;
        const liveUrl = (aiProject.live.startsWith('LIVE_') || aiProject.live === '') ? '#' : aiProject.live;
        const githubClass = aiProject.github.startsWith('GITHUB_') ? 'disabled-placeholder' : '';
        const liveClass = aiProject.live.startsWith('LIVE_') ? 'disabled-placeholder' : '';

        featuredContainer.innerHTML = `
            <div class="ai-featured-image-wrapper">
                <img src="${aiProject.image}" alt="${aiProject.title}" onerror="this.outerHTML='<div class=\\'project-placeholder-img\\'><i class=\\'fa-solid fa-brain\\'></i><span>${aiProject.title}</span></div>';">
            </div>
            <div class="ai-featured-info">
                <h4>${aiProject.title}</h4>
                <p>${aiProject.description}</p>
                <div class="ai-featured-tech">
                    ${createTechBadgesHTML(aiProject.technologies)}
                </div>
                <div class="ai-featured-links">
                    <a href="${githubUrl}" target="_blank" class="btn btn-secondary ${githubClass}"><i class="fab fa-github"></i> GitHub</a>
                    <a href="${liveUrl}" target="_blank" class="btn btn-primary ${liveClass}"><i class="fas fa-external-link-alt"></i> Demo</a>
                </div>
            </div>
        `;
    }

    // Render projects
    renderCategoryProjects('web', 'web-projects-grid');
    renderAIFeatured();
    renderCategoryProjects('systems', 'systems-projects-grid');

    // Attach click events to dynamic disabled links
    function setupDisabledLinks() {
        document.body.addEventListener('click', (e) => {
            const btn = e.target.closest('.disabled-placeholder');
            if (btn) {
                e.preventDefault();
                alert('This link is currently in development. Dynamic URLs can be configured at the top of script.js.');
            }
        });
    }
    setupDisabledLinks();

    // =========================================================
    // 2.5 MANUAL HORIZONTAL CAROUSEL BUTTONS TRANSLATE LOGIC
    // =========================================================
    function setupCarouselSlider(trackId, prevBtnId, nextBtnId, cardWidth, gap) {
        const track = document.getElementById(trackId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        if (!track || !prevBtn || !nextBtn) return;

        const container = track.parentElement;
        const step = cardWidth + gap;

        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -step, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: step, behavior: 'smooth' });
        });
    }

    // 2.6 NEW PREMIUM 3D COVERFLOW DECK SLIDER FOR CERTIFICATIONS
    function setup3DCertsSlider(trackId, prevBtnId, nextBtnId) {
        const track = document.getElementById(trackId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        if (!track || !prevBtn || !nextBtn) return;

        const cards = track.querySelectorAll('.cert-item');
        if (cards.length === 0) return;

        let activeIndex = 0;
        const totalCards = cards.length;

        function update3DPositions() {
            const isMobile = window.innerWidth <= 768;
            const xOffsetShort = 160;
            const xOffsetFar = 280;
            const scaleShort = 0.82;
            const scaleFar = 0.68;
            const rotShort = 25;
            const rotFar = 40;

            cards.forEach((card, index) => {
                let offset = index - activeIndex;

                // Infinite loop calculations
                if (offset > 2) offset -= totalCards;
                if (offset < -2) offset += totalCards;

                let transformStr = "";
                let opacity = 0;
                let zIndex = 0;
                let pointerEvents = "none";

                if (offset === 0) {
                    // Center active card
                    transformStr = "translateX(0) scale(1) translateZ(0) rotateY(0deg)";
                    opacity = 1;
                    zIndex = 10;
                    pointerEvents = "auto";
                    card.classList.add('active-cert');
                } else if (isMobile) {
                    // On mobile, hide all non-active cards to prevent layout spill
                    transformStr = `translateX(${offset * 120}px) scale(0.5) translateZ(-100px)`;
                    opacity = 0;
                    zIndex = 0;
                    pointerEvents = "none";
                    card.classList.remove('active-cert');
                } else if (offset === 1) {
                    // Right card
                    transformStr = `translateX(${xOffsetShort}px) scale(${scaleShort}) translateZ(-80px) rotateY(-${rotShort}deg)`;
                    opacity = 0.65;
                    zIndex = 5;
                    pointerEvents = "auto";
                    card.classList.remove('active-cert');
                } else if (offset === -1) {
                    // Left card
                    transformStr = `translateX(-${xOffsetShort}px) scale(${scaleShort}) translateZ(-80px) rotateY(${rotShort}deg)`;
                    opacity = 0.65;
                    zIndex = 5;
                    pointerEvents = "auto";
                    card.classList.remove('active-cert');
                } else if (offset === 2) {
                    // Far right card
                    transformStr = `translateX(${xOffsetFar}px) scale(${scaleFar}) translateZ(-160px) rotateY(-${rotFar}deg)`;
                    opacity = 0.25;
                    zIndex = 2;
                    pointerEvents = "auto";
                    card.classList.remove('active-cert');
                } else if (offset === -2) {
                    // Far left card
                    transformStr = `translateX(-${xOffsetFar}px) scale(${scaleFar}) translateZ(-160px) rotateY(${rotFar}deg)`;
                    opacity = 0.25;
                    zIndex = 2;
                    pointerEvents = "auto";
                    card.classList.remove('active-cert');
                } else {
                    // Hidden cards
                    transformStr = `translateX(${offset * 150}px) scale(0.5) translateZ(-250px)`;
                    opacity = 0;
                    zIndex = 0;
                    pointerEvents = "none";
                    card.classList.remove('active-cert');
                }

                card.style.transform = transformStr;
                card.style.opacity = opacity;
                card.style.zIndex = zIndex;
                card.style.pointerEvents = pointerEvents;
            });
        }

        prevBtn.addEventListener('click', () => {
            activeIndex = (activeIndex - 1 + totalCards) % totalCards;
            update3DPositions();
        });

        nextBtn.addEventListener('click', () => {
            activeIndex = (activeIndex + 1) % totalCards;
            update3DPositions();
        });

        // Mouse Drag / Swipe gestures
        let isDragging = false;
        let startX = 0;
        const dragThreshold = 50;

        track.style.cursor = 'grab';

        track.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            track.style.cursor = 'grabbing';
            e.preventDefault();
        });

        const handleDragEnd = (clientX) => {
            if (!isDragging) return;
            isDragging = false;
            track.style.cursor = 'grab';

            const diffX = clientX - startX;
            if (diffX < -dragThreshold) {
                activeIndex = (activeIndex + 1) % totalCards;
                update3DPositions();
            } else if (diffX > dragThreshold) {
                activeIndex = (activeIndex - 1 + totalCards) % totalCards;
                update3DPositions();
            }
        };

        track.addEventListener('mouseup', (e) => {
            handleDragEnd(e.clientX);
        });

        track.addEventListener('mouseleave', (e) => {
            if (isDragging) {
                handleDragEnd(e.clientX);
            }
        });

        // Touch swipe gestures
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diffX = endX - startX;
            if (diffX < -dragThreshold) {
                activeIndex = (activeIndex + 1) % totalCards;
                update3DPositions();
            } else if (diffX > dragThreshold) {
                activeIndex = (activeIndex - 1 + totalCards) % totalCards;
                update3DPositions();
            }
        }, { passive: true });

        // Click on side cards to select them
        cards.forEach((card, idx) => {
            card.addEventListener('click', (e) => {
                if (idx !== activeIndex) {
                    e.preventDefault();
                    e.stopPropagation();
                    activeIndex = idx;
                    update3DPositions();
                }
            });
        });

        // Initialize positions
        update3DPositions();
        window.addEventListener('resize', update3DPositions);
    }

    // Bind Web Dev (Card: 330px width, Gap: 2rem = 32px)
    setupCarouselSlider('web-projects-grid', 'web-prev', 'web-next', 330, 32);
    // Bind Certifications to new 3D Coverflow slider
    setup3DCertsSlider('certs-list-grid', 'cert-prev', 'cert-next');

    // ==========================================
    // 3. HORIZONTAL SCROLL & 3D TRANSFORMS
    // ==========================================
    const scrollContainer = document.querySelector('.scroll-container');
    const sections = document.querySelectorAll('.page-section');
    const navAnchors = document.querySelectorAll('.nav-anchor');
    const progressDots = document.querySelectorAll('.progress-dot');
    const pageNumberDisplay = document.getElementById('page-number-display');
    const themes = ['home', 'about', 'skills', 'web', 'ai', 'systems', 'experience', 'contact'];

    let isAnimating = false;
    let currentPageIndex = 0;
    const numPages = sections.length;

    // Apply 3D perspective transformations dynamically on Scroll (Active page scale(1), adjacent scale(0.96))
    function handleScrollTransforms() {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.page-content-wrapper').forEach(wrapper => {
                wrapper.style.transform = '';
                wrapper.style.opacity = '';
            });
            return;
        }
        
        const scrollLeft = scrollContainer.scrollLeft;
        const width = window.innerWidth;
        
        sections.forEach((section, index) => {
            const offset = index * width;
            const distance = scrollLeft - offset;
            const progress = distance / width; // ranges -1 to 1

            const wrapper = section.querySelector('.page-content-wrapper');
            if (wrapper) {
                const clampedProgress = Math.max(-1, Math.min(1, progress));
                const rotateY = clampedProgress * -8;
                const translateZ = Math.abs(clampedProgress) * -120;
                const translateX = clampedProgress * 60;
                
                // Upgraded Animation System: Scale active 1.0, adjacent 0.96
                const scale = 1 - Math.abs(clampedProgress) * 0.04;
                // Upgraded Animation System: Opacity active 1.0, adjacent 0.5
                const opacity = 1 - Math.abs(clampedProgress) * 0.5;

                wrapper.style.transform = `rotateY(${rotateY}deg) translateZ(${translateZ}px) translateX(${translateX}px) scale(${scale})`;
                wrapper.style.opacity = opacity;
            }
        });
    }

    // Update active navbar links, progress dots, and dynamic body theme
    function updateActiveState(index) {
        if (index < 0 || index >= numPages) return;
        
        document.body.className = `theme-${themes[index]}`;

        navAnchors.forEach(anchor => {
            anchor.classList.remove('active');
            if (parseInt(anchor.getAttribute('data-index')) === index) {
                anchor.classList.add('active');
            }
        });

        progressDots.forEach(dot => {
            dot.classList.remove('active');
            if (parseInt(dot.getAttribute('data-index')) === index) {
                dot.classList.add('active');
            }
        });

        if (pageNumberDisplay) {
            pageNumberDisplay.textContent = `0${index + 1} / 08`;
        }
    }

    let scrollTicking = false;
    scrollContainer.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                handleScrollTransforms();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });

    // ==========================================
    // 3.5 UNIFIED INTERSECTIONOBSERVER FOR ACTIVE STATE
    const sectionsArray = Array.from(sections);
    const pageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = sectionsArray.indexOf(entry.target);
                if (index !== -1) {
                    currentPageIndex = index;
                    updateActiveState(currentPageIndex);
                }
            }
        });
    }, {
        root: null,
        threshold: 0.5
    });

    sections.forEach(section => pageObserver.observe(section));

    // ==========================================
    // 4. MOUSE WHEEL TRANSLATION (Smooth Page-Snap)
    // ==========================================
    scrollContainer.addEventListener('wheel', (e) => {
        if (window.innerWidth <= 768) return;
        
        e.preventDefault();
        if (isAnimating) return;

        if (e.deltaY > 0 && currentPageIndex < numPages - 1) {
            scrollToPageIndex(currentPageIndex + 1);
        } else if (e.deltaY < 0 && currentPageIndex > 0) {
            scrollToPageIndex(currentPageIndex - 1);
        }
    }, { passive: false });

    function scrollToPageIndex(index) {
        if (index < 0 || index >= numPages) return;
        
        isAnimating = true;
        currentPageIndex = index;
        
        if (window.innerWidth <= 768) {
            const targetSection = sections[index];
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // offset for fixed header
                    behavior: 'smooth'
                });
            }
        } else {
            scrollContainer.scrollTo({
                left: index * window.innerWidth,
                behavior: 'smooth'
            });
        }

        setTimeout(() => {
            isAnimating = false;
        }, 750);
    }

    // Keyboard ArrowLeft / ArrowRight Navigation snaps
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentPageIndex < numPages - 1) {
            scrollToPageIndex(currentPageIndex + 1);
        } else if (e.key === 'ArrowLeft' && currentPageIndex > 0) {
            scrollToPageIndex(currentPageIndex - 1);
        }
    });

    // ==========================================
    // 5. NAVIGATION CLICKS & BUTTONS ACTION
    // ==========================================
    function bindNavigationTriggers() {
        navAnchors.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const index = parseInt(anchor.getAttribute('data-index'));
                scrollToPageIndex(index);
                
                const navLinks = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                if (navLinks && navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            });
        });

        progressDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                scrollToPageIndex(index);
            });
        });

        document.querySelectorAll('.nav-action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const index = parseInt(btn.getAttribute('data-index'));
                scrollToPageIndex(index);
            });
        });
    }
    bindNavigationTriggers();

    // =================================================================
    // 6. CYBERNETIC GLOVE CURSOR-TRACKING PARALLAX (REPOSITIONED TO SKILLS)
    // =================================================================
    const skillsSection = document.getElementById('skills');
    const gloveElement = document.querySelector('.glove-element');

    if (skillsSection && gloveElement) {
        skillsSection.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 768) return;
            
            const rect = skillsSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            const rotateX = y * -30;
            const rotateY = x * 30;

            gloveElement.style.setProperty('--glove-rx', `${rotateY}deg`);
            gloveElement.style.setProperty('--glove-ry', `${rotateX}deg`);
        });

        skillsSection.addEventListener('mouseleave', () => {
            gloveElement.style.setProperty('--glove-rx', '0deg');
            gloveElement.style.setProperty('--glove-ry', '0deg');
        });
    }

    // ==========================================
    // 7. HERO TYPING TEXT ANIMATION
    // ==========================================
    const typingTextElement = document.getElementById('typing-text');
    const roles = ["Full-Stack Applications", "AI-Powered Experiences", "Modern Web Solutions"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 90;
    const deletingSpeed = 45;
    const pauseDelay = 2200;

    function typeEffect() {
        if (!typingTextElement) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseDelay);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    if (typingTextElement) {
        setTimeout(typeEffect, 1500);
    }

    // ==========================================
    // 8. PROFILE FLIP CARD INTERACTION
    // ==========================================
    const flipCard = document.querySelector('.about-flip-card');
    if (flipCard) {
        flipCard.addEventListener('click', function() {
            flipCard.classList.toggle('flipped');
        });
    }

    // ==========================================
    // 9. 3D DOMAIN CAROUSEL ROTATOR
    // ==========================================
    const carousel = document.querySelector('.carousel');
    const cells = document.querySelectorAll('.carousel__cell');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    if (carousel && cells.length > 0) {
        const cellCount = cells.length;
        const theta = 360 / cellCount;
        let rotateY = 0;

        function rotateCarousel() {
            carousel.style.transform = `rotateY(${rotateY}deg)`;
            updateActiveCell();
        }

        function updateActiveCell() {
            const activeCellIndex = (Math.round(-rotateY / theta) % cellCount + cellCount) % cellCount;
            cells.forEach((cell, idx) => {
                if (idx === activeCellIndex) {
                    cell.classList.add('active-cell');
                } else {
                    cell.classList.remove('active-cell');
                }
            });
        }
        
        function positionCells() {
            cells.forEach((cell, i) => {
                const angle = theta * i;
                const radius = Math.round((cell.offsetWidth / 2) / Math.tan(Math.PI / cellCount));
                cell.style.transform = `rotateY(${angle}deg) translateZ(${radius + 20}px)`;
            });
            updateActiveCell();
        }

        prevButton.addEventListener('click', () => {
            rotateY += theta;
            rotateCarousel();
        });

        nextButton.addEventListener('click', () => {
            rotateY -= theta;
            rotateCarousel();
        });

        // Setup click handler on cell items for manual rotation
        cells.forEach((cell, i) => {
            cell.addEventListener('click', () => {
                rotateY = -theta * i;
                rotateCarousel();
            });
        });

        positionCells();
        window.addEventListener('resize', positionCells);
    }

    // ==========================================
    // 10. MODALS MANAGER
    // ==========================================
    function setupModal(modalId, closeBtnClass) {
        const modal = document.getElementById(modalId);
        const closeBtn = document.querySelector(`.${closeBtnClass}`);

        if (closeBtn && modal) {
            closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        }
        
        if (modal) {
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.classList.remove('active');
                }
            });
            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && modal.classList.contains('active')) {
                    modal.classList.remove('active');
                }
            });
        }
    }

    setupModal('cisco-modal', 'cisco-modal-close');
    setupModal('asm-modal', 'asm-modal-close');
    setupModal('python-modal', 'python-modal-close');
    setupModal('certificate-modal', 'cert-modal-close');

    // Handle detail modal triggers
    function setupDynamicModalListeners() {
        document.body.addEventListener('click', (e) => {
            const trigger = e.target.closest('.open-modal-trigger');
            if (trigger) {
                e.preventDefault();
                const modalId = trigger.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) modal.classList.add('active');
            }
        });
    }
    setupDynamicModalListeners();

    // Certificate Viewer Modal Action
    const certificateModal = document.getElementById('certificate-modal');
    const certificateImage = document.getElementById('certificate-image');
    
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.view-cert-btn');
        if (btn) {
            const certImageSrc = btn.getAttribute('data-cert-image');
            if (certificateImage && certificateModal) {
                certificateImage.src = certImageSrc;
                certificateImage.alt = "Academic Certification Preview";
                certificateModal.classList.add('active');
            }
        }
    });

    // ==========================================
    // 11. MOBILE DRAWER MENU
    // ==========================================
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-links');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // Reset page-content-wrapper transforms on window resize to mobile
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.page-content-wrapper').forEach(wrapper => {
                wrapper.style.transform = '';
                wrapper.style.opacity = '';
            });
        } else {
            handleScrollTransforms();
        }
    });

    // If certificate image fails to load, update the modal button's target URL to the fallback too
    document.querySelectorAll('.cert-card-image-wrapper img').forEach(img => {
        img.addEventListener('error', function() {
            const card = this.closest('.cert-card-compact');
            if (card) {
                const btn = card.querySelector('.view-cert-btn');
                if (btn) {
                    btn.setAttribute('data-cert-image', this.src);
                }
            }
        });
        // Run immediately if image is already cached and errored
        if (img.complete && !img.naturalWidth) {
            img.dispatchEvent(new Event('error'));
        }
    });

    setTimeout(handleScrollTransforms, 200);
});

// Components JavaScript File
// Additional interactive components for the portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeTypewriterEffect();
    initializeInteractiveSkills();
    initializeProjectModal();
    initializeParticleEffect();
    initializeServiceCards();
    initializeAchievementCounters();
});

// Typewriter effect for hero text
function initializeTypewriterEffect() {
    const heroRole = document.querySelector('.hero-role');
    
    if (heroRole) {
        const roles = [
            "Full Stack Developer",
            "UI/UX Designer"
        ];
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeWriter() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                // Deleting text
                heroRole.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                // Typing text
                heroRole.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentRole.length) {
                // Pause at end of word
                isDeleting = true;
                typingSpeed = 1500;
            } else if (isDeleting && charIndex === 0) {
                // Move to next word
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500;
            }
            
            setTimeout(typeWriter, typingSpeed);
        }
        
        // Start typewriter effect after 1 second
        setTimeout(typeWriter, 1000);
    }
}

// Interactive skill cards with details
function initializeInteractiveSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            skillItems.forEach(skill => skill.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show skill details
            const skillName = this.querySelector('span').textContent;
            const skillIcon = this.querySelector('i').className;
            showSkillDetails(skillName, skillIcon);
        });
    });
    
    // Close skill details when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.skill-item') && !e.target.closest('.skill-details-modal')) {
            closeSkillDetails();
            skillItems.forEach(skill => skill.classList.remove('active'));
        }
    });
}

function showSkillDetails(skillName, skillIcon) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.skill-details-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'skill-details-modal';
    
    // Skill descriptions data
    const skillDescriptions = {
        'HTML5': 'Proficient in semantic HTML5 markup, accessibility standards, and modern HTML APIs.',
        'CSS3': 'Expert in CSS3 including Flexbox, Grid, animations, transitions, and responsive design.',
        'JavaScript': 'Advanced JavaScript knowledge including ES6+, asynchronous programming, and modern frameworks.',
        'React': 'Experienced in building complex applications with React, hooks, context API, and Redux.',
        'Vue.js': 'Skilled in Vue.js ecosystem including Vuex, Vue Router, and composition API.',
        'Angular': 'Knowledgeable in Angular framework with TypeScript, services, and RxJS.',
        'Node.js': 'Backend development with Node.js, Express.js, REST APIs, and authentication.',
        'Python': 'Python programming for web development, data analysis, and automation scripts.',
        'MongoDB': 'NoSQL database design, query optimization, and aggregation pipelines.',
        'MySQL': 'Relational database design, SQL queries, indexing, and performance tuning.',
        'PHP': 'Server-side scripting with PHP, Laravel framework, and WordPress development.',
        'Firebase': 'Real-time database, authentication, cloud functions, and hosting with Firebase.',
        'Git': 'Version control with Git, branching strategies, and collaborative workflows.',
        'Figma': 'UI/UX design, prototyping, design systems, and collaborative design.',
        'CLI': 'Command line proficiency, shell scripting, and development toolchains.',
        'Docker': 'Containerization, Docker Compose, and container orchestration basics.',
        'AWS': 'Cloud services including EC2, S3, RDS, Lambda, and deployment pipelines.',
        'Analytics': 'Data analysis, Google Analytics, user behavior tracking, and A/B testing.'
    };
    
    // Get skill description
    const description = skillDescriptions[skillName] || 'Detailed information about this skill and my experience with it.';
    
    // Modal content
    modal.innerHTML = `
        <div class="skill-details-content">
            <div class="skill-details-header">
                <i class="${skillIcon}"></i>
                <h3>${skillName}</h3>
                <button class="close-details">&times;</button>
            </div>
            <div class="skill-details-body">
                <p>${description}</p>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.appendChild(modal);
    
    // Add styles for modal
    if (!document.querySelector('#skill-details-styles')) {
        const styles = document.createElement('style');
        styles.id = 'skill-details-styles';
        styles.textContent = `
            .skill-details-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeIn 0.3s ease;
            }
            
            .skill-details-content {
                background-color: var(--card-bg);
                border-radius: var(--border-radius);
                width: 90%;
                max-width: 500px;
                box-shadow: var(--shadow-hover);
                animation: slideUp 0.3s ease;
            }
            
            .skill-details-header {
                display: flex;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid var(--border-color);
                gap: 15px;
            }
            
            .skill-details-header i {
                font-size: 2rem;
                color: var(--primary-color);
            }
            
            .skill-details-header h3 {
                flex: 1;
                margin: 0;
                font-size: 1.5rem;
            }
            
            .close-details {
                background: none;
                border: none;
                font-size: 1.8rem;
                color: var(--text-color);
                cursor: pointer;
                transition: var(--transition);
                line-height: 1;
            }
            
            .close-details:hover {
                color: var(--primary-color);
                transform: scale(1.2);
            }
            
            .skill-details-body {
                padding: 20px;
            }
            
            .skill-progress-indicator {
                display: flex;
                align-items: center;
                gap: 30px;
                margin: 20px 0;
                padding: 20px;
                background-color: var(--bg-light);
                border-radius: var(--border-radius);
            }
            
            .progress-circle {
                position: relative;
                width: 100px;
                height: 100px;
            }
            
            .progress-circle svg {
                transform: rotate(-90deg);
            }
            
            .progress-circle-bg {
                fill: none;
                stroke: var(--border-color);
                stroke-width: 8;
            }
            
            .progress-circle-fill {
                fill: none;
                stroke: var(--primary-color);
                stroke-width: 8;
                stroke-dasharray: 251;
                stroke-dashoffset: 251;
                transition: stroke-dashoffset 1s ease;
            }
            
            .progress-percentage {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
                font-weight: 600;
                color: var(--primary-color);
            }
            
            .skill-experience h4 {
                font-size: 0.9rem;
                color: var(--text-light);
                margin-bottom: 5px;
            }
            
            .skill-experience p {
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--text-color);
            }
            
            .skill-projects {
                padding: 15px;
                background-color: rgba(108, 99, 255, 0.05);
                border-radius: var(--border-radius);
                border-left: 4px solid var(--primary-color);
            }
            
            .skill-projects h4 {
                font-size: 1rem;
                margin-bottom: 5px;
            }
            
            @keyframes slideUp {
                from {
                    transform: translateY(30px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Close button event
    modal.querySelector('.close-details').addEventListener('click', closeSkillDetails);
}

function closeSkillDetails() {
    const modal = document.querySelector('.skill-details-modal');
    if (modal) {
        modal.remove();
    }
}

// Project modal for detailed view
function initializeProjectModal() {
    // This function creates detailed modals for projects
    // It will be triggered when clicking on project cards
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger modal if clicking on links
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            const projectTitle = this.querySelector('.project-title').textContent;
            const projectDescription = this.querySelector('.project-description').textContent;
            const projectImage = this.querySelector('img').src;
            const projectTags = Array.from(this.querySelectorAll('.project-tag')).map(tag => tag.textContent);
            const demoLink = this.querySelector('a[href*="demo"]')?.href || '#';
            const codeLink = this.querySelector('a[href*="github"]')?.href || '#';
            
            showProjectModal({
                title: projectTitle,
                description: projectDescription,
                image: projectImage,
                tags: projectTags,
                demoLink: demoLink,
                codeLink: codeLink
            });
        });
    });
}

function showProjectModal(project) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.project-details-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'project-details-modal';
    
    // Modal content
    modal.innerHTML = `
        <div class="project-details-content">
            <div class="project-details-header">
                <h3>${project.title}</h3>
                <button class="close-project-modal">&times;</button>
            </div>
            <div class="project-details-body">
                <div class="project-modal-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-modal-info">
                    <h4>Project Description</h4>
                    <p>${project.description}</p>
                    
                    <h4>Technologies Used</h4>
                    <div class="project-modal-tags">
                        ${project.tags.map(tag => `<span class="project-modal-tag">${tag}</span>`).join('')}
                    </div>
                    
                    <h4>Project Details</h4>
                    <ul class="project-details-list">
                        <li>Fully responsive design</li>
                        <li>Cross-browser compatibility</li>
                        <li>Performance optimized</li>
                        <li>SEO friendly</li>
                        <li>Accessibility compliant</li>
                    </ul>
                    
                    <div class="project-modal-links">
                        <a href="${project.demoLink}" class="btn btn-primary" target="_blank">
                            <i class="fas fa-external-link-alt"></i> View Website
                        </a>
                        <a href="${project.codeLink}" class="btn btn-secondary" target="_blank">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.appendChild(modal);
    
    // Add styles for modal
    if (!document.querySelector('#project-modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'project-modal-styles';
        styles.textContent = `
            .project-details-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                padding: 20px;
                animation: fadeIn 0.3s ease;
            }
            
            .project-details-content {
                background-color: var(--card-bg);
                border-radius: var(--border-radius);
                width: 100%;
                max-width: 900px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: var(--shadow-hover);
                animation: slideUp 0.3s ease;
            }
            
            .project-details-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 30px;
                border-bottom: 1px solid var(--border-color);
            }
            
            .project-details-header h3 {
                margin: 0;
                font-size: 1.8rem;
            }
            
            .close-project-modal {
                background: none;
                border: none;
                font-size: 2rem;
                color: var(--text-color);
                cursor: pointer;
                transition: var(--transition);
                line-height: 1;
            }
            
            .close-project-modal:hover {
                color: var(--primary-color);
                transform: scale(1.2);
            }
            
            .project-details-body {
                padding: 30px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }
            
            .project-modal-image {
                border-radius: var(--border-radius);
                overflow: hidden;
            }
            
            .project-modal-image img {
                width: 100%;
                height: auto;
                display: block;
            }
            
            .project-modal-info h4 {
                font-size: 1.2rem;
                margin: 20px 0 10px;
                color: var(--primary-color);
            }
            
            .project-modal-info h4:first-child {
                margin-top: 0;
            }
            
            .project-modal-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 15px 0;
            }
            
            .project-modal-tag {
                background-color: rgba(108, 99, 255, 0.1);
                color: var(--primary-color);
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 0.85rem;
                font-weight: 500;
            }
            
            .project-details-list {
                list-style: none;
                padding-left: 0;
            }
            
            .project-details-list li {
                padding: 8px 0;
                padding-left: 25px;
                position: relative;
            }
            
            .project-details-list li:before {
                content: '✓';
                position: absolute;
                left: 0;
                color: var(--primary-color);
                font-weight: bold;
            }
            
            .project-modal-links {
                display: flex;
                gap: 15px;
                margin-top: 30px;
            }
            
            @media (max-width: 768px) {
                .project-details-body {
                    grid-template-columns: 1fr;
                }
                
                .project-details-content {
                    max-height: 80vh;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Close button event
    modal.querySelector('.close-project-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function initializeSlider() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    let currentIndex = 0;
    
    function showCard(index) {
        cards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        cards[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = cards.length - 1;
            showCard(newIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            let newIndex = currentIndex + 1;
            if (newIndex >= cards.length) newIndex = 0;
            showCard(newIndex);
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showCard(index);
        });
    });
    
    // Auto slide
    setInterval(() => {
        let newIndex = currentIndex + 1;
        if (newIndex >= cards.length) newIndex = 0;
        showCard(newIndex);
    }, 5000);
}
    

// Particle effect for hero background
function initializeParticleEffect() {
    // This function creates a particle effect in the hero section
    
    const hero = document.querySelector('.hero');
    
    if (hero && window.innerWidth > 768) {
        // Create particles container
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        
        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            .particles-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: -1;
            }
            
            .particle {
                position: absolute;
                background-color: var(--primary-color);
                border-radius: 50%;
                opacity: 0.1;
                animation: floatParticle 20s linear infinite;
            }
            
            @keyframes floatParticle {
                0% {
                    transform: translateY(100vh) translateX(0) rotate(0deg);
                }
                100% {
                    transform: translateY(-100px) translateX(100px) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(styles);
        
        // Create particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * 10 + 5;
            const left = Math.random() * 100;
            const delay = Math.random() * 20;
            const duration = Math.random() * 10 + 15;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.opacity = Math.random() * 0.1 + 0.05;
            
            particlesContainer.appendChild(particle);
        }
        
        hero.appendChild(particlesContainer);
    }
}

// Service cards component
function initializeServiceCards() {
    const services = [
        {
            icon: 'fas fa-code',
            title: 'Web Development',
            description: 'Custom web applications using modern technologies and best practices.',
            features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly']
        },
        {
            icon: 'fas fa-paint-brush',
            title: 'UI/UX Design',
            description: 'User-centered design solutions that enhance user experience.',
            features: ['Wireframing', 'Prototyping', 'User Testing']
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'Mobile Development',
            description: 'Cross-platform mobile applications for iOS and Android.',
            features: ['React Native', 'Flutter', 'Native Apps']
        }
    ];
    
    // Add services section if not exists
    if (!document.querySelector('.services-section')) {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            const servicesHTML = `
                <section class="services-section">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="section-title">My <span class="highlight">Services</span></h2>
                            <p class="section-subtitle">Comprehensive solutions for your digital needs</p>
                        </div>
                        <div class="services-grid">
                            ${services.map(service => `
                                <div class="service-card">
                                    <div class="service-icon">
                                        <i class="${service.icon}"></i>
                                    </div>
                                    <h3>${service.title}</h3>
                                    <p>${service.description}</p>
                                    <ul class="service-features">
                                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                                    </ul>
                                    <a href="#contact" class="service-link">Get Started <i class="fas fa-arrow-right"></i></a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
            
            projectsSection.insertAdjacentHTML('afterend', servicesHTML);
            
            // Add styles for services
            const styles = document.createElement('style');
            styles.textContent = `
                .services-section {
                    padding: var(--section-padding);
                }
                
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }
                
                .service-card {
                    background-color: var(--card-bg);
                    padding: 40px 30px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow);
                    transition: var(--transition);
                    text-align: center;
                }
                
                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-hover);
                }
                
                .service-icon {
                    width: 70px;
                    height: 70px;
                    background-color: rgba(108, 99, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 25px;
                }
                
                .service-icon i {
                    font-size: 1.8rem;
                    color: var(--primary-color);
                }
                
                .service-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 15px;
                }
                
                .service-card p {
                    color: var(--text-light);
                    margin-bottom: 20px;
                }
                
                .service-features {
                    list-style: none;
                    padding-left: 0;
                    margin-bottom: 25px;
                    text-align: left;
                }
                
                .service-features li {
                    padding: 8px 0;
                    padding-left: 25px;
                    position: relative;
                }
                
                .service-features li:before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: var(--primary-color);
                    font-weight: bold;
                }
                
                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--primary-color);
                    font-weight: 500;
                    transition: var(--transition);
                }
                
                .service-link:hover {
                    gap: 15px;
                }
            `;
            document.head.appendChild(styles);
        }
    }
}

// Achievement counters
function initializeAchievementCounters() {
    const counters = [
        { selector: '.stat:nth-child(1) h3', target: 50, suffix: '+' },
        { selector: '.stat:nth-child(2) h3', target: 30, suffix: '+' },
        { selector: '.stat:nth-child(3) h3', target: 5, suffix: '+' }
    ];
    
    // Create intersection observer for counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const element = document.querySelector(counter.selector);
                    if (element) {
                        animateCounter(element, counter.target, counter.suffix);
                    }
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
}

function animateCounter(element, target, suffix = '') {
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}
// Additional animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for hero section
    initializeParallax();
    
    // Hover effects for skill items
    initializeSkillHover();
    
    // Project card hover effects
    initializeProjectHover();
    
    // Certificate gallery modal (for certificates.html)
    initializeCertificateModal();
    
    // Typing effect for hero text (optional)
    // initializeTypingEffect();
});

// Parallax effect
function initializeParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        });
    }
}

// Skill hover effects
function initializeSkillHover() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('enter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Project card hover effects
function initializeProjectHover() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.project-img img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.project-img img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
}

// Certificate modal for certificates page
function initializeCertificateModal() {
    // This would be used on the certificates.html page
    const certificateItems = document.querySelectorAll('.certificate-item');
    const modal = document.querySelector('.certificate-modal');
    
    if (certificateItems.length > 0 && modal) {
        const modalImg = modal.querySelector('.modal-certificate-img');
        const modalTitle = modal.querySelector('.modal-certificate-title');
        const closeBtn = modal.querySelector('.modal-close');
        
        certificateItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').getAttribute('src');
                const title = this.querySelector('h4').textContent;
                
                modalImg.setAttribute('src', imgSrc);
                modalTitle.textContent = title;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Typing effect for hero text (optional)
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
}
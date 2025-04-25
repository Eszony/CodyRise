  
   // Initialize AOS animation
    AOS.init({
        duration: 800,
        once: true
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            answer.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    });
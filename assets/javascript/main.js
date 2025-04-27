// Inicializar AOS
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa animações
    AOS.init({
        duration: 800,
        once: true
    });

    // ===== NAVEGAÇÃO MÓVEL - REESCRITA =====
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Menu estado fechado por padrão
    let menuAberto = false;

    // Função para manipular o menu mobile
    function toggleMenu(e) {
        if (e) e.preventDefault();
        
        // Inverter estado do menu
        menuAberto = !menuAberto;
        
        if (menuAberto) {
            // Mostra o menu
            mobileMenu.classList.add('visible');
        } else {
            // Esconde o menu
            mobileMenu.classList.remove('visible');
        }
    }

    // Adicionar evento no botão de toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Fechar menu ao clicar em qualquer lugar fora
    document.addEventListener('click', function(e) {
        // Verificar se o menu está aberto e se o clique não foi no menu ou no botão
        if (menuAberto && mobileMenu && menuToggle) {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                toggleMenu();
            }
        }
    });

    // Fechar menu ao clicar em links internos
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuAberto) {
                toggleMenu();
            }
        });
    });
    
    // ===== FIM NAVEGAÇÃO MÓVEL =====

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
    
    // Rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Alterar background da navbar ao rolar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    });
    
    // Fechar menu mobile em resize para desktop
    window.addEventListener('resize', () => {
        if (menuAberto && window.innerWidth >= 768) {
            menuAberto = false;
            mobileMenu.classList.remove('visible');
        }
    });
});
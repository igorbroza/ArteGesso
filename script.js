
        // Ativa o scroll suave para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Adiciona classe ativa ao item de menu correspondente à seção visível
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.link-menu');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 300)) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('ativo');
                if (item.getAttribute('href') === '#' + current) {
                    item.classList.add('ativo');
                }
            });
        });
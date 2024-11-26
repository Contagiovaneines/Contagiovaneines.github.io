window.onload = function () {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');
    const progressText = document.getElementById('progress-text');
    const portfolioContent = document.getElementById('portfolio-content');
    
    let progress = 0;
    
    // Aumenta o progresso a cada 20ms
    const interval = setInterval(function () {
        progress += 1;
        loadingBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
        
        // Quando atingir 100%, a tela de carregamento desaparece e o portfólio é exibido
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(function () {
                loadingScreen.style.display = 'none';
                portfolioContent.style.display = 'block';
                loadProjects(); // Carrega os projetos
            }, 500);
        }
    }, 20);

    // Função para carregar os projetos no portfólio
    function loadProjects() {
        const projects = [
            {
                id: 1,
                title: "Site da igreja AD Missão Caçapava",
                description: "Descrição breve do projeto 1",
                imageUrl: "/img/igreja.png",
                link: "https://igreja-ad-missao-cacapava.vercel.app/"
            },
            {
                id: 2,
                title: "Clone spotify",
                description: "Descrição breve do projeto 2",
                imageUrl: "/img/spotify.png",
                link: "https://spotify-lemon-six.vercel.app/"
            },
            {
                id: 3,
                title: "Loja de livros - Angular",
                description: "Descrição breve do projeto 3",
                imageUrl: "/img/livros.png",
                link: "https://sistemas-livros.vercel.app/livros"
            }
        ];
        
        const container = document.getElementById('projects-container');
        
        // Gera o HTML para cada projeto
        projects.forEach(project => {
            const projectElement = document.createElement('a');
            projectElement.href = project.link;
            projectElement.classList.add('project-card');
            
            projectElement.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}">
                <div class="p-4">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;
            
            container.appendChild(projectElement);
        });
    }
}

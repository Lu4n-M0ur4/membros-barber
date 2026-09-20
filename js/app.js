document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificar Sessão
    const sessionStr = localStorage.getItem('membrosBarber_session');
    if (!sessionStr) {
        window.location.href = 'index.html';
        return;
    }

    const session = JSON.parse(sessionStr);

    // 2. Preencher dados do usuário
    document.getElementById('userName').textContent = session.name;
    document.getElementById('userRole').textContent = session.email || 'Aluno';
    document.getElementById('userAvatar').textContent = session.name.charAt(0).toUpperCase();

    // 3. Logout
    document.getElementById('btnLogout').addEventListener('click', () => {
        localStorage.removeItem('membrosBarber_session');
        window.location.href = 'index.html';
    });

    // 4. Mobile Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    openBtn.addEventListener('click', (e) => {
        sidebar.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.classList.add('open');
        e.stopPropagation(); // Previne que feche instantaneamente
    });
    
    document.getElementById('closeSidebar').addEventListener('click', () => {
        sidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('open');
    });

    // Fechar ao clicar fora (no celular via overlay)
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('open');
        });
    }

    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !openBtn.contains(e.target)) {
                sidebar.classList.remove('open');
                if (sidebarOverlay) sidebarOverlay.classList.remove('open');
            }
        }
    });

    // 5. Sistema de Navegação (Abas)
    const contentArea = document.getElementById('contentArea');
    const navMenu = document.getElementById('navMenu');
    
    // Lista de abas registradas
    window.registeredTabs = [];

    // Função para registrar uma nova aba (será chamada pelos scripts de cada aba)
    window.registerTab = (id, title, icon, renderFunction) => {
        window.registeredTabs.push({ id, title, icon, renderFunction });
        renderNavMenu();
        
        // Se for a primeira aba registrada, abre ela automaticamente
        if (window.registeredTabs.length === 1) {
            activateTab(id);
        }
    };

    // Renderiza o menu lateral
    function renderNavMenu() {
        navMenu.innerHTML = '';
        window.registeredTabs.forEach(tab => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            li.dataset.tabId = tab.id;
            li.innerHTML = `<span>${tab.icon}</span> ${tab.title}`;
            
            li.addEventListener('click', () => {
                activateTab(tab.id);
                // Fechar sidebar no mobile após clicar
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    if (sidebarOverlay) sidebarOverlay.classList.remove('open');
                }
            });
            
            navMenu.appendChild(li);
        });
    }

    // Ativa uma aba específica
    function activateTab(id) {
        const tab = window.registeredTabs.find(t => t.id === id);
        if (!tab) return;

        // Atualiza UI do menu
        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.remove('active');
            if (el.dataset.tabId === id) el.classList.add('active');
        });

        // Atualiza Header/Banner
        document.getElementById('currentTabName').textContent = tab.title;
        document.getElementById('bannerTitle').textContent = tab.title;
        document.getElementById('bannerDesc').style.display = 'none';

        // Executa a função de renderização da aba
        tab.renderFunction(contentArea);
    }

    // Estado vazio caso nenhuma aba seja registrada a tempo
    setTimeout(() => {
        if (window.registeredTabs.length === 0) {
            contentArea.innerHTML = `
                <div class="empty-state">
                    <h3>Área de Membros em Construção</h3>
                    <p>As abas estão sendo adicionadas pelo administrador.</p>
                </div>
            `;
        }
    }, 500);

    // 6. Upload Dinâmico da Capa e Banner
    const coverUpload = document.getElementById('coverUpload');
    const sidebarLogo = document.getElementById('sidebarLogo');
    const mainBanner = document.querySelector('.banner');
    
    // Recupera a imagem salva anteriormente (se houver) ou usa a capa padrão
    const savedCover = localStorage.getItem('membrosBarber_cover');
    if (sidebarLogo && mainBanner) {
        if (savedCover) {
            sidebarLogo.src = savedCover;
            mainBanner.style.backgroundImage = `url(${savedCover})`;
        } else {
            mainBanner.style.backgroundImage = `url(assets/capa.jpg)`;
        }
    }

    // Processa a nova imagem quando o usuário faz upload
    if (coverUpload) {
        coverUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const base64Image = event.target.result;
                    // Altera no menu lateral
                    sidebarLogo.src = base64Image;
                    // Altera no banner gigante do topo
                    mainBanner.style.backgroundImage = `url(${base64Image})`;
                    
                    try {
                        localStorage.setItem('membrosBarber_cover', base64Image);
                    } catch(err) {
                        alert('A imagem é muito pesada para o armazenamento local. Tente comprimir a imagem antes de fazer o upload.');
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

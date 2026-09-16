document.addEventListener('DOMContentLoaded', () => {
    // Dados dos cursos solicitados
    const cursosData = [
        {
            id: 1,
            title: "Mapa do Degradê +30",
            category: "Técnicas",
            image: "assets/apple-touch-icon.png",
            description: "Aprenda a fazer o fade perfeito de forma consistente e rápida, compreendendo as 30 variações.",
            duration: "Material em PDF",
            fileLink: "assets/Mapeamento_Crew_Cut_com_Fade_20260912212032.pdf"
        },
        {
            id: 2,
            title: "SOS Degradê",
            category: "Técnicas",
            image: "assets/sos%20degrade.jpeg",
            description: "Converta conhecimento mecânico em excelência prática, focando em precisão técnica e controle absoluto do corte.",
            duration: "Material em PDF",
            fileLink: "assets/Retirar%20marca.pdf"
        },
        {
            id: 3,
            title: "Mapa de Pentes e Regulagens",
            category: "Equipamentos",
            image: "assets/Guia%20pentes.png",
            description: "Domine todas as alturas, marcações e a alavanca da sua máquina sem complicação.",
            duration: "Material em PDF",
            fileLink: "assets/GUIA%20PENTES.pdf"
        },
        {
            id: 4,
            title: "Checklist Final do Degradê",
            category: "Técnicas",
            image: "assets/checklis.jpeg",
            description: "Os ajustes finais e detalhes que separam um corte bom de um corte excepcional (padrão gringo).",
            duration: "Material em PDF",
            fileLink: "assets/Scientific_Fade_Mastery.pdf"
        },
        {
            id: 5,
            title: "Mapa das Zonas",
            category: "Técnicas",
            image: "assets/map%20zonas.jpg",
            description: "Compreenda as zonas da cabeça, áreas de recessão e coroa para criar cortes harmônicos.",
            duration: "Material em PDF",
            fileLink: "assets/Arquitetura_do_Low_Fade.pdf"
        },
        {
            id: 6,
            title: "Nevou",
            category: "Técnicas",
            image: "assets/NEVOU.jpeg",
            description: "Aprenda o passo a passo completo para executar o platinado perfeito, o famoso nevou, de forma segura e profissional.",
            duration: "Material em PDF",
            fileLink: "assets/nevou.pdf"
        },
        {
            id: 7,
            title: "Barba Perfeita",
            category: "Técnicas",
            image: "assets/BARBBA%20PERFEITA%20CAPA.jpeg",
            description: "Domine as técnicas para um visagismo e acabamento impecáveis, garantindo a barba perfeita para o seu cliente.",
            duration: "Material em PDF",
            fileLink: "assets/BARBA%20PERFEITA.pdf"
        },
        {
            id: 8,
            title: "Fórmula Secreta da Pigmentação",
            category: "Técnicas",
            image: "assets/PIGMENTENTACAO%20PERFEITA%20CAPA.jpeg",
            description: "Aprenda os segredos e as melhores técnicas de pigmentação para um acabamento perfeito, natural e duradouro.",
            duration: "Material em PDF",
            fileLink: "assets/FORMULA%20SECRETA%20DA%20PIGMENTA%C3%87%C3%83O.pdf"
        },
        {
            id: 9,
            title: "Olhar de Mestre",
            category: "Técnicas",
            image: "assets/OLHAR%20DE%20MESTRE%20CAPA.jpeg",
            description: "Desenvolva uma percepção avançada para identificar detalhes e realizar correções precisas em qualquer tipo de sombracelha.",
            duration: "Material em PDF",
            fileLink: "assets/OLHAR%20DE%20MESTRE.pdf"
        }
    ];

    // Função que renderiza a aba de cursos
    const renderCursosTab = (container) => {
        let html = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; flex-wrap: wrap; gap: 15px;">
                <h2 style="color: var(--color-primary); font-size: 24px;">Meus Módulos</h2>
                <div style="display: flex; gap: 10px; width: 100%; max-width: 300px;">
                    <input type="text" id="searchCurso" placeholder="Buscar conteúdo..." style="width: 100%; padding: 12px 15px; border-radius: var(--border-radius); border: 1px solid var(--color-border); background: var(--color-bg-primary); color: var(--color-text-primary); transition: var(--transition);">
                </div>
            </div>
            
            <div class="grid-container" id="cursosGrid">
                <!-- Cursos injetados via JS -->
            </div>
        `;

        container.innerHTML = html;

        const grid = document.getElementById('cursosGrid');
        const searchInput = document.getElementById('searchCurso');

        const renderGrid = (cursos) => {
            if(cursos.length === 0) {
                grid.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;">
                    <h3>Nenhum conteúdo encontrado</h3>
                    <p>Tente buscar com outras palavras.</p>
                </div>`;
                return;
            }

            grid.innerHTML = cursos.map(curso => `
                <div class="card" style="display: flex; flex-direction: column;">
                    <img src="${curso.image}" alt="${curso.title}" style="width: 100%; height: 200px; object-fit: cover; border-bottom: 1px solid var(--color-border);">
                    <div style="padding: 20px; display: flex; flex-direction: column; flex: 1;">
                        <div style="margin-bottom: 10px;">
                            <span style="background: rgba(212, 175, 55, 0.1); color: var(--color-primary); padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${curso.category}</span>
                        </div>
                        <h3 style="color: var(--color-text-primary); margin: 0 0 10px 0; font-size: 18px; line-height: 1.3;">${curso.title}</h3>
                        <p style="color: var(--color-text-secondary); font-size: 14px; margin-bottom: 24px; line-height: 1.5; flex: 1;">${curso.description}</p>
                        
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px;">
                            <span style="color: var(--color-text-secondary); font-size: 13px; display: flex; align-items: center; gap: 5px;">
                                🕒 ${curso.duration}
                            </span>
                            <button onclick="${curso.fileLink ? `window.downloadMaterial('${curso.fileLink}')` : `alert('Funcionalidade: Redirecionaria para o player de vídeo do curso: ${curso.title}')`}" style="background: var(--color-primary); color: var(--color-bg-primary); border: none; padding: 8px 20px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: all 0.3s; font-size: 14px;">${curso.fileLink ? '📖 Ler Material' : 'Assistir'}</button>
                        </div>
                    </div>
                </div>
            `).join('');
        };

        // Renderiza lista inicial
        renderGrid(cursosData);

        // Funcionalidade de Busca
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = cursosData.filter(c => 
                c.title.toLowerCase().includes(term) || 
                c.description.toLowerCase().includes(term)
            );
            renderGrid(filtered);
        });
        
        // Estilo pro hover do botão
        const buttons = grid.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
                btn.style.backgroundColor = 'var(--color-accent)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
                btn.style.backgroundColor = 'var(--color-primary)';
            });
        });
    };

    // Registra a aba no app principal (com um pequeno timeout para garantir que o app.js já inicializou a função global)
    setTimeout(() => {
        if(window.registerTab) {
            window.registerTab('cursos', 'Aulas e Módulos', '📚', renderCursosTab);
        }
    }, 100);
});

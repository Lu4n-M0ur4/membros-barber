document.addEventListener('DOMContentLoaded', () => {
    const renderDownloadsTab = (container) => {
        const downloads = [
            { titulo: "Mapa do Degradê +30", tipo: "PDF", tamanho: "1.1 MB", link: "assets/Mapeamento_Crew_Cut_com_Fade_20260912212032.pdf" },
            { titulo: "SOS Degradê", tipo: "PDF", tamanho: "1.2 MB", link: "assets/Retirar%20marca.pdf" },
            { titulo: "Mapa de Pentes e Regulagens", tipo: "PDF", tamanho: "285 KB", link: "assets/GUIA%20PENTES.pdf" },
            { titulo: "Checklist Final do Degradê", tipo: "PDF", tamanho: "6.8 MB", link: "assets/Scientific_Fade_Mastery.pdf" },
            { titulo: "Mapa das Zonas", tipo: "PDF", tamanho: "9.3 MB", link: "assets/Arquitetura_do_Low_Fade.pdf" },
            { titulo: "Nevou", tipo: "PDF", tamanho: "2.1 MB", link: "assets/nevou.pdf" }
        ];

        let html = `
            <div style="margin-bottom: 30px;">
                <h2 style="color: var(--color-primary); font-size: 24px;">Central de Downloads</h2>
                <p style="color: var(--color-text-secondary);">Baixe os materiais de apoio e apostilas para estudar offline ou usar na sua barbearia.</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 15px;">
                ${downloads.map(item => `
                    <div class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 20px; transition: var(--transition);">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <div style="width: 48px; height: 48px; background: rgba(212, 175, 55, 0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--color-primary); font-weight: bold; font-size: 13px; letter-spacing: 1px;">
                                ${item.tipo}
                            </div>
                            <div>
                                <h4 style="color: var(--color-text-primary); margin: 0 0 5px 0; font-size: 16px;">${item.titulo}</h4>
                                <p style="color: var(--color-text-secondary); margin: 0; font-size: 13px;">Tamanho: ${item.tamanho}</p>
                            </div>
                        </div>
                        <button onclick="window.forceDownload('${item.link}')" style="background: transparent; border: 1px solid var(--color-primary); color: var(--color-primary); padding: 8px 24px; border-radius: var(--border-radius); cursor: pointer; font-weight: 600; transition: var(--transition);">Baixar Arquivo</button>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.innerHTML = html;
        
        // Efeito visual no botão de download
        container.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.background = 'var(--color-primary)';
                btn.style.color = 'var(--color-bg-primary)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'transparent';
                btn.style.color = 'var(--color-primary)';
            });
        });
    };

    setTimeout(() => {
        if(window.registerTab) window.registerTab('downloads', 'Downloads', '📁', renderDownloadsTab);
    }, 200);
});

document.addEventListener('DOMContentLoaded', () => {
    const renderDownloadsTab = (container) => {
        const downloads = [
            { titulo: "Apostila Completa do Fade", tipo: "PDF", tamanho: "2.4 MB" },
            { titulo: "Planilha de Precificação Automática", tipo: "XLSX", tamanho: "1.1 MB" },
            { titulo: "Contrato de Aluguel de Cadeira", tipo: "DOCX", tamanho: "500 KB" },
            { titulo: "Template de Posts para Instagram", tipo: "ZIP", tamanho: "15 MB" }
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
                        <button onclick="alert('Download do arquivo: ${item.titulo}')" style="background: transparent; border: 1px solid var(--color-primary); color: var(--color-primary); padding: 8px 24px; border-radius: var(--border-radius); cursor: pointer; font-weight: 600; transition: var(--transition);">Baixar Arquivo</button>
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

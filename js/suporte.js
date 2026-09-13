document.addEventListener('DOMContentLoaded', () => {
    const renderSuporteTab = (container) => {
        let html = `
            <div style="margin-bottom: 30px;">
                <h2 style="color: var(--color-primary); font-size: 24px;">Suporte e Contato</h2>
                <p style="color: var(--color-text-secondary);">Precisa de ajuda com alguma aula ou no seu sistema? Tire suas dúvidas abaixo ou fale diretamente conosco.</p>
            </div>

            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                
                <!-- FAQ -->
                <div class="card" style="flex: 2; min-width: 300px; padding: 24px;">
                    <h3 style="color: var(--color-primary); margin-bottom: 20px; font-size: 18px;">Perguntas Frequentes (FAQ)</h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Por quanto tempo tenho acesso aos cursos?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">O acesso à plataforma Membros Barber é de 12 meses (1 ano). Durante esse período, você pode assistir aos cursos quantas vezes quiser, além de acessar a calculadora e a agenda.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Como emito meu certificado de conclusão?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Após marcar 100% das aulas de um módulo como concluídas, o botão verde de emitir certificado aparecerá automaticamente no topo da página do curso.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Os dados da Calculadora e Agenda ficam salvos para sempre?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Eles ficam salvos no armazenamento local do seu navegador. Recomendamos usar o botão de exportar relatórios semanalmente para não perder nada caso precise trocar de computador ou limpar o histórico de navegação.</p>
                        </details>
                    </div>
                </div>


            </div>
        `;
        
        container.innerHTML = html;
    };

    setTimeout(() => {
        if(window.registerTab) window.registerTab('suporte', 'Suporte VIP', '💬', renderSuporteTab);
    }, 250);
});

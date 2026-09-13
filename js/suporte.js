document.addEventListener('DOMContentLoaded', () => {
    const renderSuporteTab = (container) => {
        let html = `
            <div style="margin-bottom: 30px;">
                <h2 style="color: var(--color-primary); font-size: 24px;">Suporte VIP</h2>
                <p style="color: var(--color-text-secondary);">Precisa de ajuda com alguma aula ou no seu sistema? Tire suas dúvidas abaixo ou fale diretamente conosco.</p>
            </div>

            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                
                <!-- FAQ -->
                <div class="card" style="flex: 2; min-width: 300px; padding: 24px;">
                    <h3 style="color: var(--color-primary); margin-bottom: 20px; font-size: 18px;">Perguntas Frequentes (FAQ)</h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Isso é um curso de barbearia?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Não. O Mapa do Degradê é uma ferramenta visual de consulta focada na sequência do fade.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Preciso ser barbeiro profissional?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Não. A oferta é especialmente útil para quem está começando ou ainda se perde durante algumas etapas.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">São 30 tipos diferentes de degradê?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Não necessariamente. Os +30 representam mapas, modelos e dicas visuais entre sequências, etapas, tipos de fade, referências e rotas de correção.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Vou receber videoaulas?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">A proposta principal do produto é visual e de consulta rápida.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Consigo consultar pelo celular?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Sim. Essa é uma das principais propostas do produto.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Posso imprimir os mapas?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Sim. Os arquivos vêm em PDF, prontos para imprimir. Você escolhe usar no celular durante o corte ou imprimir e deixar fixado na bancada.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Como recebo?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Produto digital em PDF. O acesso será disponibilizado após a confirmação do pagamento conforme a plataforma de entrega definida.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">E se eu não gostar?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Você tem 30 dias de garantia. Se não fizer sentido pra você, é só pedir o reembolso, sem burocracia.</p>
                        </details>
                        <details style="background: var(--color-bg-secondary); padding: 15px; border-radius: 6px; border: 1px solid var(--color-border); cursor: pointer;">
                            <summary style="color: var(--color-text-primary); font-weight: 500; outline: none;">Ele substitui um curso completo de barbearia?</summary>
                            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px; line-height: 1.6;">Não. Ele foi pensado como ferramenta de consulta e apoio à execução do degradê.</p>
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

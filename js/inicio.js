document.addEventListener('DOMContentLoaded', () => {
    const renderInicioTab = (container) => {
        const session = JSON.parse(localStorage.getItem('membrosBarber_session') || '{}');
        const nome = session.name ? session.name.split(' ')[0] : 'Barbeiro';

        let html = `
            <div style="margin-bottom: 30px;">
                <h2 style="color: var(--color-primary); font-size: 28px;">Olá, ${nome}! ✂️</h2>
                <p style="color: var(--color-text-secondary);">Aqui está o resumo do seu progresso e dos seus negócios.</p>
            </div>

            <!-- Cards Resumo -->
            <div class="grid-container" style="margin-bottom: 30px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
                <div class="card" style="padding: 24px; text-align: center; border-bottom: 4px solid var(--color-primary);">
                    <h3 style="color: var(--color-text-secondary); font-size: 14px; text-transform: uppercase;">Aulas Concluídas</h3>
                    <p style="color: var(--color-text-primary); font-size: 32px; font-weight: bold; margin: 10px 0;">12/30</p>
                    <span style="color: var(--color-success); font-size: 13px;">↑ 40% de progresso</span>
                </div>
                <div class="card" style="padding: 24px; text-align: center; border-bottom: 4px solid var(--color-accent);">
                    <h3 style="color: var(--color-text-secondary); font-size: 14px; text-transform: uppercase;">Lucro Mensal (Est.)</h3>
                    <p style="color: var(--color-text-primary); font-size: 32px; font-weight: bold; margin: 10px 0;">R$ 4.250</p>
                    <span style="color: var(--color-success); font-size: 13px;">Baseado na sua Calculadora</span>
                </div>
                <div class="card" style="padding: 24px; text-align: center; border-bottom: 4px solid var(--color-warning);">
                    <h3 style="color: var(--color-text-secondary); font-size: 14px; text-transform: uppercase;">Clientes Agendados</h3>
                    <p style="color: var(--color-text-primary); font-size: 32px; font-weight: bold; margin: 10px 0;" id="inicioAgendados">0</p>
                    <span style="color: var(--color-text-secondary); font-size: 13px;">Na sua agenda ativa</span>
                </div>
            </div>

            <!-- Gráfico e Atividade -->
            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                <div class="card" style="flex: 2; min-width: 300px; padding: 24px;">
                    <h3 style="color: var(--color-primary); margin-bottom: 20px; font-size: 18px;">Evolução de Estudos</h3>
                    <div style="height: 200px; background: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.05) 40px); display: flex; align-items: flex-end; justify-content: space-around; padding-top: 20px; border-bottom: 1px solid var(--color-border); border-left: 1px solid var(--color-border);">
                        <!-- Mock Grafico de barras -->
                        <div style="width: 40px; background: var(--color-primary); height: 40%; border-radius: 4px 4px 0 0;" title="Semana 1"></div>
                        <div style="width: 40px; background: var(--color-primary); height: 60%; border-radius: 4px 4px 0 0;" title="Semana 2"></div>
                        <div style="width: 40px; background: var(--color-accent); height: 90%; border-radius: 4px 4px 0 0;" title="Semana 3"></div>
                        <div style="width: 40px; background: var(--color-primary); height: 30%; border-radius: 4px 4px 0 0;" title="Semana 4"></div>
                    </div>
                </div>

                <div class="card" style="flex: 1; min-width: 250px; padding: 24px;">
                    <h3 style="color: var(--color-primary); margin-bottom: 20px; font-size: 18px;">Avisos Recentes</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 12px 0; border-bottom: 1px solid var(--color-border); font-size: 14px;">
                            <strong style="color: var(--color-text-primary); display: block;">Nova Aula Adicionada</strong>
                            <span style="color: var(--color-text-secondary);">Módulo: SOS Marca</span>
                        </li>
                        <li style="padding: 12px 0; border-bottom: 1px solid var(--color-border); font-size: 14px;">
                            <strong style="color: var(--color-text-primary); display: block;">Certificado Liberado</strong>
                            <span style="color: var(--color-success);">Técnicas de Fade - Concluído</span>
                        </li>
                        <li style="padding: 12px 0; font-size: 14px;">
                            <strong style="color: var(--color-text-primary); display: block;">Live de Mentoria</strong>
                            <span style="color: var(--color-accent);">Amanhã às 20h00</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
        container.innerHTML = html;

        // Atualizar número de clientes da agenda se existir
        const agenda = JSON.parse(localStorage.getItem('membrosBarber_agenda') || '[]');
        document.getElementById('inicioAgendados').textContent = agenda.length;
    };

    setTimeout(() => {
        // Registrando como a primeira aba, para que seja a Home oficial
        if(window.registerTab) window.registerTab('inicio', 'Visão Geral', '📊', renderInicioTab);
    }, 50); // Menor tempo para ser a primeira da lista
});

document.addEventListener('DOMContentLoaded', () => {
    const renderAgendaTab = (container) => {
        let html = `
            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                
                <!-- Coluna de Inserção -->
                <div class="card" style="flex: 1; min-width: 300px; padding: 24px; border-top: 3px solid var(--color-primary);">
                    <h3 style="color: var(--color-primary); margin-bottom: 20px; font-size: 18px;">Agendar Novo Cliente</h3>
                    
                    <form id="formAgenda">
                        <div class="form-group" style="margin-bottom: 15px;">
                            <label style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 5px; display: block;">Nome do Cliente</label>
                            <input type="text" id="agendaNome" required placeholder="Ex: João Silva" style="width: 100%; padding: 12px; background: var(--color-bg-primary); border: 1px solid var(--color-border); color: white; border-radius: 6px;">
                        </div>
                        <div class="form-group" style="margin-bottom: 15px;">
                            <label style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 5px; display: block;">Serviço Realizado</label>
                            <input type="text" id="agendaServico" required placeholder="Ex: Corte + Barba" style="width: 100%; padding: 12px; background: var(--color-bg-primary); border: 1px solid var(--color-border); color: white; border-radius: 6px;">
                        </div>
                        <div style="display: flex; gap: 15px; margin-bottom: 25px;">
                            <div class="form-group" style="flex: 1;">
                                <label style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 5px; display: block;">Data</label>
                                <input type="date" id="agendaData" required style="width: 100%; padding: 12px; background: var(--color-bg-primary); border: 1px solid var(--color-border); color: white; border-radius: 6px;">
                            </div>
                            <div class="form-group" style="flex: 1;">
                                <label style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 5px; display: block;">Hora</label>
                                <input type="time" id="agendaHora" required style="width: 100%; padding: 12px; background: var(--color-bg-primary); border: 1px solid var(--color-border); color: white; border-radius: 6px;">
                            </div>
                        </div>
                        
                        <button type="submit" style="width: 100%; background: var(--color-primary); color: var(--color-bg-primary); border: none; padding: 14px; border-radius: 6px; font-weight: bold; cursor: pointer; text-transform: uppercase;">Salvar Agendamento</button>
                    </form>
                </div>

                <!-- Coluna de Visualização -->
                <div class="card" style="flex: 2; min-width: 350px; padding: 24px; background: var(--color-bg-primary);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
                        <h3 style="color: var(--color-primary); font-size: 18px;">Agenda do Dia</h3>
                        <input type="date" id="filterData" style="padding: 10px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); color: white; border-radius: 6px;">
                    </div>
                    
                    <div id="agendaList" style="display: flex; flex-direction: column; gap: 12px; max-height: 520px; overflow-y: auto; padding-right: 8px;">
                        <!-- Injetado via JS -->
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;

        const form = document.getElementById('formAgenda');
        const agendaList = document.getElementById('agendaList');
        const filterData = document.getElementById('filterData');

        const hoje = new Date().toISOString().split('T')[0];
        filterData.value = hoje;
        document.getElementById('agendaData').value = hoje;

        const loadAgenda = () => {
            const raw = localStorage.getItem('membrosBarber_agenda');
            return raw ? JSON.parse(raw) : [];
        };

        const saveAgenda = (data) => {
            localStorage.setItem('membrosBarber_agenda', JSON.stringify(data));
        };

        const renderLista = () => {
            const agenda = loadAgenda();
            const dataFiltro = filterData.value;
            
            const filtered = agenda
                .filter(item => item.data === dataFiltro)
                .sort((a, b) => a.hora.localeCompare(b.hora));

            if(filtered.length === 0) {
                agendaList.innerHTML = `
                <div class="empty-state" style="background: transparent; border: 1px dashed var(--color-border);">
                    <p style="margin: 0; color: var(--color-text-secondary);">Nenhum cliente agendado para este dia.</p>
                </div>`;
                return;
            }

            agendaList.innerHTML = filtered.map(item => {
                const isRealizado = item.realizado;
                const borderColor = isRealizado ? '#4CAF50' : 'var(--color-primary)';
                const opacity = isRealizado ? '0.6' : '1';
                const textDecoration = isRealizado ? 'line-through' : 'none';
                
                return `
                <div style="display: flex; justify-content: space-between; align-items: center; background: var(--color-bg-card); padding: 16px; border-radius: 8px; border-left: 4px solid ${borderColor}; opacity: ${opacity}; transition: var(--transition);">
                    <div>
                        <strong style="color: var(--color-text-primary); font-size: 16px; display: block; margin-bottom: 4px; text-decoration: ${textDecoration};">🕒 ${item.hora} - ${item.nome}</strong>
                        <span style="color: var(--color-text-secondary); font-size: 13px; background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">💈 ${item.servico}</span>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        ${!isRealizado ? `<button class="btn-realizar" data-id="${item.id}" style="background: transparent; border: 1px solid #4CAF50; color: #4CAF50; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px; transition: all 0.3s;">Realizado</button>` : `<span style="color: #4CAF50; font-size: 12px; font-weight: bold; display: flex; align-items: center;">✓ OK</span>`}
                        <button class="btn-excluir" data-id="${item.id}" data-realizado="${isRealizado}" style="background: transparent; border: 1px solid var(--color-error); color: var(--color-error); padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px; transition: all 0.3s;">${isRealizado ? 'Excluir' : 'Cancelar'}</button>
                    </div>
                </div>
            `}).join('');

            document.querySelectorAll('.btn-realizar').forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    btn.style.background = '#4CAF50';
                    btn.style.color = 'white';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.background = 'transparent';
                    btn.style.color = '#4CAF50';
                });
                btn.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id');
                    let agenda = loadAgenda();
                    const index = agenda.findIndex(i => i.id === id);
                    if(index > -1) {
                        agenda[index].realizado = true;
                        saveAgenda(agenda);
                        renderLista();
                    }
                });
            });

            document.querySelectorAll('.btn-excluir').forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    btn.style.background = 'var(--color-error)';
                    btn.style.color = 'white';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.background = 'transparent';
                    btn.style.color = 'var(--color-error)';
                });
                btn.addEventListener('click', (e) => {
                    const isRealizado = e.target.getAttribute('data-realizado') === 'true';
                    const msg = isRealizado ? 'Excluir este histórico da agenda?' : 'Tem certeza que deseja cancelar e remover este cliente da agenda?';
                    if(confirm(msg)) {
                        const id = e.target.getAttribute('data-id');
                        const novaAgenda = loadAgenda().filter(i => i.id !== id);
                        saveAgenda(novaAgenda);
                        renderLista();
                    }
                });
            });
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const novo = {
                id: Date.now().toString(),
                nome: document.getElementById('agendaNome').value.trim(),
                servico: document.getElementById('agendaServico').value,
                data: document.getElementById('agendaData').value,
                hora: document.getElementById('agendaHora').value,
                realizado: false
            };
            
            let agenda = loadAgenda();
            
            // Controle de Memória: Limita a 1000 agendamentos
            if (agenda.length >= 1000) {
                agenda.shift(); 
            }
            
            agenda.push(novo);
            saveAgenda(agenda);
            
            filterData.value = novo.data;
            renderLista();
            
            form.reset();
            document.getElementById('agendaData').value = hoje;
        });

        filterData.addEventListener('change', renderLista);

        renderLista(); 
    };

    setTimeout(() => {
        if(window.registerTab) window.registerTab('agenda', 'Agenda de Clientes', '📅', renderAgendaTab);
    }, 100);
});

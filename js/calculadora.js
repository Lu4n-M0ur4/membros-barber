document.addEventListener('DOMContentLoaded', () => {
    const renderCalculadoraTab = (container) => {
        let html = `
            <div style="max-width: 900px; margin: 0 auto; height: 100%; display: flex; flex-direction: column; justify-content: flex-start;">
                <div style="margin-bottom: 15px; text-align: center;">
                    <h2 style="color: var(--color-primary); font-size: 20px; margin: 0;">Calculadora de Custos e Lucro</h2>
                    <p style="color: var(--color-text-secondary); font-size: 13px; margin: 5px 0 0 0;">Descubra exatamente quanto você gasta por corte e sua margem.</p>
                </div>

                <div class="card" style="padding: 15px; display: grid; gap: 15px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                    
                    <!-- Custos Fixos -->
                    <div style="background: var(--color-bg-primary); padding: 15px; border-radius: var(--border-radius); border: 1px solid var(--color-border);">
                        <h3 style="color: var(--color-accent); margin-bottom: 10px; font-size: 14px; margin-top: 0;">Custos Fixos Mensais</h3>
                        <div class="form-group" style="margin-bottom: 8px;">
                            <label style="font-size: 12px; color: var(--color-text-secondary);">Aluguel / Cadeira (R$)</label>
                            <input type="number" id="calcAluguel" placeholder="Ex: 800" style="width: 100%; padding: 8px; font-size: 13px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); color: white; border-radius: 4px; transition: var(--transition);">
                        </div>
                        <div class="form-group" style="margin-bottom: 8px;">
                            <label style="font-size: 12px; color: var(--color-text-secondary);">Água, Luz e Internet (R$)</label>
                            <input type="number" id="calcContas" placeholder="Ex: 200" style="width: 100%; padding: 8px; font-size: 13px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); color: white; border-radius: 4px; transition: var(--transition);">
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                            <label style="font-size: 12px; color: var(--color-text-secondary);">Dias trabalhados por mês</label>
                            <input type="number" id="calcDias" value="24" placeholder="Ex: 24" style="width: 100%; padding: 8px; font-size: 13px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); color: white; border-radius: 4px; transition: var(--transition);">
                        </div>
                    </div>

                    <!-- Dados do Corte -->
                    <div style="background: var(--color-bg-primary); padding: 15px; border-radius: var(--border-radius); border: 1px solid var(--color-border);">
                        <h3 style="color: var(--color-accent); margin-bottom: 10px; font-size: 14px; margin-top: 0;">Dados do Corte</h3>
                        <div class="form-group" style="margin-bottom: 8px;">
                            <label style="font-size: 12px; color: var(--color-text-secondary);">Média de cortes por dia</label>
                            <input type="number" id="calcCortesDia" placeholder="Ex: 10" style="width: 100%; padding: 8px; font-size: 13px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); color: white; border-radius: 4px; transition: var(--transition);">
                        </div>
                        <div class="form-group" style="margin-bottom: 8px;">
                            <label style="font-size: 12px; color: var(--color-text-secondary);">Gasto com Lâmina/Gola (R$)</label>
                            <input type="number" id="calcInsumos" placeholder="Ex: 1.50" style="width: 100%; padding: 8px; font-size: 13px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); color: white; border-radius: 4px; transition: var(--transition);">
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                            <label style="font-size: 12px; color: var(--color-text-secondary);">Valor Cobrado no Corte (R$)</label>
                            <input type="number" id="calcValor" placeholder="Ex: 35" style="width: 100%; padding: 8px; font-size: 13px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); color: white; border-radius: 4px; transition: var(--transition);">
                        </div>
                    </div>

                    <!-- Resultados -->
                    <div style="grid-column: 1 / -1; background: rgba(212, 175, 55, 0.05); padding: 15px; border-radius: var(--border-radius); border: 1px dashed var(--color-primary); text-align: center;">
                        <h3 style="color: var(--color-primary); margin-bottom: 10px; font-size: 16px; margin-top: 0;">Resultado Financeiro</h3>
                        <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 10px;">
                            <div>
                                <p style="color: var(--color-text-secondary); font-size: 12px; margin: 0 0 5px 0;">Custo por Corte</p>
                                <strong id="resCustoCorte" style="font-size: 22px; color: var(--color-error);">R$ 0,00</strong>
                            </div>
                            <div>
                                <p style="color: var(--color-text-secondary); font-size: 12px; margin: 0 0 5px 0;">Lucro Líquido por Corte</p>
                                <strong id="resLucroCorte" style="font-size: 22px; color: var(--color-success);">R$ 0,00</strong>
                            </div>
                            <div>
                                <p style="color: var(--color-text-secondary); font-size: 12px; margin: 0 0 5px 0;">Lucro Mensal Estimado</p>
                                <strong id="resLucroMensal" style="font-size: 22px; color: var(--color-primary);">R$ 0,00</strong>
                            </div>
                        </div>
                        <button id="btnExportCalc" style="margin-top: 15px; background: var(--color-primary); color: var(--color-bg-primary); border: none; padding: 10px 20px; font-size: 13px; border-radius: var(--border-radius); font-weight: bold; cursor: pointer; text-transform: uppercase; letter-spacing: 1px;">Copiar Relatório</button>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML = html;

        // Recuperar LocalStorage
        const inputs = ['calcAluguel', 'calcContas', 'calcDias', 'calcCortesDia', 'calcInsumos', 'calcValor'];
        inputs.forEach(id => {
            const el = document.getElementById(id);
            const saved = localStorage.getItem(`membrosBarber_${id}`);
            if(saved) el.value = saved;
            
            // EventListener para calcular em tempo real e salvar estado
            el.addEventListener('input', () => {
                localStorage.setItem(`membrosBarber_${id}`, el.value);
                calcularCustos();
            });
            
            // Efeito visual de foco nos inputs
            el.addEventListener('focus', () => el.style.borderColor = 'var(--color-primary)');
            el.addEventListener('blur', () => el.style.borderColor = 'var(--color-border)');
        });

        const calcularCustos = () => {
            const aluguel = parseFloat(document.getElementById('calcAluguel').value) || 0;
            const contas = parseFloat(document.getElementById('calcContas').value) || 0;
            const diasTrabalhados = parseFloat(document.getElementById('calcDias').value) || 0;
            const cortesDia = parseFloat(document.getElementById('calcCortesDia').value) || 0;
            const insumos = parseFloat(document.getElementById('calcInsumos').value) || 0;
            const valorCorte = parseFloat(document.getElementById('calcValor').value) || 0;

            if(diasTrabalhados <= 0 || cortesDia <= 0) {
                document.getElementById('resCustoCorte').textContent = 'R$ 0,00';
                document.getElementById('resLucroCorte').textContent = 'R$ 0,00';
                document.getElementById('resLucroMensal').textContent = 'R$ 0,00';
                return;
            }

            const totalCortesMes = diasTrabalhados * cortesDia;
            const custoFixoMensal = aluguel + contas;
            const custoFixoPorCorte = custoFixoMensal / totalCortesMes;
            
            const custoTotalPorCorte = custoFixoPorCorte + insumos;
            const lucroPorCorte = valorCorte - custoTotalPorCorte;
            const lucroMensal = lucroPorCorte * totalCortesMes;

            document.getElementById('resCustoCorte').textContent = `R$ ${custoTotalPorCorte.toFixed(2).replace('.', ',')}`;
            document.getElementById('resLucroCorte').textContent = `R$ ${lucroPorCorte.toFixed(2).replace('.', ',')}`;
            document.getElementById('resLucroMensal').textContent = `R$ ${lucroMensal.toFixed(2).replace('.', ',')}`;
        };

        // Calcular inicialmente
        calcularCustos();

        document.getElementById('btnExportCalc').addEventListener('click', () => {
            const relatorio = `📊 RELATÓRIO FINANCEIRO - MEMBROS BARBER\nCusto por Corte: ${document.getElementById('resCustoCorte').textContent}\nLucro Líquido por Corte: ${document.getElementById('resLucroCorte').textContent}\nEstimativa de Lucro Mensal: ${document.getElementById('resLucroMensal').textContent}\n--\nFocado no Progresso 🚀`;
            navigator.clipboard.writeText(relatorio).then(() => alert('Relatório copiado para a área de transferência! Cole no WhatsApp ou Bloco de Notas.'));
        });
    };

    setTimeout(() => {
        if(window.registerTab) window.registerTab('calculadora', 'Calculadora de Custos', '🧮', renderCalculadoraTab);
    }, 100);
});

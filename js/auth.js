document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const rememberMeInput = document.getElementById('rememberMe');
    const errorMessage = document.getElementById('errorMessage');

    // Verificar se já existe sessão salva
    const session = localStorage.getItem('membrosBarber_session');
    if (session) {
        window.location.href = 'dashboard.html';
        return;
    }

    // Preencher email se "Lembrar-me" foi usado antes
    const savedEmail = localStorage.getItem('membrosBarber_savedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMeInput.checked = true;
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Permite login com qualquer e-mail inserido
        if (email !== '') {
            // Salvar no localStorage se "Lembrar meu e-mail" estiver marcado
            if (rememberMeInput.checked) {
                localStorage.setItem('membrosBarber_savedEmail', email);
            } else {
                localStorage.removeItem('membrosBarber_savedEmail');
            }
            
            // Criar sessão de usuário com o e-mail digitado
            const userSession = {
                email: email,
                name: 'Aluno VIP',
                role: 'aluno',
                loginTime: new Date().getTime()
            };
            
            localStorage.setItem('membrosBarber_session', JSON.stringify(userSession));
            
            // Redirecionar para dashboard
            window.location.href = 'dashboard.html';
        }
    });
});

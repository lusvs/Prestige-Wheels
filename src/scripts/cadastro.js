document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const termsAccepted = document.getElementById('terms').checked;

        // 1. Validação de Senhas
        if (password !== confirmPassword) {
            alert('Erro: A senha e a confirmação de senha não coincidem.');
            return;
        }

        // 2. Validação dos Termos de Uso
        if (!termsAccepted) {
            alert('Erro: Você deve aceitar os Termos de Uso.');
            return;
        }

        // Se todas as validações de Front-end passarem:
        
        // 3. Simulação de Sucesso e Redirecionamento
        
        // Em um cenário sem API, apenas indicamos o sucesso e redirecionamos.
        // Em um cenário real, os dados seriam enviados aqui.
        
        alert('Cadastro realizado com sucesso! Redirecionando para a página inicial...');
        
        // Redireciona para o index.html (raiz)
        window.location.href = '../../../index.html'; 
    });
});
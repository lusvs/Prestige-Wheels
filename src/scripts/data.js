document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('vehicle-search-form');
    const pickupDateInput = document.getElementById('pickupDate');
    const returnDateInput = document.getElementById('returnDate');
    const searchButton = form.querySelector('button');

    // 1. Defina a data mínima como HOJE para os inputs
    const today = new Date().toISOString().split('T')[0];
    pickupDateInput.setAttribute('min', today);
    returnDateInput.setAttribute('min', today);

    // 2. Adiciona o listener para o envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão para processamento via JS

        const pickupDate = new Date(pickupDateInput.value);
        const returnDate = new Date(returnDateInput.value);
        const location = document.getElementById('pickupLocation').value;

        // Validação da Data
        if (returnDate < pickupDate) {
            alert('A Data de Devolução não pode ser anterior à Data de Retirada. Por favor, corrija.');
            returnDateInput.focus();
            return; // Interrompe a função
        }
        
        // Se a validação passar, você pode:
        
        // A. SIMULAR O ENVIO (exemplo: redirecionar para uma página de resultados)
        // window.location.href = `/search-results.html?pickup_date=${pickupDateInput.value}&return_date=${returnDateInput.value}&location=${location}`;

        // B. EXIBIR OS DADOS NO CONSOLE (útil para debug)
        console.log('--- Busca Enviada ---');
        console.log(`Retirada: ${pickupDateInput.value}`);
        console.log(`Devolução: ${returnDateInput.value}`);
        console.log(`Local: ${location}`);
        alert('Busca enviada com sucesso! (Verifique o console para os dados)');
    });

    // 3. Opcional: Atualiza o mínimo da data de devolução ao escolher a retirada
    pickupDateInput.addEventListener('change', () => {
        returnDateInput.setAttribute('min', pickupDateInput.value);
        if (returnDateInput.value && returnDateInput.value < pickupDateInput.value) {
            returnDateInput.value = pickupDateInput.value;
        }
    });

});
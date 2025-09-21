document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada!');

    // Botões da seção Hero
    const buscarAjudaBtn = document.querySelector('.btn.primary');
    const saibaMaisBtn = document.querySelector('.btn.secondary');

    buscarAjudaBtn.addEventListener('click', () => {
        alert('Você clicou em Buscar Ajuda Agora! Contate o CVV (188) ou SAMU (192).');
    });

    saibaMaisBtn.addEventListener('click', () => {
        alert('Saiba Mais: Informações sobre prevenção ao suicídio serão exibidas aqui.');
    });

    // Botões dos contatos de emergência
    const emergencyButtons = document.querySelectorAll('.card-btn');
    emergencyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contact = button.textContent;
            alert(`Ligando para ${contact}... (Simulação)`);
        });
    });

    // Botão da seção de parceria
    const participeBtn = document.querySelector('.partnership .btn.primary');
    participeBtn.addEventListener('click', () => {
        alert('Participe das Ações: Fique atento às atividades da campanha!');
    });
});
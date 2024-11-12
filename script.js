// Seleciona o formulário de contato
const contactForm = document.getElementById('contactForm');

// Adiciona um evento para o envio do formulário
contactForm.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    
    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, se necessário
    // Por enquanto, apenas exibe uma mensagem de confirmação
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.\nEmail: ${email}\nMensagem: ${message}`);

    // Limpa os campos do formulário após o envio
    contactForm.reset();
});
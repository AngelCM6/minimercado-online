document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formCadastro');

    form.addEventListener('submit', function (e) {
        const nome = document.getElementById('nome').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const email = document.getElementById('email').value.trim();
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;

        // Verifica CPF
        if (cpf.length !== 11 || isNaN(cpf)) {
            alert('CPF deve conter exatamente 11 números.');
            e.preventDefault();
            return;
        }

        // Verifica e-mail simples
        if (!email.includes('@') || !email.includes('.')) {
            alert('Digite um e-mail válido.');
            e.preventDefault();
            return;
        }

        // Verifica data e hora
        if (!data || !hora) {
            alert('Por favor, selecione uma data e horário para a entrega ou retirada.');
            e.preventDefault();
            return;
        }

        // Verifica nome
        if (nome.length < 3) {
            alert('Digite um nome válido com pelo menos 3 caracteres.');
            e.preventDefault();
            return;
        }

        // Tudo ok!
        alert('Formulário enviado com sucesso!');
    });
});
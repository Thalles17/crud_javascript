const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const btnLogin = document.querySelector('#btn-login');
const form = document.querySelector('#form-login');
const toastEl = document.getElementById('liveToast');
const toastBody = toastEl.querySelector('.toast-body');

btnLogin.addEventListener('click', () => {
    const emailValid = isValidInputEmail();
    const passwordValid = isValidInputPassword();

    if (emailValid && passwordValid) {
        showToast('Login realizado com sucesso!', 'success');
    } 
});

function isValidInputEmail() {
    const emailValue = inputEmail.value;
    if (emailValue === '') {
        showToast('Preencha com um email válido, por favor!', 'danger');
        return false;
    }

    if (emailValue.length <= 5) {
        showToast('O email precisa de pelo menos 6 caracteres', 'danger');
        return false;
    }

    const regex = /(?=.*[!@#$%^&*(),.?":{}|<>])/;

    if (regex.test(emailValue)) {
        return true; // Email é válido
    } else {
        showToast('Email inválido: deve ter pelo menos um caractere especial', 'danger');
        return false; // Email é inválido
    }
}

function isValidInputPassword() {
    const passwordValue = inputPassword.value;
    if (passwordValue.length < 6) {
        showToast('A senha deve ter pelo menos 6 caracteres', 'danger');
        return false;
    }
    return true; // Senha é válida
}

// Função para exibir o toast
function showToast(message, type) {
    toastBody.textContent = message;

    toastEl.classList.remove('bg-success', 'bg-danger');
    toastEl.classList.add(type === 'success' ? 'bg-success' : 'bg-danger');

    let toast = new bootstrap.Toast(toastEl);
    toast.show();
}


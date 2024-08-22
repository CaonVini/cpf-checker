function checkCPF() {
    const cpf = document.getElementById('cpf').value;
    const resultElement = document.getElementById('result'); 
    if (cpf.length !== 11 || !/^\d{11}$/.test(cpf)) {
        if (resultElement) {
            resultElement.innerHTML = 'CPF inválido';
        }
        return false;
    }

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
        if (resultElement) {
            resultElement.innerHTML = 'CPF inválido';
        }
        return false;
    }

    sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
        if (resultElement) {
            resultElement.innerHTML = 'CPF inválido';
        }
        return false;
    }

    if (resultElement) {
        resultElement.innerHTML = 'CPF válido';
    }

    return true;
}

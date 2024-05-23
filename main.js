const form = document.getElementById('form-valores');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const mensagemSucesso = 'O formulario é valido'
    const mensagemErro = 'O formulario é invalido'

    function validarCampos(){
        const campoA = document.getElementById("primeiro-valor");
        const campoB = document.getElementById("segundo-valor");
        const cA = Number(campoA.value);
        const cB = Number(campoB.value);
        if (cA > cB) {
            const containerMensagemErro = document.querySelector('.error-message')
            containerMensagemErro.innerHTML = mensagemErro
            containerMensagemErro.style.display = 'block'
        } else {
            const containerMensagemSucesso = document.querySelector('.sucess-message')
            containerMensagemSucesso.innerHTML = mensagemSucesso
            containerMensagemSucesso.style.display = 'block'
        }
    }

    validarCampos();    
})
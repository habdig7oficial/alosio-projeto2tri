document.addEventListener("DOMContentLoaded",function() {

    let nome  = document.querySelector("#nome")
    let email = document.querySelector("#email")

    let senha = document.querySelector("#senha")
    let senha_confirmar = document.querySelector("#senha_confirmar")

    function verificar() {
        if (senha.value != senha_confirmar.value) {

            senha_confirmar.setCustomValidity("A senha não confere")
            console.log(`A senha não confere\n\n nome:${nome.value}\n email:${email.value}\n\n  senha1:${senha.value}\n senha2:${senha_confirmar.value} `)
            return
        }

        else{
            senha_confirmar.setCustomValidity("")

            console.log(`A senha confere\n\n nome:${nome.value}\n email:${email.value}\n\n  senha1:${senha.value}\n senha2:${senha_confirmar.value} `)
        }

        
        //senha.onchange = verificar
    
        //senha_confirmar.onkeyup = verificar
    }

    //verificar()





})



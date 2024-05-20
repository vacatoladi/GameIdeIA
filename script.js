let menu = document.getElementById("menu")
let iconex = document.getElementById("icone-x")
let iconebarras = document.getElementById("icone-barras")

function abrirFecharMenu(){
    
    if(menu.classList.contains("menu-fechado")){
        menu.classList.remove("menu-fechado")
        menu.style.display = "flex"

        iconex.style.display = "inline"
        iconebarras.style.display = "none"
    } else {
        menu.classList.add("menu-fechado")
        menu.style.display = "none"

        iconex.style.display = "none"
        iconebarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    menu.style.display = "flex"

    iconex.style.display = "inline"
    iconebarras.style.display = "none"
}

const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("nome").value
    let valorEmail = document.getElementById("email").value
    let valorDescricao = document.getElementById("descricao").value

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)
        document.querySelector("#formulario form").reset()
        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        console.error(erro)
        alert("Erro na requisição")
    })

    event.preventDefault()
}
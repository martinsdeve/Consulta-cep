let formCep = document.querySelector(".formCep");

formCep.addEventListener("click", (event) => {
    let cepValor = document.querySelector(".inputCep").value;
    let cepLimpo = cepValor.replace(/\D/g, "");
    event.preventDefault();

    async function Cep() {

        try {

            let cepForm = cepLimpo;

            let cepRequisicao = await fetch(`https://viacep.com.br/ws/${cepForm}/json/`);
            let requisicao = await cepRequisicao.json();
            let dados = document.querySelector(".resultado")

            dados.innerHTML =
                ` 
                <p><strong>CEP</strong>: ${requisicao.cep}</p>
                <p><strong>Estado</strong>: ${requisicao.uf}</p>
                <p><strong>DDD</strong>: ${requisicao.ddd}</p>
                <p><strong>Cidade</strong>: ${requisicao.localidade}</p>
                <p><strong>Bairro</strong>: ${requisicao.bairro}</p>
                <p><strong>Rua</strong>: ${requisicao.logradouro}</p>
                `
        }
        catch (error) {
            console.error("ERRO", error);

        }
    }
    Cep()
})



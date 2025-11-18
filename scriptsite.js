    // Formulário de pagamento
const carrinhoButton = document.getElementById("carrinho-button");
if (carrinhoButton) {
    carrinhoButton.addEventListener("click", () => {
        window.location.href = "Index2.html";
    });
}

const form = document.getElementById("form-pagamento");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const cor = document.getElementById("cor").value;
        const pagamento = document.getElementById("pagamento").value;
        salvarCompra(cor, pagamento);
        alert("Compra realizada com sucesso!");
        listarCompras();
    });
}

// Botão de voltar
const btnVoltar = document.getElementById("btn-voltar");
if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}
// 

const myCarouselElement = document.querySelector('#carouselExampleCaptions')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
})

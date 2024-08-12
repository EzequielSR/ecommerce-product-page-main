document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cartIcon");
    const cartCard = document.getElementById("cartCard");

    // Exibir e ocultar o carrinho quando o ícone for clicado
    cartIcon.addEventListener("click", function () {
        if (cartCard.style.display === "none" || cartCard.style.display === "") {
            cartCard.style.display = "block";
        } else {
            cartCard.style.display = "none";
        }
    });

    // Ocultar o carrinho se clicar fora dele
    document.addEventListener("click", function (event) {
        if (!cartIcon.contains(event.target) && !cartCard.contains(event.target)) {
            cartCard.style.display = "none";
        }
    });

    // Funções de incrementar e decrementar quantidade
    window.increment = function() {
        var quantity = document.getElementById("quantity");
        quantity.value = parseInt(quantity.value) + 1;
    };

    window.decrement = function() {
        var quantity = document.getElementById("quantity");
        if (parseInt(quantity.value) > 0) {
            quantity.value = parseInt(quantity.value) - 1;
        }
    };

    // Função para adicionar ao carrinho e substituir o texto por uma imagem
    window.addToCard = function() {
        var quantity = parseInt(document.getElementById("quantity").value);
        var cartText = document.getElementById("cartText");

        if (quantity > 0) {
            cartText.innerHTML = `<img src="images/image-product-1.jpg" alt="Product Image" class="img-fluid">`;
        } else {
            cartText.innerHTML = "Your cart is empty.";
        }
    };
});


function toggleSidebar() {
    const navSideBar = document.querySelector('.nav-side-bar');
    const overlay = document.querySelector('.overlay');

    if (window.innerWidth < 768) {
        navSideBar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

document.querySelector('.menu-button').addEventListener('click', toggleSidebar);

document.querySelector('.img-close-nav').addEventListener('click', function () {
    document.querySelector('.nav-side-bar').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
});

document.querySelector('.overlay').addEventListener('click', function () {
    document.querySelector('.nav-side-bar').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
});
function changeImage(index, element) {
    var carousel = document.querySelector('#productCarousel .carousel-inner');
    var items = carousel.querySelectorAll('.carousel-item');
    items.forEach(function (item, i) {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });

    var thumbnails = document.querySelectorAll('.thumbnail img');
    thumbnails.forEach(function (thumbnail) {
        thumbnail.classList.remove('selected');
    });
    element.classList.add('selected');
}



//selecione o número do input
//selecionar o botão add to Cart
//selecionar o cart-card
//quando defenir o numero do input e apertar o botão add to Cart, substituir o texto "Your cart is empty" por uma imagem pequena e a descrição do produto do lado, abaixo do produto ter um botão laranja escrito "chekout". 
//  No cart-card, acima dele aparecer o número do input em uma bolinha laranja.




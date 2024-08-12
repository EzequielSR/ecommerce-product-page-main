document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cartIcon");
    const cartCard = document.getElementById("cartCard");
    const btnBuy = document.querySelector(".btn-buy");
    const cartItem = document.querySelector(".cart-item");
    const cartPrice = document.querySelector(".cart-price")
    const btnCheckout = document.querySelector(".btn-checkout")
    const cartText = document.getElementById("cartText")
    const quantityInput = document.getElementById("quantity");


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
    window.increment = function () {
        var quantity = document.getElementById("quantity");
        quantity.value = parseInt(quantity.value) + 1;
    };

    window.decrement = function () {
        var quantity = document.getElementById("quantity");
        if (parseInt(quantity.value) > 0) {
            quantity.value = parseInt(quantity.value) - 1;
        }
    };

    window.addToCard = function () {
        const quantity = parseInt(quantityInput.value)
        if (quantity > 0) {
            const pricePerItem = 125.00;
            const totalPrice = pricePerItem * quantity;

            cartText.style.display = "none"

            cartItem.style.display = "block"
            btnCheckout.style.display = "block"

            cartPrice.textContent = `$${totalPrice.toFixed(2)}`
        }
    }

    btnBuy.addEventListener("click", addToCard)
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






document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cartIcon");
    const cartCard = document.getElementById("cartCard");

    cartIcon.addEventListener("click", function () {
        if (cartCard.style.display === "none" || cartCard.style.display === "") {
            cartCard.style.display = "block";
        } else {
            cartCard.style.display = "none";
        }
    });


    document.addEventListener("click", function (event) {
        if (!cartIcon.contains(event.target) && !cartCard.contains(event.target)) {
            cartCard.style.display = "none";
        }
    });
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
function increment() {
    var quantity = document.getElementById("quantity");
    quantity.value = parseInt(quantity.value) + 1;
}

function decrement() {
    var quantity = document.getElementById("quantity");
    if (parseInt(quantity.value) > 0) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
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

function decrement() {
    var quantity = document.getElementById('quantity');
    if (quantity.value > 0) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}

function increment() {
    var quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}
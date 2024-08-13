document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cartIcon");
    const cartCard = document.getElementById("cartCard");
    const cartText = document.querySelector(".cart-text")
    const quantityInput = document.getElementById("quantity");
    const btnBuy = document.querySelector(".btn-buy");
    const cartItem = document.querySelector(".cart-item");
    const cartPrice = document.querySelector(".cart-price")
    const cartNumbers = document.querySelector(".cart-numbers")
    const btnCheckout = document.querySelector(".btn-checkout")
    const circleResult = document.querySelector(".circle-result")
    const deleteIcon = document.querySelector(".img-delete")
    const productImage = document.querySelector(".carousel-item.active ");
    const modal = document.getElementById("customProductModal");
    const closeModal = document.querySelector(".custom-close-modal");


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
    productImage.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

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

            cartNumbers.textContent = quantity
            cartPrice.textContent = `$${totalPrice.toFixed(2)}`

            circleResult.textContent = quantity
            circleResult.style.display = "block"
            circleResult.style.textAlign = "center"
            circleResult.style.fontSize = "10px"
            circleResult.style.fontWeight = "bold"
        }
    }

    btnBuy.addEventListener("click", addToCard)

    deleteIcon.addEventListener("click", function () {
        cartItem.style.display = "none"
        btnCheckout.style.display = "none"
        cartText.style.display = "flex"
        circleResult.style.display = "none"
    })
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

    var thumbnailContainers = document.querySelectorAll('.thumbnail');
    thumbnailContainers.forEach(function (container) {
        container.classList.remove('selectedThumbnail');
    });
    element.parentElement.classList.add('selectedThumbnail');
}

function changeImageOverlay(index, element) {
   
    var carousel = document.querySelector('#customModalCarousel-overlay .carousel-inner-ov');
    var items = carousel.querySelectorAll('.carousel-item-overlay');
    
    items.forEach(function (item, i) {
      item.classList.remove('active');
      if (i === index) {
        item.classList.add('active');
      }
    });
  
    var thumbnails = document.querySelectorAll('.custom-thumbnail img');
    thumbnails.forEach(function (thumbnail) {
      thumbnail.classList.remove('selectedIMG');
    });
    element.classList.add('selectedIMG');
  
    var thumbnailContainers = document.querySelectorAll('.custom-thumbnail');
    thumbnailContainers.forEach(function (container) {
      container.classList.remove('selectedThumbnailOV');
    });
    element.parentElement.classList.add('selectedThumbnailOV');
  }
  
  function updateOverlayCarousel(index) {
    var carousel = document.querySelector('#customModalCarousel-overlay .carousel-inner-ov');
    var items = carousel.querySelectorAll('.carousel-item-overlay');
    
    items.forEach(function (item, i) {
      item.classList.remove('active');
      if (i === index) {
        item.classList.add('active');
      }
    });
  
    var thumbnails = document.querySelectorAll('.custom-thumbnail img');
    thumbnails.forEach(function (thumbnail) {
      thumbnail.classList.remove('selectedIMG');
    });
    thumbnails[index].classList.add('selectedIMG');
  
    var thumbnailContainers = document.querySelectorAll('.custom-thumbnail');
    thumbnailContainers.forEach(function (container) {
      container.classList.remove('selectedThumbnailOV');
    });
    thumbnailContainers[index].classList.add('selectedThumbnailOV');
  }
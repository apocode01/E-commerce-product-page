const mainImages = document.querySelectorAll(`.main-image`);
const previewImgButtons = document.querySelectorAll(`.previewImgBtn`);
const previewImages = document.querySelectorAll(`.preview-image`);

previewImgButtons.forEach((previewImageBtn, index) => {
    previewImageBtn.addEventListener(`click`, event => {

        previewImgButtons.forEach(btn => {
            btn.classList.remove(`selected`);
        });

        previewImageBtn.classList.add(`selected`);

        mainImages.forEach(img => {
            img.classList.add(`hidden`);
        })

        mainImages[index].classList.remove(`hidden`);
    })
})

const decreaseBtn = document.querySelector(`.decreaseBtn`);
const increaseBtn = document.querySelector(`.increaseBtn`);
const selectedProductAmountSpan = document.querySelector(`.selected-product-amount`);
const addToCartBtn = document.querySelector(`.add-to-cart-btn`);
let selectedProductAmount = 0;
let productAmount = 0;

decreaseBtn.addEventListener(`click`, () => {
    if (selectedProductAmount >= 1) {
        selectedProductAmount--;
    }
    selectedProductAmountSpan.textContent = selectedProductAmount;
});

increaseBtn.addEventListener(`click`, () => {
    selectedProductAmount++;
    selectedProductAmountSpan.textContent = selectedProductAmount;
});

addToCartBtn.addEventListener(`click`, () => {
    productAmount += selectedProductAmount;
    console.log(productAmount);
})

const cartBtn = document.querySelector(`.cartBtn`);
const cartMenu = document.querySelector(`.products-in-cart`);

cartBtn.addEventListener(`click`, () => {
    cartMenu.classList.toggle(`shown`);
})

const deleteItemBtn = document.querySelector(`.deleteItemBtn`);

deleteItemBtn.addEventListener(`click`, () => {
    console.log("delete");
})
// Image gallery functionality

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

// Product amount selection and cart menu functionality

const cartItemsNotification = document.querySelector(`.cart-items-notification`);
const decreaseBtn = document.querySelector(`.decreaseBtn`);
const increaseBtn = document.querySelector(`.increaseBtn`);
const selectedProductAmountSpan = document.querySelector(`.selected-product-amount`);
const addToCartBtn = document.querySelector(`.add-to-cart-btn`);
const productCartWrapper = document.querySelector(`.product-cart-wrapper`);
const cartEmptyMessage = document.querySelector(`.cart-empty-message`);
const productPricingCartInfo = document.querySelector(`.product-pricing-cart-info`);
const cartBtn = document.querySelector(`.cartBtn`);
const cartMenu = document.querySelector(`.cart-menu`);
const deleteItemBtn = document.querySelector(`.deleteItemBtn`);
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
    if (productAmount >= 1) {
        productCartWrapper.classList.remove(`hidden`);
        cartItemsNotification.classList.remove(`hidden`);
        cartEmptyMessage.classList.add(`hidden`);
        let totalProductPricing = (productAmount * 125).toFixed(2);
        cartItemsNotification.textContent = productAmount;
        productPricingCartInfo.innerHTML = `$125.00 x ${productAmount} <span style="font-weight: 700; color: var(--veryDarkBlue);">$${totalProductPricing}`;
    }
})

cartBtn.addEventListener(`click`, () => {
    cartMenu.classList.toggle(`shown`);
})

deleteItemBtn.addEventListener(`click`, () => {
    productAmount = 0;
    productCartWrapper.classList.add(`hidden`);
    cartItemsNotification.classList.add(`hidden`);
    cartEmptyMessage.classList.remove(`hidden`);
})
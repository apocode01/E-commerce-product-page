// Image gallery functionality

const mainImages = document.querySelectorAll(`.main-image`);
const previewImgButtons = document.querySelectorAll(`.previewImgBtn`);
const previewImages = document.querySelectorAll(`.preview-image`);
let curImgIndex = 0;

previewImgButtons.forEach((previewImageBtn, index) => {
    previewImageBtn.addEventListener(`click`, event => {

        previewImgButtons[curImgIndex].classList.remove(`selected`);

        previewImageBtn.classList.add(`selected`);

        mainImages[curImgIndex].classList.add(`hidden`);

        mainImages[index].classList.remove(`hidden`);
        curImgIndex = index;
    })
})

// Image gallery functionality for lightbox

const lightboxOverlay = document.querySelector(`.lightbox-overlay`);
const mainImagesLightbox = document.querySelectorAll(`.main-image-lightbox`);
const previewImgButtonsLightbox = document.querySelectorAll(`.previewImgBtn-lightbox`);
const previewImagesLightbox = document.querySelectorAll(`.preview-image-lightbox`);
const closeLightboxBtn = document.querySelector(`.closeLightboxBtn`);
const previousBtnLightbox = document.querySelector(`.previousBtnLightbox`);
const nextBtnLightbox = document.querySelector(`.nextBtnLightbox`);
let curImgIndexLightbox = 0;

mainImages.forEach((img, index) => {
    img.addEventListener(`click`, () => {
        lightboxOverlay.classList.remove(`hidden`);

        mainImagesLightbox[curImgIndexLightbox].classList.add(`hidden`);

        previewImgButtonsLightbox[curImgIndexLightbox].classList.remove(`selected`);

        mainImagesLightbox[index].classList.remove(`hidden`);
        curImgIndexLightbox = index;

        previewImgButtonsLightbox[index].classList.add(`selected`);
    })
})

previewImgButtonsLightbox.forEach((previewImageBtnLightbox, index) => {
    previewImageBtnLightbox.addEventListener(`click`, event => {

        previewImgButtonsLightbox[curImgIndexLightbox].classList.remove(`selected`);

        previewImageBtnLightbox.classList.add(`selected`);

        mainImagesLightbox[curImgIndexLightbox].classList.add(`hidden`);

        mainImagesLightbox[index].classList.remove(`hidden`);
        curImgIndexLightbox = index;
    })
})

closeLightboxBtn.addEventListener(`click`, () => {
    lightboxOverlay.classList.add(`hidden`);
})

previousBtnLightbox.addEventListener(`click`, () => {
    if (curImgIndexLightbox !== 0) {
        mainImagesLightbox[curImgIndexLightbox].classList.add(`hidden`);
        previewImgButtonsLightbox[curImgIndexLightbox].classList.remove(`selected`);
        curImgIndexLightbox--;
        mainImagesLightbox[curImgIndexLightbox].classList.remove(`hidden`);
        previewImgButtonsLightbox[curImgIndexLightbox].classList.add(`selected`);
    }
})

nextBtnLightbox.addEventListener(`click`, () => {
    if (curImgIndexLightbox !== 3) {
        mainImagesLightbox[curImgIndexLightbox].classList.add(`hidden`);
        previewImgButtonsLightbox[curImgIndexLightbox].classList.remove(`selected`);
        curImgIndexLightbox++;
        mainImagesLightbox[curImgIndexLightbox].classList.remove(`hidden`);
        previewImgButtonsLightbox[curImgIndexLightbox].classList.add(`selected`);
    }
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
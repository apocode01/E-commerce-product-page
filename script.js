// Image gallery functionality for tablet-desktop

const mainImages = document.querySelectorAll(`.main-image`);
const previewImgButtons = document.querySelectorAll(`.previewImgBtn`);
let curImgIndex = 0;

previewImgButtons.forEach((previewImageBtn, index) => {
    previewImageBtn.addEventListener(`click`, () => {

        previewImgButtons[curImgIndex].classList.remove(`selected`);

        previewImageBtn.classList.add(`selected`);

        mainImages[curImgIndex].classList.add(`hidden`);

        mainImages[index].classList.remove(`hidden`);
        curImgIndex = index;
    })
})

// Image gallery functionality for mobile

const previousBtn = document.querySelector(`.previousBtn`);
const nextBtn = document.querySelector(`.nextBtn`);

previousBtn.addEventListener(`click`, () => {
    if (curImgIndex !== 0) {
        mainImages[curImgIndex].classList.add(`hidden`);
        previewImgButtons[curImgIndex].classList.remove(`selected`);
        curImgIndex--;
        mainImages[curImgIndex].classList.remove(`hidden`);
        previewImgButtons[curImgIndex].classList.add(`selected`);
    }
})

nextBtn.addEventListener(`click`, () => {
    if (curImgIndex !== 3) {
        mainImages[curImgIndex].classList.add(`hidden`);
        previewImgButtons[curImgIndex].classList.remove(`selected`);
        curImgIndex++;
        mainImages[curImgIndex].classList.remove(`hidden`);
        previewImgButtons[curImgIndex].classList.add(`selected`);
    }
})

// Image gallery functionality for lightbox

const lightboxOverlay = document.querySelector(`.lightbox-overlay`);
const mainImagesLightbox = document.querySelectorAll(`.main-image-lightbox`);
const previewImgButtonsLightbox = document.querySelectorAll(`.previewImgBtn-lightbox`);
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
    previewImageBtnLightbox.addEventListener(`click`, () => {

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
const productCartWrapper = document.querySelectorAll(`.product-cart-wrapper`);
const cartEmptyMessage = document.querySelectorAll(`.cart-empty-message`);
const productPricingCartInfo = document.querySelectorAll(`.product-pricing-cart-info`);
const cartBtn = document.querySelector(`.cartBtn`);
const cartMenu = document.querySelector(`.cart-menu`);
const cartMenuMobile = document.querySelector(`.cart-menu-mobile`);
const deleteItemBtn = document.querySelectorAll(`.deleteItemBtn`);
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
        productCartWrapper.forEach(pcw => pcw.classList.remove(`hidden`));
        cartItemsNotification.classList.remove(`hidden`);
        cartEmptyMessage.forEach(cem => cem.classList.add(`hidden`));
        const totalProductPricing = (productAmount * 125).toFixed(2);
        cartItemsNotification.textContent = productAmount;
        productPricingCartInfo.forEach(ppci => {
            ppci.innerHTML = `$125.00 x ${productAmount} <span style="font-weight: 700; color: var(--veryDarkBlue);">$${totalProductPricing}`;
        });
    }
})

cartBtn.addEventListener(`click`, () => {
    cartMenu.classList.toggle(`shown`);
    cartMenuMobile.classList.toggle(`shown`);
})

deleteItemBtn.forEach(dib => {
    dib.addEventListener(`click`, () => {
        productAmount = 0;
        productCartWrapper.forEach(pcw => pcw.classList.add(`hidden`));
        cartItemsNotification.classList.add(`hidden`);
        cartEmptyMessage.forEach(cem => cem.classList.remove(`hidden`));
    })
})

// Mobile menu functionality

const mobileMenuBtn = document.querySelector(`.mobileMenuBtn`);
const mobileMenuOverlay = document.querySelector(`.mobile-menu-overlay`);
const navCatergories = document.querySelector(`.nav-categories`);
const closeMobileMenuBtn = document.querySelector(`.closeMobileMenuBtn`);

mobileMenuBtn.addEventListener('click', () => {
    if (navCatergories.classList.contains(`closed`)) {
        navCatergories.classList.replace(`closed`, `open`);
    }
    else navCatergories.classList.add(`open`);
    mobileMenuOverlay.classList.remove(`hidden`);
    cartMenu.classList.remove(`shown`);
    cartMenuMobile.classList.remove(`shown`);
})

const mq = window.matchMedia("(max-width: calc(50rem - 1px))");
mq.addEventListener("change", (e) => {
    if (!e.matches) {
        navCatergories.classList.remove("closed", "open");
        mobileMenuOverlay.classList.add("hidden");
    }
    else {
        lightboxOverlay.classList.add(`hidden`);
    }
});

closeMobileMenuBtn.addEventListener(`click`, () => {
    navCatergories.classList.replace(`open`, `closed`);
    mobileMenuOverlay.classList.add(`hidden`);
})
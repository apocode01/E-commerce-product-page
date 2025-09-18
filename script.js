const mainImgBtn = document.querySelector(`.mainImgBtn`);

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
const images = document.querySelectorAll(".img");
const answers = document.querySelectorAll(".answer");

images.forEach(function (image, index) {
    image.addEventListener("click", function () {
        this.classList.toggle("active");

        if (this.classList.contains("active")) {
            this.src = "./assets/images/icon-minus.svg";
            answers[index].classList.add('show');
        } else {
            this.src = "./assets/images/icon-plus.svg";
            answers[index].classList.remove('show');
        }
    });
});



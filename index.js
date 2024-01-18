const image = document.getElementById("img1");
const srcValue = image.src;


image.addEventListener("click", function () {

    image.setAttribute("src", "./assets/images/icon-minus.svg");
    document.getElementById("answer1").style.display = "block";
    console.log("turn-minus");

    if (srcValue.includes("icon-minus")) {
        image.setAttribute("src", "./assets/images/icon-plus.svg");
        console.log("turn-plus");
    }
});

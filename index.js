const questions = document.querySelectorAll(".quess");

questions.forEach(function (question) {
    const img = question.querySelector(".img");
    const answer = question.nextElementSibling;

    question.addEventListener("click", function () {
        question.classList.toggle("active");

        if (question.classList.contains("active")) {
            img.src = "./assets/images/icon-minus.svg";
            answer.classList.add('show');
        } else {
            img.src = "./assets/images/icon-plus.svg";
            answer.classList.remove('show');
        }
    });
});
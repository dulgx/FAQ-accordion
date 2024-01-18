const questions = document.querySelectorAll(".quess");

questions.forEach(function (question) {
    const img = question.querySelector(".img");
    const answer = question.nextElementSibling; // Assuming the answer follows the question in the HTML structure

    question.addEventListener("click", function () {
        // Toggle the active class on the question
        question.classList.toggle("active");

        // Toggle the show class on the corresponding answer
        if (question.classList.contains("active")) {
            img.src = "./assets/images/icon-minus.svg";
            answer.classList.add('show');
        } else {
            img.src = "./assets/images/icon-plus.svg";
            answer.classList.remove('show');
        }
    });
});




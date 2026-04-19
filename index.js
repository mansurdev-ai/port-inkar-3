const questions = document.querySelectorAll(".question");

questions.forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        const plus = q.querySelector("span");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            plus.textContent = "+";
        } else {
            answer.style.display = "block";
            plus.textContent = "-";
        }
    });
});
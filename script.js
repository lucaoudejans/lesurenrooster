const buttons = document.querySelectorAll("button.groen");

buttons.forEach(button => {
    button.addEventListener("click", btnColor);
})

function btnColor(event) {
    console.log(event.target);
    event.target.classList.toggle("active");
}


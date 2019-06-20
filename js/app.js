// Progress Bar
function fillBar() {
    let bar = document.getElementById("progress-now");
    let value = document.getElementById("progress-value");
    let button = document.querySelector(".update-button");
    let width = 15;
    button.disabled = true;
    button.classList.add("disabled");
    let id = setInterval((frame) => {
        if (width >= 100) {
            button.disabled = false;
            button.classList.remove("disabled");
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            value.innerHTML = bar.style.width;
        }
    }, 50);
}


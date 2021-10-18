window.addEventListener("load", () => {
    const colorsBar = document.querySelector(".colors");
    const addColorBtn = document.querySelector(".add-btn");
    addColorBtn.addEventListener("click", () => {
        if (colorsBar.classList.contains("hidden")) {
            colorsBar.classList.toggle("hidden")
            colorsBar.classList.toggle("flex")
            addColorBtn.firstChild.classList.toggle("click-btn")
            setTimeout(() => {
                addColorBtn.firstChild.classList.toggle("click-btn")
            }, 700)
        } else {
            addColorBtn.firstChild.classList.toggle("click-btn")
            setTimeout(() => {
                addColorBtn.firstChild.classList.toggle("click-btn")
            }, 700)
            colorsBar.classList.toggle("hidden")
            colorsBar.classList.toggle("flex")
        }
    })
})

const hamIcon = document.querySelector(".hamburger-icon-btn")
const hamContent = document.querySelector(".ham-content")
const hamList = document.querySelector("#ham-list")

function handleHam(e) {
    console.log("clicked")

    if (hamList.className === "ham-list"){
        hamList.className += " mobile-view"
        console.log(hamList.className)
    } else {
        hamList.className = "ham-list"     
    }
}

hamIcon.addEventListener("click", handleHam)
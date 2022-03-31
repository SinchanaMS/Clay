var slider = document.querySelector(".slider")
var sliderValue = document.querySelector(".slider-value")
sliderValue.innerHTML = slider.value

function getSliderValue(e){
    sliderValue.innerHTML = e.target.value
    console.log("called")
}

slider.addEventListener("change", getSliderValue)
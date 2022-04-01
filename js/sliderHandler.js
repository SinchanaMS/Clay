var slider = document.querySelector(".slider")
var sliderValue = document.querySelector(".slider-value")
sliderValue.innerHTML = slider.value

function getSliderValue(e){
    sliderValue.innerHTML = e.target.value
}

slider.addEventListener("change", getSliderValue)
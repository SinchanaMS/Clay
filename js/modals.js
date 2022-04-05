var modalBg = document.querySelector(".modal-bg-content");
var modalCentreBg = document.querySelector(".modal-bg-content-centre");
var modalHandlerBtn = document.querySelector(".modal-handler")
var modalCentreHandlerBtn = document.querySelector (".modal-handler-centre")
var modalCTA = document.querySelector(".modal-cta")
var modalCTA1 = document.querySelector(".modal-cta-one")
var modalCTA2 = document.querySelector(".modal-cta-two")


modalHandlerBtn.addEventListener("click", ()=>modalBg.style.display="block")
modalCTA.addEventListener("click", ()=>modalBg.style.display="none")

modalCentreHandlerBtn.addEventListener("click", ()=>modalCentreBg.style.display="block")
modalCTA1.addEventListener("click", ()=>modalCentreBg.style.display="none")
modalCTA2.addEventListener("click", ()=>modalCentreBg.style.display="none")
var modalBg = document.querySelector(".clay-modal-bg-content");
var modalCentreBg = document.querySelector(".clay-modal-bg-content-centre");
var modalHandlerBtn = document.querySelector(".clay-modal-handler")
var modalCentreHandlerBtn = document.querySelector (".clay-modal-handler-centre")
var modalCTA = document.querySelector(".clay-modal-cta")
var modalCTA1 = document.querySelector(".clay-modal-cta-one")
var modalCTA2 = document.querySelector(".clay-modal-cta-two")


modalHandlerBtn.addEventListener("click", ()=>modalBg.style.display="block")
modalCTA.addEventListener("click", ()=>modalBg.style.display="none")

modalCentreHandlerBtn.addEventListener("click", ()=>modalCentreBg.style.display="block")
modalCTA1.addEventListener("click", ()=>modalCentreBg.style.display="none")
modalCTA2.addEventListener("click", ()=>modalCentreBg.style.display="none")
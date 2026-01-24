const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupCaption = document.getElementById("popup-caption");
const fechar = document.querySelector(".fechar");

document.querySelectorAll(".img-topo-site img").forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popupCaption.textContent = img.dataset.caption || img.alt;
    popup.classList.add("ativo");
    document.body.style.overflow = "hidden";
  });
});

function fecharPopup() {
  popup.classList.remove("ativo");
  document.body.style.overflow = "";
}

fechar.addEventListener("click", fecharPopup);

popup.addEventListener("click", e => {
  if (e.target === popup) {
    fecharPopup();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    fecharPopup();
  }
});

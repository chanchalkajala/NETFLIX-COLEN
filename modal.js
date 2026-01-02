const openBtn = document.getElementById("openModal");
const modalContainer = document.getElementById("modalContainer");

openBtn.addEventListener("click", () => {
  fetch("modal.html")
    .then(res => res.text())
    .then(data => {
      modalContainer.innerHTML = data;
      closeModal();
    });
});

function closeModal() {
  document.querySelector(".close").addEventListener("click", () => {
    modalContainer.innerHTML = "";
  });
}

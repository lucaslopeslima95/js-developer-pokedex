const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

function toggleModal(pokemon) {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");

  if(!modal.classList.contains("hide")){
    fillModal();
  }
  
}

function fillModal(){
  const modalBody = document.querySelector(".modal-body");
}
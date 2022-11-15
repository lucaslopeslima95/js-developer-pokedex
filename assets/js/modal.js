const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

function toggleModal(name="", photo="", weight=0, height=0,ability="") {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");

  if(!modal.classList.contains("hide")){
    fillModal(name, photo, weight, height,ability);
  }
  
}

function fillModal(name, photo, weight,height,ability){
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = `<ol class="abilitiesList">
                        <img src="${photo}"alt="${name}" width='100' height='100' class="floating">
                        <li>${name}</li>
                        <li>Weight: ${weight} LBs</li>
                        <li>Height: ${height} Metters</li>
                        <li>Ability: ${ability}</li>
                        </ol> `
}
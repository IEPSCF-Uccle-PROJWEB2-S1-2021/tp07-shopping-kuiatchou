// Écrivez votre code JavaScript ici.
const list = document.querySelector("ul");
const input = document.querySelector("input");
const addItem = document.querySelector("button");
/*const delet = document.createElement("button");
bouton.addEventListener("click", ajoute());*/

addItem.addEventListener("click", ajoute);

function ajoute(){
  if(input.value!=""){
    const maVariable = input.value;
    input.value = "";
    const sousList = document.createElement("li");
    const span = document.createElement("span");
    const dellete = document.createElement("button");
    sousList.appendChild(span);
    sousList.appendChild(dellete);
    span.textContent = maVariable;
    dellete.textContent = 'delete';
    list.appendChild(sousList);

    dellete.onclick = function () {
      list.removeChild(sousList);
      input.focus();
    }
  }

  input.focus();
}




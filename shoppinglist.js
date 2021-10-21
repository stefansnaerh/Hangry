const itemsDiv = document.querySelector("#items");
document.querySelector("#push").onclick = function
(){
  if(document.querySelector("#newItem input").value.length == 0){
    alert("please write item")
  }
  else{
    itemsDiv.innerHTML += `
    <div class="item">
      <span id="itemName">
        ${document.querySelector ("#newItem input").value}
      </span>
      <button class="remove">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>  `;
    localStorage.setItem("items", itemsDiv.innerHTML)
    makeInteractive();
    document.querySelector("#newItem input").value = "";
  }
}
let makeInteractive = () => {
  let currentItem = document.querySelectorAll(".remove");
    for(let i=0; i<currentItem.length; i++){
      currentItem[i].onclick = function(){
        this.parentNode.remove();
      }
      localStorage.setItem("items", itemsDiv.innerHTML)
    }
    let items = document.querySelectorAll(".item");
    for(let i=0; i<items.length; i++){
      items[i].onclick = function(){
        this.classList.toggle("completed");
      }
      localStorage.setItem("items", itemsDiv.innerHTML)
    }
}

itemsDiv.innerHTML = localStorage.getItem("items")
makeInteractive();


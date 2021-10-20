const itemsDiv = document.querySelector("#items");
console.log(itemsDiv)
document.querySelector("#push").onclick = function
(){
  if(document.querySelector("#newItem input").value.length == 0){
    alert("please write item")
  }
  else{
    console.log(itemsDiv)
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

    let currentItem = document.querySelectorAll(".remove");
    for(let i=0; i<currentItem.length; i++){
      currentItem[i].onclick = function(){
        this.parentNode.remove();
      }
      localStorage.removeItem("items", itemsDiv.innerHTML)
    }

    let items = document.querySelectorAll(".item");
    for(let i=0; i<items.length; i++){
      items[i].onclick = function(){
        this.classList.toggle("completed");
      }
      localStorage.setItem("items", itemsDiv.innerHTML)
    }

    document.querySelector("#newItem input").value = "";
  }
}

items.innerHTML = localStorage.getItem("items")

document.querySelector("#push").onclick = function
(){
  if(document.querySelector("#newItem input").value.length == 0){
    alert("please write item")
  }
  else{
    document.querySelector("#items").innerHTML += `
    <div class="item">
      <span id="itemName">
        ${document.querySelector ("#newItem input").value}
      </span>
      <button class="remove">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>  `;

    let currentItem = document.querySelectorAll(".remove");
    for(let i=0; i<currentItem.length; i++){
      currentItem[i].onclick = function(){
        this.parentNode.remove();
      }
    }

    let items = document.querySelectorAll(".item");
    for(let i=0; i<items.length; i++){
      items[i].onclick = function(){
        this.classList.toggle("completed");
      }
    }

    document.querySelector("#newItem input").value = "";
  }
}



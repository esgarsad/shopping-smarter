var searchTextEl = document.querySelector(".product-input");
var searchBtnEl = document.querySelector("#submit-form");

var eventSubmit = function(event) {
    event.preventDefault();
    var productChosen = searchTextEl.value.trim();
  displayProducts(productChosen);
console.log(productChosen);
    searchTextEl.value = "";
     
  }


searchBtnEl.addEventListener("submit", eventSubmit);

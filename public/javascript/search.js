var searchTextEl = document.querySelector(".product-input");
var searchBtnEl = document.querySelector("#submit-form");

var eventSubmit = async function(event) {
    event.preventDefault();
    var keyword = searchTextEl.value.trim();
    if (keyword) {
      const response = await fetch(`/posts/search/${keyword}`, {
        method: 'GET'
      });
  
      if (response.ok) {
        document.location.replace(`/posts/search/${keyword}`);
      
      } else {
        alert(response.statusText);
      }
    }

    searchTextEl.value = "";
     
  }


searchBtnEl.addEventListener("submit", eventSubmit);

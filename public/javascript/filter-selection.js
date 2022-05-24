
const apparelButton = document.getElementById("Apparel");
const electronicsButton = document.getElementById("Electronics");
const furnitureButton = document.getElementById("Furniture");

function filter() {

if (
  apparelButton == true && electronicsButton == true && furnitureButton == true)
  {
  fetchData0();
} 

if (
  apparelButton == false && electronicsButton == true && furnitureButton == true)
  {
  fetchData0();
} 

if (
  apparelButton == false && electronicsButton == false && furnitureButton == true)
  {
  fetchData0();
} 

if (
  apparelButton == true && electronicsButton == true && furnitureButton == false)
  {
  fetchData0();
}

if (
  apparelButton == true && electronicsButton == false && furnitureButton == true)
  {
  fetchData0();
}
};
//const filterResults = document.querySelector(".filter");



//filterResults.addEventListener("click" , e => {
//  console.log("Hello World");
//})

function fetchData05() {
     fetch('')
       .then(response => {
         return response.json();
       })
       .then(data => {
         console.log(data.title);
  
//

         document.querySelector('RESULTS').innerHTML = (data[5].title);
         document.querySelector('IMAGE').innerHTML = (data[5].description);
         document.querySelector('DESCRIPTION').innerHTML = (data[5].description);
       }).catch(error => {
         console.log(error);
       })
};
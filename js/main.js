const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");
//The clear icon should be hidden when loading the page
clearIcon.style.visibility = "hidden"; 

searchBar.addEventListener("keyup", () => {
  if(searchBar.value && clearIcon.style.visibility != "visible"){
    clearIcon.style.visibility = "visible";
  } else if(!searchBar.value) {
    clearIcon.style.visibility = "hidden";
  }
});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
})
/* CONTROL CANCEL BUTTON*/
//Declare clear icon to check if it's visible
const clearIcon = document.querySelector(".clear-icon");
//Declare .search to check if it has any value
const searchBar = document.querySelector(".search");
//The clear icon should be hidden when loading the page
clearIcon.style.visibility = "hidden"; 

function OnKeyUp(){
  //if not not null and not visible then make it visible
  if(searchBar.value && clearIcon.style.visibility != "visible"){
    clearIcon.style.visibility = "visible";
    //else if null then hide
  } else if(!searchBar.value) {
    clearIcon.style.visibility = "hidden";
  }
}

function OnClick(){
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
}

searchBar.addEventListener("keyup", OnKeyUp);
clearIcon.addEventListener("click", OnClick);
//--------------------------------------------------------------------------

const categoryLi = document.querySelector(".category li");
const categoryLiImg = document.querySelector(".category li img");

function ScaleImage(){
   categoryLiImg.style.transform = 'scale(1.07)';
   categoryLiImg.style.transitionDuration  = "0.3s";
}

function UnscaleImage(){
  categoryLiImg.style.transform = 'scale(1)';
  categoryLiImg.style.transitionDuration  = "0.3s";
}
//When mouse hovers element
categoryLi.onmouseover = ScaleImage;
//When mouse stops hovering over element
categoryLi.onmouseleave = UnscaleImage;
//---------------------------------------------------------------------------
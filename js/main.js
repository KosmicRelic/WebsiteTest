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
/* CONTROLS THE ZOOM IN - OUT OF THE IMAGES OF THE CATEGORIES WHEN MOUSE IS HOVERING OVER*/
const categoryLi = document.querySelector(".category li");
const categoryLiImg = document.querySelector(".category li img");

const house_garden = document.querySelector(".house_garden");
const house_gardenIMG = document.getElementById("house_garden");

const fashion = document.querySelector(".fashion");
const fashionIMG = document.getElementById("fashion");

const sports = document.querySelector(".sports");
const sportsIMG = document.getElementById("sportsIMG");

const pets = document.querySelector(".pets");
const petsIMG = document.getElementById("petsIMG");


function ScalecategoryLiImg(){
  categoryLiImg.style.transform = 'scale(1.07)';
  categoryLiImg.style.transitionDuration  = "0.2s";

}
function UnscalecategoryLiImg(){
  categoryLiImg.style.transform = 'scale(1)';
  categoryLiImg.style.transitionDuration  = "0.2s";
}

function ScaleHouse_Garden(){
  house_gardenIMG.style.transform = 'scale(1.07)';
  house_gardenIMG.style.transitionDuration  = "0.2s";
}

function UnscaleHouse_Garden(){
  house_gardenIMG.style.transform = 'scale(1)';
  house_gardenIMG.style.transitionDuration  = "0.2s";
}

function ScaleFashion(){
  fashionIMG.style.transform = 'scale(1.07)';
  fashionIMG.style.transitionDuration  = "0.2s";
}

function UnscaleFashion(){
  fashionIMG.style.transform = 'scale(1)';
  fashionIMG.style.transitionDuration  = "0.2s";
}

function ScaleSports(){
  sportsIMG.style.transform = 'scale(1.07)';
  sportsIMG.style.transitionDuration  = "0.2s";
}

function UnscaleSports(){
  sportsIMG.style.transform = 'scale(1)';
  sportsIMG.style.transitionDuration  = "0.2s";
}

function ScalePets(){
  petsIMG.style.transform = 'scale(1.07)';
  petsIMG.style.transitionDuration  = "0.2s";
}

function UnscalePets(){
  petsIMG.style.transform = 'scale(1)';
  petsIMG.style.transitionDuration  = "0.2s";
}
//When mouse hovers element
categoryLi.onmouseover = ScalecategoryLiImg;
//When mouse stops hovering over element
categoryLi.onmouseleave = UnscalecategoryLiImg;

house_garden.onmouseover = ScaleHouse_Garden;
house_garden.onmouseleave = UnscaleHouse_Garden;

fashion.onmouseover = ScaleFashion;
fashion.onmouseleave = UnscaleFashion;

pets.onmouseover = ScalePets;
pets.onmouseleave = UnscalePets;

sports.onmouseover = ScaleSports;
sports.onmouseleave = UnscaleSports;
//---------------------------------------------------------------------------
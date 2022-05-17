//------CONTROL CANCEL BUTTON--------------------------------------------------------------------------
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
const technologyLi = document.querySelector(".technology li");
const technologyLIIMG = document.querySelector(".technology li img");

const house_garden = document.querySelector(".house_garden");
const house_gardenIMG = document.getElementById("house_garden");

const fashion = document.querySelector(".fashion");
const fashionIMG = document.getElementById("fashion");

const sports = document.querySelector(".sports");
const sportsIMG = document.getElementById("sportsIMG");

const pets = document.querySelector(".pets");
const petsIMG = document.getElementById("petsIMG");

const travel = document.querySelector(".travel");
const travelIMG = document.getElementById("travelIMG");

// TECHNOLOGY
function ScaleTechnologyLi(){
  technologyLIIMG.style.transform = 'scale(1.07)';
  technologyLIIMG.style.transitionDuration  = "0.2s";

}
function UnscaleTechnologyLi(){
  technologyLIIMG.style.transform = 'scale(1)';
  technologyLIIMG.style.transitionDuration  = "0.2s";
}
// HOUSE-GARDEN
function ScaleHouse_Garden(){
  house_gardenIMG.style.transform = 'scale(1.07)';
  house_gardenIMG.style.transitionDuration  = "0.2s";
}

function UnscaleHouse_Garden(){
  house_gardenIMG.style.transform = 'scale(1)';
  house_gardenIMG.style.transitionDuration  = "0.2s";
}
// FASHION
function ScaleFashion(){
  fashionIMG.style.transform = 'scale(1.07)';
  fashionIMG.style.transitionDuration  = "0.2s";
}

function UnscaleFashion(){
  fashionIMG.style.transform = 'scale(1)';
  fashionIMG.style.transitionDuration  = "0.2s";
}
// SPORTS
function ScaleSports(){
  sportsIMG.style.transform = 'scale(1.07)';
  sportsIMG.style.transitionDuration  = "0.2s";
}

function UnscaleSports(){
  sportsIMG.style.transform = 'scale(1)';
  sportsIMG.style.transitionDuration  = "0.2s";
}
// PETS
function ScalePets(){
  petsIMG.style.transform = 'scale(1.07)';
  petsIMG.style.transitionDuration  = "0.2s";
}
function UnscalePets(){
  petsIMG.style.transform = 'scale(1)';
  petsIMG.style.transitionDuration  = "0.2s";
}
// TRAVEL
function ScaleTravel(){
  travelIMG.style.transform = 'scale(1.07)';
  travelIMG.style.transitionDuration  = "0.2s";
}
function UnscaleTravel(){
  travelIMG.style.transform = 'scale(1)';
  travelIMG.style.transitionDuration  = "0.2s";
}
//When mouse hovers element
technologyLi.onmouseover = ScaleTechnologyLi;
//When mouse stops hovering over element
technologyLi.onmouseleave = UnscaleTechnologyLi;

house_garden.onmouseover = ScaleHouse_Garden;
house_garden.onmouseleave = UnscaleHouse_Garden;

fashion.onmouseover = ScaleFashion;
fashion.onmouseleave = UnscaleFashion;

sports.onmouseover = ScaleSports;
sports.onmouseleave = UnscaleSports;

pets.onmouseover = ScalePets;
pets.onmouseleave = UnscalePets;

travel.onmouseover = ScaleTravel;
travel.onmouseleave = UnscaleTravel;
//-----SLIDER ARROWS CONTROLLER----------------------------------------------------------------------

const slider = document.getElementById("slider");
const leftSliderArrow = document.getElementById("LeftSliderArrow");
const rightSliderArrow = document.getElementById("RightSliderArrow");

leftSliderArrow.style.visibility = "hidden";
rightSliderArrow.style.visibility = "hidden";

function RevealArrows(){
leftSliderArrow.style.visibility = "visible";
rightSliderArrow.style.visibility = "visible";

leftSliderArrow.style.opacity = "1";
rightSliderArrow.style.opacity = "1";

leftSliderArrow.style.transitionDuration  = "0.3s";
rightSliderArrow.style.transitionDuration  = "0.3s";
}

function HideArrows(){
  leftSliderArrow.style.visibility = "hidden";
  rightSliderArrow.style.visibility = "hidden";

  leftSliderArrow.style.opacity = "0";
  rightSliderArrow.style.opacity = "0";

  leftSliderArrow.style.transitionDuration  = "0.3s";
  rightSliderArrow.tyle.transitionDuration  = "0.3s";
}

slider.onmouseover = RevealArrows;
slider.onmouseleave = HideArrows;


const img= document.getElementById("img");
const textEl= document.getElementById("text");
const countryEl= document.getElementById("county");

const updateEl= document.getElementById("update");
const result= document.getElementById("weather-result");
const locations=document.getElementById("location");
function retrievedata(text){
let url= `https://api.weatherapi.com/v1/current.json?key=9101f42640574964bc7161249220507&q=${text}&aqi=yes`;
fetch(url)
  .then(response => response.json())
  .then(data => appenddata(data));

}

function appenddata(data){
  let city= data.location.region;
  locations.innerText= city;
  let 
  temperature=data.current.temp_c;
  result.innerText=temperature + " °C";
let icon= data.current.condition.icon;
img.src=icon;
let textdetail=data.current.condition.text
textEl.innerText= textdetail;
let updatedate= data.current.last_updated;
  updateEl.innerText=updatedate;
  let countrys= data.location.country;
countryEl.innerText=countrys;
}
//


//* let textdetail=data.current.condition.text;
//
//let updatedate= data.current.last_updated;
  //

let searchInputEl= document.getElementById("search");
let buttonEl= document.getElementById("searchbuttion");
buttonEl.addEventListener("click", clickd);

function clickd(){
let value = searchInputEl.value;
retrievedata(value);
  searchInputEl.value="";
}

//get rid of this line
//retrievedata("mumbai");

retrievedata("random");
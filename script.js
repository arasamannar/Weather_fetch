var result = fetch("https://restcountries.com/v2/all");
result.then((data)=>data.json()).then((data1)=>{

var divcont = document.createElement("div");
divcont.setAttribute("class","container");

var divrow = document.createElement("div");
divrow.setAttribute("class","row");

for ( let i=0; i<data1.length; i++) {   

    var div2 = document.createElement("div");
    div2.setAttribute("class","col-lg-4 col-sm-12")

    var div3 = document.createElement("div");
    div3.setAttribute("class", "card text-center body");
    div3.style.width = "18rem";

    div2.append(div3);

    var h5 = document.createElement("h5");
    h5.className = "card-header";
    h5.textContent = `${data1[i].name}`;

    var img = document.createElement("img");
    img.className = "card-img-top";
    img.src = `${data1[i].flag}`;
    img.alt = "...";

    div3.append(h5,img);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var h5_1 = document.createElement("h5");
    h5_1.className = "card-text";
    h5_1.innerHTML = `Capital: ${data1[i].capital}`;

    var h5_2 = document.createElement("h5");
    h5_2.className = "card-text";
    h5_2.innerHTML = `Region: ${data1[i].region}`;

    var h5_3 = document.createElement("h5");
    h5_3.className = "card-text";
    h5_3.innerHTML = `Country Code: ${data1[i].alpha3Code}`;

    var button = document.createElement("button");
    button.className = "btn btn-primary";
    button.id = "weather" + i;
    button.innerHTML = "Click for Weather";
    button.onclick = getWeatherData(`${data1[i].capital}`);

    cardBody.append(h5_1, h5_2, h5_3, button)
    div3.append(cardBody);

    divrow.append(div2);

    function getWeatherData(city, buttonId) {
      const apiKey = 'cd8b1aa736bddea9c461dd67bed49530';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      fetch(url).then(response => response.json()).then(data => {
              const weather = data.weather[0].main;
              const temperature = data.main.temp;
  
              document.getElementById(buttonId).innerHTML = `The weather in ${city} is ${weather} and the temperature is ${temperature} degrees Celsius.`;
          }).catch((error) => {console.error('Error:', error)});
  }
  button.onclick = function() {
    getWeatherData(`${data1[i].capital}`, this.id);
};
  
}
divcont.append(divrow);
document.body.append(divcont);
}).catch((error) => {
  console.error('Error:', error);
});


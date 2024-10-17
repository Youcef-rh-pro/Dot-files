const search = document.getElementById("search");
const root = document.getElementById("output");

search.addEventListener("click", (e) => {
  root.innerHTML = "";
  const temp = document.createElement("div");
  e.preventDefault();
  const place = document.getElementById("city").value;
  const tempType=document.getElementById("switch").value
  console.log(tempType)
  let data;
  weather(place).then((res) => {
if (res===0){
    temp.innerHTML='invalid country'
}else
    temp.innerHTML = `<h1>todays temp</h1> <span>${res}</span>`;
  });
  root.append(temp);
});

async function weather(city) {
  try {
    const respone = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=UNNPDUANUGL73K43B2Y3NGCU3&contentType=json`,
      {
         method: 'GET',
         mode: "cors" }
    );

    const weatherData = await respone.json();
    return weatherData.currentConditions.temp;
  } catch (er) {
    return 0;
  }
}

const search= document.getElementById('search')
search.addEventListener('click',(e)=>{
    e.preventDefault()
    const place =document.getElementById('city').value
    console.log(weather(place))
})


async function weather(city) {
  try{

      const respone= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=UNNPDUANUGL73K43B2Y3NGCU3&contentType=json`)
      
      const weatherData = await respone.json()
     return weatherData.currentConditions
    }catch(er){
return console.log('bad country')
    } 
    
    
}
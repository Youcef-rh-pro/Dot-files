const search= document.getElementById('search')
const root = document.getElementById('output')
search.addEventListener('click',(e)=>{
    e.preventDefault()
    const place =document.getElementById('city').value
    let data
  data=  weather(place).then(res=>{return res})
console.log(data)
    
})


async function weather(city) {
  try{

      const respone= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=UNNPDUANUGL73K43B2Y3NGCU3&contentType=json`)
      
      const weatherData = await respone.json()
  return   weatherData.currentConditions.temp
     
    }catch(er){
return "bad country"

    } 
    
    
}
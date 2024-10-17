const search= document.getElementById('search')
const root = document.getElementById('output')

search.addEventListener('click',(e)=>{
    root.innerHTML=''
    const temp = document.createElement('div')
    e.preventDefault()
    const place =document.getElementById('city').value
    let data
  weather(place).then(res=>{
    temp.innerHTML=`todays temp ${res}`
  })
    
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
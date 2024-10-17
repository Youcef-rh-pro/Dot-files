var key ='UNNPDUANUGL73K43B2Y3NGCU3'
async function weather() {
  try{

      const respone= await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/algeria?unitGroup=metric&key=UNNPDUANUGL73K43B2Y3NGCU3&contentType=json')
      
      const weatherData = await respone.json()
      console.log(weatherData)
    }catch(er){
console.log('bad country')
    } 
    
}
weather()
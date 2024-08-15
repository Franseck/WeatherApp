console.log("weatherAPI");
const searchInput=document.querySelector("input")
const searchBtn=document.querySelector("button")
const card=document.getElementById("card")
const search=()=>{
    if(searchInput.value ===""){
       }else{
            const weatherAPI = async () => {
                const cityName=searchInput.value.trim()
                const apiKey = "b272a50b82b8eb5fb6d6387ae2fcc878";
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
              
                try {
                  const res = await fetch(url);
                  if (!res.ok) {
                    throw new Error(`error ! status: ${res.status}`);
                  }
                  const weatherData = await res.json();
                  console.log(weatherData);
                  display(weatherData)
              
                } catch (error) {
                  console.log("error :", error);
              }
  };
              weatherAPI();
        }
   
}

searchBtn.addEventListener("click", search)

searchInput.addEventListener("keyup", function(event){
    if(event.key==="Enter"){
     search()
        }
           
})


const display =(weatherData)=>{

 console.log(weatherData)

 card.innerHTML=`
   <div class="card" style="width: 10rem">
  <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"  class="icon card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${weatherData.name} </h5>
    <p class="card-text"> Temp : ${weatherData.main.temp}</p>
     <p class="card-text"> Feels : ${weatherData.main.temp}</p>
    <p class="card-text"> Humid : ${weatherData.main.humidity}</p>
    <p class="card-text"> Wind : ${weatherData.wind.speed}</p>
   
  </div>
 
  </div>
</div>
 `


}

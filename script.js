var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];

// enter button function

function initialize() {
    $('#enter').keyup(function (event) {
   if (event.keyCode === 13) {
     $('#enter-button').click();
   }
 });
 }

//  main weather

function getWeather() {
    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".heading").style.display = "none";
    document.querySelector("#mainHeading").style.display = "none";
    const cityName = document.querySelector("input").value;
    $.ajax({
       url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ed35504e69c121b6a8549eec1922f5ad&units=metric`,
       success: function (data) {
       console.log(data);
     
        let icon = data.weather[0].main;

        
            if (icon === `smoke`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-smoke"></i>';
                document.body.style.backgroundImage = "url('images/img4.jpg')";
                document.querySelector("body").style.color = `currentColor`;
            }
            else if (icon === `Clouds`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-cloud"></i>';
                document.body.style.backgroundImage = "url('images/cloudy.jpg')";
                document.querySelector("body").style.color = `currentColor`;
            }

            else if (icon === `Rain`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-rain-wind"></i>';
                document.body.style.backgroundImage = "url('images/rain.jpg')";
                document.querySelector("body").style.color = `white`;
            }

            else if (icon === `Dust`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-dust"></i>';
                document.body.style.backgroundImage = "url('images/haze.jpg')";
                document.body.style.color = "black";
            }
            else if (icon === `Haze`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-day-haze"></i>';
                document.body.style.backgroundImage = "url('images/haze.jpg')";
                document.body.style.color = "black";
            }
            else if (icon === `Clear`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-clear"></i>';
                document.body.style.backgroundImage = "url('images/img4.jpg')";
                document.body.style.color = "white";
            }
            else if (icon === `Sunny`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-day-sunny"></i>';
                document.body.style.backgroundImage = "url('images/sunny.jpg')";
                document.body.style.color = "white";
            }
            else if (icocon == "Snow") {
                document.querySelector("#icon").innerHTML = `<i class="wi wi-snow"></i>`
              }
            else  {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-alt-cloudy"></i>';
                document.body.style.backgroundImage = "url('images/snow.jpg')";
                document.body.style.color = "black";
            }


           document.querySelector(".name").innerHTML = data.name;
           document.querySelector(".current > span").innerHTML =Math.round(data.main.temp)+ "°";
           document.querySelector(".description").innerHTML = data.weather[0].main;
           document.querySelector(".min > span").innerHTML = Math.round(data.main.temp_min)+ "°";
           document.querySelector(".max > span").innerHTML = Math.round(data.main.temp_max)+ "°";
       
        },
       error: function (err) {
        document.querySelector("input").innerHTML += `if some error occur`;   
       }
   })


// forecast weather

    $.ajax({

       url:`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=ed35504e69c121b6a8549eec1922f5ad&units=metric`,
       success: function (data) {
        console.log(data);
     
        var d1 = new Date(data.list[0].dt*1000); 
        var d2 = new Date(data.list[8].dt*1000); 
        var d3 = new Date(data.list[16].dt*1000); 
        var d4 = new Date(data.list[24].dt*1000); 
        var d5 = new Date(data.list[32].dt*1000); 
 
        document.querySelector(".day1-of-week").innerHTML = days[d1.getDay()]; 
        document.querySelector(".day2-of-week").innerHTML = days[d2.getDay()];        
        document.querySelector(".day3-of-week").innerHTML = days[d3.getDay()];        
        document.querySelector(".day4-of-week").innerHTML = days[d4.getDay()];  
        document.querySelector(".day5-of-week").innerHTML = days[d5.getDay()]; 

        document.querySelector(".date-one").innerHTML = `${months[d1.getMonth()]} ${d1.getDate()}`;        
        document.querySelector(".date-two").innerHTML = `${months[d2.getMonth()]} ${d2.getDate()}` ;        
        document.querySelector(".date-three").innerHTML = `${months[d3.getMonth()]} ${d3.getDate()}`;        
        document.querySelector(".date-four").innerHTML = `${months[d4.getMonth()]} ${d4.getDate()}`;        
        document.querySelector(".date-five").innerHTML = `${months[d5.getMonth()]} ${d5.getDate()}`;        

        document.querySelector(".temperature-one").innerHTML = Math.round(data.list[0].main.temp) + " C°";        
        document.querySelector(".temperature-two").innerHTML = Math.round(data.list[5].main.temp) + " C°";          
        document.querySelector(".temperature-three").innerHTML = Math.round(data.list[13].main.temp) + " C°";         
        document.querySelector(".temperature-four").innerHTML = Math.round(data.list[21].main.temp) + " C°";         
        document.querySelector(".temperature-five").innerHTML = Math.round(data.list[29].main.temp) + " C°"; 

       

    // icons

    
        let moreIcon = data.list[0].weather[0].main;

        
        if (moreIcon == "Clear") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-day-sunny"></i>`
            
          }
          else if (moreIcon == "Partly Cloudy") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
          }
    
          else if (moreIcon == "Clouds") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-cloud"></i>`
          }
          else if (moreIcon == "Mostly Cloudy") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-cloudy"></i>`
          }
          else if (moreIcon == "Scattered Showers") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-showers"></i>`
          }
    
          else if (moreIcon == "Thunderstorm") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-thunderstorm"></i>`
          }
          else if (moreIcon == "Rain") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-rain"></i>`
          }
          else if (moreIcon == "Snow") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-snow"></i>`
          }
          else if (moreIcon == "Smoke") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-windy"></i>`
          }
          else if (moreIcon == "Haze") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-dust"></i>`
          }
          else if (moreIcon == "Storm") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-sandstorm"></i>`
          }
    
        // day 2
        let moreIcon1 = data.list[8].weather[0].main;

      
        if (moreIcon1 == "Clear") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-day-sunny"></i>`
            
          }
          else if (moreIcon1 == "Partly Cloudy") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
          }
    
          else if (moreIcon1 == "Clouds") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-cloud"></i>`
          }
          else if (moreIcon1 == "Mostly Cloudy") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-cloudy"></i>`
          }
          else if (moreIcon == "Scattered Showers") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-showers"></i>`
          }
          else if (moreIcon1 == "Thunderstorm") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-thunderstorm"></i>`
          }
          else if (moreIcon1 == "Rain") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-rain"></i>`
          }
          else if (moreIcon1 == "Snow") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-snow"></i>`
          }
          else if (moreIcon1 == "Smoke") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-windy"></i>`
          }
          else if (moreIcon1 == "Haze") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-dust"></i>`
          }
          else if (moreIcon1 == "Storm") {
            document.querySelector("#icon1").innerHTML = `<i class="wi wi-sandstorm"></i>`
          }
    
1
        // 3day

        let moreIcon2 = data.list[16].weather[0].main;
        
        if (moreIcon2 == "Clear") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-day-sunny"></i>`
            
          }
          else if (moreIcon2 == "Partly Cloudy") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
          }
    
          else if (moreIcon2 == "Clouds") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-cloud"></i>`
          }
          else if (moreIcon2 == "Mostly Cloudy") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-cloudy"></i>`
          }
          else if (moreIcon2 == "Scattered Showers") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-showers"></i>`
          }
          else if (moreIcon2 == "Thunderstorm") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-thunderstorm"></i>`
          }
          else if (moreIcon2 == "Rain") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-rain"></i>`
          }
          else if (moreIcon2 == "Snow") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-snow"></i>`
          }
          else if (moreIcon2 == "Smoke") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-windy"></i>`
          }
          else if (moreIcon2 == "Haze") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-dust"></i>`
          }
          else if (moreIcon2 == "Storm") {
            document.querySelector("#icon2").innerHTML = `<i class="wi wi-sandstorm"></i>`
          }

        // 4day

        let moreIcon3 = data.list[24].weather[0].main;

        
        if (moreIcon3 == "Clear") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-day-sunny"></i>`
            
          }
          else if (moreIcon3 == "Partly Cloudy") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
          }
    
          else if (moreIcon3 == "Clouds") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-cloud"></i>`
          }
          else if (moreIcon3 == "Mostly Cloudy") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-cloudy"></i>`
          }
          else if (moreIcon3 == "Scattered Showers") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-showers"></i>`
          }
    
          else if (moreIcon3 == "Thunderstorm") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-thunderstorm"></i>`
          }
          else if (moreIcon3 == "Rain") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-rain"></i>`
          }
          else if (moreIcon3 == "Snow") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-snow"></i>`
          }
          else if (moreIcon3 == "Smoke") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-windy"></i>`
          }
          else if (moreIcon3 == "Haze3") {
            document.querySelector("#icon").innerHTML = `<i class="wi wi-dust"></i>`
          }
          else if (moreIcon3 == "Storm") {
            document.querySelector("#icon3").innerHTML = `<i class="wi wi-sandstorm"></i>`
          }
        
        // 5day 

        let moreIcon4 = data.list[32].weather[0].main;

        
       
        if (moreIcon4 == "Clear") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-day-sunny"></i>`
            
          }
          else if (moreIcon4 == "Partly Cloudy") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
          }
    
          else if (moreIcon4 == "Clouds") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-cloud"></i>`
          }
          else if (moreIcon4 == "Mostly Cloudy") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-cloudy"></i>`
          }
          else if (moreIcon4 == "Scattered Showers") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-showers"></i>`
          }
    
          else if (moreIcon4 == "Thunderstorm") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-thunderstorm"></i>`
          }
          else if (moreIcon4 == "Rain") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-rain"></i>`
          }
          else if (moreIcon4 == "Snow") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-snow"></i>`
          }
          else if (moreIcon4 == "Smoke") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-windy"></i>`
          }
          else if (moreIcon4 == "Haze") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-dust"></i>`
          }
          else if (moreIcon4 == "Storm") {
            document.querySelector("#icon4").innerHTML = `<i class="wi wi-sandstorm"></i>`
          }
        

    },
    error: function(error){
        document.querySelector("input").innerHTML += `if some error occur`;   
    }

   })
}

       
       
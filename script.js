var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getWeather() {
    document.querySelector(".weather-info").style.display = "block";
    const cityName = document.querySelector("input").value;
    $.ajax({
       url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ed35504e69c121b6a8549eec1922f5ad&units=metric`,
       success: function (data) {
       console.log(data);
     
        let icon = data.weather[0].main;

        
            if (icon === `smoke`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-smoke"></i>';
                console.log ("smoke");
            }
            else if (icon === `Clouds`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-cloud"></i>';
            }

            else if (icon === `rain`) {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-rain-wind"></i>';
            }
            else  {
                document.querySelector(".main-icon").innerHTML='no icon match';
            }


           document.querySelector(".name").innerHTML = data.name;
           document.querySelector(".current > span").innerHTML =Math.round(data.main.temp);
           document.querySelector(".description").innerHTML = data.weather[0].main;
           document.querySelector(".min > span").innerHTML = Math.round(data.main.temp_min);
           document.querySelector(".max > span").innerHTML = Math.round(data.main.temp_max);
       
        },
       error: function (err) {
           console.log(err);
       }
   })




    $.ajax({

       url:`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=ed35504e69c121b6a8549eec1922f5ad&units=metric`,
       success: function (data) {
        console.log(data);
     
        var d1 = new Date(data.list[0].dt*1000); 
        var d2 = new Date(data.list[6].dt*1000); 
        var d3 = new Date(data.list[14].dt*1000); 
        var d4 = new Date(data.list[26].dt*1000); 
        var d5 = new Date(data.list[30].dt*1000); 
 
        // document.querySelector(".day-one").innerHTML = days[d1.getDay()]; 
        // document.querySelector(".day-two").innerHTML = days[d2.getDay()];        
        // document.querySelector(".day-three").innerHTML = days[d3.getDay()];        
        // document.querySelector(".day-four").innerHTML = days[d4.getDay()];  
        // document.querySelector(".day-five").innerHTML = days[d5.getDay()]; 

        document.querySelector(".date-one").innerHTML = `${months[d1.getMonth()]} ${d1.getDate()}`;        
        document.querySelector(".date-two").innerHTML = `${months[d2.getMonth()]} ${d2.getDate()}` ;        
        document.querySelector(".date-three").innerHTML = `${months[d3.getMonth()]} ${d3.getDate()}`;        
        document.querySelector(".date-four").innerHTML = `${months[d4.getMonth()]} ${d4.getDate()}`;        
        document.querySelector(".date-five").innerHTML = `${months[d5.getMonth()]} ${d5.getDate()}`;        

        document.querySelector(".temperature-one").innerHTML = Math.round(data.list[0].main.temp) + " C°";        
        document.querySelector(".temperature-two").innerHTML = Math.round(data.list[6].main.temp) + " C°";          
        document.querySelector(".temperature-three").innerHTML = Math.round(data.list[14].main.temp) + " C°";         
        document.querySelector(".temperature-four").innerHTML = Math.round(data.list[26].main.temp) + " C°";         
        document.querySelector(".temperature-five").innerHTML = Math.round(data.list[30].main.temp) + " C°";         
    
        let moreIcon = data.list[0].weather[0].main;

        
        if (moreIcon === `smoke`) {
            document.querySelector("#icon").innerHTML='<i class="wi wi-smoke"></i>';
            console.log ("smoke");
        }
        else if (moreIcon === `Clouds`) {
            document.querySelector("#icon").innerHTML='<i class="wi wi-cloud"></i>';
        }
        else  {
            document.querySelector("#icon").innerHTML='no icon match';
        }

    },
    error: function(error){
        console.log(error)
    }

   })
}

       
       
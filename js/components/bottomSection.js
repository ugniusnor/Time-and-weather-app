import getAPI from "../API/getAPI.js"
import preLoad from "./preLoad.js"
function insertData () {
let gotData=false;

function getTime(date) {
let time=new Date(date);
time = time.getHours() + ":" + (time.getMinutes()<10 ? "0"+ time.getMinutes() : time.getMinutes());
return document.getElementById("hours").textContent=time;
}
function getDay(date) {
switch(date) {
    case 1:return document.getElementById("weekday").textContent="Monday";
    case 2:return document.getElementById("weekday").textContent="Tuesday";
    case 3:return document.getElementById("weekday").textContent="Wednesday";
    case 4:return document.getElementById("weekday").textContent="Thursday";
    case 5:return document.getElementById("weekday").textContent="Friday";
    case 6: return document.getElementById("weekday").textContent="Saturday";
    case 7: return document.getElementById("weekday").textContent="Sunday";

}
}
function getGreeting() {
    let currentTime = document.getElementById("hours").innerHTML;
    currentTime=currentTime.slice(0,2);
    currentTime=parseInt(currentTime,10);
    if (currentTime<12) {
        return document.getElementById("greeting").textContent="Good morning,"
    }
        else if(currentTime >= 12 && currentTime < 18) {
            return document.getElementById("greeting").textContent="Good afternoon,";
        }
            else if (currentTime>=18 ) {
                return document.getElementById("greeting").textContent="Good evening,"
            }
    }
        


    //geting location and ip
     getAPI("https://freegeoip.app/json/")
                .then (res=>{
                  
                    document.getElementById("location").textContent=res.city + ", " + res.country_name
                  
                })
                    .catch(err=> console.log("got error while fetching data" + err));
//geting time and date
// if(firstTime) {
//     getAPI("https://worldtimeapi.org/api/ip")
//                 .then(res=>{
//                     getTime(res.datetime);
//                     getDay(res.day_of_week);
//                     document.getElementById("timeZone").textContent="UTC" + res.utc_offset;
//                     document.getElementById("yearday").textContent=res.day_of_year;
//                     document.getElementById("weeknumber").textContent=res.week_number;
//                     getGreeting();
//                     firstTime=false;
//                 })
//                     .catch (err=>console.error("Got erro while fetching" + err));
        
// }

    setInterval(()=> {
        getAPI("https://worldtimeapi.org/api/ip")
        .then(res=>{
            // preLoad(false);
            getTime(res.datetime);
            getDay(res.day_of_week);
            document.getElementById("timeZone").textContent="UTC" + res.utc_offset;
            document.getElementById("yearday").textContent=res.day_of_year;
            document.getElementById("weeknumber").textContent=res.week_number;
            getGreeting();
            gotData=true;
        })
            .catch (err=>console.error("Got erro while fetching" + err));
    },4000)

        
}
export default insertData;
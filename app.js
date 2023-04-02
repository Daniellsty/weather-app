let input = document.querySelector('input')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let lowTemp = document.querySelector('.hi-low')      
let weather = document.querySelector('.weather')
let dateNow = document.querySelector('.date')
let error = document.querySelector('.error')
error.style.display ='none' ;

input.addEventListener('keydown',(e)=>{

    if(e.keyCode === 13){

        fetchData()
    }

})

function showData(res){

    city.innerHTML = `${res.name} , ${res.sys.country}`;
    temp.innerHTML = `${Math.floor(res.main.temp - 273.15)}°c`;
    lowTemp.innerHTML = ` ${Math.floor(res.main.temp_min - 273.15)}°c /  ${Math.floor(res.main.temp_max - 273.15)}°c`;
    weather.innerHTML = `${res.weather[0].main}`;
    dateNow.innerHTML = showNowDate()
}

function showNowDate(){

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date()
    let day = days[date.getDay()]
    let month = months[date.getMonth()]
    let year = date.getFullYear()
    let dateOFMonth = date.getDate()

    return `${day} ${dateOFMonth} ${month} ${year}`


}

 function handleError(){
    error.style.display ='block' ;
 }


function fetchData(){

    const inputValue = input.value
    let data ={
        url:'https://api.openweathermap.org/data/2.5/weather?q=',
        key:'7626c03f78f43f59c9e56691bb2c971f'

    }

    fetch(`${data.url}${inputValue}&appid=${data.key}`)


    .then(data=>{
      return   data.json()
     
    }).then(res=>{
        showData(res)
    }).catch(e=>{

        handleError()
    })
}

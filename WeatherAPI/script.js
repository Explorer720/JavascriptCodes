const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const desc = document.querySelector('.desc');
const name = document.querySelector('.name');
const temp = document.querySelector('.temp');

button.addEventListener('click',weather);

function weather(event)
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=aa1fee6d5c2e24496e97f7f956bf05f0')
        .then(response => response.json())
        .then(data => {
            const nameValue = data['name'];
            const tempValue = data['main']['temp'];
            const descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue+" °C";
            desc.innerHTML = descValue;

        })

    .catch(err => alert("Wrong city name!"))
}

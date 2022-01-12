function showAlert() {
    window.alert("You clicked on button!")
}

async function getMessageFromKanye(id_to_change) {
    let response = await fetch("https://api.kanye.rest");
    let message = await response.json()
    console.log("You've got a message ", message)
    document.getElementById(id_to_change).innerHTML = message.quote
  }

  async function getWeather(id_to_change) {
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Jerusalem&appid=91201722ff1cc4a99e9c870bbbe2aafb&units=metric");
    let message = await response.json()
    console.log("You've got a message ", message)
    document.getElementById(id_to_change).innerHTML = message.weather[0].description
  }
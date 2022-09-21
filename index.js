const button = document.querySelector(".button")
const input = document.querySelector(".ip-input")
const firstDivHeading = document.querySelector(".ip-address")
const secondDivHeading = document.querySelector(".location")
const thirdDivHeading = document.querySelector(".timezone")
const fourthDivHeading = document.querySelector(".isp")


button.addEventListener("click", () => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_8oRUoGKgqzASaIUWkqyuzKt403xtM&ipAddress=${input.value}`)
        .then(response => response.json())
        .then(data => {
            renderInfo(data)
            renderMap(data)

        })
})




function renderInfo(data) {
    firstDivHeading.innerHTML = data.ip

    secondDivHeading.innerHTML =
        data.location.country + "," + " " + data.location.region + " " + data.location.city

    thirdDivHeading.innerHTML = data.location.timezone

    fourthDivHeading.innerHTML = data.isp
}

function renderMap(data) {
    let map = L.map('map').setView([data.location.lat, data.location.lng], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}

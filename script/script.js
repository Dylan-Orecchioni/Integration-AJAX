const persons = document.querySelector('.persons');
const vehicles = document.querySelector('.vehicles');
const planets = document.querySelector('.planets');

onInit();

async function onInit() {
    const countPeople = await getCount('https://swapi.dev/api/people/');
    const countVehicles = await getCount('https://swapi.dev/api/vehicles/');
    const countPlanets = await getCount('https://swapi.dev/api/planets/');
    displayCount(countPeople, countVehicles, countPlanets);
}

async function getCount(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function displayCount(countPeople, countVehicles, countPlanets){
    persons.textContent =  countPeople.count;
    vehicles.textContent =  countVehicles.count;
    planets.textContent =  countPlanets.count;
}


const persons = document.querySelector('.persons');
const vehicles = document.querySelector('.vehicles');
const planets = document.querySelector('.planets');

async function getCount(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}

async function displayCount(){
    const personCount = await getCount('https://swapi.dev/api/people/');
    const vehiclesCount = await getCount('https://swapi.dev/api/vehicles/');
    const planetsCount = await getCount('https://swapi.dev/api/planets/');

    persons.textContent = `${personCount}`;
    vehicles.textContent = `${vehiclesCount}`;
    planets.textContent = `${planetsCount}`;
}

displayCount();


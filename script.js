const persons = document.querySelector('.persons');
const vehicles = document.querySelector('.vehicles');
const planets = document.querySelector('.planets');

async function getCount(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}

async function getPlanets(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}

async function displayCount(){
    const personCount = (await getCount('https://swapi.dev/api/people/')).count;
    const vehiclesCount = (await getCount('https://swapi.dev/api/vehicles/')).count;
    const planetsCount = (await getCount('https://swapi.dev/api/planets/')).count;

    persons.textContent = personCount;
    vehicles.textContent = vehiclesCount;
    planets.textContent = planetsCount;
}

displayCount();


const planetData = document.querySelector('#planetData');

async function displayPlanets() {
    const planetCount = await getCount('https://swapi.dev/api/planets/');

    for (let i = 1; i < planetCount && i <= 10; i++) {
        const planet = await getPlanets(`https://swapi.dev/api/planets/${i}/`);
        planetData.innerHTML += `
        <tr>
            <td>${planet.name}</td>
            <td>${planet.terrain}</td>
        </tr>
        `
    }
}

displayPlanets();


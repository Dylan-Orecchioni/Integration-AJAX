const planetData = document.querySelector('#planetData');
const paragraph = document.querySelector('.text-hidden');
const maxplanet = document.querySelector('.countPlanets');
const population = document.querySelector('.population');
const diameter = document.querySelector('.diameter');
const climate = document.querySelector('.climat');
const gravity = document.querySelector('.gravity');
const terrain = document.querySelector('.terrain');
const name = document.querySelector('.name');

onInit();

async function onInit() {
    const planets = await getAllPlanets();
    displayPlanets(planets);
    displayCount(planets);
}

async function getAllPlanets() {
    const allPlanets = [];
    let nextPage = "https://swapi.dev/api/planets/";

    while(nextPage){
        const planetsPerPage = await getPlanet(nextPage);
        const planetResults = planetsPerPage.results;

        allPlanets.push(...planetResults);

        nextPage = planetsPerPage.next;
    }

    return {count: allPlanets.length, results: allPlanets};
}

async function getPlanet(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function displayPlanets(planets) {
  const planetsResults = planets.results;

  planetsResults.forEach(planet => {
      const planetItem = createPlanetItem(planet);
      planetData.appendChild(planetItem);

      planetItem.addEventListener('click', () => {
        displayPlanetsDetails(planet);
      })
  });

  const sectionPlanets = document.querySelector('.section-planets');
  sectionPlanets.classList.add('scrollable');

}

function createPlanetItem(planete){
    const planetItem = document.createElement('tr');

    planetItem.classList.add('planets-item');
    planetItem.innerHTML = `
                <td>${planete.name}</td>
                <td>${planete.terrain}</td>
            `;
    return planetItem;
}

function displayCount(planets){
    maxplanet.textContent = planets.count + ' planètes';
}



function displayPlanetsDetails(planetDetails){
    //J'efface les données precedentes
    name.textContent = '';
    diameter.textContent = '';
    climate.textContent = '';
    population.textContent = '';
    terrain.textContent = '';
    gravity.textContent = '';

    // je met a jour les données de la planète
    name.textContent = planetDetails.name;
    population.textContent = planetDetails.population;
    diameter.textContent = planetDetails.diameter;
    climate.textContent = planetDetails.climate;
    gravity.textContent = planetDetails.gravity;
    terrain.textContent = planetDetails.terrain;
}







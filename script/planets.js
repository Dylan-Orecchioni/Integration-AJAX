const planetData = document.querySelector('#planetData');
const paragraph = document.querySelector('.text-hidden');
const maxplanet = document.querySelector('.countPlanets');

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function displayPlanets() {
    const planets = await getData('https://swapi.dev/api/planets/');
    const count = planets.count;
    maxplanet.textContent = count + ' planètes';

    for (let i = 1; i < Math.floor(count / 10); i++) {
        const planetPerPage = await getData(`https://swapi.dev/api/planets/?page=${i}`);
        const planetResults = planetPerPage.results;

        planetResults.forEach((planetID) => {
            const planetItem = document.createElement('tr');
            planetItem.classList.add('planets-item');
            planetItem.innerHTML = `
                <td>${planetID.name}</td>
                <td>${planetID.terrain}</td>
            `;
            planetData.appendChild(planetItem);
        });
    }

    const sectionPlanets = document.querySelector('.section-planets');
    sectionPlanets.classList.add('scrollable');
}

displayPlanets();


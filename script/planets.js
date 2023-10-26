const planetData = document.querySelector('#planetData');
const paragraph = document.querySelector('.text-hidden');
const maxplanet = document.querySelector('.count');

async function getCount(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function displayPlanets(){
    const planet = (await getCount('https://swapi.dev/api/planets/')).count;
    maxplanet.textContent = planet + ' planètes';

    for(let i = 1; i < planet ; i++){
        const planetID = await getCount(`https://swapi.dev/api/planets/${i}/`);
        planetData.innerHTML += `
            <tr class="planets-item">
                <td>${planetID.name}</td>
                <td>${planetID.terrain}</td>
            </tr>
            `;

        const sectionPlanets = document.querySelector('.section-planets');
        if (planet[i] === 10) {
            sectionPlanets.classList.add('scrollable');
        }
    }


    // planets.forEach(planet => {
    //     planet.addEventListener('click', () => {
    //         paragraph.textContent = planet.textContent;
    //     })
    // })

}
displayPlanets();


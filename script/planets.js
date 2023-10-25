const planetData = document.querySelector('#planetData');
async function getCount(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}


async function displayPlanets(){
    const planet = (await getCount('https://swapi.dev/api/planets/')).count;

    for(let i = 1; i < planet && i < 10; i++){

        const planetID = await getCount(`https://swapi.dev/api/planets/${i}/`);
        planetData.innerHTML += `
            <tr>
                <td>${planetID.name}</td>
                <td>${planetID.terrain}</td>
            </tr>
            `;
    }
}

displayPlanets();

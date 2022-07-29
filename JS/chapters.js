
let resultados1 = [];

const renderSeason1 = (data) => {
    let chapters = data.results;

    document.querySelector("#resultado").innerHTML = "";

    chapters.forEach((chapter) => {
        let div = document.createElement('div');
        div.classList.add('col-3', 'mt-5');
        div.innerHTML += `
        <div class="card" data-id="${chapter.id}">
            <div class="card-content">
                <p>${chapter.id}.-<b>${chapter.name}</b></p>
                <p>Fecha de salida: <b>${chapter.air_date}</b></p>
                <p>Episodio: <b>${chapter.episode}</b></p>
            </div>
        </div>
        `
        document.querySelector("#resultado").append(div);

    });
}

const allEpisodes = () => {
    fetch(`${URL}/episode`)
        .then(response => response.json())
        .then((data) => {
            renderSeason1(data);
            // resultados1 = data;
            // console.log(resultados1);
            // renderLocations(data);
        });
}

document.querySelector('#allseas').addEventListener('click', allEpisodes);

const season1 = () => {
    fetch(`${URL}/episode/?episode=S01`)
        .then(response => response.json())
        .then((data) => {
            renderSeason1(data);
            console.log(data);
        });
}

document.querySelector('#season1').addEventListener('click', season1);


const season2 = () => {
    fetch(`${URL}/episode/?episode=S02`)
        .then(response => response.json())
        .then((data) => {
            renderSeason1(data);
            console.log(data);
        });
}

document.querySelector('#season2').addEventListener('click', season2);


const season3 = () => {
    fetch(`${URL}/episode/?episode=S03`)
        .then(response => response.json())
        .then((data) => {
            renderSeason1(data);
            console.log(data);
        });
}

document.querySelector('#season3').addEventListener('click', season3);


const season4 = () => {
    fetch(`${URL}/episode/?episode=S04`)
        .then(response => response.json())
        .then((data) => {
            renderSeason1(data);
            console.log(data);
        });
}

document.querySelector('#season4').addEventListener('click', season4);


const season5 = () => {
    fetch(`${URL}/episode/?episode=S05`)
        .then(response => response.json())
        .then((data) => {
            renderSeason1(data);
            console.log(data);
        });
}

document.querySelector('#season5').addEventListener('click', season5);
















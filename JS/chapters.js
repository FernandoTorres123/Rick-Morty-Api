
let resultados1 = [];

const renderSeason1 = (data) => {
    let chapters = data.results;
    let info = data.info;

    document.querySelector("#resultado").innerHTML = "";

    chapters.forEach((chapter) => {
        let div = document.createElement('div');
        div.classList.add('col-3', 'mt-5', "divCard");
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

    if (info.prev != null) {

        document.querySelector("#prev").innerHTML = "";
        document.querySelector("#prev1").innerHTML = "";
        document.querySelector("#prev2").innerHTML = "";

        let div = document.createElement('div');
        div.innerHTML += `
        <button id="prev" class="navbar-button-color btn btn-outline-success mt-3 ms-4"
        type="submit">Anterior</button>
    `;
        document.querySelector("#prev2").append(div);
    } else {
        document.querySelector("#prev2").innerHTML = "";
        document.querySelector("#prev1").innerHTML = "";
        document.querySelector("#prev").innerHTML = "";
    }

    if (info.next != null) {

        // console.log(info.next);

        document.querySelector("#next").innerHTML = "";
        document.querySelector("#next1").innerHTML = "";
        document.querySelector("#next2").innerHTML = "";

        let div = document.createElement('div');
        div.innerHTML += `
        <button id="next" class="navbar-button-color btn btn-outline-success mt-3 me-4"
        type="submit">Siguiente</button>
    `;
        document.querySelector("#next2").append(div);
    } else {
        document.querySelector("#next").innerHTML = "";
        document.querySelector("#next1").innerHTML = "";
        document.querySelector("#next2").innerHTML = "";

    }

}

const renderPrev2 = () => {
    const { prev } = resultados1.info;

    fetch(prev)
        .then(response => response.json())
        .then((data) => {
            resultados1 = data;
            // console.log(data);
            renderSeason1(data);
        });
}


const renderNext2 = () => {
    const { next } = resultados1.info;

    fetch(next)
        .then(response => response.json())
        .then((data) => {
            resultados1 = data;
            // console.log(data);
            renderSeason1(data);
        });
}

const allEpisodes = () => {
    fetch(`${URL}/episode`)
        .then(response => response.json())
        .then((data) => {
            resultados1 = data;
            renderSeason1(data);
            // console.log(resultados1);
            // renderLocations(data);
        });
}

document.querySelector('#prev2').addEventListener('click', renderPrev2);


document.querySelector('#next2').addEventListener('click', renderNext2);

// const seasonEpisodes = (season) => {
//       fetch(`${URL}/episode/?espisode=${season}`)
//         .then((response) => response.json())
//         .then((data) => {
//             resultados1 = data;
//             renderSeason1(data);
//             console.log(resultados1);
//             // renderLocations(data);

//         });

// }

document.querySelector('#allseas').addEventListener('click', allEpisodes);

const season1 = () => {
    fetch(`${URL}/episode/?episode=S01`)
        .then(response => response.json())
        .then((data) => {
            resultados1 = data;
            renderSeason1(data);
            // console.log(resultados1);
        });
}

document.querySelector('#season1').addEventListener('click',
    // function () { seasonEpisodes("S01") }
    function(){season1()}
);


const season2 = () => {
    fetch(`${URL}/episode/?episode=S02`)
        .then(response => response.json())
        .then((data) => {
            resultados1 = data;
            renderSeason1(data);
            // console.log(data);
        });
}

document.querySelector('#season2').addEventListener('click', season2);


const season3 = () => {
    fetch(`${URL}/episode/?episode=S03`)
        .then(response => response.json())
        .then((data) => {
            resultados1 = data;
            renderSeason1(data);
            // console.log(data);
        });
}

document.querySelector('#season3').addEventListener('click', season3);


const season4 = () => {
    fetch(`${URL}/episode/?episode=S04`)
        .then(response => response.json())
        .then((data) => {
            resultados1 = data;
            renderSeason1(data);
            // console.log(data);
        });
}

document.querySelector('#season4').addEventListener('click', season4);


const season5 = () => {
    fetch(`${URL}/episode/?episode=S05`)
        .then(response => response.json())
        .then((data) => {
            resultados1 = data;
            renderSeason1(data);
            // console.log(data);
        });
}

document.querySelector('#season5').addEventListener('click', season5);
















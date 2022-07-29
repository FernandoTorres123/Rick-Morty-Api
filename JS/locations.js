
let resultados = [];

const getLocations = () => {

    fetch(`${URL}/location`)
        .then(response => response.json())
        .then((data) => {
            resultados = data;
            // console.log(data);
            renderLocations(data);
        });
}

document.querySelector('#rendLoc').addEventListener('click', getLocations);






const renderLocations = (locations) => {
    let lugares = locations.results;
    let info = locations.info;


    document.querySelector("#resultado").innerHTML = "";

    lugares.forEach((location) => {
        /*Cada personaje*/
        let div = document.createElement("div");
        div.classList.add("col-3", "mt-3", "divCard");
        div.innerHTML += `<div class="card" data-id="${location.id}">
            <div class="card-content">
                <p>${location.id}.-<b>${location.name}</b></p>
                <p>Tipo: <b>${location.type}</b></p>
                <p>Dimension: <b>${location.dimension}</b></p>
            </div>
        </div>`;
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
        document.querySelector("#prev1").append(div);
    } else {
        document.querySelector("#prev1").innerHTML = "";
        document.querySelector("#prev").innerHTML = "";
        document.querySelector("#prev2").innerHTML = "";
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
        document.querySelector("#next1").append(div);
    } else {
        document.querySelector("#next").innerHTML = "";
        document.querySelector("#next1").innerHTML = "";
        document.querySelector("#next2").innerHTML = "";

    }

}

const renderPrev1 = () => {
    const { prev } = resultados.info;

    fetch(prev)
        .then(response => response.json())
        .then((data) => {
            resultados = data;
            // console.log(data);
            renderLocations(data);
        });
}


const renderNext1 = () => {
    const { next } = resultados.info;

    fetch(next)
        .then(response => response.json())
        .then((data) => {
            resultados = data;
            // console.log(data);
            renderLocations(data);
        });
}

document.querySelector('#prev1').addEventListener('click', renderPrev1);


document.querySelector('#next1').addEventListener('click', renderNext1);
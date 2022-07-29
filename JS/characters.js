

let resulados = [];


fetch(`${URL}/character`)
    .then(response => response.json())
    .then((data) => {
        resulados = data;
        // console.log(data);
        renderCharacters(data);
    });

const renderAgain = () => {
    fetch(`${URL}/character`)
        .then(response => response.json())
        .then((data) => {
            resulados = data;
            renderCharacters(data);
        });
}

document.querySelector('#rendeCharac').addEventListener('click', renderAgain);



const renderCharacters = (personajes) => {
    let characters = personajes.results;
    let info = personajes.info;


    document.querySelector("#resultado").innerHTML = "";

    characters.forEach((personaje) => {
        /*Cada personaje*/
        let div = document.createElement("div");
        div.classList.add("col-3", "pt-2", "pl-2");
        div.innerHTML += `<div class="card" data-id="${personaje.id}">
            <div class="card-image" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <figure class="image">
                    <img src="${personaje.image}" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <p>${personaje.id}.-<b>${personaje.name}</b></p>
                <p>Estatus: <b>${personaje.status}</b> Especie: <b>${personaje.species}</b></p>
            </div>
        </div>`;

        div.dataset["name"] = personaje.name;
        div.dataset.image = personaje.image;
        div.dataset.status = personaje.status;
        div.dataset.species = personaje.species;
        div.dataset.type = personaje.type == '' ? 'Sin datos' : personaje.type;
        div.dataset.gender = personaje.gender;
        div.dataset.origin = personaje.origin.name;
        div.dataset.location = personaje.location.name;


        div.addEventListener('click', function (evt) {

            document.querySelector('#ficha-nombre').innerHTML = evt.currentTarget.dataset.name;
            document.querySelector("#ficha-img").src = evt.currentTarget.dataset.image;
            document.querySelector("#status").innerHTML = evt.currentTarget.dataset.status;
            document.querySelector("#species").innerHTML = evt.currentTarget.dataset.species;
            document.querySelector("#type").innerHTML = evt.currentTarget.dataset.type;
            document.querySelector("#gender").innerHTML = evt.currentTarget.dataset.gender;
            document.querySelector("#origin").innerHTML = evt.currentTarget.dataset.origin;
            document.querySelector("#location").innerHTML = evt.currentTarget.dataset.location;


        });

        document.querySelector("#resultado").append(div);

    });



    if (info.prev != null) {

        document.querySelector("#prev").innerHTML = "";
        document.querySelector("#prev1").innerHTML = "";

        let div = document.createElement('div');
        div.innerHTML += `
    <button id="prev" class="navbar-button-color btn btn-outline-success"
                            type="submit">Anterior</button>
    `;
        document.querySelector("#prev").append(div);
    } else {
        document.querySelector("#prev").innerHTML = "";
    }

    if (info.next != null) {

        document.querySelector("#next").innerHTML = "";
        document.querySelector("#next1").innerHTML = "";

        let div = document.createElement('div');
        div.innerHTML += `
    <button id="next" class="navbar-button-color btn btn-outline-success"
                            type="submit">Siguiente</button>
    `;
        document.querySelector("#next").append(div);
    } else {
        document.querySelector("#next").innerHTML = "";

    }

}

const renderPrev = () => {
    const { prev } = resulados.info;

    fetch(prev)
        .then(response => response.json())
        .then((data) => {
            resulados = data;
            // console.log(data);
            renderCharacters(data);
        });
}


const renderNext = () => {
    const { next } = resulados.info;

    fetch(next)
        .then(response => response.json())
        .then((data) => {
            resulados = data;
            // console.log(data);
            renderCharacters(data);
        });
}

const getParam = () => {

    let params = document.querySelector('#searchInput').value;

    document.querySelector('#searchInput').value = '';

    fetch(`${URL}/character/?name=${params}`)
        .then(response => response.json())
        .then((data) => {
            resulados = data;
            console.log(data);
            renderCharacters(data);
        });
}



// document.querySelector('.card').addEventListener('click', console.log('hola'))

document.querySelector('#searchButton').addEventListener('click', getParam);

document.querySelector('#prev').addEventListener('click', renderPrev);


document.querySelector('#next').addEventListener('click', renderNext);





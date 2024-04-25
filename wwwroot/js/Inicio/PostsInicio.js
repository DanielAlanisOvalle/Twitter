let posts;
let contenedorPostInicio = document.getElementById("contenedorPostInicio");

document.addEventListener('DOMContentLoaded', () => {
    setInterval(getData, 10000)
});

function getData() {
    fetch('https://api.unsplash.com/photos/random/?client_id=w-T-K-YvLD_pBIwyEaK0qj8szw6AgV9PwvBBGgcQSg4')
        .catch(error => mostrarError(error.message))
        .then(r => r.json())
        .then(data => [new Posts(data)])
        .then(items => {
            posts = items;
            procesarData();
        })
        .catch(error => mostrarError(error.message));
}

function procesarData() {
    if (posts !== undefined) {
        let nuevoHTML = '';
        for (let index = 0; index < posts.length; index++) {
            nuevoHTML = crearElemento(posts[index]);
        }
        contenedorPostInicio.insertAdjacentHTML('afterbegin', nuevoHTML) ;
    } else {
        mostrarError("Ocurrió un error");
    }
}

function crearElemento(element) {

    if (element.description == null) {
        element.description = '';
    }

    let nuevoElemento = `
        <div class="card cardPost">
            <div class="card-body">
                <div class="row contenedorUsuario">
                    <img class="rounded-circle imgPerfilUsuario" src="${element.profile_image}" />
                    <label id="lblNombreUsuario" class="mr-1">${element.name}</label>
                    <label id="lblUsuario">@${element.username}</label>
                </div>
                <div class="row contenedorInfoPost">
                    <div class="col-12 col-md-12 p-0">
                        <p class="DescripcionPost">${element.description}</p>
                    </div>
                    <div class="col-12 col-md-12 contenedorImagen">
                        <img class="img-fluid imgPost" src="${element.url}" />
                    </div>
                </div>
                <div class="row contenedorFooterPost">
                    <i id="iconoComentarios" class="bi rounded-pill bi-chat">1</i>
                    <i class="bi rounded-pill bi-arrow-repeat"></i>
                    <i id="iconoLikes" class="bi rounded-pill bi-heart">${element.likes}</i>
                    <i class="bi rounded-pill bi-filter-left"></i>
                    <i class="bi rounded-pill bi-bookmark"></i>
                    <i class="bi rounded-pill bi-upload"></i>
                </div>
            </div>
        </div>
    `;
    return nuevoElemento;
}

function mostrarError(msg) {
    console.log(msg);
}



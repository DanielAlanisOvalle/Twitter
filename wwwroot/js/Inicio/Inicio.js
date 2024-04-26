document.addEventListener('DOMContentLoaded', () => {
    const inpPost = $('#inpPost');
    const btnPostearInicio = $('#btnPostearInicio');
    const contenedorPostInicio = document.getElementById('contenedorPostInicio');
    const inputFile = document.getElementById('inputFile');
   
    btnPostearInicio.click(function () {
        const textoPost = inpPost.val().trim();

        if (inputFile.files && inputFile.files[0]) {
            const file = inputFile.files[0];
            const reader = new FileReader();

            reader.onload = function (event) {
                const imageUrl = event.target.result;

                const elemento = `
                    <div class="card cardPost">
                        <div class="card-body">
                            <div class="row contenedorUsuario">
                                <img class="rounded-circle imgPerfilUsuario" src="../../images/Perfil.png" />
                                <label id="lblNombreUsuario" class="mr-1">Daniel Alanís</label>
                                <label id="lblUsuario">@DanielAlanís</label>
                            </div>
                            <div class="row contenedorInfoPostUsuario">
                                <p class="DescripcionPost">${textoPost}</p>
                            </div>
                            <div class="row contenedorImagen">
                                <img class="img-fluid imgPost" src="${imageUrl}" />
                            </div>
                            <div class="row contenedorFooterPost">
                                <i id="iconoComentarios" class="bi rounded-pill bi-chat">1</i>
                                <i class="bi rounded-pill bi-arrow-repeat"></i>
                                <i id="iconoLikes" class="bi rounded-pill bi-heart">5</i>
                                <i class="bi rounded-pill bi-filter-left"></i>
                                <i class="bi rounded-pill bi-bookmark"></i>
                                <i class="bi rounded-pill bi-upload"></i>
                            </div>
                        </div>
                    </div>
                `;

                contenedorPostInicio.insertAdjacentHTML('afterbegin', elemento);
                inputFile.value = '';
            };

            reader.readAsDataURL(file);
        } else {
            const elemento = `
                <div class="card cardPost">
                    <div class="card-body">
                        <div class="row contenedorUsuario">
                            <img class="rounded-circle imgPerfilUsuario" src="../../images/Perfil.png" />
                            <label id="lblNombreUsuario" class="mr-1">Daniel Alanís</label>
                            <label id="lblUsuario">@DanielAlanís</label>
                        </div>
                        <div class="row contenedorInfoPostUsuario">
                            <p class="DescripcionPost">${textoPost}</p>
                        </div>
                        <div class="row contenedorFooterPost">
                            <i id="iconoComentarios" class="bi rounded-pill bi-chat">1</i>
                            <i class="bi rounded-pill bi-arrow-repeat"></i>
                            <i id="iconoLikes" class="bi rounded-pill bi-heart">5</i>
                            <i class="bi rounded-pill bi-filter-left"></i>
                            <i class="bi rounded-pill bi-bookmark"></i>
                            <i class="bi rounded-pill bi-upload"></i>
                        </div>
                    </div>
                </div>
            `;
            contenedorPostInicio.insertAdjacentHTML('afterbegin', elemento);
            inputFile.value = '';
        }

        inpPost.val('');
        inpPost.focus();
    });
});
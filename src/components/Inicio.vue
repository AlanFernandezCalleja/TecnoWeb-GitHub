<style>



.my-container {
    background-color: rgba(52, 50, 54, 0.801);
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: all 0.2s ease-in;


}

h1 {

    margin-top: 15px;
    text-align: center;
    padding: 1.3vh;

}

.my-container:hover {
    background-color: rgba(33, 1, 45, 0.621)
}
</style>

<template>
    <!-- Contenedor principal de la página -->
    <div class="page-container"> 
        <div class="container">
            <h1 class="titulo">Inicio</h1>
  
            <!-- Contenedor del carousel -->
            <div class="carousel-container">
                <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnRFrN_6ffvdBxsXG1HOgLPX3ngY4OMkAmLl5yu4nbA&s" class="d-block w-100" alt="Imagen 1">
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnRFrN_6ffvdBxsXG1HOgLPX3ngY4OMkAmLl5yu4nbA&s" class="d-block w-100" alt="Imagen 2">
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnRFrN_6ffvdBxsXG1HOgLPX3ngY4OMkAmLl5yu4nbA&s" class="d-block w-100" alt="Imagen 3">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
  
            <!-- Tarjetas en fila -->
            <div class="row mt-5 justify-content-center">
                <!-- Tarjeta 1 -->
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
                        <img src="../assets/fondo.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Feria del empleo UCB</h5>
                            <p class="card-text">Nuevamente la Universidad Católica Boliviana “San Pablo” (U.C.B.), organiza a nivel nacional, del 10 al 28 de julio de 2023, la tercera versión de la “Ferial del empleo UCB”.</p>
                            <a href="#" class="btn btn-primary">Ver</a>
                        </div>
                    </div>
                </div>
                
                <!-- Tarjeta 2 -->
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
                        <img src="../assets/fondo.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Feria del empleo UCB</h5>
                            <p class="card-text">Nuevamente la Universidad Católica Boliviana “San Pablo” (U.C.B.), organiza a nivel nacional, del 10 al 28 de julio de 2023, la tercera versión de la “Ferial del empleo UCB”.</p>
                            <a href="#" class="btn btn-primary">Ver</a>
                        </div>
                    </div>
                </div>
                
                <!-- Tarjeta 3 -->
                <div class="col-md-4">
                    <div class="card" style="width: 100%;">
                        <img src="../assets/fondo.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Feria del empleo UCB</h5>
                            <p class="card-text">Nuevamente la Universidad Católica Boliviana “San Pablo” (U.C.B.), organiza a nivel nacional, del 10 al 28 de julio de 2023, la tercera versión de la “Ferial del empleo UCB”.</p>
                            <a href="#" class="btn btn-primary">Ver</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InicioPage'
}
</script>
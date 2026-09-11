<template>
    <div class="bienestar">
        <section class="descripcion">
            <h1>Biblioteca</h1>
            <p>Ofrece: consultas en sala, préstamos a domicilio, préstamo interbibliotecario (PIP), talleres de lectura, capacitaciones, acceso a TIC, asesorías en búsqueda de información y asesorías en uso adecuado del catálogo bibliográfico.</p>
        </section>
        <section class="encargada">
            <div class="foto">
                <img src="/images/funcionarios/fun_biblioteca.jpg" alt="Yudith Milagros Martínez Bautista">
            </div>
            <div class="informacion">
                <h2>Información de contacto</h2>
                <p><strong>Nombre encargada:</strong> Yudith Milagros Martínez Bautista</p>
                <p><strong>Cargo:</strong> Bibliotecario</p>
                <p><strong>Teléfono:</strong> 3125848032</p>
                <p><strong>Correo:</strong> ymmartinez@sena.edu.co</p>
                <h3>Horarios</h3>
                <p>7:00 a. m. - 10:00 p. m. (Lunes a viernes)</p>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.bienestar {
    width: 100%;
    min-height: 100vh;
    padding: 40px 20px;
    background-image: linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url("/images/biblioteca.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.descripcion {
    max-width: 1000px;
    margin: 0 auto 40px;
    padding: 30px;
    line-height: 1.7;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.65);
    border-radius: 15px;;
}

.descripcion h1 {
    margin-bottom: 20px;
    color: #39a900;
    font-size: 32px;
    text-align: center;
}

.descripcion p {
    margin-bottom: 15px;
    color: #333;
    font-size: 16px;
    line-height: 1.7;
    text-align: justify;
}

.encargada {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 35% 65%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.80);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.80);;
}

.foto {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background: rgba(57,169,0,0.12);
}

.foto img {
    width: 100%;
    max-width: 250px;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}

.informacion {
    padding: 30px;
}

.informacion h2 {
    margin-bottom: 20px;
    color: #39a900;
    font-size: 27px;
}

.informacion h3 {
    margin-top: 25px;
    margin-bottom: 12px;
    color: #333;
    font-size: 20px;
}

.informacion p {
    margin-bottom: 12px;
    color: #333;
    font-size: 16px;
    line-height: 1.6;
}

.informacion strong {
    color: #39a900;
}

@media (max-width: 700px) {
    .bienestar {
        padding: 20px 10px;
    }

    .encargada {
        grid-template-columns: 1fr;
    }

    .foto img {
        height: 300px;
    }

    .descripcion {
        padding: 20px;
    }

    .descripcion h1 {
        font-size: 26px;
    }

    .informacion {
        padding: 20px;
    }
}
</style>
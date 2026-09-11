<template>
    <div class="inicio">

        <!-- Contenido principal -->
        <section class="hero">
            <div class="hero-contenido">
                <span class="etiqueta">SENA - Centro Agroturístico</span>

                <h1>Bienvenidos al SENA</h1>

                <p class="descripcion">
                    Formación para el trabajo, el desarrollo humano y el fortalecimiento
                    de las comunidades. Conoce nuestra oferta de formación y las
                    oportunidades que tenemos para ti.
                </p>

            </div>
        </section>

        <!-- Información -->
        <section class="informacion">
            <div class="tarjeta">
                <h2>Formación para el futuro</h2>
                <p>
                    En el SENA podrás adquirir conocimientos, habilidades y competencias
                    que te permitirán prepararte para el mundo laboral y contribuir al
                    desarrollo de tu región.
                </p>
            </div>

            <div class="tarjeta">
                <h2>Centro Agroturístico</h2>
                <p>
                    Nuestro centro ofrece espacios y programas orientados a la formación
                    integral, la innovación, el emprendimiento y el desarrollo sostenible.
                </p>
            </div>

            <div class="tarjeta">
                <h2>Oportunidades para todos</h2>
                <p>
                    Encuentra programas de formación que se adapten a tus intereses y
                    fortalece tus capacidades para alcanzar tus metas profesionales.
                </p>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-contenido">

                <div class="footer-seccion">
                    <h3>SENA</h3>
                    <p>
                        Servicio Nacional de Aprendizaje
                    </p>
                    <p>
                        Centro Agroturístico - San Gil
                    </p>
                </div>

                <div class="footer-seccion">
                    <h3>Contacto</h3>
                    <p>San Gil, Santander</p>
                    <p>Colombia</p>
                    <p>Servicio Nacional de Aprendizaje - SENA</p>
                </div>

            </div>

            <div class="footer-bottom">
                <p>
                    © 2026 SENA - Centro Agroturístico. Todos los derechos reservados.
                </p>
            </div>
        </footer>

    </div>
</template>

<style scoped>
.inicio {
    width: 100%;
    min-height: 100vh;
    background-color: #f4f4f4;
}

.hero {
    width: 100%;
    min-height: 90vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 60px 20px;

    background-image:
        linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
        ),
        url("/images/SENA-AGROTURISTICO-SAN-GIL.jpg");

    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    color: white;
}

.hero-contenido {
    max-width: 900px;
    text-align: center;
}

.etiqueta {
    display: inline-block;

    margin-bottom: 20px;
    padding: 8px 18px;

    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 30px;

    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.hero h1 {
    margin: 0 0 20px;

    font-size: clamp(45px, 7vw, 80px);
    font-weight: 800;
}

.descripcion {
    max-width: 800px;
    margin: 0 auto 35px;
    color: #3a3838;
    font-size: 19px;
    line-height: 1.7;
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.45);
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}


.informacion {
    width: 100%;
    max-width: 1200px;

    margin: 0 auto;

    padding: 70px 20px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

.tarjeta {
    position: relative;
    overflow: hidden;

    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

    transition: transform 0.1.5s ease;
}

.tarjeta::before {
    content: "";
    position: absolute;
    top: 0;
    left: -120%;
    width: 70%;
    height: 100%;

    background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.75),
        transparent
    );

    transform: skewX(-20deg);
    transition: left 1.5s ease;
}

.tarjeta:hover::before {
    left: 130%;
}

.tarjeta:hover {
    transform: translateY(-5px);
}


.tarjeta h2 {
    margin-bottom: 15px;
    color: #39a900;
    font-size: 22px;
}

.tarjeta p {
    color: #555;
    line-height: 1.7;
}


.footer {
    width: 100%;

    background-color: #222;
    color: white;
}

.footer-contenido {
    max-width: 1200px;

    margin: 0 auto;

    padding: 50px 20px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 40px;
}

.footer-seccion h3 {
    margin-bottom: 20px;

    color: #39a900;

    font-size: 20px;
}

.footer-seccion p {
    margin: 8px 0;

    color: #ccc;

    line-height: 1.6;
}

.footer-seccion a {
    display: block;

    margin: 10px 0;

    color: #ccc;

    text-decoration: none;

    transition: 0.3s;
}

.footer-seccion a:hover {
    color: #39a900;
}

.footer-bottom {
    padding: 20px;

    border-top: 1px solid #444;

    text-align: center;
}

.footer-bottom p {
    margin: 0;

    color: #aaa;

    font-size: 14px;
}

@media (max-width: 768px) {

    .hero {
        min-height: 80vh;
        background-attachment: scroll;
    }

    .descripcion {
        font-size: 16px;
    }

    .informacion {
        grid-template-columns: 1fr;
    }

    .footer-contenido {
        grid-template-columns: 1fr;

        text-align: center;
    }

}
</style>

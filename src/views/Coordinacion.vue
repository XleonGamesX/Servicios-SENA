<template>
  <div class="coordinacion">
    <main class="contenido">

      <section class="descripcion">

        <img
          class="img_lugar"
          src="/images/coordinacion.jpg"
          alt="Coordinación Académica"
        >

        <div class="eyebrow">SERVICIOS · COORDINACIÓN</div>

        <h1>Coordinación Académica</h1>

        <p>
          La coordinación brinda apoyo en diferentes situaciones relacionadas
          con los aprendices y su proceso de formación en el SENA. Se encarga
          de atender novedades como retiros, deserciones, traslados y
          aplazamientos. También apoya la organización de los instructores y
          la programación de los espacios de formación, procurando que los
          ambientes estén disponibles y en buenas condiciones para las
          actividades.
        </p>

        <div class="meta">
          <span>Atención al aprendiz</span>
          <span>Procesos académicos</span>
          <span>Programación</span>
        </div>

        <img
          class="img_sena"
          src="/images/SENA.webp"
          alt="SENA"
        >

      </section>

      <section class="encargada">

        <div class="foto">
          <div class="foto-label">PERSONAL RESPONSABLE</div>

          <img
            src="/images/funcionarios/fun_coordinacion.jpeg"
            alt="Luis Carlos Reina"
          >
        </div>

        <div class="informacion">

          <div class="section-head">
            <span class="numero">01</span>
            <h2>Información de contacto</h2>
          </div>

          <div class="datos">

            <div class="dato">
              <span>Nombre encargado</span>
              <strong>Luis Carlos Reina</strong>
            </div>

            <div class="dato">
              <span>Cargo</span>
              <strong>Coordinador académico</strong>
            </div>

            <div class="dato">
              <span>Teléfono</span>
              <strong>316 6783027</strong>
            </div>

            <div class="dato">
              <span>Correo</span>
              <strong>lreinas@sena.edu.com</strong>
            </div>

          </div>

          <div class="horario">

            <div>
              <span class="numero">02</span>
              <h3>Horarios</h3>
            </div>

            <p>Horario de atención</p>

            <span class="dias">
              7:30 a. m. - 12:00 p. m.<br>
              Lunes a viernes
            </span>

          </div>

        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.coordinacion {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background-image:
    linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),
    url("/images/coordinacion.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #008507;
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
}

.contenido {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0,1.15fr) minmax(400px,.85fr);
  gap: 28px;
}

.descripcion,
.encargada {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  box-shadow: 0 10px 25px -5px rgba(0,50,77,.05);
}

.descripcion:hover,
.encargada:hover {
  transform: translateY(-3px);
}

.img_lugar {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: 24px;
}

.descripcion {
  min-height: 540px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  border-top: 6px solid #39a900;
}

.eyebrow {
  font-size: 13px;
  letter-spacing: 1px;
  color: #39a900;
  font-weight: 700;
}

.descripcion h1 {
  margin: 12px 0 20px;
  font-size: clamp(40px,5vw,60px);
  color: #008507;
}

.descripcion p {
  max-width: 720px;
  color: #475569;
  font-size: 16.5px;
  line-height: 1.7;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 36px;
}

.meta span {
    position: relative;
  overflow: hidden;

  padding: 8px 16px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 20px;

  color: #166534;
  font-size: 13px;
  font-weight: 600;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease,
    color 0.3s ease;

  cursor: pointer;

}

.meta span::before {
  content: "";

  position: absolute;
  top: 0;
  left: -120%;

  width: 75%;
  height: 100%;

  background: linear-gradient(
    120deg,
    transparent 20%,
    rgba(255, 255, 255, 0.8) 50%,
    transparent 80%
  );

  transform: skewX(-20deg);

  transition: left 1s ease;

  pointer-events: none;
}

.meta span:hover::before {
  left: 130%;
}

.meta span:hover {
  background: #39a900;
  color: #ffffff;
  border-color: #39a900;

  transform: translateY(-3px);

  box-shadow:
    0 6px 15px rgba(57, 169, 0, 0.25);
}

.meta span:hover {
  background: #39a900;
  color: #ffffff;
  border-color: #39a900;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(57, 169, 0, 0.25);
}

.img_sena {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: auto auto;
}

.encargada {
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  border-top: 6px solid #0a8a15;
}

.foto {
  position: relative;
  padding: 24px;
  background: linear-gradient(180deg,#f8fafc,#f1f5f9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.foto-label {
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 1;
  background: rgba(255,255,255,.95);
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 11px;
  font-weight: 700;
  color: #008507;
}

.foto img {
  max-width: 100%;
  max-height: 420px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
}

.informacion {
  padding: 32px;
}

.section-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.numero {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #39a900;
  color: white;
  font-size: 12px;
  font-weight: 700;
}

.informacion h2 {
  font-size: 22px;
  color: #008507;
}

.datos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #f1f5f9;
}

.dato {
  padding: 16px 12px 16px 0;
  border-bottom: 1px solid #f1f5f9;
}

.dato:nth-child(even) {
  padding-left: 16px;
  border-left: 1px solid #f1f5f9;
}

.dato span {
  display: block;
  margin-bottom: 4px;
  color: #64748b;
  font-size: 12px;
}

.dato strong {
  color: #141414;
  font-size: 14.5px;
  overflow-wrap: anywhere;
}

.horario {
  margin-top: 24px;
  padding: 20px;
  background: linear-gradient(135deg,#f0fdf4,#dcfce7);
  border: 1px solid #bbf7d0;
  border-radius: 18px;
}

.horario > div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.horario h3 {
  color: #166534;
  font-size: 18px;
}

.horario p {
  margin-top: 12px;
  color: #008507;
  font-size: 15px;
  font-weight: 700;
}

.dias {
  color: #15803d;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .contenido {
    grid-template-columns: 1fr;
  }

  .descripcion {
    min-height: auto;
  }
}

@media (max-width: 600px) {
  .coordinacion {
    padding: 20px 12px;
  }

  .descripcion {
    padding: 20px;
  }

  .descripcion h1 {
    font-size: 38px;
  }

  .datos {
    grid-template-columns: 1fr;
  }

  .dato:nth-child(even) {
    padding-left: 0;
    border-left: 0;
  }

  .informacion {
    padding: 20px;
  }
}
</style>

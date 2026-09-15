<template>
  <div class="bienestar">
    <main class="contenido">

      <section class="descripcion">
        <img
          class="img_lugar"
          src="/images/bienestar.jpg"
          alt="Bienestar al Aprendiz"
        >

        <div class="eyebrow">SERVICIOS · BIENESTAR</div>

        <h1>Bienestar al Aprendiz</h1>

        <p>
          Bienestar al aprendiz es una estrategia institucional para contribuir
          en la permanencia de los aprendices en su proceso formativo. Los
          servicios que presta están alineados con los objetivos estratégicos
          y operativos establecidos en la Política Nacional Integral de
          Bienestar al aprendiz, tales como el reconocimiento de la Cultura
          como creadora de identidad, generadora de inclusión y catalizadora
          de diversidad; generación en los aprendices de prácticas asociadas
          a la prevención de la enfermedad y promoción de la salud a través
          de la gestión con entidades competentes (salud física y mental);
          fortalecimiento de habilidades blandas y para la vida; deporte,
          actividad física y aprovechamiento del tiempo libre como elementos
          fundamentales en el mejoramiento de la formación profesional
          integral; promoción de expresiones de arte de los aprendices en su
          formación profesional integral.
        </p>

        <div class="meta">
          <span>Salud y bienestar</span>
          <span>Deporte</span>
          <span>Apoyos socioeconómicos</span>
          <span>Arte y cultura</span>
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
            src="/images/funcionarios/fun_bienestar.jpg"
            alt="Maria Delea Arenas Mejía"
          >
        </div>

        <div class="informacion">

          <div class="section-head">
            <span class="numero">01</span>
            <h2>Información de contacto</h2>
          </div>

          <div class="datos">

            <div class="dato">
              <span>Nombre encargada</span>
              <strong>Maria Delea Arenas Mejía</strong>
            </div>

            <div class="dato">
              <span>Cargo</span>
              <strong>Líder de Bienestar al Aprendiz</strong>
            </div>

            <div class="dato">
              <span>Teléfono</span>
              <strong>3176377670</strong>
            </div>

            <div class="dato">
              <span>Correo</span>
              <strong>mdarenas@sena.edu.com</strong>
            </div>

          </div>

          <div class="horario">

            <div>
              <span class="numero">02</span>
              <h3>Horarios</h3>
            </div>

            <p>
              Enfermería - Principal
            </p>

            <span class="dias">
              6:30 a. m. a 10:30 a. m.<br>
              4:00 p. m. a 8:00 p. m.
            </span>

            <p>
              Enfermería - Unisangil
            </p>

            <span class="dias">
              8:00 a. m. a 12:00 p. m.<br>
              4:00 p. m. a 8:00 p. m.
            </span>

            <p>
              Apoyos socioeconómicos
            </p>

            <span class="dias">
              8:00 a. m. a 12:00 p. m.<br>
              2:00 p. m. a 6:00 p. m.
            </span>

            <p>
              Líder de Bienestar al Aprendiz
            </p>

            <span class="dias">
              7:30 a. m. a 12:00 p. m.<br>
              2:00 p. m. a 6:00 p. m.
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

.bienestar {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background-image:
    linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
    url("/images/bienestar.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #008507;
  font-family: 'Geist', ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.contenido {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(400px, 0.85fr);
  gap: 28px;
  align-items: stretch;
}

.descripcion,
.encargada {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  box-shadow:
    0 10px 25px -5px rgba(0, 50, 77, 0.05),
    0 8px 10px -6px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.descripcion:hover,
.encargada:hover {
  transform: translateY(-3px);
  box-shadow:
    0 20px 30px -10px rgba(57, 169, 0, 0.15),
    0 10px 12px -5px rgba(0, 0, 0, 0.04);
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
  line-height: 1.33;
  letter-spacing: 1px;
  color: #39a900;
  font-weight: 700;
  text-transform: uppercase;
}

.descripcion h1 {
  margin: 12px 0 20px;
  font-size: clamp(40px, 5vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-weight: 800;
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
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 1px solid #e2e8f0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.foto-label {
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 1;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  flex: none;
  border-radius: 50%;
  background: #39a900;
  color: #ffffff;
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
  min-width: 0;
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
  display: block;
  color: #141414;
  font-size: 14.5px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.horario {
  margin-top: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 1px solid #bbf7d0;
  border-radius: 18px;
}

.horario > div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.horario h3 {
  font-size: 18px;
  color: #166534;
}

.horario p {
  margin-top: 12px;
  color: #008507;
  font-size: 15px;
  font-weight: 700;
}

.dias {
  display: block;
  margin-top: 2px;
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
  .bienestar {
    padding: 20px 12px;
  }

  .descripcion {
    padding: 20px;
  }

  .descripcion h1 {
    font-size: 38px;
  }

  .encargada {
    border-radius: 20px;
  }

  .foto {
    padding: 16px;
  }

  .foto img {
    max-height: 350px;
  }

  .informacion {
    padding: 20px;
  }

  .datos {
    grid-template-columns: 1fr;
  }

  .dato:nth-child(even) {
    padding-left: 0;
    border-left: 0;
  }
}
</style>
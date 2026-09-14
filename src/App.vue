<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-white text-black" height-hint="98">

      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img alt="Quasar logo" src="/images/SENA.webp">
          </q-avatar >
          <p class="sena-cat">SENA CAT</p>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" style="display: flex; justify-content: center; align-items: center; flex-direction: column;" side="left" behavior="mobile" bordered>
      <img class="imagen-barra-desplegable" src="/images/SENA.webp" alt="logo SENA">
      <p class="titulo-servicios" style="font-size: 26px;">Servicios SENA</p>
      <q-btn class="bg-light-green" to="/">
        <q-icon name="home" />
        <span>Inicio</span>
      </q-btn>

      <q-btn class="bg-light-green" to="/enfermeria">
        <q-icon name="medical_services" />
        <span>Enfermería</span>
      </q-btn>

      <q-btn class="bg-light-green" to="/bienestar">
        <q-icon name="favorite" />
        <span>Bienestar</span>
      </q-btn>

      <q-btn class="bg-light-green" to="/biblioteca">
        <q-icon name="menu_book" />
        <span>Biblioteca</span>
      </q-btn>

      <q-btn class="bg-light-green" to="/cafeteria">
        <q-icon name="restaurant" />
        <span>Cafetería</span>
      </q-btn>

      <q-btn class="bg-light-green" to="/coordinacion">
        <q-icon name="school" />
        <span>Coordinación</span>
      </q-btn>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
:deep(.q-toolbar-title){
  display:flex;
  align-items:center;
  flex-direction:row;
}
:deep(.q-drawer .q-btn){
  position:relative;
  overflow:hidden;
  width:200px;
  min-height:45px;
  padding:12px 15px;
  margin-bottom:12px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  background:rgba(255,255,255,0.72);
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
  border:1px solid rgba(255,255,255,0.6);
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
  color:#1c5f20;
  font-weight:bold;
  transition:transform 0.3s ease,background 0.3s ease,box-shadow 0.3s ease;
}
:deep(.q-drawer .q-btn .q-btn__content){
  width:100%;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  text-align:left;
}
:deep(.q-drawer .q-btn .q-icon){
  width:25px;
  min-width:25px;
  height:25px;
  margin-right:15px;
  display:flex;
  align-items:center;
  justify-content:center;
}
:deep(.q-drawer .q-btn span){
  display:block;
  text-align:left;
  white-space:nowrap;
}
.sena-cat{
  color:#2f912f;
  margin:0 0 0 20px;
  padding:0;
  display:inline-block;
}
.titulo-servicios{
  margin:20px 0 18px;
  padding-bottom:8px;
  color:#1c5f20;
  font-size:22px;
  font-weight:700;
  text-align:center;
  border-bottom:2px solid #8bc34a;
  letter-spacing:0.5px;
}
.imagen-barra-desplegable{
  width:70px;
  height:70px;
  border-radius:50%;
}
:deep(.drawer-menu .q-drawer__content){
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:20px;
}
:deep(.q-drawer .q-btn::before){
  content:"";
  position:absolute;
  top:0;
  left:-120%;
  width:75%;
  height:100%;
  background:linear-gradient(120deg,transparent 20%,rgba(255,255,255,0.8) 50%,transparent 80%);
  transform:skewX(-20deg);
  transition:left 1s ease;
  pointer-events:none;
}
:deep(.q-drawer .q-btn:hover::before){
  left:130%;
}
:deep(.q-drawer .q-btn:hover){
  transform:translateY(-3px);
}

</style>
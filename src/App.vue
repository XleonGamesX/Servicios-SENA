<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-white text-black" height-hint="98">

      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img alt="Quasar logo" src="/images/SENA.webp">
          </q-avatar style="color:bg-green">
          SENA CAT
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" style="display: flex; justify-content: center; align-items: center; flex-direction: column;" side="left" behavior="mobile" bordered>
      <p style="font-size: 26px;">Servicios SENA:</p>
      <q-btn class="bg-green" to="/">Inicio</q-btn><br>
      <q-btn class="bg-light-green" to="/enfermeria">Enfermeria</q-btn><br>
      <q-btn class="bg-light-green" to="/bienestar">Bienestar</q-btn><br>
      <q-btn class="bg-light-green" to="/biblioteca">Biblioteca</q-btn><br>
      <q-btn class="bg-light-green" to="/cafeteria">Cafeteria</q-btn><br>
      <q-btn class="bg-light-green" to="/coordinacion">Coordinacion</q-btn>
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
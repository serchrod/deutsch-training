<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
// No se necesita el estado de los verbos aquí
</script>

<template>
  <header>
    <div class="wrapper">
        <nav>
            <RouterLink to="/" class="nav-link">🏠 Main Menu</RouterLink>
        </nav>
        <hr>
    </div>
  </header>

  <main class="content-area">
    <RouterView />
  </main>
</template>

<style>
/* Estilos globales para App.vue */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    min-height: 100vh;
}
#app {
    /* 💥 CORRECCIÓN LAYOUT: Remover padding aquí para que el fondo gris llegue a los bordes */
    margin: 0; 
    padding: 0; /* Lo movemos al 'header' y '.content-area' */
    width: 100%;
}
.wrapper {
    /* Centra la navegación y el separador */
    max-width: 1000px; 
    margin: 0 auto;
}
header {
    margin-bottom: 20px;
    padding: 20px 20px 0; /* Añadimos padding superior y lateral para que el contenido no toque los bordes */
}
nav {
    display: flex;
    padding: 10px 0;
}
/* ... (El resto de estilos de nav y hr quedan igual) */
.content-area {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    /* CONTROL LAYOUT: Define un área de contenido centrada y legible */
    max-width: 960px; 
    margin: 0 auto; /* Centramos el contenido */
    
    /* 💥 CORRECCIÓN LAYOUT: El padding lateral ya está incluido en los 960px, pero el padding en App.vue lo duplicaba */
}

/* El resto de estilos de App.vue */
.nav-link {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    padding: 5px 10px;
    border: 1px solid #007bff;
    border-radius: 4px;
    transition: background-color 0.3s;
}
.nav-link:hover {
    background-color: #e9f2ff;
}
hr {
    border: 0;
    height: 1px;
    background: #ddd;
    margin: 10px 0;
}
</style>
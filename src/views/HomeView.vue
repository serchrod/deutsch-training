<script setup lang="ts">
import { RouterLink } from 'vue-router';
// No se necesita lógica compleja aquí
</script>

<template>
  <div class="home-container">
    <h1>Welcome to the German Trainer!</h1>
    <p>Select a module to begin your practice.</p>

    <div class="menu-options">
      <RouterLink to="/verb-training" class="menu-link">
        <div class="link-card">
          <h2>Verb Training 🏋️‍♂️</h2>
          <p>Practice conjugating German verbs in various tenses.</p>
        </div>
      </RouterLink>

         <RouterLink to="/noun-training" class="menu-link">
        <div class="link-card">
          <h2>Vocabulary (Nouns) 📚</h2>
          <p>Practice Articles and plural.</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
}

/* --- CORRECCIÓN DE COLOR NEGRO --- */
h1 {
  color: #000000; /* Título principal en negro */
  margin-bottom: 5px;
}
.home-container p {
  color: #333333; /* Subtítulo en negro oscuro para mayor contraste */
  margin-bottom: 30px;
}
/* --------------------------------- */

.menu-options {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.menu-link {
  text-decoration: none;
  color: inherit;
}

.link-card {
  border: 2px solid #007bff;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #fff;
}

.link-card h2 {
    color: #007bff; /* Títulos de la tarjeta en azul */
    margin-top: 0;
    font-size: 1.4em;
}

.menu-link:hover .link-card {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.3);
}

.disabled {
    border: 2px dashed #ccc;
    background-color: #f9f9f9;
    cursor: not-allowed;
    opacity: 0.6;
}
.disabled h2 {
    color: #6c757d;
}
</style>
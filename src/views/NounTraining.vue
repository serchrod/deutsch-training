<script setup lang="ts">
import { ref, computed, onMounted, type Ref } from 'vue';
import { useNounStore } from '../stores/nounStore'; 
import { INoun } from '../types/noun'; 

// --- Inicialización de Stores ---
const nounStore = useNounStore();
// Asegúrate de que los datos se carguen al inicio del uso del componente
nounStore.loadInitialNouns(); 

// Lista de sustantivos cargada desde el store
const nounsData = computed(() => nounStore.getAllNouns.length ? nounStore.getAllNouns : []);

// --- Estado de la Sesión ---
const selectedNounIndex = ref(-1); // -1 indica que no hay palabra seleccionada
const globalMessage = ref({ text: '', class: '' });
const showSolution = ref(false); // Controla si se muestran las respuestas

// --- Respuestas del Usuario ---
const userArticle = ref('');
const userNoun = ref(''); 
const userPlural = ref(''); 

// --- Resultados de Campo (para la revisión) ---
const articleResult: Ref<string | null> = ref(null);
const nounResult: Ref<string | null> = ref(null);
const pluralResult: Ref<string | null> = ref(null); 

// --- Propiedad Computada: Sustantivo Actual ---
const currentNoun = computed<INoun | undefined>(() => {
    if (selectedNounIndex.value === -1 || nounsData.value.length === 0) {
        return undefined;
    }
    return nounsData.value[selectedNounIndex.value]; 
});

// --- Lógica de Sorteo y Flujo ---

/**
 * Selecciona un índice aleatorio de la lista de sustantivos.
 */
const pickRandomNoun = () => {
    if (nounsData.value.length > 0) {
        // Asegura que no se repita inmediatamente la misma palabra si hay más de una
        let randomIndex: number;
        do {
            randomIndex = Math.floor(Math.random() * nounsData.value.length);
        } while (randomIndex === selectedNounIndex.value && nounsData.value.length > 1);
        
        selectedNounIndex.value = randomIndex;
    }
}

/**
 * Limpia los mensajes y resultados de la sesión anterior.
 */
const clearResults = () => {
    articleResult.value = null;
    nounResult.value = null;
    pluralResult.value = null;
    globalMessage.value = { text: '', class: '' };
}

/**
 * Pasa al siguiente sustantivo (aleatorio).
 */
const loadNextNoun = () => {
    if (nounsData.value.length === 0) return;
    
    // 1. Limpiar campos
    userArticle.value = '';
    userNoun.value = '';
    userPlural.value = '';
    
    // 2. Ocultar solución y limpiar mensajes
    showSolution.value = false;
    clearResults(); 
    
    // 3. Seleccionar el siguiente sustantivo al azar
    pickRandomNoun();
};

/**
 * Revisa la solución del usuario y muestra las respuestas correctas.
 */
const checkSolution = () => {
    if (!currentNoun.value) return;

    let failures = 0;
    const current = currentNoun.value;

    // Función auxiliar de chequeo (NO revela la respuesta, solo check/cross)
    const checkField = (userAnswer: string, correctAnswer: string, resultRef: Ref<string | null>) => {
        // Normalizamos a minúsculas y limpiamos espacios para la comparación
        if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            resultRef.value = '✅';
        } else {
            resultRef.value = '❌';
            failures++;
        }
    }

    // 1. Revisar Campos
    checkField(userArticle.value, current.article, articleResult);
    checkField(userNoun.value, current.noun, nounResult);
    checkField(userPlural.value, current.plural, pluralResult);
    
    // 2. Mostrar la Solución y Mensaje
    showSolution.value = true;

    if (failures === 0) {
        globalMessage.value = { text: '¡Felicitaciones! Todo correcto. Haz clic en Siguiente Sustantivo.', class: 'correct' };
    } else {
        globalMessage.value = { text: `Tienes ${failures} errores. Revisa la solución en la tabla.`, class: 'incorrect' };
    }
};

// Inicialización: Seleccionar el primer sustantivo aleatorio cuando el componente esté montado
onMounted(() => {
    if (nounsData.value.length > 0) {
        pickRandomNoun();
    }
});
</script>

<template>
    <div v-if="currentNoun" class="noun-training-container">
        <h1>Práctica de Vocabulario Alemán (Sustantivos) 🇩🇪</h1>
        
        <div v-if="globalMessage.text" 
             :class="['global-message', globalMessage.class]">
            {{ globalMessage.text }}
        </div>

        <h2 id="current-noun">
            ¿Cómo se dice: **{{ currentNoun.mean }}**?
        </h2>

        <table id="noun-table">
            <thead>
                <tr>
                    <th>Campo</th>
                    <th>Tu Respuesta</th>
                    <th v-if="!showSolution">Resultado</th>
                    <th v-else>Solución Correcta</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Artículo (der/die/das)</td>
                    <td>
                        <input type="text" v-model="userArticle" placeholder="Ej: der" :disabled="showSolution">
                    </td>
                    <td v-if="!showSolution" class="result-cell">
                        <span :class="{ 'correct-icon': articleResult === '✅', 'incorrect-icon': articleResult === '❌' }">{{ articleResult }}</span>
                    </td>
                    <td v-else class="solution-cell correct-answer">
                        {{ currentNoun.article }}
                    </td>
                </tr>
                <tr>
                    <td>Sustantivo (Singular)</td>
                    <td>
                        <input type="text" v-model="userNoun" placeholder="Ej: Tisch" :disabled="showSolution">
                    </td>
                    <td v-if="!showSolution" class="result-cell">
                         <span :class="{ 'correct-icon': nounResult === '✅', 'incorrect-icon': nounResult === '❌' }">{{ nounResult }}</span>
                    </td>
                    <td v-else class="solution-cell correct-answer">
                        {{ currentNoun.noun }}
                    </td>
                </tr>
                <tr>
                    <td>Sustantivo (Plural)</td>
                    <td>
                        <input type="text" v-model="userPlural" placeholder="Ej: Tische" :disabled="showSolution">
                    </td>
                    <td v-if="!showSolution" class="result-cell">
                        <span :class="{ 'correct-icon': pluralResult === '✅', 'incorrect-icon': pluralResult === '❌' }">{{ pluralResult }}</span>
                    </td>
                    <td v-else class="solution-cell correct-answer">
                        {{ currentNoun.plural }}
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="action-buttons">
            <button v-if="!showSolution" class="check-button" @click="checkSolution" :disabled="!userArticle && !userNoun && !userPlural">
                Revisar Sustantivo
            </button>

            <button v-else class="next-button" @click="loadNextNoun">
                Siguiente Sustantivo Aleatorio
            </button>
        </div>

    </div>
    <div v-else>
        <h2>Cargando datos de sustantivos...</h2>
    </div>
</template>

<style scoped>
/* --- Estilos Generales y Tipografía (Ajustada a Negro) --- */
.noun-training-container {
    color: #333333; 
}
h1 { color: #000000; text-align: center; margin-bottom: 20px;}
h2 { color: #000000; font-size: 1.5em; margin-bottom: 15px; }

/* --- Mensaje Global --- */
.global-message { padding: 15px; margin-bottom: 20px; border-radius: 4px; font-weight: bold; text-align: center; border: 1px solid transparent; }
.global-message.correct { background-color: #d4edda; color: #155724; border-color: #c3e6cb; }
.global-message.incorrect { background-color: #f8d7da; color: #721c24; border-color: #f5c6cb; }

/* --- Tabla de Práctica --- */
#noun-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
#noun-table th { 
    background-color: #007bff; 
    color: white; 
}
#noun-table th, #noun-table td { 
    border: 1px solid #ddd; 
    padding: 12px; 
    text-align: left; 
    color: #000000; /* Texto de la tabla en negro */
}
#noun-table input { 
    width: 90%; 
    padding: 8px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    color: #000000; /* Texto de entrada en negro */
}

/* --- Resultados y Solución --- */
.result-cell, .solution-cell { min-width: 150px; font-weight: bold; text-align: center; }
.correct-icon { color: #28a745; font-size: 1.2em; } 
.incorrect-icon { color: #dc3545; font-size: 1.2em; }
.correct-answer { color: #28a745; background-color: #e9f8ed; border-radius: 4px;} /* Resalta la respuesta correcta */

/* --- Botones --- */
.action-buttons { margin-top: 30px; text-align: center; }
.check-button, .next-button { 
    padding: 10px 20px; 
    border-radius: 4px; 
    cursor: pointer; 
    border: none;
    font-weight: bold;
    transition: background-color 0.2s;
}
.check-button { background-color: #007bff; color: white; }
.check-button:hover { background-color: #0056b3; }
.check-button:disabled { background-color: #adb5bd; cursor: not-allowed; }

.next-button { background-color: #28a745; color: white; }
.next-button:hover { background-color: #1e7e34; }
</style>
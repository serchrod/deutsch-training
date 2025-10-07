<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useVerbStore } from '../stores/verbStore';
import { IPersonConjugation, IVerb } from '../types/verb'; 
import { PERSON_MAP, TENSES } from '../data/constants'; 

// --- Inicialización de Stores y Constantes ---
const verbStore = useVerbStore();
verbStore.loadInitialVerbs();

const tenses = reactive(TENSES);
const personMap = reactive(PERSON_MAP);
const verbsData = verbStore.getAllVerbs; // Lista completa de verbos desde la store

// --- Estado Reactivo (Buscador, Verbos, etc.) ---

// ⭐️ NUEVO: Variable para el término de búsqueda ⭐️
const searchQuery = ref(''); 

const selectedInfinitiv = ref<string>(verbsData[0]?.infinitiv || ''); 
const selectedPerson = ref<keyof IVerb['konjugation']>('ich'); 

const userAnswers = reactive<IPersonConjugation>({
    praesens: '', praeteritum: '', perfekt: '', futur_i: ''
});

const results = reactive<{ [key in keyof IPersonConjugation]: { message: string, class: string } | null }>({
    praesens: null, praeteritum: null, perfekt: null, futur_i: null
});

const globalMessage = reactive({
    text: '',
    class: '',
});


// --- Propiedades Computadas ---

// ⭐️ NUEVO: Propiedad Computada para la lista filtrada (por infinitivo o significado) ⭐️
const filteredVerbs = computed<IVerb[]>(() => {
    const query = searchQuery.value.toLowerCase().trim();

    // Si el buscador está vacío, devuelve todos los verbos
    if (!query) {
        return verbsData;
    }

    // Filtra la lista de verbos
    return verbsData.filter(verb => {
        const matchesInfinitiv = verb.infinitiv.toLowerCase().includes(query);
        const matchesMean = verb.mean.toLowerCase().includes(query); 
        
        // Devuelve el verbo si coincide con el infinitivo O con el significado (mean)
        return matchesInfinitiv || matchesMean;
    });
});

const currentVerb = computed<IVerb | undefined>(() => {
    // Lógica para asegurar que el verbo seleccionado existe en la lista filtrada
    const currentVerbInFiltered = filteredVerbs.value.find(v => v.infinitiv === selectedInfinitiv.value);
    
    // Si el verbo seleccionado ya no está en la lista filtrada (o si no hay selección), 
    // y la lista filtrada tiene elementos, seleccionamos el primero.
    if (!currentVerbInFiltered && filteredVerbs.value.length > 0) {
        selectedInfinitiv.value = filteredVerbs.value[0].infinitiv;
        resetInputs();
    }
    
    // Devolvemos el verbo actualmente seleccionado de la lista completa
    return verbsData.find(v => v.infinitiv === selectedInfinitiv.value);
});


// --- Métodos ---

/** Carga un nuevo verbo/persona, limpia inputs, resultados y mensajes. (Automático) */
const resetInputs = () => {
    Object.keys(userAnswers).forEach(key => {
        userAnswers[key as keyof IPersonConjugation] = '';
        results[key as keyof IPersonConjugation] = null;
    });
    // Limpiamos el mensaje global también
    globalMessage.text = '';
    globalMessage.class = '';
};

/** Borra el resultado de una celda cuando el usuario empieza a escribir. */
const clearResult = (tenseKey: keyof IPersonConjugation) => {
    results[tenseKey] = null;
};

/** REVISA Y MUESTRA LA SOLUCIÓN solo si el campo es incorrecto, sin usar alerts. */
const checkAndRevealSolution = () => {
    if (!currentVerb.value) return;

    let failures = 0;
    const expected = currentVerb.value.konjugation[selectedPerson.value];

    // Limpiamos el mensaje global antes de empezar una nueva revisión
    globalMessage.text = '';
    globalMessage.class = '';

    Object.keys(TENSES).forEach(tenseKey => {
        const key = tenseKey as keyof IPersonConjugation;
        
        const userAnswer = userAnswers[key].trim().toLowerCase();
        const correctAnswer = expected[key].trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            // Caso 1: CORRECTO
            results[key] = { message: 'Correcto! ✅', class: 'correct' };
        } else {
            // Caso 2: INCORRECTO -> REVELAR SOLUCIÓN
            results[key] = { message: `❌ Solución: ${expected[key]}`, class: 'incorrect' };
            failures++;
        }
    });

    // Actualizamos el mensaje global en pantalla (reemplaza alert)
    if (failures === 0) {
        globalMessage.text = '¡Excelente! Todas las conjugaciones son correctas. 🎉';
        globalMessage.class = 'correct';
    } else {
        globalMessage.text = `Tienes ${failures} errores. Revisa los campos marcados en rojo.`;
        globalMessage.class = 'incorrect';
    }
};

// Inicialización
if (!currentVerb.value && verbsData.length > 0) {
    selectedInfinitiv.value = verbsData[0].infinitiv;
    resetInputs();
}
</script>

<template>
    <div v-if="currentVerb">
        <h1>German Conjugation Practice 🇩🇪</h1>

        <div class="controls">
            <label for="verb-search">Buscar Verbo:</label>
            <input 
                id="verb-search"
                type="text"
                v-model="searchQuery"
                placeholder="Ej. 'laufen' o 'to run'"
                style="padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 250px;"
                @input="resetInputs"
            />
            
            <label for="verb-select">Verbo Seleccionado:</label>
            <select id="verb-select" v-model="selectedInfinitiv" @change="resetInputs">
                <option v-for="verb in filteredVerbs" :key="verb.infinitiv" :value="verb.infinitiv">
                    {{ verb.infinitiv }} ({{ verb.mean }})
                </option>
                <option v-if="filteredVerbs.length === 0" disabled value="">No se encontraron verbos</option>
            </select>

            <label for="person-select">Persona:</label>
            <select id="person-select" v-model="selectedPerson" @change="resetInputs">
                <option v-for="(label, key) in personMap" :key="key" :value="key">
                    {{ label }}
                </option>
            </select>
        </div>
        
        <div v-if="globalMessage.text" 
             :class="['global-message', globalMessage.class]">
            {{ globalMessage.text }}
        </div>

        <h2 id="current-verb">
            Verbo: **{{ currentVerb.infinitiv }}** - Persona: **{{ personMap[selectedPerson] }}**
        </h2>
        <p id="translation" class="auxiliary-info">Traducción: {{ currentVerb.espanol }}</p>
        <p id="auxiliary-perfekt" class="auxiliary-info">Auxiliar Perfekt: {{ currentVerb.auxiliar_perfekt }}</p>

        <table id="conjugation-table">
            <thead>
                <tr>
                    <th>Tiempo Gramatical</th>
                    <th>Tu Respuesta</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tenseLabel, tenseKey) in tenses" :key="tenseKey">
                    <td>{{ tenseLabel }}</td>
                    <td>
                        <input type="text" 
                               :placeholder="tenseLabel"
                               v-model="userAnswers[tenseKey as keyof IPersonConjugation]" 
                               @input="clearResult(tenseKey as keyof IPersonConjugation)">
                    </td>
                    <td class="result-cell">
                        <div v-if="results[tenseKey as keyof IPersonConjugation]" 
                             :class="['result-message', results[tenseKey as keyof IPersonConjugation]?.class]">
                            {{ results[tenseKey as keyof IPersonConjugation]?.message }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <button class="show-solution" @click="checkAndRevealSolution">Revisar y Mostrar Solución</button>
    </div>
    <div v-else>
        <h2>Loading data...</h2>
    </div>
</template>

<style scoped>
/* Estilos para el componente */
h1 { color: #333; text-align: center; margin-bottom: 20px;}
h2 { font-size: 1.5em; margin-bottom: 10px; }

/* CORRECCIÓN COLOR NEGRO DEL TÍTULO */
h2#current-verb { 
    font-size: 1.5em; 
    margin-bottom: 10px; 
    color: #000000;
}
h2#current-verb strong {
    color: #000000; 
}

.controls {
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;
    margin-bottom: 20px; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background-color: #e9ecef;
}
.controls label { font-weight: bold; }
.controls select, .controls button, .controls input[type="text"] { 
    padding: 8px; border-radius: 4px; border: 1px solid #ccc; cursor: pointer; 
    transition: background-color 0.2s;
}
.controls button:hover { background-color: #d1d5db; }

table { 
    width: 100%; 
    border-collapse: collapse; 
    margin-top: 20px; 
}

/* CORRECCIÓN COLOR TEXTO DE CELDAS DE LA TABLA */
th, td { 
    border: 1px solid #ddd; 
    padding: 12px; 
    text-align: left; 
    color: #000000; 
}
th { 
    background-color: #007bff; 
    color: white; 
}
td input { 
    width: 90%; 
    padding: 8px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
}
.result-cell { min-width: 150px; }
.result-message { 
    padding: 5px; 
    border-radius: 4px; 
    font-weight: bold; 
    font-size: 0.9em;
    text-align: center;
}
.correct { background-color: #d4edda; color: #155724; }
.incorrect { background-color: #f8d7da; color: #721c24; }

/* ESTILOS DEL MENSAJE GLOBAL (SUSTITUTO DE ALERT) */
.global-message {
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
    border: 1px solid transparent;
}
.global-message.correct { 
    background-color: #d4edda; 
    color: #155724; 
    border-color: #c3e6cb;
}
.global-message.incorrect { 
    background-color: #f8d7da; 
    color: #721c24; 
    border-color: #f5c6cb;
}


/* ESTILOS DEL BOTÓN AMARILLO (show-solution) */
.show-solution {
    background-color: #ffc107; 
    color: #343a40; 
    border: none; 
    padding: 10px 15px; 
    border-radius: 4px;
    cursor: pointer; 
    font-weight: bold; 
    transition: background-color 0.3s; 
    margin-top: 20px;
    display: block; 
    width: 100%;
}
.show-solution:hover {
    background-color: #e0b000;
}
.auxiliary-info { 
    font-style: italic; 
    color: #6c757d; 
    font-size: 0.9em; 
    margin-bottom: 5px; 
}
</style>
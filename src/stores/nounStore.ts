import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { INoun } from '../types/noun'; 
import { NOUNS_DATA } from '../data/nouns'; // 👈 Importamos la lista de 300 sustantivos

// Definimos la store de sustantivos
export const useNounStore = defineStore('noun', () => {
    
    // Usamos 'ref' para almacenar el estado, aunque en este caso es estático
    // Esto podría ser útil si más tarde decides cargar datos desde una API
    const nouns = ref<INoun[]>(NOUNS_DATA);

    // --- Getters (Propiedades Computadas) ---

    /**
     * Devuelve toda la lista de sustantivos.
     */
    const getAllNouns = computed(() => nouns.value);

    /**
     * Devuelve el número total de sustantivos cargados.
     */
    const getNounCount = computed(() => nouns.value.length);
    
    // --- Actions (Métodos) ---

    /**
     * Función para cargar los datos iniciales (aunque en este caso ya están en el ref)
     * La mantenemos por consistencia, si se usara una API en el futuro.
     */
    const loadInitialNouns = () => {
        if (nouns.value.length === 0) {
            nouns.value = NOUNS_DATA;
        }
        // En una aplicación real, aquí iría la lógica de llamada a la API
        console.log(`[NounStore] Sustantivos cargados: ${nouns.value.length}`);
    };

    // La store expone sus estados, getters y acciones
    return {
        // Estado
        nouns,
        
        // Getters
        getAllNouns,
        getNounCount,
        
        // Actions
        loadInitialNouns,
    };
});
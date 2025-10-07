import { defineStore } from 'pinia';
import { VERBS_DATA } from '../data/verbs'; // Importamos los datos estáticos
import { IVerb } from '../types/verb';

// Definimos el Store como un servicio
export const useVerbStore = defineStore('verb', {
    // Estado: contiene los datos reactivos del servicio
    state: () => ({
        // Tipificamos el array de verbos con nuestra interfaz IVerb
        verbs: [] as IVerb[],
    }),

    // Acciones: los métodos que modifican o inicializan el estado
    actions: {
        // Inicializa el estado cargando los datos del archivo estático
        loadInitialVerbs() {
            if (this.verbs.length === 0) {
                this.verbs = VERBS_DATA;
                console.log('Verbos cargados en el store de Pinia.');
            }
        },
        // Aquí irían acciones para añadir/modificar un verbo, o hacer un fetch
    },

    // Getters: propiedades computadas para acceder a los datos
    getters: {
        // Devuelve la lista completa de verbos
        getAllVerbs(state) {
            return state.verbs;
        },
    },
});
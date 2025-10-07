// Define el modelo para la conjugación de una sola persona (los 4 tiempos)
export interface IPersonConjugation {
    praesens: string;
    praeteritum: string;
    perfekt: string;
    futur_i: string;
}

// Define la lista de posibles pronombres personales (las claves de conjugación)
export type PersonKey = 'ich' | 'du' | 'er_sie_es' | 'wir' | 'ihr' | 'sie_sie_form';

// Define el modelo principal para un objeto Verbo
export interface IVerb {
    infinitiv: string;
    mean: string;
    auxiliar_perfekt: string;
    
    // La conjugación es un objeto cuyas claves son los pronombres
    // y cuyos valores son la estructura de conjugación definida arriba.
    konjugation: {
        [key in PersonKey]: IPersonConjugation;
    };
}
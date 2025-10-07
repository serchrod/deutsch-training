import { IVerb, PersonKey, IPersonConjugation } from '../types/verb'; 

export const VERBS_DATA: IVerb[] = [
    // --- BLOQUE 1: Verbos Fundamentales (1-20) ---
    {
        "infinitiv": "sein",
        "mean": "ser / estar",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "bin", "praeteritum": "war", "perfekt": "bin gewesen", "futur_i": "werde sein" },
            "du": { "praesens": "bist", "praeteritum": "warst", "perfekt": "bist gewesen", "futur_i": "wirst sein" },
            "er_sie_es": { "praesens": "ist", "praeteritum": "war", "perfekt": "ist gewesen", "futur_i": "wird sein" },
            "wir": { "praesens": "sind", "praeteritum": "waren", "perfekt": "sind gewesen", "futur_i": "werden sein" },
            "ihr": { "praesens": "seid", "praeteritum": "wart", "perfekt": "seid gewesen", "futur_i": "werdet sein" },
            "sie_sie_form": { "praesens": "sind", "praeteritum": "waren", "perfekt": "sind gewesen", "futur_i": "werden sein" }
        }
    },
    {
        "infinitiv": "haben",
        "mean": "tener",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "habe", "praeteritum": "hatte", "perfekt": "habe gehabt", "futur_i": "werde haben" },
            "du": { "praesens": "hast", "praeteritum": "hattest", "perfekt": "hast gehabt", "futur_i": "wirst haben" },
            "er_sie_es": { "praesens": "hat", "praeteritum": "hatte", "perfekt": "hat gehabt", "futur_i": "wird haben" },
            "wir": { "praesens": "haben", "praeteritum": "hatten", "perfekt": "haben gehabt", "futur_i": "werden haben" },
            "ihr": { "praesens": "habt", "praeteritum": "hattet", "perfekt": "habt gehabt", "futur_i": "werdet haben" },
            "sie_sie_form": { "praesens": "haben", "praeteritum": "hatten", "perfekt": "haben gehabt", "futur_i": "werden haben" }
        }
    },
    {
        "infinitiv": "werden",
        "mean": "llegar a ser / volverse",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "werde", "praeteritum": "wurde", "perfekt": "bin geworden", "futur_i": "werde werden" },
            "du": { "praesens": "wirst", "praeteritum": "wurdest", "perfekt": "bist geworden", "futur_i": "wirst werden" },
            "er_sie_es": { "praesens": "wird", "praeteritum": "wurde", "perfekt": "ist geworden", "futur_i": "wird werden" },
            "wir": { "praesens": "werden", "praeteritum": "wurden", "perfekt": "sind geworden", "futur_i": "werden werden" },
            "ihr": { "praesens": "werdet", "praeteritum": "wurdet", "perfekt": "seid geworden", "futur_i": "werdet werden" },
            "sie_sie_form": { "praesens": "werden", "praeteritum": "wurden", "perfekt": "sind geworden", "futur_i": "werden werden" }
        }
    },
    {
        "infinitiv": "können",
        "mean": "poder (habilidad)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "kann", "praeteritum": "konnte", "perfekt": "habe gekonnt", "futur_i": "werde können" },
            "du": { "praesens": "kannst", "praeteritum": "konntest", "perfekt": "hast gekonnt", "futur_i": "wirst können" },
            "er_sie_es": { "praesens": "kann", "praeteritum": "konnte", "perfekt": "hat gekonnt", "futur_i": "wird können" },
            "wir": { "praesens": "können", "praeteritum": "konnten", "perfekt": "haben gekonnt", "futur_i": "werden können" },
            "ihr": { "praesens": "könnt", "praeteritum": "konntet", "perfekt": "habt gekonnt", "futur_i": "werdet können" },
            "sie_sie_form": { "praesens": "können", "praeteritum": "konnten", "perfekt": "haben gekonnt", "futur_i": "werden können" }
        }
    },
    {
        "infinitiv": "müssen",
        "mean": "deber (obligación)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "muss", "praeteritum": "musste", "perfekt": "habe gemusst", "futur_i": "werde müssen" },
            "du": { "praesens": "musst", "praeteritum": "musstest", "perfekt": "hast gemusst", "futur_i": "wirst müssen" },
            "er_sie_es": { "praesens": "muss", "praeteritum": "musste", "perfekt": "hat gemusst", "futur_i": "wird müssen" },
            "wir": { "praesens": "müssen", "praeteritum": "mussten", "perfekt": "haben gemusst", "futur_i": "werden müssen" },
            "ihr": { "praesens": "müsst", "praeteritum": "musstet", "perfekt": "habt gemusst", "futur_i": "werdet müssen" },
            "sie_sie_form": { "praesens": "müssen", "praeteritum": "mussten", "perfekt": "haben gemusst", "futur_i": "werden müssen" }
        }
    },
    {
        "infinitiv": "wollen",
        "mean": "querer (voluntad)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "will", "praeteritum": "wollte", "perfekt": "habe gewollt", "futur_i": "werde wollen" },
            "du": { "praesens": "willst", "praeteritum": "wolltest", "perfekt": "hast gewollt", "futur_i": "wirst wollen" },
            "er_sie_es": { "praesens": "will", "praeteritum": "wollte", "perfekt": "hat gewollt", "futur_i": "wird wollen" },
            "wir": { "praesens": "wollen", "praeteritum": "wollten", "perfekt": "haben gewollt", "futur_i": "werde wollen" },
            "ihr": { "praesens": "wollt", "praeteritum": "wolltet", "perfekt": "habt gewollt", "futur_i": "werdet wollen" },
            "sie_sie_form": { "praesens": "wollen", "praeteritum": "wollten", "perfekt": "haben gewollt", "futur_i": "werden wollen" }
        }
    },
    {
        "infinitiv": "dürfen",
        "mean": "poder (permiso)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "darf", "praeteritum": "durfte", "perfekt": "habe gedurft", "futur_i": "werde dürfen" },
            "du": { "praesens": "darfst", "praeteritum": "durftest", "perfekt": "hast gedurft", "futur_i": "wirst dürfen" },
            "er_sie_es": { "praesens": "darf", "praeteritum": "durfte", "perfekt": "hat gedurft", "futur_i": "wird dürfen" },
            "wir": { "praesens": "dürfen", "praeteritum": "durften", "perfekt": "haben gedurft", "futur_i": "werde dürfen" },
            "ihr": { "praesens": "dürft", "praeteritum": "durftet", "perfekt": "habt gedurft", "futur_i": "werdet dürfen" },
            "sie_sie_form": { "praesens": "dürfen", "praeteritum": "durften", "perfekt": "haben gedurft", "futur_i": "werden dürfen" }
        }
    },
    {
        "infinitiv": "sollen",
        "mean": "deber (sugerencia)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "soll", "praeteritum": "sollte", "perfekt": "habe gesollt", "futur_i": "werde sollen" },
            "du": { "praesens": "sollst", "praeteritum": "solltest", "perfekt": "hast gesollt", "futur_i": "wirst sollen" },
            "er_sie_es": { "praesens": "soll", "praeteritum": "sollte", "perfekt": "hat gesollt", "futur_i": "wird sollen" },
            "wir": { "praesens": "sollen", "praeteritum": "sollten", "perfekt": "haben gesollt", "futur_i": "werde sollen" },
            "ihr": { "praesens": "sollt", "praeteritum": "solltet", "perfekt": "habt gesollt", "futur_i": "werdet sollen" },
            "sie_sie_form": { "praesens": "sollen", "praeteritum": "sollten", "perfekt": "haben gesollt", "futur_i": "werden sollen" }
        }
    },
    {
        "infinitiv": "mögen",
        "mean": "gustar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "mag", "praeteritum": "mochte", "perfekt": "habe gemocht", "futur_i": "werde mögen" },
            "du": { "praesens": "magst", "praeteritum": "mochtest", "perfekt": "hast gemocht", "futur_i": "wirst mögen" },
            "er_sie_es": { "praesens": "mag", "praeteritum": "mochte", "perfekt": "hat gemocht", "futur_i": "wird mögen" },
            "wir": { "praesens": "mögen", "praeteritum": "mochten", "perfekt": "haben gemocht", "futur_i": "werde mögen" },
            "ihr": { "praesens": "mögt", "praeteritum": "mochtet", "perfekt": "habt gemocht", "futur_i": "werdet mögen" },
            "sie_sie_form": { "praesens": "mögen", "praeteritum": "mochten", "perfekt": "haben gemocht", "futur_i": "werde mögen" }
        }
    },
    {
        "infinitiv": "gehen",
        "mean": "ir / andar",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "gehe", "praeteritum": "ging", "perfekt": "bin gegangen", "futur_i": "werde gehen" },
            "du": { "praesens": "gehst", "praeteritum": "gingst", "perfekt": "bist gegangen", "futur_i": "wirst gehen" },
            "er_sie_es": { "praesens": "geht", "praeteritum": "ging", "perfekt": "ist gegangen", "futur_i": "wird gehen" },
            "wir": { "praesens": "gehen", "praeteritum": "gingen", "perfekt": "sind gegangen", "futur_i": "werde gehen" },
            "ihr": { "praesens": "geht", "praeteritum": "gingt", "perfekt": "seid gegangen", "futur_i": "werdet gehen" },
            "sie_sie_form": { "praesens": "gehen", "praeteritum": "gingen", "perfekt": "sind gegangen", "futur_i": "werden gehen" }
        }
    },
    {
        "infinitiv": "kommen",
        "mean": "venir",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "komme", "praeteritum": "kam", "perfekt": "bin gekommen", "futur_i": "werde kommen" },
            "du": { "praesens": "kommst", "praeteritum": "kamst", "perfekt": "bist gekommen", "futur_i": "wirst kommen" },
            "er_sie_es": { "praesens": "kommt", "praeteritum": "kam", "perfekt": "ist gekommen", "futur_i": "wird kommen" },
            "wir": { "praesens": "kommen", "praeteritum": "kamen", "perfekt": "sind gekommen", "futur_i": "werde kommen" },
            "ihr": { "praesens": "kommt", "praeteritum": "kamt", "perfekt": "seid gekommen", "futur_i": "werdet kommen" },
            "sie_sie_form": { "praesens": "kommen", "praeteritum": "kamen", "perfekt": "sind gekommen", "futur_i": "werden kommen" }
        }
    },
    {
        "infinitiv": "fahren",
        "mean": "conducir / ir (en vehículo)",
        "auxiliar_perfekt": "haben/sein", 
        "konjugation": {
            "ich": { "praesens": "fahre", "praeteritum": "fuhr", "perfekt": "bin gefahren", "futur_i": "werde fahren" },
            "du": { "praesens": "fährst", "praeteritum": "fuhrst", "perfekt": "bist gefahren", "futur_i": "wirst fahren" },
            "er_sie_es": { "praesens": "fährt", "praeteritum": "fuhr", "perfekt": "ist gefahren", "futur_i": "wird fahren" },
            "wir": { "praesens": "fahren", "praeteritum": "fuhren", "perfekt": "sind gefahren", "futur_i": "werden fahren" },
            "ihr": { "praesens": "fahrt", "praeteritum": "fahrt", "perfekt": "seid gefahren", "futur_i": "werdet fahren" },
            "sie_sie_form": { "praesens": "fahren", "praeteritum": "fuhren", "perfekt": "sind gefahren", "futur_i": "werden fahren" }
        }
    },
    {
        "infinitiv": "bleiben",
        "mean": "quedarse",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "bleibe", "praeteritum": "blieb", "perfekt": "bin geblieben", "futur_i": "werde bleiben" },
            "du": { "praesens": "bleibst", "praeteritum": "bliebst", "perfekt": "bist geblieben", "futur_i": "wirst bleiben" },
            "er_sie_es": { "praesens": "bleibt", "praeteritum": "blieb", "perfekt": "ist geblieben", "futur_i": "wird bleiben" },
            "wir": { "praesens": "bleiben", "praeteritum": "blieben", "perfekt": "sind geblieben", "futur_i": "werde bleiben" },
            "ihr": { "praesens": "bleibt", "praeteritum": "bliebt", "perfekt": "seid geblieben", "futur_i": "werdet bleiben" },
            "sie_sie_form": { "praesens": "bleiben", "praeteritum": "blieben", "perfekt": "sind geblieben", "futur_i": "werden bleiben" }
        }
    },
    {
        "infinitiv": "sprechen",
        "mean": "hablar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "spreche", "praeteritum": "sprach", "perfekt": "habe gesprochen", "futur_i": "werde sprechen" },
            "du": { "praesens": "sprichst", "praeteritum": "sprachst", "perfekt": "hast gesprochen", "futur_i": "wirst sprechen" },
            "er_sie_es": { "praesens": "spricht", "praeteritum": "sprach", "perfekt": "hat gesprochen", "futur_i": "wird sprechen" },
            "wir": { "praesens": "sprechen", "praeteritum": "sprachen", "perfekt": "haben gesprochen", "futur_i": "werde sprechen" },
            "ihr": { "praesens": "sprecht", "praeteritum": "spracht", "perfekt": "habt gesprochen", "futur_i": "werdet sprechen" },
            "sie_sie_form": { "praesens": "sprechen", "praeteritum": "sprachen", "perfekt": "haben gesprochen", "futur_i": "werden sprechen" }
        }
    },
    {
        "infinitiv": "sehen",
        "mean": "ver",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "sehe", "praeteritum": "sah", "perfekt": "habe gesehen", "futur_i": "werde sehen" },
            "du": { "praesens": "siehst", "praeteritum": "sahst", "perfekt": "hast gesehen", "futur_i": "wirst sehen" },
            "er_sie_es": { "praesens": "sieht", "praeteritum": "sah", "perfekt": "hat gesehen", "futur_i": "wird sehen" },
            "wir": { "praesens": "sehen", "praeteritum": "sahen", "perfekt": "haben gesehen", "futur_i": "werden sehen" },
            "ihr": { "praesens": "seht", "praeteritum": "saht", "perfekt": "habt gesehen", "futur_i": "werdet sehen" },
            "sie_sie_form": { "praesens": "sehen", "praeteritum": "sahen", "perfekt": "haben gesehen", "futur_i": "werden sehen" }
        }
    },
    {
        "infinitiv": "wissen",
        "mean": "saber (hechos)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "weiß", "praeteritum": "wusste", "perfekt": "habe gewusst", "futur_i": "werde wissen" },
            "du": { "praesens": "weißt", "praeteritum": "wusstest", "perfekt": "hast gewusst", "futur_i": "wirst wissen" },
            "er_sie_es": { "praesens": "weiß", "praeteritum": "wusste", "perfekt": "hat gewusst", "futur_i": "wird wissen" },
            "wir": { "praesens": "wissen", "praeteritum": "wussten", "perfekt": "haben gewusst", "futur_i": "werde wissen" },
            "ihr": { "praesens": "wisst", "praeteritum": "wusstet", "perfekt": "habt gewusst", "futur_i": "werdet wissen" },
            "sie_sie_form": { "praesens": "wissen", "praeteritum": "wussten", "perfekt": "haben gewusst", "futur_i": "werden wissen" }
        }
    },
    {
        "infinitiv": "machen",
        "mean": "hacer",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "mache", "praeteritum": "machte", "perfekt": "habe gemacht", "futur_i": "werde machen" },
            "du": { "praesens": "machst", "praeteritum": "machtest", "perfekt": "hast gemacht", "futur_i": "wirst machen" },
            "er_sie_es": { "praesens": "macht", "praeteritum": "machte", "perfekt": "hat gemacht", "futur_i": "wird machen" },
            "wir": { "praesens": "machen", "praeteritum": "machten", "perfekt": "haben gemacht", "futur_i": "werden machen" },
            "ihr": { "praesens": "macht", "praeteritum": "machtet", "perfekt": "habt gemacht", "futur_i": "werdet machen" },
            "sie_sie_form": { "praesens": "machen", "praeteritum": "machten", "perfekt": "haben gemacht", "futur_i": "werden machen" }
        }
    },
    {
        "infinitiv": "sagen",
        "mean": "decir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "sage", "praeteritum": "sagte", "perfekt": "habe gesagt", "futur_i": "werde sagen" },
            "du": { "praesens": "sagst", "praeteritum": "sagtest", "perfekt": "hast gesagt", "futur_i": "wirst sagen" },
            "er_sie_es": { "praesens": "sagt", "praeteritum": "sagte", "perfekt": "hat gesagt", "futur_i": "wird sagen" },
            "wir": { "praesens": "sagen", "praeteritum": "sagten", "perfekt": "haben gesagt", "futur_i": "werde sagen" },
            "ihr": { "praesens": "sagt", "praeteritum": "sagtet", "perfekt": "habt gesagt", "futur_i": "werdet sagen" },
            "sie_sie_form": { "praesens": "sagen", "praeteritum": "sagten", "perfekt": "haben gesagt", "futur_i": "werden sagen" }
        }
    },
    {
        "infinitiv": "geben",
        "mean": "dar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "gebe", "praeteritum": "gab", "perfekt": "habe gegeben", "futur_i": "werde geben" },
            "du": { "praesens": "gibst", "praeteritum": "gabst", "perfekt": "hast gegeben", "futur_i": "wirst geben" },
            "er_sie_es": { "praesens": "gibt", "praeteritum": "gab", "perfekt": "hat gegeben", "futur_i": "wird geben" },
            "wir": { "praesens": "geben", "praeteritum": "gaben", "perfekt": "haben gegeben", "futur_i": "werde geben" },
            "ihr": { "praesens": "gebt", "praeteritum": "gabt", "perfekt": "habt gegeben", "futur_i": "werdet geben" },
            "sie_sie_form": { "praesens": "geben", "praeteritum": "gaben", "perfekt": "haben gegeben", "futur_i": "werden geben" }
        }
    },
    {
        "infinitiv": "fragen",
        "mean": "preguntar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "frage", "praeteritum": "fragte", "perfekt": "habe gefragt", "futur_i": "werde fragen" },
            "du": { "praesens": "fragst", "praeteritum": "fragtest", "perfekt": "hast gefragt", "futur_i": "wirst fragen" },
            "er_sie_es": { "praesens": "fragt", "praeteritum": "fragte", "perfekt": "hat gefragt", "futur_i": "wird fragen" },
            "wir": { "praesens": "fragen", "praeteritum": "fragten", "perfekt": "haben gefragt", "futur_i": "werde fragen" },
            "ihr": { "praesens": "fragt", "praeteritum": "fragtet", "perfekt": "habt gefragt", "futur_i": "werdet fragen" },
            "sie_sie_form": { "praesens": "fragen", "praeteritum": "fragten", "perfekt": "haben gefragt", "futur_i": "werden fragen" }
        }
    },

    // --- BLOQUE 2: Verbos Comunes de Acción y Percepción (21-40) ---
    {
        "infinitiv": "brauchen",
        "mean": "necesitar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "brauche", "praeteritum": "brauchte", "perfekt": "habe gebraucht", "futur_i": "werde brauchen" },
            "du": { "praesens": "brauchst", "praeteritum": "brauchtest", "perfekt": "hast gebraucht", "futur_i": "wirst brauchen" },
            "er_sie_es": { "praesens": "braucht", "praeteritum": "brauchte", "perfekt": "hat gebraucht", "futur_i": "wird brauchen" },
            "wir": { "praesens": "brauchen", "praeteritum": "brauchten", "perfekt": "haben gebraucht", "futur_i": "werden brauchen" },
            "ihr": { "praesens": "braucht", "praeteritum": "brauchtet", "perfekt": "habt gebraucht", "futur_i": "werdet brauchen" },
            "sie_sie_form": { "praesens": "brauchen", "praeteritum": "brauchten", "perfekt": "haben gebraucht", "futur_i": "werden brauchen" }
        }
    },
    {
        "infinitiv": "antworten",
        "mean": "responder",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "antworte", "praeteritum": "antwortete", "perfekt": "habe geantwortet", "futur_i": "werde antworten" },
            "du": { "praesens": "antwortest", "praeteritum": "antwortetest", "perfekt": "hast geantwortet", "futur_i": "wirst antworten" },
            "er_sie_es": { "praesens": "antwortet", "praeteritum": "antwortete", "perfekt": "hat geantwortet", "futur_i": "wird antworten" },
            "wir": { "praesens": "antworten", "praeteritum": "antworteten", "perfekt": "haben geantwortet", "futur_i": "werde antworten" },
            "ihr": { "praesens": "antwortet", "praeteritum": "antwortetet", "perfekt": "habt geantwortet", "futur_i": "werdet antworten" },
            "sie_sie_form": { "praesens": "antworten", "praeteritum": "antworteten", "perfekt": "haben geantwortet", "futur_i": "werden antworten" }
        }
    },
    {
        "infinitiv": "finden",
        "mean": "encontrar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "finde", "praeteritum": "fand", "perfekt": "habe gefunden", "futur_i": "werde finden" },
            "du": { "praesens": "findest", "praeteritum": "fandest", "perfekt": "hast gefunden", "futur_i": "wirst finden" },
            "er_sie_es": { "praesens": "findet", "praeteritum": "fand", "perfekt": "hat gefunden", "futur_i": "wird finden" },
            "wir": { "praesens": "finden", "praeteritum": "fanden", "perfekt": "haben gefunden", "futur_i": "werde finden" },
            "ihr": { "praesens": "findet", "praeteritum": "fandet", "perfekt": "habt gefunden", "futur_i": "werdet finden" },
            "sie_sie_form": { "praesens": "finden", "praeteritum": "fanden", "perfekt": "haben gefunden", "futur_i": "werden finden" }
        }
    },
    {
        "infinitiv": "denken",
        "mean": "pensar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "denke", "praeteritum": "dachte", "perfekt": "habe gedacht", "futur_i": "werde denken" },
            "du": { "praesens": "denkst", "praeteritum": "dachtest", "perfekt": "hast gedacht", "futur_i": "wirst denken" },
            "er_sie_es": { "praesens": "denkt", "praeteritum": "dachte", "perfekt": "hat gedacht", "futur_i": "wird denken" },
            "wir": { "praesens": "denken", "praeteritum": "dachten", "perfekt": "haben gedacht", "futur_i": "werde denken" },
            "ihr": { "praesens": "denkt", "praeteritum": "dachtet", "perfekt": "habt gedacht", "futur_i": "werdet denken" },
            "sie_sie_form": { "praesens": "denken", "praeteritum": "dachten", "perfekt": "haben gedacht", "futur_i": "werden denken" }
        }
    },
    {
        "infinitiv": "helfen",
        "mean": "ayudar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "helfe", "praeteritum": "half", "perfekt": "habe geholfen", "futur_i": "werde helfen" },
            "du": { "praesens": "hilfst", "praeteritum": "halfst", "perfekt": "hast geholfen", "futur_i": "wirst helfen" },
            "er_sie_es": { "praesens": "hilft", "praeteritum": "half", "perfekt": "hat geholfen", "futur_i": "wird helfen" },
            "wir": { "praesens": "helfen", "praeteritum": "halfen", "perfekt": "haben geholfen", "futur_i": "werde helfen" },
            "ihr": { "praesens": "helft", "praeteritum": "halft", "perfekt": "habt geholfen", "futur_i": "werdet helfen" },
            "sie_sie_form": { "praesens": "helfen", "praeteritum": "halfen", "perfekt": "haben geholfen", "futur_i": "werden helfen" }
        }
    },
    {
        "infinitiv": "nehmen",
        "mean": "tomar / coger",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "nehme", "praeteritum": "nahm", "perfekt": "habe genommen", "futur_i": "werde nehmen" },
            "du": { "praesens": "nimmst", "praeteritum": "nahmst", "perfekt": "hast genommen", "futur_i": "wirst nehmen" },
            "er_sie_es": { "praesens": "nimmt", "praeteritum": "nahm", "perfekt": "hat genommen", "futur_i": "wird nehmen" },
            "wir": { "praesens": "nehmen", "praeteritum": "nahmen", "perfekt": "haben genommen", "futur_i": "werde nehmen" },
            "ihr": { "praesens": "nehmt", "praeteritum": "nahmt", "perfekt": "habt genommen", "futur_i": "werdet nehmen" },
            "sie_sie_form": { "praesens": "nehmen", "praeteritum": "nahmen", "perfekt": "haben genommen", "futur_i": "werden nehmen" }
        }
    },
    {
        "infinitiv": "essen",
        "mean": "comer",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "esse", "praeteritum": "aß", "perfekt": "habe gegessen", "futur_i": "werde essen" },
            "du": { "praesens": "isst", "praeteritum": "aßest", "perfekt": "hast gegessen", "futur_i": "wirst essen" },
            "er_sie_es": { "praesens": "isst", "praeteritum": "aß", "perfekt": "hat gegessen", "futur_i": "wird essen" },
            "wir": { "praesens": "essen", "praeteritum": "aßen", "perfekt": "haben gegessen", "futur_i": "werde essen" },
            "ihr": { "praesens": "esst", "praeteritum": "aßt", "perfekt": "habt gegessen", "futur_i": "werdet essen" },
            "sie_sie_form": { "praesens": "essen", "praeteritum": "aßen", "perfekt": "haben gegessen", "futur_i": "werden essen" }
        }
    },
    {
        "infinitiv": "trinken",
        "mean": "beber",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "trinke", "praeteritum": "trank", "perfekt": "habe getrunken", "futur_i": "werde trinken" },
            "du": { "praesens": "trinkst", "praeteritum": "trankst", "perfekt": "hast getrunken", "futur_i": "wirst trinken" },
            "er_sie_es": { "praesens": "trinkt", "praeteritum": "trank", "perfekt": "hat getrunken", "futur_i": "wird trinken" },
            "wir": { "praesens": "trinken", "praeteritum": "tranken", "perfekt": "haben getrunken", "futur_i": "werde trinken" },
            "ihr": { "praesens": "trinkt", "praeteritum": "trankt", "perfekt": "habt getrunken", "futur_i": "werdet trinken" },
            "sie_sie_form": { "praesens": "trinken", "praeteritum": "tranken", "perfekt": "haben getrunken", "futur_i": "werden trinken" }
        }
    },
    {
        "infinitiv": "kaufen",
        "mean": "comprar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "kaufe", "praeteritum": "kaufte", "perfekt": "habe gekauft", "futur_i": "werde kaufen" },
            "du": { "praesens": "kaufst", "praeteritum": "kauftest", "perfekt": "hast gekauft", "futur_i": "wirst kaufen" },
            "er_sie_es": { "praesens": "kauft", "praeteritum": "kaufte", "perfekt": "hat gekauft", "futur_i": "wird kaufen" },
            "wir": { "praesens": "kaufen", "praeteritum": "kauften", "perfekt": "haben gekauft", "futur_i": "werde kaufen" },
            "ihr": { "praesens": "kauft", "praeteritum": "kauftet", "perfekt": "habt gekauft", "futur_i": "werdet kaufen" },
            "sie_sie_form": { "praesens": "kaufen", "praeteritum": "kauften", "perfekt": "haben gekauft", "futur_i": "werden kaufen" }
        }
    },
    {
        "infinitiv": "verkaufen",
        "mean": "vender",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "verkaufe", "praeteritum": "verkaufte", "perfekt": "habe verkauft", "futur_i": "werde verkaufen" },
            "du": { "praesens": "verkaufst", "praeteritum": "verkauftest", "perfekt": "hast verkauft", "futur_i": "wirst verkaufen" },
            "er_sie_es": { "praesens": "verkauft", "praeteritum": "verkaufte", "perfekt": "hat verkauft", "futur_i": "wird verkaufen" },
            "wir": { "praesens": "verkaufen", "praeteritum": "verkauften", "perfekt": "haben verkauft", "futur_i": "werde verkaufen" },
            "ihr": { "praesens": "verkauft", "praeteritum": "verkauftet", "perfekt": "habt verkauft", "futur_i": "werdet verkaufen" },
            "sie_sie_form": { "praesens": "verkaufen", "praeteritum": "verkauften", "perfekt": "haben verkauft", "futur_i": "werden verkaufen" }
        }
    },
    {
        "infinitiv": "schreiben",
        "mean": "escribir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "schreibe", "praeteritum": "schrieb", "perfekt": "habe geschrieben", "futur_i": "werde schreiben" },
            "du": { "praesens": "schreibst", "praeteritum": "schriebst", "perfekt": "hast geschrieben", "futur_i": "wirst schreiben" },
            "er_sie_es": { "praesens": "schreibt", "praeteritum": "schrieb", "perfekt": "hat geschrieben", "futur_i": "wird schreiben" },
            "wir": { "praesens": "schreiben", "praeteritum": "schrieben", "perfekt": "haben geschrieben", "futur_i": "werde schreiben" },
            "ihr": { "praesens": "schreibt", "praeteritum": "schriebt", "perfekt": "habt geschrieben", "futur_i": "werdet schreiben" },
            "sie_sie_form": { "praesens": "schreiben", "praeteritum": "schrieben", "perfekt": "haben geschrieben", "futur_i": "werden schreiben" }
        }
    },
    {
        "infinitiv": "lesen",
        "mean": "leer",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "lese", "praeteritum": "las", "perfekt": "habe gelesen", "futur_i": "werde lesen" },
            "du": { "praesens": "liest", "praeteritum": "last", "perfekt": "hast gelesen", "futur_i": "wirst lesen" },
            "er_sie_es": { "praesens": "liest", "praeteritum": "las", "perfekt": "hat gelesen", "futur_i": "wird lesen" },
            "wir": { "praesens": "lesen", "praeteritum": "lasen", "perfekt": "haben gelesen", "futur_i": "werden lesen" },
            "ihr": { "praesens": "lest", "praeteritum": "last", "perfekt": "habt gelesen", "futur_i": "werdet lesen" },
            "sie_sie_form": { "praesens": "lesen", "praeteritum": "lasen", "perfekt": "haben gelesen", "futur_i": "werden lesen" }
        }
    },
    {
        "infinitiv": "arbeiten",
        "mean": "trabajar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "arbeite", "praeteritum": "arbeitete", "perfekt": "habe gearbeitet", "futur_i": "werde arbeiten" },
            "du": { "praesens": "arbeitest", "praeteritum": "arbeitetest", "perfekt": "hast gearbeitet", "futur_i": "wirst arbeiten" },
            "er_sie_es": { "praesens": "arbeitet", "praeteritum": "arbeitete", "perfekt": "hat gearbeitet", "futur_i": "wird arbeiten" },
            "wir": { "praesens": "arbeiten", "praeteritum": "arbeiteten", "perfekt": "haben gearbeitet", "futur_i": "werden arbeiten" },
            "ihr": { "praesens": "arbeitet", "praeteritum": "arbeitetet", "perfekt": "habt gearbeitet", "futur_i": "werdet arbeiten" },
            "sie_sie_form": { "praesens": "arbeiten", "praeteritum": "arbeiteten", "perfekt": "haben gearbeitet", "futur_i": "werden arbeiten" }
        }
    },
    {
        "infinitiv": "lernen",
        "mean": "aprender",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "lerne", "praeteritum": "lernte", "perfekt": "habe gelernt", "futur_i": "werde lernen" },
            "du": { "praesens": "lernst", "praeteritum": "lerntest", "perfekt": "hast gelernt", "futur_i": "wirst lernen" },
            "er_sie_es": { "praesens": "lernt", "praeteritum": "lernte", "perfekt": "hat gelernt", "futur_i": "wird lernen" },
            "wir": { "praesens": "lernen", "praeteritum": "lernten", "perfekt": "haben gelernt", "futur_i": "werde lernen" },
            "ihr": { "praesens": "lernt", "praeteritum": "lerntet", "perfekt": "habt gelernt", "futur_i": "werdet lernen" },
            "sie_sie_form": { "praesens": "lernen", "praeteritum": "lernten", "perfekt": "haben gelernt", "futur_i": "werden lernen" }
        }
    },
    {
        "infinitiv": "wohnen",
        "mean": "vivir / residir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "wohne", "praeteritum": "wohnte", "perfekt": "habe gewohnt", "futur_i": "werde wohnen" },
            "du": { "praesens": "wohnst", "praeteritum": "wohntest", "perfekt": "hast gewohnt", "futur_i": "wirst wohnen" },
            "er_sie_es": { "praesens": "wohnt", "praeteritum": "wohnte", "perfekt": "hat gewohnt", "futur_i": "wird wohnen" },
            "wir": { "praesens": "wohnen", "praeteritum": "wohnten", "perfekt": "haben gewohnt", "futur_i": "werde wohnen" },
            "ihr": { "praesens": "wohnt", "praeteritum": "wohntet", "perfekt": "habt gewohnt", "futur_i": "werdet wohnen" },
            "sie_sie_form": { "praesens": "wohnen", "praeteritum": "wohnten", "perfekt": "haben gewohnt", "futur_i": "werden wohnen" }
        }
    },
    {
        "infinitiv": "spielen",
        "mean": "jugar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "spiele", "praeteritum": "spielte", "perfekt": "habe gespielt", "futur_i": "werde spielen" },
            "du": { "praesens": "spielst", "praeteritum": "spieltest", "perfekt": "hast gespielt", "futur_i": "wirst spielen" },
            "er_sie_es": { "praesens": "spielt", "praeteritum": "spielte", "perfekt": "hat gespielt", "futur_i": "wird spielen" },
            "wir": { "praesens": "spielen", "praeteritum": "spielten", "perfekt": "haben gespielt", "futur_i": "werde spielen" },
            "ihr": { "praesens": "spielt", "praeteritum": "spieltet", "perfekt": "habt gespielt", "futur_i": "werdet spielen" },
            "sie_sie_form": { "praesens": "spielen", "praeteritum": "spielten", "perfekt": "haben gespielt", "futur_i": "werden spielen" }
        }
    },
    {
        "infinitiv": "suchen",
        "mean": "buscar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "suche", "praeteritum": "suchte", "perfekt": "habe gesucht", "futur_i": "werde suchen" },
            "du": { "praesens": "suchst", "praeteritum": "suchtest", "perfekt": "hast gesucht", "futur_i": "wirst suchen" },
            "er_sie_es": { "praesens": "sucht", "praeteritum": "suchte", "perfekt": "hat gesucht", "futur_i": "wird suchen" },
            "wir": { "praesens": "suchen", "praeteritum": "suchten", "perfekt": "haben gesucht", "futur_i": "werde suchen" },
            "ihr": { "praesens": "sucht", "praeteritum": "suchtet", "perfekt": "habt gesucht", "futur_i": "werdet suchen" },
            "sie_sie_form": { "praesens": "suchen", "praeteritum": "suchten", "perfekt": "haben gesucht", "futur_i": "werde suchen" }
        }
    },
    {
        "infinitiv": "zeigen",
        "mean": "mostrar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "zeige", "praeteritum": "zeigte", "perfekt": "habe gezeigt", "futur_i": "werde zeigen" },
            "du": { "praesens": "zeigst", "praeteritum": "zeigtest", "perfekt": "hast gezeigt", "futur_i": "wirst zeigen" },
            "er_sie_es": { "praesens": "zeigt", "praeteritum": "zeigte", "perfekt": "hat gezeigt", "futur_i": "wird zeigen" },
            "wir": { "praesens": "zeigen", "praeteritum": "zeigten", "perfekt": "haben gezeigt", "futur_i": "werde zeigen" },
            "ihr": { "praesens": "zeigt", "praeteritum": "zeigten", "perfekt": "habt gezeigt", "futur_i": "werdet zeigen" },
            "sie_sie_form": { "praesens": "zeigen", "praeteritum": "zeigten", "perfekt": "haben gezeigt", "futur_i": "werden zeigen" }
        }
    },

    // --- BLOQUE 3: Verbos de Estado y Posición (41-60) ---
    {
        "infinitiv": "stehen",
        "mean": "estar de pie",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "stehe", "praeteritum": "stand", "perfekt": "habe gestanden", "futur_i": "werde stehen" },
            "du": { "praesens": "stehst", "praeteritum": "standst", "perfekt": "hast gestanden", "futur_i": "wirst stehen" },
            "er_sie_es": { "praesens": "steht", "praeteritum": "stand", "perfekt": "hat gestanden", "futur_i": "wird stehen" },
            "wir": { "praesens": "stehen", "praeteritum": "standen", "perfekt": "haben gestanden", "futur_i": "werde stehen" },
            "ihr": { "praesens": "steht", "praeteritum": "standet", "perfekt": "habt gestanden", "futur_i": "werdet stehen" },
            "sie_sie_form": { "praesens": "stehen", "praeteritum": "standen", "perfekt": "haben gestanden", "futur_i": "werden stehen" }
    }
    },
    {
        "infinitiv": "sitzen",
        "mean": "estar sentado",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "sitze", "praeteritum": "saß", "perfekt": "habe gesessen", "futur_i": "werde sitzen" },
            "du": { "praesens": "sitzt", "praeteritum": "saßest", "perfekt": "hast gesessen", "futur_i": "wirst sitzen" },
            "er_sie_es": { "praesens": "sitzt", "praeteritum": "saß", "perfekt": "hat gesessen", "futur_i": "wird sitzen" },
            "wir": { "praesens": "sitzen", "praeteritum": "saßen", "perfekt": "haben gesessen", "futur_i": "werde sitzen" },
            "ihr": { "praesens": "sitzt", "praeteritum": "saßt", "perfekt": "habt gesessen", "futur_i": "werdet sitzen" },
            "sie_sie_form": { "praesens": "sitzen", "praeteritum": "saßen", "perfekt": "haben gesessen", "futur_i": "werden sitzen" }
        }
    },
    {
        "infinitiv": "liegen",
        "mean": "estar tumbado / acostado",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "liege", "praeteritum": "lag", "perfekt": "habe gelegen", "futur_i": "werde liegen" },
            "du": { "praesens": "liegst", "praeteritum": "lagst", "perfekt": "hast gelegen", "futur_i": "wirst liegen" },
            "er_sie_es": { "praesens": "liegt", "praeteritum": "lag", "perfekt": "hat gelegen", "futur_i": "wird liegen" },
            "wir": { "praesens": "liegen", "praeteritum": "lagen", "perfekt": "haben gelegen", "futur_i": "werde liegen" },
            "ihr": { "praesens": "liegt", "praeteritum": "lagt", "perfekt": "habt gelegen", "futur_i": "werdet liegen" },
            "sie_sie_form": { "praesens": "liegen", "praeteritum": "lagen", "perfekt": "haben gelegen", "futur_i": "werden liegen" }
        }
    },
    {
        "infinitiv": "legen",
        "mean": "poner (horizontal)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "lege", "praeteritum": "legte", "perfekt": "habe gelegt", "futur_i": "werde legen" },
            "du": { "praesens": "legst", "praeteritum": "legtest", "perfekt": "hast gelegt", "futur_i": "wirst legen" },
            "er_sie_es": { "praesens": "legt", "praeteritum": "legte", "perfekt": "hat gelegt", "futur_i": "wird legen" },
            "wir": { "praesens": "legen", "praeteritum": "legten", "perfekt": "haben gelegt", "futur_i": "werde legen" },
            "ihr": { "praesens": "legt", "praeteritum": "legtet", "perfekt": "habt gelegt", "futur_i": "werdet legen" },
            "sie_sie_form": { "praesens": "legen", "praeteritum": "legten", "perfekt": "haben gelegt", "futur_i": "werden legen" }
        }
    },
    {
        "infinitiv": "stellen",
        "mean": "poner (vertical)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "stelle", "praeteritum": "stellte", "perfekt": "habe gestellt", "futur_i": "werde stellen" },
            "du": { "praesens": "stellst", "praeteritum": "stelltest", "perfekt": "hast gestellt", "futur_i": "wirst stellen" },
            "er_sie_es": { "praesens": "stellt", "praeteritum": "stellte", "perfekt": "hat gestellt", "futur_i": "wird stellen" },
            "wir": { "praesens": "stellen", "praeteritum": "stellten", "perfekt": "haben gestellt", "futur_i": "werde stellen" },
            "ihr": { "praesens": "stellt", "praeteritum": "stelltet", "perfekt": "habt gestellt", "futur_i": "werdet stellen" },
            "sie_sie_form": { "praesens": "stellen", "praeteritum": "stellten", "perfekt": "haben gestellt", "futur_i": "werden stellen" }
        }
    },
    {
        "infinitiv": "warten",
        "mean": "esperar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "warte", "praeteritum": "wartete", "perfekt": "habe gewartet", "futur_i": "werde warten" },
            "du": { "praesens": "wartest", "praeteritum": "wartetest", "perfekt": "hast gewartet", "futur_i": "wirst warten" },
            "er_sie_es": { "praesens": "wartet", "praeteritum": "wartete", "perfekt": "hat gewartet", "futur_i": "wird warten" },
            "wir": { "praesens": "warten", "praeteritum": "warteten", "perfekt": "haben gewartet", "futur_i": "werde warten" },
            "ihr": { "praesens": "wartet", "praeteritum": "wartetet", "perfekt": "habt gewartet", "futur_i": "werdet warten" },
            "sie_sie_form": { "praesens": "warten", "praeteritum": "warteten", "perfekt": "haben gewartet", "futur_i": "werden warten" }
        }
    },
    {
        "infinitiv": "glauben",
        "mean": "creer",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "glaube", "praeteritum": "glaubte", "perfekt": "habe geglaubt", "futur_i": "werde glauben" },
            "du": { "praesens": "glaubst", "praeteritum": "glaubtest", "perfekt": "hast geglaubt", "futur_i": "wirst glauben" },
            "er_sie_es": { "praesens": "glaubt", "praeteritum": "glaubte", "perfekt": "hat geglaubt", "futur_i": "wird glauben" },
            "wir": { "praesens": "glauben", "praeteritum": "glaubten", "perfekt": "haben geglaubt", "futur_i": "werde glauben" },
            "ihr": { "praesens": "glaubt", "praeteritum": "glaubtet", "perfekt": "habt geglaubt", "futur_i": "werdet glauben" },
            "sie_sie_form": { "praesens": "glauben", "praeteritum": "glaubten", "perfekt": "haben geglaubt", "futur_i": "werde glauben" }
        }
    },
    {
        "infinitiv": "leben",
        "mean": "vivir (existir)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "lebe", "praeteritum": "lebte", "perfekt": "habe gelebt", "futur_i": "werde leben" },
            "du": { "praesens": "lebst", "praeteritum": "lebtest", "perfekt": "hast gelebt", "futur_i": "wirst leben" },
            "er_sie_es": { "praesens": "lebt", "praeteritum": "lebte", "perfekt": "hat gelebt", "futur_i": "wird leben" },
            "wir": { "praesens": "leben", "praeteritum": "lebten", "perfekt": "haben gelebt", "futur_i": "werde leben" },
            "ihr": { "praesens": "lebt", "praeteritum": "lebtet", "perfekt": "habt gelebt", "futur_i": "werdet leben" },
            "sie_sie_form": { "praesens": "leben", "praeteritum": "lebten", "perfekt": "haben gelebt", "futur_i": "werde leben" }
        }
    },
    {
        "infinitiv": "verstehen",
        "mean": "entender",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "verstehe", "praeteritum": "verstand", "perfekt": "habe verstanden", "futur_i": "werde verstehen" },
            "du": { "praesens": "verstehst", "praeteritum": "verstandst", "perfekt": "hast verstanden", "futur_i": "wirst verstehen" },
            "er_sie_es": { "praesens": "versteht", "praeteritum": "verstand", "perfekt": "hat verstanden", "futur_i": "wird verstehen" },
            "wir": { "praesens": "verstehen", "praeteritum": "verstanden", "perfekt": "haben verstanden", "futur_i": "werde verstehen" },
            "ihr": { "praesens": "versteht", "praeteritum": "verstandet", "perfekt": "habt verstanden", "futur_i": "werdet verstehen" },
            "sie_sie_form": { "praesens": "verstehen", "praeteritum": "verstanden", "perfekt": "haben verstanden", "futur_i": "werde verstehen" }
        }
    },
    {
        "infinitiv": "kennen",
        "mean": "conocer (personas/lugares)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "kenne", "praeteritum": "kannte", "perfekt": "habe gekannt", "futur_i": "werde kennen" },
            "du": { "praesens": "kennst", "praeteritum": "kanntest", "perfekt": "hast gekannt", "futur_i": "wirst kennen" },
            "er_sie_es": { "praesens": "kennt", "praeteritum": "kannte", "perfekt": "hat gekannt", "futur_i": "wird kennen" },
            "wir": { "praesens": "kennen", "praeteritum": "kannten", "perfekt": "haben gekannt", "futur_i": "werde kennen" },
            "ihr": { "praesens": "kennt", "praeteritum": "kanntet", "perfekt": "habt gekannt", "futur_i": "werdet kennen" },
            "sie_sie_form": { "praesens": "kennen", "praeteritum": "kannten", "perfekt": "haben gekannt", "futur_i": "werden kennen" }
        }
    },
    {
        "infinitiv": "schlafen",
        "mean": "dormir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "schlafe", "praeteritum": "schlief", "perfekt": "habe geschlafen", "futur_i": "werde schlafen" },
            "du": { "praesens": "schläfst", "praeteritum": "schliefst", "perfekt": "hast geschlafen", "futur_i": "wirst schlafen" },
            "er_sie_es": { "praesens": "schläft", "praeteritum": "schlief", "perfekt": "hat geschlafen", "futur_i": "wird schlafen" },
            "wir": { "praesens": "schlafen", "praeteritum": "schliefen", "perfekt": "haben geschlafen", "futur_i": "werde schlafen" },
            "ihr": { "praesens": "schlaft", "praeteritum": "schlieft", "perfekt": "habt geschlafen", "futur_i": "werdet schlafen" },
            "sie_sie_form": { "praesens": "schlafen", "praeteritum": "schliefen", "perfekt": "haben geschlafen", "futur_i": "werden schlafen" }
        }
    },
    {
        "infinitiv": "öffnen",
        "mean": "abrir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "öffne", "praeteritum": "öffnete", "perfekt": "habe geöffnet", "futur_i": "werde öffnen" },
            "du": { "praesens": "öffnest", "praeteritum": "öffnetest", "perfekt": "hast geöffnet", "futur_i": "wirst öffnen" },
            "er_sie_es": { "praesens": "öffnet", "praeteritum": "öffnete", "perfekt": "hat geöffnet", "futur_i": "wird öffnen" },
            "wir": { "praesens": "öffnen", "praeteritum": "öffneten", "perfekt": "haben geöffnet", "futur_i": "werde öffnen" },
            "ihr": { "praesens": "öffnet", "praeteritum": "öffnetet", "perfekt": "habt geöffnet", "futur_i": "werdet öffnen" },
            "sie_sie_form": { "praesens": "öffnen", "praeteritum": "öffneten", "perfekt": "haben geöffnet", "futur_i": "werden öffnen" }
        }
    },
    {
        "infinitiv": "schließen",
        "mean": "cerrar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "schließe", "praeteritum": "schloss", "perfekt": "habe geschlossen", "futur_i": "werde schließen" },
            "du": { "praesens": "schließt", "praeteritum": "schlossest", "perfekt": "hast geschlossen", "futur_i": "wirst schließen" },
            "er_sie_es": { "praesens": "schließt", "praeteritum": "schloss", "perfekt": "hat geschlossen", "futur_i": "wird schließen" },
            "wir": { "praesens": "schließen", "praeteritum": "schlossen", "perfekt": "haben geschlossen", "futur_i": "werde schließen" },
            "ihr": { "praesens": "schließt", "praeteritum": "schlosst", "perfekt": "habt geschlossen", "futur_i": "werdet schließen" },
            "sie_sie_form": { "praesens": "schließen", "praeteritum": "schlossen", "perfekt": "haben geschlossen", "futur_i": "werde schließen" }
        }
    },

    // --- BLOQUE 4: Verbos de Movimiento y Cambio (61-80) ---
    {
        "infinitiv": "laufen",
        "mean": "correr",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "laufe", "praeteritum": "lief", "perfekt": "bin gelaufen", "futur_i": "werde laufen" },
            "du": { "praesens": "läufst", "praeteritum": "liefst", "perfekt": "bist gelaufen", "futur_i": "wirst laufen" },
            "er_sie_es": { "praesens": "läuft", "praeteritum": "lief", "perfekt": "ist gelaufen", "futur_i": "wird laufen" },
            "wir": { "praesens": "laufen", "praeteritum": "liefen", "perfekt": "sind gelaufen", "futur_i": "werde laufen" },
            "ihr": { "praesens": "lauft", "praeteritum": "lieft", "perfekt": "seid gelaufen", "futur_i": "werdet laufen" },
            "sie_sie_form": { "praesens": "laufen", "praeteritum": "liefen", "perfekt": "sind gelaufen", "futur_i": "werden laufen" }
        }
    },
    {
        "infinitiv": "fliegen",
        "mean": "volar",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "fliege", "praeteritum": "flog", "perfekt": "bin geflogen", "futur_i": "werde fliegen" },
            "du": { "praesens": "fliegst", "praeteritum": "flogst", "perfekt": "bist geflogen", "futur_i": "wirst fliegen" },
            "er_sie_es": { "praesens": "fliegt", "praeteritum": "flog", "perfekt": "ist geflogen", "futur_i": "wird fliegen" },
            "wir": { "praesens": "fliegen", "praeteritum": "flogen", "perfekt": "sind geflogen", "futur_i": "werde fliegen" },
            "ihr": { "praesens": "fliegt", "praeteritum": "flogt", "perfekt": "seid geflogen", "futur_i": "werdet fliegen" },
            "sie_sie_form": { "praesens": "fliegen", "praeteritum": "flogen", "perfekt": "sind geflogen", "futur_i": "werden fliegen" }
        }
    },
    {
        "infinitiv": "springen",
        "mean": "saltar",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "springe", "praeteritum": "sprang", "perfekt": "bin gesprungen", "futur_i": "werde springen" },
            "du": { "praesens": "springst", "praeteritum": "sprangst", "perfekt": "bist gesprungen", "futur_i": "wirst springen" },
            "er_sie_es": { "praesens": "springt", "praeteritum": "sprang", "perfekt": "ist gesprungen", "futur_i": "wird springen" },
            "wir": { "praesens": "springen", "praeteritum": "sprangen", "perfekt": "sind gesprungen", "futur_i": "werde springen" },
            "ihr": { "praesens": "springt", "praeteritum": "sprangt", "perfekt": "seid gesprungen", "futur_i": "werdet springen" },
            "sie_sie_form": { "praesens": "springen", "praeteritum": "sprangen", "perfekt": "sind gesprungen", "futur_i": "werden springen" }
        }
    },
    {
        "infinitiv": "rufen",
        "mean": "llamar / gritar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "rufe", "praeteritum": "rief", "perfekt": "habe gerufen", "futur_i": "werde rufen" },
            "du": { "praesens": "rufst", "praeteritum": "riefst", "perfekt": "hast gerufen", "futur_i": "wirst rufen" },
            "er_sie_es": { "praesens": "ruft", "praeteritum": "rief", "perfekt": "hat gerufen", "futur_i": "wird rufen" },
            "wir": { "praesens": "rufen", "praeteritum": "riefen", "perfekt": "haben gerufen", "futur_i": "werde rufen" },
            "ihr": { "praesens": "ruft", "praeteritum": "rieft", "perfekt": "habt gerufen", "futur_i": "werdet rufen" },
            "sie_sie_form": { "praesens": "rufen", "praeteritum": "riefen", "perfekt": "haben gerufen", "futur_i": "werden rufen" }
        }
    },
    {
        "infinitiv": "geben",
        "mean": "dar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "gebe", "praeteritum": "gab", "perfekt": "habe gegeben", "futur_i": "werde geben" },
            "du": { "praesens": "gibst", "praeteritum": "gabst", "perfekt": "hast gegeben", "futur_i": "wirst geben" },
            "er_sie_es": { "praesens": "gibt", "praeteritum": "gab", "perfekt": "hat gegeben", "futur_i": "wird geben" },
            "wir": { "praesens": "geben", "praeteritum": "gaben", "perfekt": "haben gegeben", "futur_i": "werde geben" },
            "ihr": { "praesens": "gebt", "praeteritum": "gabt", "perfekt": "habt gegeben", "futur_i": "werdet geben" },
            "sie_sie_form": { "praesens": "geben", "praeteritum": "gaben", "perfekt": "haben gegeben", "futur_i": "werde geben" }
        }
    },
    {
        "infinitiv": "bekommen",
        "mean": "recibir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "bekomme", "praeteritum": "bekam", "perfekt": "habe bekommen", "futur_i": "werde bekommen" },
            "du": { "praesens": "bekommst", "praeteritum": "bekamst", "perfekt": "hast bekommen", "futur_i": "wirst bekommen" },
            "er_sie_es": { "praesens": "bekommt", "praeteritum": "bekam", "perfekt": "hat bekommen", "futur_i": "wird bekommen" },
            "wir": { "praesens": "bekommen", "praeteritum": "bekamen", "perfekt": "haben bekommen", "futur_i": "werde bekommen" },
            "ihr": { "praesens": "bekommt", "praeteritum": "bekamt", "perfekt": "habt bekommen", "futur_i": "werdet bekommen" },
            "sie_sie_form": { "praesens": "bekommen", "praeteritum": "bekamen", "perfekt": "haben bekommen", "futur_i": "werde bekommen" }
        }
    },
    {
        "infinitiv": "anrufen",
        "mean": "llamar por teléfono",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "rufe an", "praeteritum": "rief an", "perfekt": "habe angerufen", "futur_i": "werde anrufen" },
            "du": { "praesens": "rufst an", "praeteritum": "riefst an", "perfekt": "hast angerufen", "futur_i": "wirst anrufen" },
            "er_sie_es": { "praesens": "ruft an", "praeteritum": "rief an", "perfekt": "hat angerufen", "futur_i": "wird anrufen" },
            "wir": { "praesens": "rufen an", "praeteritum": "riefen an", "perfekt": "haben angerufen", "futur_i": "werde anrufen" },
            "ihr": { "praesens": "ruft an", "praeteritum": "rieft an", "perfekt": "habt angerufen", "futur_i": "werdet anrufen" },
            "sie_sie_form": { "praesens": "rufen an", "praeteritum": "riefen an", "perfekt": "haben angerufen", "futur_i": "werden anrufen" }
        }
    },
    {
        "infinitiv": "beginnen",
        "mean": "empezar / comenzar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "beginne", "praeteritum": "begann", "perfekt": "habe begonnen", "futur_i": "werde beginnen" },
            "du": { "praesens": "beginnst", "praeteritum": "begannst", "perfekt": "hast begonnen", "futur_i": "wirst beginnen" },
            "er_sie_es": { "praesens": "beginnt", "praeteritum": "begann", "perfekt": "hat begonnen", "futur_i": "wird beginnen" },
            "wir": { "praesens": "beginnen", "praeteritum": "begannen", "perfekt": "haben begonnen", "futur_i": "werde beginnen" },
            "ihr": { "praesens": "beginnt", "praeteritum": "begannt", "perfekt": "habt begonnen", "futur_i": "werdet beginnen" },
            "sie_sie_form": { "praesens": "beginnen", "praeteritum": "begannen", "perfekt": "haben begonnen", "futur_i": "werden beginnen" }
        }
    },
    {
        "infinitiv": "verlieren",
        "mean": "perder",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "verliere", "praeteritum": "verlor", "perfekt": "habe verloren", "futur_i": "werde verlieren" },
            "du": { "praesens": "verlierst", "praeteritum": "verlorst", "perfekt": "hast verloren", "futur_i": "wirst verlieren" },
            "er_sie_es": { "praesens": "verliert", "praeteritum": "verlor", "perfekt": "hat verloren", "futur_i": "wird verlieren" },
            "wir": { "praesens": "verlieren", "praeteritum": "verloren", "perfekt": "haben verloren", "futur_i": "werde verlieren" },
            "ihr": { "praesens": "verliert", "praeteritum": "verlort", "perfekt": "habt verloren", "futur_i": "werdet verlieren" },
            "sie_sie_form": { "praesens": "verlieren", "praeteritum": "verloren", "perfekt": "haben verloren", "futur_i": "werde verlieren" }
        }
    },
    {
        "infinitiv": "gewinnen",
        "mean": "ganar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "gewinne", "praeteritum": "gewann", "perfekt": "habe gewonnen", "futur_i": "werde gewinnen" },
            "du": { "praesens": "gewinnst", "praeteritum": "gewannst", "perfekt": "hast gewonnen", "futur_i": "wirst gewinnen" },
            "er_sie_es": { "praesens": "gewinnt", "praeteritum": "gewann", "perfekt": "hat gewonnen", "futur_i": "wird gewinnen" },
            "wir": { "praesens": "gewinnen", "praeteritum": "gewannen", "perfekt": "haben gewonnen", "futur_i": "werde gewinnen" },
            "ihr": { "praesens": "gewinnt", "praeteritum": "gewannt", "perfekt": "habt gewonnen", "futur_i": "werdet gewinnen" },
            "sie_sie_form": { "praesens": "gewinnen", "praeteritum": "gewannen", "perfekt": "haben gewonnen", "futur_i": "werde gewinnen" }
        }
    },
    {
        "infinitiv": "vergessen",
        "mean": "olvidar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "vergesse", "praeteritum": "vergaß", "perfekt": "habe vergessen", "futur_i": "werde vergessen" },
            "du": { "praesens": "vergisst", "praeteritum": "vergaßest", "perfekt": "hast vergessen", "futur_i": "wirst vergessen" },
            "er_sie_es": { "praesens": "vergisst", "praeteritum": "vergaß", "perfekt": "hat vergessen", "futur_i": "wird vergessen" },
            "wir": { "praesens": "vergessen", "praeteritum": "vergaßen", "perfekt": "haben vergessen", "futur_i": "werde vergessen" },
            "ihr": { "praesens": "vergesst", "praeteritum": "vergaßt", "perfekt": "habt vergessen", "futur_i": "werdet vergessen" },
            "sie_sie_form": { "praesens": "vergessen", "praeteritum": "vergaßen", "perfekt": "haben vergessen", "futur_i": "werde vergessen" }
        }
    },
    {
        "infinitiv": "erinnern",
        "mean": "recordar (reflexivo: sich erinnern an)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "erinnere", "praeteritum": "erinnerte", "perfekt": "habe erinnert", "futur_i": "werde erinnern" },
            "du": { "praesens": "erinnerst", "praeteritum": "erinnertest", "perfekt": "hast erinnert", "futur_i": "wirst erinnern" },
            "er_sie_es": { "praesens": "erinnert", "praeteritum": "erinnerte", "perfekt": "hat erinnert", "futur_i": "wird erinnern" },
            "wir": { "praesens": "erinnern", "praeteritum": "erinnerten", "perfekt": "haben erinnert", "futur_i": "werde erinnern" },
            "ihr": { "praesens": "erinnert", "praeteritum": "erinnertet", "perfekt": "habt erinnert", "futur_i": "werdet erinnern" },
            "sie_sie_form": { "praesens": "erinnern", "praeteritum": "erinnerten", "perfekt": "haben erinnert", "futur_i": "werden erinnern" }
        }
    },
    {
        "infinitiv": "besuchen",
        "mean": "visitar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "besuche", "praeteritum": "besuchte", "perfekt": "habe besucht", "futur_i": "werde besuchen" },
            "du": { "praesens": "besuchst", "praeteritum": "besuchtest", "perfekt": "hast besucht", "futur_i": "wirst besuchen" },
            "er_sie_es": { "praesens": "besucht", "praeteritum": "besuchte", "perfekt": "hat besucht", "futur_i": "wird besuchen" },
            "wir": { "praesens": "besuchen", "praeteritum": "besuchten", "perfekt": "haben besucht", "futur_i": "werde besuchen" },
            "ihr": { "praesens": "besucht", "praeteritum": "besuchtet", "perfekt": "habt besucht", "futur_i": "werdet besuchen" },
            "sie_sie_form": { "praesens": "besuchen", "praeteritum": "besuchten", "perfekt": "haben besucht", "futur_i": "werden besuchen" }
        }
    },
    {
        "infinitiv": "kriegen",
        "mean": "obtener / conseguir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "kriege", "praeteritum": "kriegte", "perfekt": "habe gekriegt", "futur_i": "werde kriegen" },
            "du": { "praesens": "kriegst", "praeteritum": "kriegtest", "perfekt": "hast gekriegt", "futur_i": "wirst kriegen" },
            "er_sie_es": { "praesens": "kriegt", "praeteritum": "kriegte", "perfekt": "hat gekriegt", "futur_i": "wird kriegen" },
            "wir": { "praesens": "kriegen", "praeteritum": "kriegten", "perfekt": "haben gekriegt", "futur_i": "werde kriegen" },
            "ihr": { "praesens": "kriegt", "praeteritum": "kriegtet", "perfekt": "habt gekriegt", "futur_i": "werdet kriegen" },
            "sie_sie_form": { "praesens": "kriegen", "praeteritum": "kriegten", "perfekt": "haben gekriegt", "futur_i": "werden kriegen" }
        }
    },

    // --- BLOQUE 5: Verbos de Sentimientos y Opiniones (81-100) ---
    {
        "infinitiv": "lieben",
        "mean": "amar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "liebe", "praeteritum": "liebte", "perfekt": "habe geliebt", "futur_i": "werde lieben" },
            "du": { "praesens": "liebst", "praeteritum": "liebtest", "perfekt": "hast geliebt", "futur_i": "wirst lieben" },
            "er_sie_es": { "praesens": "liebt", "praeteritum": "liebte", "perfekt": "hat geliebt", "futur_i": "wird lieben" },
            "wir": { "praesens": "lieben", "praeteritum": "liebten", "perfekt": "haben geliebt", "futur_i": "werde lieben" },
            "ihr": { "praesens": "liebt", "praeteritum": "liebtet", "perfekt": "habt geliebt", "futur_i": "werdet lieben" },
            "sie_sie_form": { "praesens": "lieben", "praeteritum": "liebten", "perfekt": "haben geliebt", "futur_i": "werden lieben" }
        }
    },
    {
        "infinitiv": "hassen",
        "mean": "odiar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "hasse", "praeteritum": "hasste", "perfekt": "habe gehasst", "futur_i": "werde hassen" },
            "du": { "praesens": "hasst", "praeteritum": "hasstest", "perfekt": "hast gehasst", "futur_i": "wirst hassen" },
            "er_sie_es": { "praesens": "hasst", "praeteritum": "hasste", "perfekt": "hat gehasst", "futur_i": "wird hassen" },
            "wir": { "praesens": "hassen", "praeteritum": "hassten", "perfekt": "haben gehasst", "futur_i": "werde hassen" },
            "ihr": { "praesens": "hasst", "praeteritum": "hasstet", "perfekt": "habt gehasst", "futur_i": "werdet hassen" },
            "sie_sie_form": { "praesens": "hassen", "praeteritum": "hassten", "perfekt": "haben gehasst", "futur_i": "werden hassen" }
        }
    },
    {
        "infinitiv": "fühlen",
        "mean": "sentir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "fühle", "praeteritum": "fühlte", "perfekt": "habe gefühlt", "futur_i": "werde fühlen" },
            "du": { "praesens": "fühlst", "praeteritum": "fühltest", "perfekt": "hast gefühlt", "futur_i": "wirst fühlen" },
            "er_sie_es": { "praesens": "fühlt", "praeteritum": "fühlte", "perfekt": "hat gefühlt", "futur_i": "wird fühlen" },
            "wir": { "praesens": "fühlen", "praeteritum": "fühlten", "perfekt": "haben gefühlt", "futur_i": "werde fühlen" },
            "ihr": { "praesens": "fühlt", "praeteritum": "fühltet", "perfekt": "habt gefühlt", "futur_i": "werdet fühlen" },
            "sie_sie_form": { "praesens": "fühlen", "praeteritum": "fühlten", "perfekt": "haben gefühlt", "futur_i": "werde fühlen" }
        }
    },
    {
        "infinitiv": "meinen",
        "mean": "opinar / querer decir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "meine", "praeteritum": "meinte", "perfekt": "habe gemeint", "futur_i": "werde meinen" },
            "du": { "praesens": "meinst", "praeteritum": "meintest", "perfekt": "hast gemeint", "futur_i": "wirst meinen" },
            "er_sie_es": { "praesens": "meint", "praeteritum": "meinte", "perfekt": "hat gemeint", "futur_i": "wird meinen" },
            "wir": { "praesens": "meinen", "praeteritum": "meinten", "perfekt": "haben gemeint", "futur_i": "werde meinen" },
            "ihr": { "praesens": "meint", "praeteritum": "meintet", "perfekt": "habt gemeint", "futur_i": "werdet meinen" },
            "sie_sie_form": { "praesens": "meinen", "praeteritum": "meinten", "perfekt": "haben gemeint", "futur_i": "werde meinen" }
        }
    },
    {
        "infinitiv": "erzählen",
        "mean": "contar / narrar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "erzähle", "praeteritum": "erzählte", "perfekt": "habe erzählt", "futur_i": "werde erzählen" },
            "du": { "praesens": "erzählst", "praeteritum": "erzähltest", "perfekt": "hast erzählt", "futur_i": "wirst erzählen" },
            "er_sie_es": { "praesens": "erzählt", "praeteritum": "erzählte", "perfekt": "hat erzählt", "futur_i": "wird erzählen" },
            "wir": { "praesens": "erzählen", "praeteritum": "erzählten", "perfekt": "haben erzählt", "futur_i": "werde erzählen" },
            "ihr": { "praesens": "erzählt", "praeteritum": "erzähltet", "perfekt": "habt erzählt", "futur_i": "werdet erzählen" },
            "sie_sie_form": { "praesens": "erzählen", "praeteritum": "erzählten", "perfekt": "haben erzählt", "futur_i": "werde erzählen" }
        }
    },
    {
        "infinitiv": "danken",
        "mean": "agradecer",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "danke", "praeteritum": "dankte", "perfekt": "habe gedankt", "futur_i": "werde danken" },
            "du": { "praesens": "dankst", "praeteritum": "danktest", "perfekt": "hast gedankt", "futur_i": "wirst danken" },
            "er_sie_es": { "praesens": "dankt", "praeteritum": "dankte", "perfekt": "hat gedankt", "futur_i": "wird danken" },
            "wir": { "praesens": "danken", "praeteritum": "dankten", "perfekt": "haben gedankt", "futur_i": "werde danken" },
            "ihr": { "praesens": "dankt", "praeteritum": "danktet", "perfekt": "habt gedankt", "futur_i": "werdet danken" },
            "sie_sie_form": { "praesens": "danken", "praeteritum": "dankten", "perfekt": "haben gedankt", "futur_i": "werde danken" }
        }
    },
    {
        "infinitiv": "gratulieren",
        "mean": "felicitar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "gratuliere", "praeteritum": "gratulierte", "perfekt": "habe gratuliert", "futur_i": "werde gratulieren" },
            "du": { "praesens": "gratulierst", "praeteritum": "gratuliertest", "perfekt": "hast gratuliert", "futur_i": "wirst gratulieren" },
            "er_sie_es": { "praesens": "gratuliert", "praeteritum": "gratulierte", "perfekt": "hat gratuliert", "futur_i": "wird gratulieren" },
            "wir": { "praesens": "gratulieren", "praeteritum": "gratulierten", "perfekt": "haben gratuliert", "futur_i": "werde gratulieren" },
            "ihr": { "praesens": "gratuliert", "praeteritum": "gratuliertet", "perfekt": "habt gratuliert", "futur_i": "werdet gratulieren" },
            "sie_sie_form": { "praesens": "gratulieren", "praeteritum": "gratulierten", "perfekt": "haben gratuliert", "futur_i": "werde gratulieren" }
        }
    },
    {
        "infinitiv": "wünschen",
        "mean": "desear",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "wünsche", "praeteritum": "wünschte", "perfekt": "habe gewünscht", "futur_i": "werde wünschen" },
            "du": { "praesens": "wünschst", "praeteritum": "wünschtest", "perfekt": "hast gewünscht", "futur_i": "wirst wünschen" },
            "er_sie_es": { "praesens": "wünscht", "praeteritum": "wünschte", "perfekt": "hat gewünscht", "futur_i": "wird wünschen" },
            "wir": { "praesens": "wünschen", "praeteritum": "wünschten", "perfekt": "haben gewünscht", "futur_i": "werde wünschen" },
            "ihr": { "praesens": "wünscht", "praeteritum": "wünschtet", "perfekt": "habt gewünscht", "futur_i": "werdet wünschen" },
            "sie_sie_form": { "praesens": "wünschen", "praeteritum": "wünschten", "perfekt": "haben gewünscht", "futur_i": "werde wünschen" }
        }
    },
    {
        "infinitiv": "vermissen",
        "mean": "echar de menos",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "vermisse", "praeteritum": "vermisste", "perfekt": "habe vermisst", "futur_i": "werde vermissen" },
            "du": { "praesens": "vermisst", "praeteritum": "vermisstest", "perfekt": "hast vermisst", "futur_i": "wirst vermissen" },
            "er_sie_es": { "praesens": "vermisst", "praeteritum": "vermisste", "perfekt": "hat vermisst", "futur_i": "wird vermissen" },
            "wir": { "praesens": "vermissen", "praeteritum": "vermissten", "perfekt": "haben vermisst", "futur_i": "werde vermissen" },
            "ihr": { "praesens": "vermisst", "praeteritum": "vermisstet", "perfekt": "habt vermisst", "futur_i": "werdet vermissen" },
            "sie_sie_form": { "praesens": "vermissen", "praeteritum": "vermissten", "perfekt": "haben vermisst", "futur_i": "werde vermissen" }
        }
    },
    {
        "infinitiv": "trauern",
        "mean": "estar de luto / lamentar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "trauere", "praeteritum": "trauerte", "perfekt": "habe getrauert", "futur_i": "werde trauern" },
            "du": { "praesens": "trauerst", "praeteritum": "trauertest", "perfekt": "hast getrauert", "futur_i": "wirst trauern" },
            "er_sie_es": { "praesens": "trauert", "praeteritum": "trauerte", "perfekt": "hat getrauert", "futur_i": "wird trauern" },
            "wir": { "praesens": "trauern", "praeteritum": "trauerten", "perfekt": "haben getrauert", "futur_i": "werde trauern" },
            "ihr": { "praesens": "trauert", "praeteritum": "trauertet", "perfekt": "habt getrauert", "futur_i": "werdet trauern" },
            "sie_sie_form": { "praesens": "trauern", "praeteritum": "trauerten", "perfekt": "haben getrauert", "futur_i": "werde trauern" }
        }
    },
    {
        "infinitiv": "weinen",
        "mean": "llorar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "weine", "praeteritum": "weinte", "perfekt": "habe geweint", "futur_i": "werde weinen" },
            "du": { "praesens": "weinst", "praeteritum": "weintest", "perfekt": "hast geweint", "futur_i": "wirst weinen" },
            "er_sie_es": { "praesens": "weint", "praeteritum": "weinte", "perfekt": "hat geweint", "futur_i": "wird weinen" },
            "wir": { "praesens": "weinen", "praeteritum": "weinten", "perfekt": "haben geweint", "futur_i": "werde weinen" },
            "ihr": { "praesens": "weint", "praeteritum": "weintet", "perfekt": "habt geweint", "futur_i": "werdet weinen" },
            "sie_sie_form": { "praesens": "weinen", "praeteritum": "weinten", "perfekt": "haben geweint", "futur_i": "werde weinen" }
        }
    },
    {
        "infinitiv": "lachen",
        "mean": "reír",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "lache", "praeteritum": "lachte", "perfekt": "habe gelacht", "futur_i": "werde lachen" },
            "du": { "praesens": "lachst", "praeteritum": "lachtest", "perfekt": "hast gelacht", "futur_i": "wirst lachen" },
            "er_sie_es": { "praesens": "lacht", "praeteritum": "lachte", "perfekt": "hat gelacht", "futur_i": "wird lachen" },
            "wir": { "praesens": "lachen", "praeteritum": "lachten", "perfekt": "haben gelacht", "futur_i": "werde lachen" },
            "ihr": { "praesens": "lacht", "praeteritum": "lachtet", "perfekt": "habt gelacht", "futur_i": "werdet lachen" },
            "sie_sie_form": { "praesens": "lachen", "praeteritum": "lachten", "perfekt": "haben gelacht", "futur_i": "werde lachen" }
        }
    },
    {
        "infinitiv": "freuen",
        "mean": "alegrarse (reflexivo: sich freuen auf/über)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "freue", "praeteritum": "freute", "perfekt": "habe gefreut", "futur_i": "werde freuen" },
            "du": { "praesens": "freust", "praeteritum": "freutest", "perfekt": "hast gefreut", "futur_i": "wirst freuen" },
            "er_sie_es": { "praesens": "freut", "praeteritum": "freute", "perfekt": "hat gefreut", "futur_i": "wird freuen" },
            "wir": { "praesens": "freuen", "praeteritum": "freuten", "perfekt": "haben gefreut", "futur_i": "werde freuen" },
            "ihr": { "praesens": "freut", "praeteritum": "freutet", "perfekt": "habt gefreut", "futur_i": "werdet freuen" },
            "sie_sie_form": { "praesens": "freuen", "praeteritum": "freuten", "perfekt": "haben gefreut", "futur_i": "werde freuen" }
        }
    },
    {
        "infinitiv": "weinen",
        "mean": "llorar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "weine", "praeteritum": "weinte", "perfekt": "habe geweint", "futur_i": "werde weinen" },
            "du": { "praesens": "weinst", "praeteritum": "weintest", "perfekt": "hast geweint", "futur_i": "wirst weinen" },
            "er_sie_es": { "praesens": "weint", "praeteritum": "weinte", "perfekt": "hat geweint", "futur_i": "wird weinen" },
            "wir": { "praesens": "weinen", "praeteritum": "weinten", "perfekt": "haben geweint", "futur_i": "werde weinen" },
            "ihr": { "praesens": "weint", "praeteritum": "weintet", "perfekt": "habt geweint", "futur_i": "werdet weinen" },
            "sie_sie_form": { "praesens": "weinen", "praeteritum": "weinten", "perfekt": "haben geweint", "futur_i": "werden weinen" }
        }
    },
    {
        "infinitiv": "hoffen",
        "mean": "esperar (desear)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "hoffe", "praeteritum": "hoffte", "perfekt": "habe gehofft", "futur_i": "werde hoffen" },
            "du": { "praesens": "hoffst", "praeteritum": "hofftest", "perfekt": "hast gehofft", "futur_i": "wirst hoffen" },
            "er_sie_es": { "praesens": "hofft", "praeteritum": "hoffte", "perfekt": "hat gehofft", "futur_i": "wird hoffen" },
            "wir": { "praesens": "hoffen", "praeteritum": "hofften", "perfekt": "haben gehofft", "futur_i": "werde hoffen" },
            "ihr": { "praesens": "hofft", "praeteritum": "hofftet", "perfekt": "habt gehofft", "futur_i": "werdet hoffen" },
            "sie_sie_form": { "praesens": "hoffen", "praeteritum": "hofften", "perfekt": "haben gehofft", "futur_i": "werden hoffen" }
        }
    },
    {
        "infinitiv": "glauben",
        "mean": "creer",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "glaube", "praeteritum": "glaubte", "perfekt": "habe geglaubt", "futur_i": "werde glauben" },
            "du": { "praesens": "glaubst", "praeteritum": "glaubtest", "perfekt": "hast geglaubt", "futur_i": "wirst glauben" },
            "er_sie_es": { "praesens": "glaubt", "praeteritum": "glaubte", "perfekt": "hat geglaubt", "futur_i": "wird glauben" },
            "wir": { "praesens": "glauben", "praeteritum": "glaubten", "perfekt": "haben geglaubt", "futur_i": "werde glauben" },
            "ihr": { "praesens": "glaubt", "praeteritum": "glaubtet", "perfekt": "habt geglaubt", "futur_i": "werdet glauben" },
            "sie_sie_form": { "praesens": "glauben", "praeteritum": "glaubten", "perfekt": "haben geglaubt", "futur_i": "werden glauben" }
        }
    },
    
    // --- BLOQUE 6: Verbos de Uso Diario Adicional (101-120) ---
    {
        "infinitiv": "zeigen",
        "mean": "mostrar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "zeige", "praeteritum": "zeigte", "perfekt": "habe gezeigt", "futur_i": "werde zeigen" },
            "du": { "praesens": "zeigst", "praeteritum": "zeigtest", "perfekt": "hast gezeigt", "futur_i": "wirst zeigen" },
            "er_sie_es": { "praesens": "zeigt", "praeteritum": "zeigte", "perfekt": "hat gezeigt", "futur_i": "wird zeigen" },
            "wir": { "praesens": "zeigen", "praeteritum": "zeigten", "perfekt": "haben gezeigt", "futur_i": "werde zeigen" },
            "ihr": { "praesens": "zeigt", "praeteritum": "zeigten", "perfekt": "habt gezeigt", "futur_i": "werdet zeigen" },
            "sie_sie_form": { "praesens": "zeigen", "praeteritum": "zeigten", "perfekt": "haben gezeigt", "futur_i": "werde zeigen" }
        }
    },
    {
        "infinitiv": "bezahlen",
        "mean": "pagar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "bezahle", "praeteritum": "bezahlte", "perfekt": "habe bezahlt", "futur_i": "werde bezahlen" },
            "du": { "praesens": "bezahlst", "praeteritum": "bezahltest", "perfekt": "hast bezahlt", "futur_i": "wirst bezahlen" },
            "er_sie_es": { "praesens": "bezahlt", "praeteritum": "bezahlte", "perfekt": "hat bezahlt", "futur_i": "wird bezahlen" },
            "wir": { "praesens": "bezahlen", "praeteritum": "bezahlten", "perfekt": "haben bezahlt", "futur_i": "werde bezahlen" },
            "ihr": { "praesens": "bezahlt", "praeteritum": "bezahltet", "perfekt": "habt bezahlt", "futur_i": "werdet bezahlen" },
            "sie_sie_form": { "praesens": "bezahlen", "praeteritum": "bezahlten", "perfekt": "haben bezahlt", "futur_i": "werde bezahlen" }
        }
    },
    {
        "infinitiv": "kosten",
        "mean": "costar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "koste", "praeteritum": "kostete", "perfekt": "habe gekostet", "futur_i": "werde kosten" },
            "du": { "praesens": "kostest", "praeteritum": "kostetest", "perfekt": "hast gekostet", "futur_i": "wirst kosten" },
            "er_sie_es": { "praesens": "kostet", "praeteritum": "kostete", "perfekt": "hat gekostet", "futur_i": "wird kosten" },
            "wir": { "praesens": "kosten", "praeteritum": "kosteten", "perfekt": "haben gekostet", "futur_i": "werde kosten" },
            "ihr": { "praesens": "kostet", "praeteritum": "kostetet", "perfekt": "habt gekostet", "futur_i": "werdet kosten" },
            "sie_sie_form": { "praesens": "kosten", "praeteritum": "kosteten", "perfekt": "haben gekostet", "futur_i": "werde kosten" }
        }
    },
    {
        "infinitiv": "bestellen",
        "mean": "pedir (ordenar)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "bestelle", "praeteritum": "bestellte", "perfekt": "habe bestellt", "futur_i": "werde bestellen" },
            "du": { "praesens": "bestellst", "praeteritum": "bestelltest", "perfekt": "hast bestellt", "futur_i": "wirst bestellen" },
            "er_sie_es": { "praesens": "bestellt", "praeteritum": "bestellte", "perfekt": "hat bestellt", "futur_i": "wird bestellen" },
            "wir": { "praesens": "bestellen", "praeteritum": "bestellten", "perfekt": "haben bestellt", "futur_i": "werde bestellen" },
            "ihr": { "praesens": "bestellt", "praeteritum": "bestelltet", "perfekt": "habt bestellt", "futur_i": "werdet bestellen" },
            "sie_sie_form": { "praesens": "bestellen", "praeteritum": "bestellten", "perfekt": "haben bestellt", "futur_i": "werde bestellen" }
        }
    },
    {
        "infinitiv": "empfehlen",
        "mean": "recomendar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "empfehle", "praeteritum": "empfahl", "perfekt": "habe empfohlen", "futur_i": "werde empfehlen" },
            "du": { "praesens": "empfiehlst", "praeteritum": "empfahlst", "perfekt": "hast empfohlen", "futur_i": "wirst empfehlen" },
            "er_sie_es": { "praesens": "empfiehlt", "praeteritum": "empfahl", "perfekt": "hat empfohlen", "futur_i": "wird empfehlen" },
            "wir": { "praesens": "empfehlen", "praeteritum": "empfahlen", "perfekt": "haben empfohlen", "futur_i": "werde empfehlen" },
            "ihr": { "praesens": "empfiehlt", "praeteritum": "empfahlt", "perfekt": "habt empfohlen", "futur_i": "werdet empfehlen" },
            "sie_sie_form": { "praesens": "empfehlen", "praeteritum": "empfahlen", "perfekt": "haben empfohlen", "futur_i": "werde empfehlen" }
        }
    },
    {
        "infinitiv": "schmecken",
        "mean": "saber (a algo) / gustar (comida)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "schmecke", "praeteritum": "schmeckte", "perfekt": "habe geschmeckt", "futur_i": "werde schmecken" },
            "du": { "praesens": "schmeckst", "praeteritum": "schmecktest", "perfekt": "hast geschmeckt", "futur_i": "wirst schmecken" },
            "er_sie_es": { "praesens": "schmeckt", "praeteritum": "schmeckte", "perfekt": "hat geschmeckt", "futur_i": "wird schmecken" },
            "wir": { "praesens": "schmecken", "praeteritum": "schmeckten", "perfekt": "haben geschmeckt", "futur_i": "werde schmecken" },
            "ihr": { "praesens": "schmeckt", "praeteritum": "schmeckt", "perfekt": "habt geschmeckt", "futur_i": "werdet schmecken" },
            "sie_sie_form": { "praesens": "schmecken", "praeteritum": "schmeckten", "perfekt": "haben geschmeckt", "futur_i": "werde schmecken" }
        }
    },
    {
        "infinitiv": "verbessern",
        "mean": "mejorar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "verbessere", "praeteritum": "verbesserte", "perfekt": "habe verbessert", "futur_i": "werde verbessern" },
            "du": { "praesens": "verbesserst", "praeteritum": "verbessertest", "perfekt": "hast verbessert", "futur_i": "wirst verbessern" },
            "er_sie_es": { "praesens": "verbessert", "praeteritum": "verbesserte", "perfekt": "hat verbessert", "futur_i": "wird verbessern" },
            "wir": { "praesens": "verbessern", "praeteritum": "verbesserten", "perfekt": "haben verbessert", "futur_i": "werde verbessern" },
            "ihr": { "praesens": "verbessert", "praeteritum": "verbessertet", "perfekt": "habt verbessert", "futur_i": "werdet verbessern" },
            "sie_sie_form": { "praesens": "verbessern", "praeteritum": "verbesserten", "perfekt": "haben verbessert", "futur_i": "werde verbessern" }
        }
    },
    {
        "infinitiv": "ändern",
        "mean": "cambiar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "ändere", "praeteritum": "änderte", "perfekt": "habe geändert", "futur_i": "werde ändern" },
            "du": { "praesens": "änderst", "praeteritum": "ändertest", "perfekt": "hast geändert", "futur_i": "wirst ändern" },
            "er_sie_es": { "praesens": "ändert", "praeteritum": "änderte", "perfekt": "hat geändert", "futur_i": "wird ändern" },
            "wir": { "praesens": "ändern", "praeteritum": "änderten", "perfekt": "haben geändert", "futur_i": "werde ändern" },
            "ihr": { "praesens": "ändert", "praeteritum": "ändertet", "perfekt": "habt geändert", "futur_i": "werdet ändern" },
            "sie_sie_form": { "praesens": "ändern", "praeteritum": "änderten", "perfekt": "haben geändert", "futur_i": "werde ändern" }
        }
    },
    {
        "infinitiv": "schneiden",
        "mean": "cortar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "schneide", "praeteritum": "schnitt", "perfekt": "habe geschnitten", "futur_i": "werde schneiden" },
            "du": { "praesens": "schneidest", "praeteritum": "schnittest", "perfekt": "hast geschnitten", "futur_i": "wirst schneiden" },
            "er_sie_es": { "praesens": "schneidet", "praeteritum": "schnitt", "perfekt": "hat geschnitten", "futur_i": "wird schneiden" },
            "wir": { "praesens": "schneiden", "praeteritum": "schnitten", "perfekt": "haben geschnitten", "futur_i": "werde schneiden" },
            "ihr": { "praesens": "schneidet", "praeteritum": "schnittet", "perfekt": "habt geschnitten", "futur_i": "werdet schneiden" },
            "sie_sie_form": { "praesens": "schneiden", "praeteritum": "schnitten", "perfekt": "haben geschnitten", "futur_i": "werde schneiden" }
        }
    },
    {
        "infinitiv": "waschen",
        "mean": "lavar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "wasche", "praeteritum": "wusch", "perfekt": "habe gewaschen", "futur_i": "werde waschen" },
            "du": { "praesens": "wäschst", "praeteritum": "wuschst", "perfekt": "hast gewaschen", "futur_i": "wirst waschen" },
            "er_sie_es": { "praesens": "wäscht", "praeteritum": "wusch", "perfekt": "hat gewaschen", "futur_i": "wird waschen" },
            "wir": { "praesens": "waschen", "praeteritum": "wuschen", "perfekt": "haben gewaschen", "futur_i": "werde waschen" },
            "ihr": { "praesens": "wascht", "praeteritum": "wuscht", "perfekt": "habt gewaschen", "futur_i": "werdet waschen" },
            "sie_sie_form": { "praesens": "waschen", "praeteritum": "wuschen", "perfekt": "haben gewaschen", "futur_i": "werde waschen" }
        }
    },
    {
        "infinitiv": "putzen",
        "mean": "limpiar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "putze", "praeteritum": "putzte", "perfekt": "habe geputzt", "futur_i": "werde putzen" },
            "du": { "praesens": "putzt", "praeteritum": "putztest", "perfekt": "hast geputzt", "futur_i": "wirst putzen" },
            "er_sie_es": { "praesens": "putzt", "praeteritum": "putzte", "perfekt": "hat geputzt", "futur_i": "wird putzen" },
            "wir": { "praesens": "putzen", "praeteritum": "putzten", "perfekt": "haben geputzt", "futur_i": "werde putzen" },
            "ihr": { "praesens": "putzt", "praeteritum": "putztet", "perfekt": "habt geputzt", "futur_i": "werdet putzen" },
            "sie_sie_form": { "praesens": "putzen", "praeteritum": "putzten", "perfekt": "haben geputzt", "futur_i": "werde putzen" }
        }
    },
    {
        "infinitiv": "duschen",
        "mean": "ducharse",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "dusche", "praeteritum": "duschte", "perfekt": "habe geduscht", "futur_i": "werde duschen" },
            "du": { "praesens": "duschst", "praeteritum": "duschtest", "perfekt": "hast geduscht", "futur_i": "wirst duschen" },
            "er_sie_es": { "praesens": "duscht", "praeteritum": "duschte", "perfekt": "hat geduscht", "futur_i": "wird duschen" },
            "wir": { "praesens": "duschen", "praeteritum": "duschten", "perfekt": "haben geduscht", "futur_i": "werde duschen" },
            "ihr": { "praesens": "duscht", "praeteritum": "duschtet", "perfekt": "habt geduscht", "futur_i": "werdet duschen" },
            "sie_sie_form": { "praesens": "duschen", "praeteritum": "duschten", "perfekt": "haben geduscht", "futur_i": "werde duschen" }
        }
    },
    {
        "infinitiv": "anziehen",
        "mean": "ponerse (ropa)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "ziehe an", "praeteritum": "zog an", "perfekt": "habe angezogen", "futur_i": "werde anziehen" },
            "du": { "praesens": "ziehst an", "praeteritum": "zogst an", "perfekt": "hast angezogen", "futur_i": "wirst anziehen" },
            "er_sie_es": { "praesens": "zieht an", "praeteritum": "zog an", "perfekt": "hat angezogen", "futur_i": "wird anziehen" },
            "wir": { "praesens": "ziehen an", "praeteritum": "zogen an", "perfekt": "haben angezogen", "futur_i": "werde anziehen" },
            "ihr": { "praesens": "zieht an", "praeteritum": "zogt an", "perfekt": "habt angezogen", "futur_i": "werdet anziehen" },
            "sie_sie_form": { "praesens": "ziehen an", "praeteritum": "zogen an", "perfekt": "haben angezogen", "futur_i": "werde anziehen" }
        }
    },
    {
        "infinitiv": "ausziehen",
        "mean": "quitarse (ropa)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "ziehe aus", "praeteritum": "zog aus", "perfekt": "habe ausgezogen", "futur_i": "werde ausziehen" },
            "du": { "praesens": "ziehst aus", "praeteritum": "zogst aus", "perfekt": "hast ausgezogen", "futur_i": "wirst ausziehen" },
            "er_sie_es": { "praesens": "zieht aus", "praeteritum": "zog aus", "perfekt": "hat ausgezogen", "futur_i": "wird ausziehen" },
            "wir": { "praesens": "ziehen aus", "praeteritum": "zogen aus", "perfekt": "haben ausgezogen", "futur_i": "werde ausziehen" },
            "ihr": { "praesens": "zieht aus", "praeteritum": "zogt aus", "perfekt": "habt ausgezogen", "futur_i": "werdet ausziehen" },
            "sie_sie_form": { "praesens": "ziehen aus", "praeteritum": "zogen aus", "perfekt": "haben ausgezogen", "futur_i": "werde ausziehen" }
        }
    },
    {
        "infinitiv": "kochen",
        "mean": "cocinar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "koche", "praeteritum": "kochte", "perfekt": "habe gekocht", "futur_i": "werde kochen" },
            "du": { "praesens": "kochst", "praeteritum": "kochtest", "perfekt": "hast gekocht", "futur_i": "wirst kochen" },
            "er_sie_es": { "praesens": "kocht", "praeteritum": "kochte", "perfekt": "hat gekocht", "futur_i": "wird kochen" },
            "wir": { "praesens": "kochen", "praeteritum": "kochten", "perfekt": "haben gekocht", "futur_i": "werde kochen" },
            "ihr": { "praesens": "kocht", "praeteritum": "kochtet", "perfekt": "habt gekocht", "futur_i": "werdet kochen" },
            "sie_sie_form": { "praesens": "kochen", "praeteritum": "kochten", "perfekt": "haben gekocht", "futur_i": "werden kochen" }
        }
    },

    // --- BLOQUE 7: Verbos de Habilidades y Aprendizaje (121-140) ---
    {
        "infinitiv": "studieren",
        "mean": "estudiar (en la universidad)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "studiere", "praeteritum": "studierte", "perfekt": "habe studiert", "futur_i": "werde studieren" },
            "du": { "praesens": "studierst", "praeteritum": "studiertest", "perfekt": "hast studiert", "futur_i": "wirst studieren" },
            "er_sie_es": { "praesens": "studiert", "praeteritum": "studierte", "perfekt": "hat studiert", "futur_i": "wird studieren" },
            "wir": { "praesens": "studieren", "praeteritum": "studierten", "perfekt": "haben studiert", "futur_i": "werde studieren" },
            "ihr": { "praesens": "studiert", "praeteritum": "studiertet", "perfekt": "habt studiert", "futur_i": "werdet studieren" },
            "sie_sie_form": { "praesens": "studieren", "praeteritum": "studierten", "perfekt": "haben studiert", "futur_i": "werden studieren" }
        }
    },
    {
        "infinitiv": "unterrichten",
        "mean": "enseñar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "unterrichte", "praeteritum": "unterrichtete", "perfekt": "habe unterrichtet", "futur_i": "werde unterrichten" },
            "du": { "praesens": "unterrichtest", "praeteritum": "unterrichtetest", "perfekt": "hast unterrichtet", "futur_i": "wirst unterrichten" },
            "er_sie_es": { "praesens": "unterrichtet", "praeteritum": "unterrichtete", "perfekt": "hat unterrichtet", "futur_i": "wird unterrichten" },
            "wir": { "praesens": "unterrichten", "praeteritum": "unterrichteten", "perfekt": "haben unterrichtet", "futur_i": "werde unterrichten" },
            "ihr": { "praesens": "unterrichtet", "praeteritum": "unterrichtetet", "perfekt": "habt unterrichtet", "futur_i": "werdet unterrichten" },
            "sie_sie_form": { "praesens": "unterrichten", "praeteritum": "unterrichteten", "perfekt": "haben unterrichtet", "futur_i": "werden unterrichten" }
        }
    },
    {
        "infinitiv": "üben",
        "mean": "practicar / ensayar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "übe", "praeteritum": "übte", "perfekt": "habe geübt", "futur_i": "werde üben" },
            "du": { "praesens": "übst", "praeteritum": "übtest", "perfekt": "hast geübt", "futur_i": "wirst üben" },
            "er_sie_es": { "praesens": "übt", "praeteritum": "übte", "perfekt": "hat geübt", "futur_i": "wird üben" },
            "wir": { "praesens": "üben", "praeteritum": "übten", "perfekt": "haben geübt", "futur_i": "werde üben" },
            "ihr": { "praesens": "übt", "praeteritum": "übtet", "perfekt": "habt geübt", "futur_i": "werdet üben" },
            "sie_sie_form": { "praesens": "üben", "praeteritum": "übten", "perfekt": "haben geübt", "futur_i": "werden üben" }
        }
    },
    {
        "infinitiv": "erklären",
        "mean": "explicar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "erkläre", "praeteritum": "erklärte", "perfekt": "habe erklärt", "futur_i": "werde erklären" },
            "du": { "praesens": "erklärst", "praeteritum": "erklärtest", "perfekt": "hast erklärt", "futur_i": "wirst erklären" },
            "er_sie_es": { "praesens": "erklärt", "praeteritum": "erklärte", "perfekt": "hat erklärt", "futur_i": "wird erklären" },
            "wir": { "praesens": "erklären", "praeteritum": "erklärten", "perfekt": "haben erklärt", "futur_i": "werde erklären" },
            "ihr": { "praesens": "erklärt", "praeteritum": "erklärtet", "perfekt": "habt erklärt", "futur_i": "werdet erklären" },
            "sie_sie_form": { "praesens": "erklären", "praeteritum": "erklärten", "perfekt": "haben erklärt", "futur_i": "werden erklären" }
        }
    },
    {
        "infinitiv": "vergleichen",
        "mean": "comparar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "vergleiche", "praeteritum": "verglich", "perfekt": "habe verglichen", "futur_i": "werde vergleichen" },
            "du": { "praesens": "vergleichst", "praeteritum": "verglichst", "perfekt": "hast verglichen", "futur_i": "wirst vergleichen" },
            "er_sie_es": { "praesens": "vergleicht", "praeteritum": "verglich", "perfekt": "hat verglichen", "futur_i": "wird vergleichen" },
            "wir": { "praesens": "vergleichen", "praeteritum": "verglichen", "perfekt": "haben verglichen", "futur_i": "werde vergleichen" },
            "ihr": { "praesens": "vergleicht", "praeteritum": "verglicht", "perfekt": "habt verglichen", "futur_i": "werdet vergleichen" },
            "sie_sie_form": { "praesens": "vergleichen", "praeteritum": "verglichen", "perfekt": "haben verglichen", "futur_i": "werden vergleichen" }
        }
    },
    {
        "infinitiv": "entscheiden",
        "mean": "decidir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "entscheide", "praeteritum": "entschied", "perfekt": "habe entschieden", "futur_i": "werde entscheiden" },
            "du": { "praesens": "entscheidest", "praeteritum": "entschiedst", "perfekt": "hast entschieden", "futur_i": "wirst entscheiden" },
            "er_sie_es": { "praesens": "entscheidet", "praeteritum": "entschied", "perfekt": "hat entschieden", "futur_i": "wird entscheiden" },
            "wir": { "praesens": "entscheiden", "praeteritum": "entschieden", "perfekt": "haben entschieden", "futur_i": "werde entscheiden" },
            "ihr": { "praesens": "entscheidet", "praeteritum": "entschiedet", "perfekt": "habt entschieden", "futur_i": "werdet entscheiden" },
            "sie_sie_form": { "praesens": "entscheiden", "praeteritum": "entschieden", "perfekt": "haben entschieden", "futur_i": "werden entscheiden" }
        }
    },
    {
        "infinitiv": "versuchen",
        "mean": "intentar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "versuche", "praeteritum": "versuchte", "perfekt": "habe versucht", "futur_i": "werde versuchen" },
            "du": { "praesens": "versuchst", "praeteritum": "versuchtest", "perfekt": "hast versucht", "futur_i": "wirst versuchen" },
            "er_sie_es": { "praesens": "versucht", "praeteritum": "versuchte", "perfekt": "hat versucht", "futur_i": "wird versuchen" },
            "wir": { "praesens": "versuchen", "praeteritum": "versuchten", "perfekt": "haben versucht", "futur_i": "werde versuchen" },
            "ihr": { "praesens": "versucht", "praeteritum": "versuchtet", "perfekt": "habt versucht", "futur_i": "werdet versuchen" },
            "sie_sie_form": { "praesens": "versuchen", "praeteritum": "versuchten", "perfekt": "haben versucht", "futur_i": "werden versuchen" }
        }
    },
    {
        "infinitiv": "erlauben",
        "mean": "permitir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "erlaube", "praeteritum": "erlaubte", "perfekt": "habe erlaubt", "futur_i": "werde erlauben" },
            "du": { "praesens": "erlaubst", "praeteritum": "erlaubtest", "perfekt": "hast erlaubt", "futur_i": "wirst erlauben" },
            "er_sie_es": { "praesens": "erlaubt", "praeteritum": "erlaubte", "perfekt": "hat erlaubt", "futur_i": "wird erlauben" },
            "wir": { "praesens": "erlauben", "praeteritum": "erlaubten", "perfekt": "haben erlaubt", "futur_i": "werde erlauben" },
            "ihr": { "praesens": "erlaubt", "praeteritum": "erlaubtet", "perfekt": "habt erlaubt", "futur_i": "werdet erlauben" },
            "sie_sie_form": { "praesens": "erlauben", "praeteritum": "erlaubten", "perfekt": "haben erlaubt", "futur_i": "werden erlauben" }
        }
    },
    {
        "infinitiv": "verbieten",
        "mean": "prohibir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "verbiete", "praeteritum": "verbot", "perfekt": "habe verboten", "futur_i": "werde verbieten" },
            "du": { "praesens": "verbietest", "praeteritum": "verbotst", "perfekt": "hast verboten", "futur_i": "wirst verbieten" },
            "er_sie_es": { "praesens": "verbietet", "praeteritum": "verbot", "perfekt": "hat verboten", "futur_i": "werde verbieten" },
            "wir": { "praesens": "verbieten", "praeteritum": "verboten", "perfekt": "haben verboten", "futur_i": "werde verbieten" },
            "ihr": { "praesens": "verbietet", "praeteritum": "verbotet", "perfekt": "habt verboten", "futur_i": "werdet verbieten" },
            "sie_sie_form": { "praesens": "verbieten", "praeteritum": "verboten", "perfekt": "haben verboten", "futur_i": "werden verbieten" }
        }
    },
    {
        "infinitiv": "benutzen",
        "mean": "usar / utilizar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "benutze", "praeteritum": "benutzte", "perfekt": "habe benutzt", "futur_i": "werde benutzen" },
            "du": { "praesens": "benutzt", "praeteritum": "benutztest", "perfekt": "hast benutzt", "futur_i": "wirst benutzen" },
            "er_sie_es": { "praesens": "benutzt", "praeteritum": "benutzte", "perfekt": "hat benutzt", "futur_i": "wird benutzen" },
            "wir": { "praesens": "benutzen", "praeteritum": "benutzten", "perfekt": "haben benutzt", "futur_i": "werde benutzen" },
            "ihr": { "praesens": "benutzt", "praeteritum": "benutztet", "perfekt": "habt benutzt", "futur_i": "werdet benutzen" },
            "sie_sie_form": { "praesens": "benutzen", "praeteritum": "benutzten", "perfekt": "haben benutzt", "futur_i": "werden benutzen" }
        }
    },
    {
        "infinitiv": "schaffen",
        "mean": "crear / conseguir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "schaffe", "praeteritum": "schaffte", "perfekt": "habe geschafft", "futur_i": "werde schaffen" },
            "du": { "praesens": "schaffst", "praeteritum": "schafftest", "perfekt": "hast geschafft", "futur_i": "wirst schaffen" },
            "er_sie_es": { "praesens": "schafft", "praeteritum": "schaffte", "perfekt": "hat geschafft", "futur_i": "wird schaffen" },
            "wir": { "praesens": "schaffen", "praeteritum": "schafften", "perfekt": "haben geschafft", "futur_i": "werden schaffen" },
            "ihr": { "praesens": "schafft", "praeteritum": "schafftet", "perfekt": "habt geschafft", "futur_i": "werdet schaffen" },
            "sie_sie_form": { "praesens": "schaffen", "praeteritum": "schafften", "perfekt": "haben geschafft", "futur_i": "werden schaffen" }
        }
    },
    {
        "infinitiv": "erhalten",
        "mean": "recibir / mantener",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "erhalte", "praeteritum": "erhielt", "perfekt": "habe erhalten", "futur_i": "werde erhalten" },
            "du": { "praesens": "erhältst", "praeteritum": "erhieltst", "perfekt": "hast erhalten", "futur_i": "wirst erhalten" },
            "er_sie_es": { "praesens": "erhält", "praeteritum": "erhielt", "perfekt": "hat erhalten", "futur_i": "wird erhalten" },
            "wir": { "praesens": "erhalten", "praeteritum": "erhielten", "perfekt": "haben erhalten", "futur_i": "werden erhalten" },
            "ihr": { "praesens": "erhaltet", "praeteritum": "erhieltet", "perfekt": "habt erhalten", "futur_i": "werdet erhalten" },
            "sie_sie_form": { "praesens": "erhalten", "praeteritum": "erhielten", "perfekt": "haben erhalten", "futur_i": "werden erhalten" }
        }
    },
    {
        "infinitiv": "liefern",
        "mean": "entregar / suministrar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "liefere", "praeteritum": "lieferte", "perfekt": "habe geliefert", "futur_i": "werde liefern" },
            "du": { "praesens": "lieferst", "praeteritum": "liefertest", "perfekt": "hast geliefert", "futur_i": "wirst liefern" },
            "er_sie_es": { "praesens": "liefert", "praeteritum": "lieferte", "perfekt": "hat geliefert", "futur_i": "wird liefern" },
            "wir": { "praesens": "liefern", "praeteritum": "lieferten", "perfekt": "haben geliefert", "futur_i": "werden liefern" },
            "ihr": { "praesens": "liefert", "praeteritum": "liefertet", "perfekt": "habt geliefert", "futur_i": "werdet liefern" },
            "sie_sie_form": { "praesens": "liefern", "praeteritum": "lieferten", "perfekt": "haben geliefert", "futur_i": "werden liefern" }
        }
    },
    {
        "infinitiv": "sammeln",
        "mean": "coleccionar / recolectar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "sammle", "praeteritum": "sammelte", "perfekt": "habe gesammelt", "futur_i": "werde sammeln" },
            "du": { "praesens": "sammelst", "praeteritum": "sammeltest", "perfekt": "hast gesammelt", "futur_i": "wirst sammeln" },
            "er_sie_es": { "praesens": "sammelt", "praeteritum": "sammelte", "perfekt": "hat gesammelt", "futur_i": "wird sammeln" },
            "wir": { "praesens": "sammeln", "praeteritum": "sammelten", "perfekt": "haben gesammelt", "futur_i": "werden sammeln" },
            "ihr": { "praesens": "sammelt", "praeteritum": "sammeltet", "perfekt": "habt gesammelt", "futur_i": "werdet sammeln" },
            "sie_sie_form": { "praesens": "sammeln", "praeteritum": "sammelten", "perfekt": "haben gesammelt", "futur_i": "werden sammeln" }
        }
    },
    {
        "infinitiv": "trennen",
        "mean": "separar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "trenne", "praeteritum": "trennte", "perfekt": "habe getrennt", "futur_i": "werde trennen" },
            "du": { "praesens": "trennst", "praeteritum": "trenntest", "perfekt": "hast getrennt", "futur_i": "wirst trennen" },
            "er_sie_es": { "praesens": "trennt", "praeteritum": "trennte", "perfekt": "hat getrennt", "futur_i": "wird trennen" },
            "wir": { "praesens": "trennen", "praeteritum": "trennten", "perfekt": "haben getrennt", "futur_i": "werden trennen" },
            "ihr": { "praesens": "trennt", "praeteritum": "trenntet", "perfekt": "habt getrennt", "futur_i": "werdet trennen" },
            "sie_sie_form": { "praesens": "trennen", "praeteritum": "trennten", "perfekt": "haben getrennt", "futur_i": "werden trennen" }
        }
    },

    // --- BLOQUE 8: Verbos de Movimiento y Viaje (141-160) ---
    {
        "infinitiv": "reisen",
        "mean": "viajar",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "reise", "praeteritum": "reiste", "perfekt": "bin gereist", "futur_i": "werde reisen" },
            "du": { "praesens": "reist", "praeteritum": "reistest", "perfekt": "bist gereist", "futur_i": "wirst reisen" },
            "er_sie_es": { "praesens": "reist", "praeteritum": "reiste", "perfekt": "ist gereist", "futur_i": "wird reisen" },
            "wir": { "praesens": "reisen", "praeteritum": "reisten", "perfekt": "sind gereist", "futur_i": "werde reisen" },
            "ihr": { "praesens": "reist", "praeteritum": "reistet", "perfekt": "seid gereist", "futur_i": "werdet reisen" },
            "sie_sie_form": { "praesens": "reisen", "praeteritum": "reisten", "perfekt": "sind gereist", "futur_i": "werden reisen" }
        }
    },
    {
        "infinitiv": "zurückkommen",
        "mean": "volver / regresar",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "komme zurück", "praeteritum": "kam zurück", "perfekt": "bin zurückgekommen", "futur_i": "werde zurückkommen" },
            "du": { "praesens": "kommst zurück", "praeteritum": "kamst zurück", "perfekt": "bist zurückgekommen", "futur_i": "wirst zurückkommen" },
            "er_sie_es": { "praesens": "kommt zurück", "praeteritum": "kam zurück", "perfekt": "ist zurückgekommen", "futur_i": "wird zurückkommen" },
            "wir": { "praesens": "kommen zurück", "praeteritum": "kamen zurück", "perfekt": "sind zurückgekommen", "futur_i": "werde zurückkommen" },
            "ihr": { "praesens": "kommt zurück", "praeteritum": "kamt zurück", "perfekt": "seid zurückgekommen", "futur_i": "werdet zurückkommen" },
            "sie_sie_form": { "praesens": "kommen zurück", "praeteritum": "kamen zurück", "perfekt": "sind zurückgekommen", "futur_i": "werde zurückkommen" }
        }
    },
    {
        "infinitiv": "einsteigen",
        "mean": "subir (a un vehículo)",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "steige ein", "praeteritum": "stieg ein", "perfekt": "bin eingestiegen", "futur_i": "werde einsteigen" },
            "du": { "praesens": "steigst ein", "praeteritum": "stiegst ein", "perfekt": "bist eingestiegen", "futur_i": "wirst einsteigen" },
            "er_sie_es": { "praesens": "steigt ein", "praeteritum": "stieg ein", "perfekt": "ist eingestiegen", "futur_i": "wird einsteigen" },
            "wir": { "praesens": "steigen ein", "praeteritum": "stiegen ein", "perfekt": "sind eingestiegen", "futur_i": "werde einsteigen" },
            "ihr": { "praesens": "steigt ein", "praeteritum": "stiegt ein", "perfekt": "seid eingestiegen", "futur_i": "werdet einsteigen" },
            "sie_sie_form": { "praesens": "steigen ein", "praeteritum": "stiegen ein", "perfekt": "sind eingestiegen", "futur_i": "werde einsteigen" }
        }
    },
    {
        "infinitiv": "aussteigen",
        "mean": "bajar (de un vehículo)",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "steige aus", "praeteritum": "stieg aus", "perfekt": "bin ausgestiegen", "futur_i": "werde aussteigen" },
            "du": { "praesens": "steigst aus", "praeteritum": "stiegst aus", "perfekt": "bist ausgestiegen", "futur_i": "wirst aussteigen" },
            "er_sie_es": { "praesens": "steigt aus", "praeteritum": "stieg aus", "perfekt": "ist ausgestiegen", "futur_i": "wird aussteigen" },
            "wir": { "praesens": "steigen aus", "praeteritum": "stiegen aus", "perfekt": "sind ausgestiegen", "futur_i": "werde aussteigen" },
            "ihr": { "praesens": "steigt aus", "praeteritum": "stiegt aus", "perfekt": "seid ausgestiegen", "futur_i": "werdet aussteigen" },
            "sie_sie_form": { "praesens": "steigen aus", "praeteritum": "stiegen aus", "perfekt": "sind ausgestiegen", "futur_i": "werde aussteigen" }
        }
    },
    {
        "infinitiv": "umsteigen",
        "mean": "hacer transbordo",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "steige um", "praeteritum": "stieg um", "perfekt": "bin umgestiegen", "futur_i": "werde umsteigen" },
            "du": { "praesens": "steigst um", "praeteritum": "stiegst um", "perfekt": "bist umgestiegen", "futur_i": "wirst umsteigen" },
            "er_sie_es": { "praesens": "steigt um", "praeteritum": "stieg um", "perfekt": "ist umgestiegen", "futur_i": "wird umsteigen" },
            "wir": { "praesens": "steigen um", "praeteritum": "stiegen um", "perfekt": "sind umgestiegen", "futur_i": "werde umsteigen" },
            "ihr": { "praesens": "steigt um", "praeteritum": "stiegt um", "perfekt": "seid umgestiegen", "futur_i": "werdet umsteigen" },
            "sie_sie_form": { "praesens": "steigen um", "praeteritum": "stiegen um", "perfekt": "sind umgestiegen", "futur_i": "werde umsteigen" }
        }
    },
    {
        "infinitiv": "abfahren",
        "mean": "salir / partir (vehículo)",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "fahre ab", "praeteritum": "fuhr ab", "perfekt": "bin abgefahren", "futur_i": "werde abfahren" },
            "du": { "praesens": "fährst ab", "praeteritum": "fuhrst ab", "perfekt": "bist abgefahren", "futur_i": "wirst abfahren" },
            "er_sie_es": { "praesens": "fährt ab", "praeteritum": "fuhr ab", "perfekt": "ist abgefahren", "futur_i": "wird abfahren" },
            "wir": { "praesens": "fahren ab", "praeteritum": "fuhren ab", "perfekt": "sind abgefahren", "futur_i": "werde abfahren" },
            "ihr": { "praesens": "fahrt ab", "praeteritum": "fahrt ab", "perfekt": "seid abgefahren", "futur_i": "werdet abfahren" },
            "sie_sie_form": { "praesens": "fahren ab", "praeteritum": "fuhren ab", "perfekt": "sind abgefahren", "futur_i": "werde abfahren" }
        }
    },
    {
        "infinitiv": "ankommen",
        "mean": "llegar",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "komme an", "praeteritum": "kam an", "perfekt": "bin angekommen", "futur_i": "werde ankommen" },
            "du": { "praesens": "kommst an", "praeteritum": "kamst an", "perfekt": "bist angekommen", "futur_i": "wirst ankommen" },
            "er_sie_es": { "praesens": "kommt an", "praeteritum": "kam an", "perfekt": "ist angekommen", "futur_i": "wird ankommen" },
            "wir": { "praesens": "kommen an", "praeteritum": "kamen an", "perfekt": "sind angekommen", "futur_i": "werde ankommen" },
            "ihr": { "praesens": "kommt an", "praeteritum": "kamt an", "perfekt": "seid angekommen", "futur_i": "werdet ankommen" },
            "sie_sie_form": { "praesens": "kommen an", "praeteritum": "kamen an", "perfekt": "sind angekommen", "futur_i": "werde ankommen" }
        }
    },
    {
        "infinitiv": "mitnehmen",
        "mean": "llevar (consigo)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "nehme mit", "praeteritum": "nahm mit", "perfekt": "habe mitgenommen", "futur_i": "werde mitnehmen" },
            "du": { "praesens": "nimmst mit", "praeteritum": "nahmst mit", "perfekt": "hast mitgenommen", "futur_i": "wirst mitnehmen" },
            "er_sie_es": { "praesens": "nimmt mit", "praeteritum": "nahm mit", "perfekt": "hat mitgenommen", "futur_i": "wird mitnehmen" },
            "wir": { "praesens": "nehmen mit", "praeteritum": "nahmen mit", "perfekt": "haben mitgenommen", "futur_i": "werde mitnehmen" },
            "ihr": { "praesens": "nehmt mit", "praeteritum": "nahmt mit", "perfekt": "habt mitgenommen", "futur_i": "werdet mitnehmen" },
            "sie_sie_form": { "praesens": "nehmen mit", "praeteritum": "nahmen mit", "perfekt": "haben mitgenommen", "futur_i": "werde mitnehmen" }
        }
    },
    {
        "infinitiv": "mitbringen",
        "mean": "traer (consigo)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "bringe mit", "praeteritum": "brachte mit", "perfekt": "habe mitgebracht", "futur_i": "werde mitbringen" },
            "du": { "praesens": "bringst mit", "praeteritum": "brachtest mit", "perfekt": "hast mitgebracht", "futur_i": "wirst mitbringen" },
            "er_sie_es": { "praesens": "bringt mit", "praeteritum": "brachte mit", "perfekt": "hat mitgebracht", "futur_i": "wird mitbringen" },
            "wir": { "praesens": "bringen mit", "praeteritum": "brachten mit", "perfekt": "haben mitgebracht", "futur_i": "werde mitbringen" },
            "ihr": { "praesens": "bringt mit", "praeteritum": "brachtet mit", "perfekt": "habt mitgebracht", "futur_i": "werdet mitbringen" },
            "sie_sie_form": { "praesens": "bringen mit", "praeteritum": "brachten mit", "perfekt": "haben mitgebracht", "futur_i": "werde mitbringen" }
        }
    },
    {
        "infinitiv": "umziehen",
        "mean": "mudarse / cambiarse de ropa",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "ziehe um", "praeteritum": "zog um", "perfekt": "bin umgezogen", "futur_i": "werde umziehen" },
            "du": { "praesens": "ziehst um", "praeteritum": "zogst um", "perfekt": "bist umgezogen", "futur_i": "wirst umziehen" },
            "er_sie_es": { "praesens": "zieht um", "praeteritum": "zog um", "perfekt": "ist umgezogen", "futur_i": "wird umziehen" },
            "wir": { "praesens": "ziehen um", "praeteritum": "zogen um", "perfekt": "sind umgezogen", "futur_i": "werde umziehen" },
            "ihr": { "praesens": "zieht um", "praeteritum": "zogt um", "perfekt": "seid umgezogen", "futur_i": "werdet umziehen" },
            "sie_sie_form": { "praesens": "ziehen um", "praeteritum": "zogen um", "perfekt": "sind umgezogen", "futur_i": "werde umziehen" }
        }
    },
    {
        "infinitiv": "auspacken",
        "mean": "desempacar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "packe aus", "praeteritum": "packte aus", "perfekt": "habe ausgepackt", "futur_i": "werde auspacken" },
            "du": { "praesens": "packst aus", "praeteritum": "packtest aus", "perfekt": "hast ausgepackt", "futur_i": "wirst auspacken" },
            "er_sie_es": { "praesens": "packt aus", "praeteritum": "packte aus", "perfekt": "hat ausgepackt", "futur_i": "wird auspacken" },
            "wir": { "praesens": "packen aus", "praeteritum": "packten aus", "perfekt": "haben ausgepackt", "futur_i": "werde auspacken" },
            "ihr": { "praesens": "packt aus", "praeteritum": "packtet aus", "perfekt": "habt ausgepackt", "futur_i": "werdet auspacken" },
            "sie_sie_form": { "praesens": "packen aus", "praeteritum": "packten aus", "perfekt": "haben ausgepackt", "futur_i": "werde auspacken" }
        }
    },
    {
        "infinitiv": "einpacken",
        "mean": "empacar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "packe ein", "praeteritum": "packte ein", "perfekt": "habe eingepackt", "futur_i": "werde einpacken" },
            "du": { "praesens": "packst ein", "praeteritum": "packtest ein", "perfekt": "hast eingepackt", "futur_i": "wirst einpacken" },
            "er_sie_es": { "praesens": "packt ein", "praeteritum": "packte ein", "perfekt": "hat eingepackt", "futur_i": "wird einpacken" },
            "wir": { "praesens": "packen ein", "praeteritum": "packten ein", "perfekt": "haben eingepackt", "futur_i": "werde einpacken" },
            "ihr": { "praesens": "packt ein", "praeteritum": "packtet ein", "perfekt": "habt eingepackt", "futur_i": "werdet einpacken" },
            "sie_sie_form": { "praesens": "packen ein", "praeteritum": "packten ein", "perfekt": "haben eingepackt", "futur_i": "werde einpacken" }
        }
    },
    {
        "infinitiv": "mitfahren",
        "mean": "ir con (alguien)",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "fahre mit", "praeteritum": "fuhr mit", "perfekt": "bin mitgefahren", "futur_i": "werde mitfahren" },
            "du": { "praesens": "fährst mit", "praeteritum": "fuhrst mit", "perfekt": "bist mitgefahren", "futur_i": "wirst mitfahren" },
            "er_sie_es": { "praesens": "fährt mit", "praeteritum": "fuhr mit", "perfekt": "ist mitgefahren", "futur_i": "wird mitfahren" },
            "wir": { "praesens": "fahren mit", "praeteritum": "fuhren mit", "perfekt": "sind mitgefahren", "futur_i": "werde mitfahren" },
            "ihr": { "praesens": "fahrt mit", "praeteritum": "fahrt mit", "perfekt": "seid mitgefahren", "futur_i": "werdet mitfahren" },
            "sie_sie_form": { "praesens": "fahren mit", "praeteritum": "fuhren mit", "perfekt": "sind mitgefahren", "futur_i": "werde mitfahren" }
        }
    },
    {
        "infinitiv": "einladen",
        "mean": "invitar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "lade ein", "praeteritum": "lud ein", "perfekt": "habe eingeladen", "futur_i": "werde einladen" },
            "du": { "praesens": "lädst ein", "praeteritum": "ludst ein", "perfekt": "hast eingeladen", "futur_i": "wirst einladen" },
            "er_sie_es": { "praesens": "lädt ein", "praeteritum": "lud ein", "perfekt": "hat eingeladen", "futur_i": "wird einladen" },
            "wir": { "praesens": "laden ein", "praeteritum": "luden ein", "perfekt": "haben eingeladen", "futur_i": "werde einladen" },
            "ihr": { "praesens": "ladet ein", "praeteritum": "ludet ein", "perfekt": "habt eingeladen", "futur_i": "werdet einladen" },
            "sie_sie_form": { "praesens": "laden ein", "praeteritum": "luden ein", "perfekt": "haben eingeladen", "futur_i": "werde einladen" }
        }
    },
    {
        "infinitiv": "organisieren",
        "mean": "organizar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "organisiere", "praeteritum": "organisierte", "perfekt": "habe organisiert", "futur_i": "werde organisieren" },
            "du": { "praesens": "organisierst", "praeteritum": "organisiertest", "perfekt": "hast organisiert", "futur_i": "wirst organisieren" },
            "er_sie_es": { "praesens": "organisiert", "praeteritum": "organisierte", "perfekt": "hat organisiert", "futur_i": "wird organisieren" },
            "wir": { "praesens": "organisieren", "praeteritum": "organisierten", "perfekt": "haben organisiert", "futur_i": "werde organisieren" },
            "ihr": { "praesens": "organisiert", "praeteritum": "organisiertet", "perfekt": "habt organisiert", "futur_i": "werdet organisieren" },
            "sie_sie_form": { "praesens": "organisieren", "praeteritum": "organisierten", "perfekt": "haben organisiert", "futur_i": "werde organisieren" }
        }
    },
    {
        "infinitiv": "feiern",
        "mean": "celebrar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "feiere", "praeteritum": "feierte", "perfekt": "habe gefeiert", "futur_i": "werde feiern" },
            "du": { "praesens": "feierst", "praeteritum": "feiertest", "perfekt": "hast gefeiert", "futur_i": "wirst feiern" },
            "er_sie_es": { "praesens": "feiert", "praeteritum": "feierte", "perfekt": "hat gefeiert", "futur_i": "wird feiern" },
            "wir": { "praesens": "feiern", "praeteritum": "feierten", "perfekt": "haben gefeiert", "futur_i": "werde feiern" },
            "ihr": { "praesens": "feiert", "praeteritum": "feiertet", "perfekt": "habt gefeiert", "futur_i": "werdet feiern" },
            "sie_sie_form": { "praesens": "feiern", "praeteritum": "feierten", "perfekt": "haben gefeiert", "futur_i": "werde feiern" }
        }
    },

    // --- BLOQUE 9: Verbos de Interacción y Comunicación (161-180) ---
    {
        "infinitiv": "diskutieren",
        "mean": "discutir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "diskutiere", "praeteritum": "diskutierte", "perfekt": "habe diskutiert", "futur_i": "werde diskutieren" },
            "du": { "praesens": "diskutierst", "praeteritum": "diskutiertest", "perfekt": "hast diskutiert", "futur_i": "wirst diskutieren" },
            "er_sie_es": { "praesens": "diskutiert", "praeteritum": "diskutierte", "perfekt": "hat diskutiert", "futur_i": "wird diskutieren" },
            "wir": { "praesens": "diskutieren", "praeteritum": "diskutierten", "perfekt": "haben diskutiert", "futur_i": "werde diskutieren" },
            "ihr": { "praesens": "diskutiert", "praeteritum": "diskutiertet", "perfekt": "habt diskutiert", "futur_i": "werdet diskutieren" },
            "sie_sie_form": { "praesens": "diskutieren", "praeteritum": "diskutierten", "perfekt": "haben diskutiert", "futur_i": "werde diskutieren" }
        }
    },
    {
        "infinitiv": "vorschlagen",
        "mean": "proponer / sugerir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "schlage vor", "praeteritum": "schlug vor", "perfekt": "habe vorgeschlagen", "futur_i": "werde vorschlagen" },
            "du": { "praesens": "schlägst vor", "praeteritum": "schlugst vor", "perfekt": "hast vorgeschlagen", "futur_i": "wirst vorschlagen" },
            "er_sie_es": { "praesens": "schlägt vor", "praeteritum": "schlug vor", "perfekt": "hat vorgeschlagen", "futur_i": "wird vorschlagen" },
            "wir": { "praesens": "schlagen vor", "praeteritum": "schlugen vor", "perfekt": "haben vorgeschlagen", "futur_i": "werde vorschlagen" },
            "ihr": { "praesens": "schlagt vor", "praeteritum": "schlugt vor", "perfekt": "habt vorgeschlagen", "futur_i": "werdet vorschlagen" },
            "sie_sie_form": { "praesens": "schlagen vor", "praeteritum": "schlugen vor", "perfekt": "haben vorgeschlagen", "futur_i": "werde vorschlagen" }
        }
    },
    {
        "infinitiv": "zustimmen",
        "mean": "estar de acuerdo",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "stimme zu", "praeteritum": "stimmte zu", "perfekt": "habe zugestimmt", "futur_i": "werde zustimmen" },
            "du": { "praesens": "stimmst zu", "praeteritum": "stimmtest zu", "perfekt": "hast zugestimmt", "futur_i": "wirst zustimmen" },
            "er_sie_es": { "praesens": "stimmt zu", "praeteritum": "stimmte zu", "perfekt": "hat zugestimmt", "futur_i": "wird zustimmen" },
            "wir": { "praesens": "stimmen zu", "praeteritum": "stimmten zu", "perfekt": "haben zugestimmt", "futur_i": "werde zustimmen" },
            "ihr": { "praesens": "stimmt zu", "praeteritum": "stimmtet zu", "perfekt": "habt zugestimmt", "futur_i": "werdet zustimmen" },
            "sie_sie_form": { "praesens": "stimmen zu", "praeteritum": "stimmten zu", "perfekt": "haben zugestimmt", "futur_i": "werde zustimmen" }
        }
    },
    {
        "infinitiv": "ablehnen",
        "mean": "rechazar / declinar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "lehne ab", "praeteritum": "lehnte ab", "perfekt": "habe abgelehnt", "futur_i": "werde ablehnen" },
            "du": { "praesens": "lehnst ab", "praeteritum": "lehntest ab", "perfekt": "hast abgelehnt", "futur_i": "wirst ablehnen" },
            "er_sie_es": { "praesens": "lehnt ab", "praeteritum": "lehnte ab", "perfekt": "hat abgelehnt", "futur_i": "wird ablehnen" },
            "wir": { "praesens": "lehnen ab", "praeteritum": "lehnten ab", "perfekt": "haben abgelehnt", "futur_i": "werde ablehnen" },
            "ihr": { "praesens": "lehnt ab", "praeteritum": "lehntet ab", "perfekt": "habt abgelehnt", "futur_i": "werdet ablehnen" },
            "sie_sie_form": { "praesens": "lehnen ab", "praeteritum": "lehnten ab", "perfekt": "haben abgelehnt", "futur_i": "werde ablehnen" }
        }
    },
    {
        "infinitiv": "erklären",
        "mean": "declarar / explicar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "erkläre", "praeteritum": "erklärte", "perfekt": "habe erklärt", "futur_i": "werde erklären" },
            "du": { "praesens": "erklärst", "praeteritum": "erklärtest", "perfekt": "hast erklärt", "futur_i": "wirst erklären" },
            "er_sie_es": { "praesens": "erklärt", "praeteritum": "erklärte", "perfekt": "hat erklärt", "futur_i": "wird erklären" },
            "wir": { "praesens": "erklären", "praeteritum": "erklärten", "perfekt": "haben erklärt", "futur_i": "werde erklären" },
            "ihr": { "praesens": "erklärt", "praeteritum": "erklärtet", "perfekt": "habt erklärt", "futur_i": "werdet erklären" },
            "sie_sie_form": { "praesens": "erklären", "praeteritum": "erklärten", "perfekt": "haben erklärt", "futur_i": "werde erklären" }
        }
    },
    {
        "infinitiv": "berichten",
        "mean": "informar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "berichte", "praeteritum": "berichtete", "perfekt": "habe berichtet", "futur_i": "werde berichten" },
            "du": { "praesens": "berichtest", "praeteritum": "berichtetest", "perfekt": "hast berichtet", "futur_i": "wirst berichten" },
            "er_sie_es": { "praesens": "berichtet", "praeteritum": "berichtete", "perfekt": "hat berichtet", "futur_i": "wird berichten" },
            "wir": { "praesens": "berichten", "praeteritum": "berichteten", "perfekt": "haben berichtet", "futur_i": "werde berichten" },
            "ihr": { "praesens": "berichtet", "praeteritum": "berichtetet", "perfekt": "habt berichtet", "futur_i": "werdet berichten" },
            "sie_sie_form": { "praesens": "berichten", "praeteritum": "berichteten", "perfekt": "haben berichtet", "futur_i": "werde berichten" }
        }
    },
    {
        "infinitiv": "unterhalten",
        "mean": "conversar / entretener",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "unterhalte", "praeteritum": "unterhielt", "perfekt": "habe unterhalten", "futur_i": "werde unterhalten" },
            "du": { "praesens": "unterhältst", "praeteritum": "unterhieltst", "perfekt": "hast unterhalten", "futur_i": "wirst unterhalten" },
            "er_sie_es": { "praesens": "unterhält", "praeteritum": "unterhielt", "perfekt": "hat unterhalten", "futur_i": "wird unterhalten" },
            "wir": { "praesens": "unterhalten", "praeteritum": "unterhielten", "perfekt": "haben unterhalten", "futur_i": "werde unterhalten" },
            "ihr": { "praesens": "unterhaltet", "praeteritum": "unterhieltet", "perfekt": "habt unterhalten", "futur_i": "werdet unterhalten" },
            "sie_sie_form": { "praesens": "unterhalten", "praeteritum": "unterhielten", "perfekt": "haben unterhalten", "futur_i": "werde unterhalten" }
        }
    },
    {
        "infinitiv": "zeigen",
        "mean": "mostrar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "zeige", "praeteritum": "zeigte", "perfekt": "habe gezeigt", "futur_i": "werde zeigen" },
            "du": { "praesens": "zeigst", "praeteritum": "zeigtest", "perfekt": "hast gezeigt", "futur_i": "wirst zeigen" },
            "er_sie_es": { "praesens": "zeigt", "praeteritum": "zeigte", "perfekt": "hat gezeigt", "futur_i": "wird zeigen" },
            "wir": { "praesens": "zeigen", "praeteritum": "zeigten", "perfekt": "haben gezeigt", "futur_i": "werde zeigen" },
            "ihr": { "praesens": "zeigt", "praeteritum": "zeigten", "perfekt": "habt gezeigt", "futur_i": "werdet zeigen" },
            "sie_sie_form": { "praesens": "zeigen", "praeteritum": "zeigten", "perfekt": "haben gezeigt", "futur_i": "werde zeigen" }
        }
    },
    {
        "infinitiv": "fragen",
        "mean": "preguntar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "frage", "praeteritum": "fragte", "perfekt": "habe gefragt", "futur_i": "werde fragen" },
            "du": { "praesens": "fragst", "praeteritum": "fragtest", "perfekt": "hast gefragt", "futur_i": "wirst fragen" },
            "er_sie_es": { "praesens": "fragt", "praeteritum": "fragte", "perfekt": "hat gefragt", "futur_i": "wird fragen" },
            "wir": { "praesens": "fragen", "praeteritum": "fragten", "perfekt": "haben gefragt", "futur_i": "werde fragen" },
            "ihr": { "praesens": "fragt", "praeteritum": "fragtet", "perfekt": "habt gefragt", "futur_i": "werdet fragen" },
            "sie_sie_form": { "praesens": "fragen", "praeteritum": "fragten", "perfekt": "haben gefragt", "futur_i": "werde fragen" }
        }
    },
    {
        "infinitiv": "antworten",
        "mean": "responder",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "antworte", "praeteritum": "antwortete", "perfekt": "habe geantwortet", "futur_i": "werde antworten" },
            "du": { "praesens": "antwortest", "praeteritum": "antwortetest", "perfekt": "hast geantwortet", "futur_i": "wirst antworten" },
            "er_sie_es": { "praesens": "antwortet", "praeteritum": "antwortete", "perfekt": "hat geantwortet", "futur_i": "wird antworten" },
            "wir": { "praesens": "antworten", "praeteritum": "antworteten", "perfekt": "haben geantwortet", "futur_i": "werde antworten" },
            "ihr": { "praesens": "antwortet", "praeteritum": "antwortetet", "perfekt": "habt geantwortet", "futur_i": "werdet antworten" },
            "sie_sie_form": { "praesens": "antworten", "praeteritum": "antworteten", "perfekt": "haben geantwortet", "futur_i": "werde antworten" }
        }
    },
    {
        "infinitiv": "wiederholen",
        "mean": "repetir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "wiederhole", "praeteritum": "wiederholte", "perfekt": "habe wiederholt", "futur_i": "werde wiederholen" },
            "du": { "praesens": "wiederholst", "praeteritum": "wiederholtest", "perfekt": "hast wiederholt", "futur_i": "wirst wiederholen" },
            "er_sie_es": { "praesens": "wiederholt", "praeteritum": "wiederholte", "perfekt": "hat wiederholt", "futur_i": "wird wiederholen" },
            "wir": { "praesens": "wiederholen", "praeteritum": "wiederholten", "perfekt": "haben wiederholt", "futur_i": "werde wiederholen" },
            "ihr": { "praesens": "wiederholt", "praeteritum": "wiederholtet", "perfekt": "habt wiederholt", "futur_i": "werdet wiederholen" },
            "sie_sie_form": { "praesens": "wiederholen", "praeteritum": "wiederholten", "perfekt": "haben wiederholt", "futur_i": "werde wiederholen" }
        }
    },
    {
        "infinitiv": "vorstellen",
        "mean": "presentar(se) / imaginar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "stelle vor", "praeteritum": "stellte vor", "perfekt": "habe vorgestellt", "futur_i": "werde vorstellen" },
            "du": { "praesens": "stellst vor", "praeteritum": "stelltest vor", "perfekt": "hast vorgestellt", "futur_i": "wirst vorstellen" },
            "er_sie_es": { "praesens": "stellt vor", "praeteritum": "stellte vor", "perfekt": "hat vorgestellt", "futur_i": "wird vorstellen" },
            "wir": { "praesens": "stellen vor", "praeteritum": "stellten vor", "perfekt": "haben vorgestellt", "futur_i": "werde vorstellen" },
            "ihr": { "praesens": "stellt vor", "praeteritum": "stelltet vor", "perfekt": "habt vorgestellt", "futur_i": "werdet vorstellen" },
            "sie_sie_form": { "praesens": "stellen vor", "praeteritum": "stellten vor", "perfekt": "haben vorgestellt", "futur_i": "werde vorstellen" }
        }
    },
    {
        "infinitiv": "entschuldigen",
        "mean": "disculpar(se)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "entschuldige", "praeteritum": "entschuldigte", "perfekt": "habe entschuldigt", "futur_i": "werde entschuldigen" },
            "du": { "praesens": "entschuldigst", "praeteritum": "entschuldigtest", "perfekt": "hast entschuldigt", "futur_i": "wirst entschuldigen" },
            "er_sie_es": { "praesens": "entschuldigt", "praeteritum": "entschuldigte", "perfekt": "hat entschuldigt", "futur_i": "wird entschuldigen" },
            "wir": { "praesens": "entschuldigen", "praeteritum": "entschuldigten", "perfekt": "haben entschuldigt", "futur_i": "werde entschuldigen" },
            "ihr": { "praesens": "entschuldigt", "praeteritum": "entschuldigtet", "perfekt": "habt entschuldigt", "futur_i": "werdet entschuldigen" },
            "sie_sie_form": { "praesens": "entschuldigen", "praeteritum": "entschuldigten", "perfekt": "haben entschuldigt", "futur_i": "werde entschuldigen" }
        }
    },
    {
        "infinitiv": "unterstützen",
        "mean": "apoyar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "unterstütze", "praeteritum": "unterstützte", "perfekt": "habe unterstützt", "futur_i": "werde unterstützen" },
            "du": { "praesens": "unterstützt", "praeteritum": "unterstütztest", "perfekt": "hast unterstützt", "futur_i": "wirst unterstützen" },
            "er_sie_es": { "praesens": "unterstützt", "praeteritum": "unterstützte", "perfekt": "hat unterstützt", "futur_i": "wird unterstützen" },
            "wir": { "praesens": "unterstützen", "praeteritum": "unterstützten", "perfekt": "haben unterstützt", "futur_i": "werde unterstützen" },
            "ihr": { "praesens": "unterstützt", "praeteritum": "unterstütztet", "perfekt": "habt unterstützt", "futur_i": "werdet unterstützen" },
            "sie_sie_form": { "praesens": "unterstützen", "praeteritum": "unterstützten", "perfekt": "haben unterstützt", "futur_i": "werde unterstützen" }
        }
    },

    // --- BLOQUE 10: Verbos de Negocios y Economía (181-200) ---
    {
        "infinitiv": "investieren",
        "mean": "invertir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "investiere", "praeteritum": "investierte", "perfekt": "habe investiert", "futur_i": "werde investieren" },
            "du": { "praesens": "investierst", "praeteritum": "investiertest", "perfekt": "hast investiert", "futur_i": "wirst investieren" },
            "er_sie_es": { "praesens": "investiert", "praeteritum": "investierte", "perfekt": "hat investiert", "futur_i": "werde investieren" },
            "wir": { "praesens": "investieren", "praeteritum": "investierten", "perfekt": "haben investiert", "futur_i": "werde investieren" },
            "ihr": { "praesens": "investiert", "praeteritum": "investiertet", "perfekt": "habt investiert", "futur_i": "werdet investieren" },
            "sie_sie_form": { "praesens": "investieren", "praeteritum": "investierten", "perfekt": "haben investiert", "futur_i": "werde investieren" }
        }
    },
    {
        "infinitiv": "sparen",
        "mean": "ahorrar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "spare", "praeteritum": "sparte", "perfekt": "habe gespart", "futur_i": "werde sparen" },
            "du": { "praesens": "sparst", "praeteritum": "spartest", "perfekt": "hast gespart", "futur_i": "wirst sparen" },
            "er_sie_es": { "praesens": "spart", "praeteritum": "sparte", "perfekt": "hat gespart", "futur_i": "wird sparen" },
            "wir": { "praesens": "sparen", "praeteritum": "sparten", "perfekt": "haben gespart", "futur_i": "werde sparen" },
            "ihr": { "praesens": "spart", "praeteritum": "spart", "perfekt": "habt gespart", "futur_i": "werdet sparen" },
            "sie_sie_form": { "praesens": "sparen", "praeteritum": "sparten", "perfekt": "haben gespart", "futur_i": "werde sparen" }
        }
    },
    {
        "infinitiv": "leihen",
        "mean": "prestar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "leihe", "praeteritum": "lieh", "perfekt": "habe geliehen", "futur_i": "werde leihen" },
            "du": { "praesens": "leihst", "praeteritum": "liehst", "perfekt": "hast geliehen", "futur_i": "wirst leihen" },
            "er_sie_es": { "praesens": "leiht", "praeteritum": "lieh", "perfekt": "hat geliehen", "futur_i": "werde leihen" },
            "wir": { "praesens": "leihen", "praeteritum": "liehen", "perfekt": "haben geliehen", "futur_i": "werde leihen" },
            "ihr": { "praesens": "leiht", "praeteritum": "lieht", "perfekt": "habt geliehen", "futur_i": "werdet leihen" },
            "sie_sie_form": { "praesens": "leihen", "praeteritum": "liehen", "perfekt": "haben geliehen", "futur_i": "werde leihen" }
        }
    },
    {
        "infinitiv": "mieten",
        "mean": "alquilar (tomar en alquiler)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "miete", "praeteritum": "mietete", "perfekt": "habe gemietet", "futur_i": "werde mieten" },
            "du": { "praesens": "mietest", "praeteritum": "mietetest", "perfekt": "hast gemietet", "futur_i": "wirst mieten" },
            "er_sie_es": { "praesens": "mietet", "praeteritum": "mietete", "perfekt": "hat gemietet", "futur_i": "werde mieten" },
            "wir": { "praesens": "mieten", "praeteritum": "mieteten", "perfekt": "haben gemietet", "futur_i": "werde mieten" },
            "ihr": { "praesens": "mietet", "praeteritum": "mieteten", "perfekt": "habt gemietet", "futur_i": "werdet mieten" },
            "sie_sie_form": { "praesens": "mieten", "praeteritum": "mieteten", "perfekt": "haben gemietet", "futur_i": "werde mieten" }
        }
    },
    {
        "infinitiv": "vermieten",
        "mean": "alquilar (dar en alquiler)",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "vermiete", "praeteritum": "vermietete", "perfekt": "habe vermietet", "futur_i": "werde vermieten" },
            "du": { "praesens": "vermietest", "praeteritum": "vermietetest", "perfekt": "hast vermietet", "futur_i": "wirst vermieten" },
            "er_sie_es": { "praesens": "vermietet", "praeteritum": "vermietete", "perfekt": "hat vermietet", "futur_i": "werde vermieten" },
            "wir": { "praesens": "vermieten", "praeteritum": "vermieteten", "perfekt": "haben vermietet", "futur_i": "werde vermieten" },
            "ihr": { "praesens": "vermietet", "praeteritum": "vermieteten", "perfekt": "habt vermietet", "futur_i": "werdet vermieten" },
            "sie_sie_form": { "praesens": "vermieten", "praeteritum": "vermieteten", "perfekt": "haben vermietet", "futur_i": "werde vermieten" }
        }
    },
    {
        "infinitiv": "zahlen",
        "mean": "pagar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "zahle", "praeteritum": "zahlte", "perfekt": "habe gezahlt", "futur_i": "werde zahlen" },
            "du": { "praesens": "zahlst", "praeteritum": "zahltest", "perfekt": "hast gezahlt", "futur_i": "wirst zahlen" },
            "er_sie_es": { "praesens": "zahlt", "praeteritum": "zahlte", "perfekt": "hat gezahlt", "futur_i": "wird zahlen" },
            "wir": { "praesens": "zahlen", "praeteritum": "zahlten", "perfekt": "haben gezahlt", "futur_i": "werde zahlen" },
            "ihr": { "praesens": "zahlt", "praeteritum": "zahltet", "perfekt": "habt gezahlt", "futur_i": "werdet zahlen" },
            "sie_sie_form": { "praesens": "zahlen", "praeteritum": "zahlten", "perfekt": "haben gezahlt", "futur_i": "werde zahlen" }
        }
    },
    {
        "infinitiv": "verdienen",
        "mean": "ganar (dinero) / merecer",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "verdiene", "praeteritum": "verdiente", "perfekt": "habe verdient", "futur_i": "werde verdienen" },
            "du": { "praesens": "verdienst", "praeteritum": "verdientest", "perfekt": "hast verdient", "futur_i": "wirst verdienen" },
            "er_sie_es": { "praesens": "verdient", "praeteritum": "verdiente", "perfekt": "hat verdient", "futur_i": "wird verdienen" },
            "wir": { "praesens": "verdienen", "praeteritum": "verdienten", "perfekt": "haben verdient", "futur_i": "werde verdienen" },
            "ihr": { "praesens": "verdient", "praeteritum": "verdientet", "perfekt": "habt verdient", "futur_i": "werdet verdienen" },
            "sie_sie_form": { "praesens": "verdienen", "praeteritum": "verdienten", "perfekt": "haben verdient", "futur_i": "werde verdienen" }
        }
    },
    {
        "infinitiv": "ausgeben",
        "mean": "gastar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "gebe aus", "praeteritum": "gab aus", "perfekt": "habe ausgegeben", "futur_i": "werde ausgeben" },
            "du": { "praesens": "gibst aus", "praeteritum": "gabst aus", "perfekt": "hast ausgegeben", "futur_i": "wirst ausgeben" },
            "er_sie_es": { "praesens": "gibt aus", "praeteritum": "gab aus", "perfekt": "hat ausgegeben", "futur_i": "wird ausgeben" },
            "wir": { "praesens": "geben aus", "praeteritum": "gaben aus", "perfekt": "haben ausgegeben", "futur_i": "werde ausgeben" },
            "ihr": { "praesens": "gebt aus", "praeteritum": "gabt aus", "perfekt": "habt ausgegeben", "futur_i": "werdet ausgeben" },
            "sie_sie_form": { "praesens": "geben aus", "praeteritum": "gaben aus", "perfekt": "haben ausgegeben", "futur_i": "werde ausgeben" }
        }
    },
    {
        "infinitiv": "buchen",
        "mean": "reservar / contabilizar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "buche", "praeteritum": "buchte", "perfekt": "habe gebucht", "futur_i": "werde buchen" },
            "du": { "praesens": "buchst", "praeteritum": "buchtest", "perfekt": "hast gebucht", "futur_i": "wirst buchen" },
            "er_sie_es": { "praesens": "bucht", "praeteritum": "buchte", "perfekt": "hat gebucht", "futur_i": "werde buchen" },
            "wir": { "praesens": "buchen", "praeteritum": "buchten", "perfekt": "haben gebucht", "futur_i": "werde buchen" },
            "ihr": { "praesens": "bucht", "praeteritum": "buchtet", "perfekt": "habt gebucht", "futur_i": "werdet buchen" },
            "sie_sie_form": { "praesens": "buchen", "praeteritum": "buchten", "perfekt": "haben gebucht", "futur_i": "werde buchen" }
        }
    },
    {
        "infinitiv": "bestätigen",
        "mean": "confirmar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "bestätige", "praeteritum": "bestätigte", "perfekt": "habe bestätigt", "futur_i": "werde bestätigen" },
            "du": { "praesens": "bestätigst", "praeteritum": "bestätigtest", "perfekt": "hast bestätigt", "futur_i": "wirst bestätigen" },
            "er_sie_es": { "praesens": "bestätigt", "praeteritum": "bestätigte", "perfekt": "hat bestätigt", "futur_i": "wird bestätigen" },
            "wir": { "praesens": "bestätigen", "praeteritum": "bestätigten", "perfekt": "haben bestätigt", "futur_i": "werde bestätigen" },
            "ihr": { "praesens": "bestätigt", "praeteritum": "bestätigtet", "perfekt": "habt bestätigt", "futur_i": "werdet bestätigen" },
            "sie_sie_form": { "praesens": "bestätigen", "praeteritum": "bestätigten", "perfekt": "haben bestätigt", "futur_i": "werde bestätigen" }
        }
    },
    {
        "infinitiv": "kündigen",
        "mean": "cancelar / rescindir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "kündige", "praeteritum": "kündigte", "perfekt": "habe gekündigt", "futur_i": "werde kündigen" },
            "du": { "praesens": "kündigst", "praeteritum": "kündigtest", "perfekt": "hast gekündigt", "futur_i": "wirst kündigen" },
            "er_sie_es": { "praesens": "kündigt", "praeteritum": "kündigte", "perfekt": "hat gekündigt", "futur_i": "wird kündigen" },
            "wir": { "praesens": "kündigen", "praeteritum": "kündigten", "perfekt": "haben gekündigt", "futur_i": "werde kündigen" },
            "ihr": { "praesens": "kündigt", "praeteritum": "kündigtet", "perfekt": "habt gekündigt", "futur_i": "werdet kündigen" },
            "sie_sie_form": { "praesens": "kündigen", "praeteritum": "kündigten", "perfekt": "haben gekündigt", "futur_i": "werde kündigen" }
        }
    },
    {
        "infinitiv": "reduzieren",
        "mean": "reducir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "reduziere", "praeteritum": "reduzierte", "perfekt": "habe reduziert", "futur_i": "werde reduzieren" },
            "du": { "praesens": "reduzierst", "praeteritum": "reduziertest", "perfekt": "hast reduziert", "futur_i": "wirst reduzieren" },
            "er_sie_es": { "praesens": "reduziert", "praeteritum": "reduzierte", "perfekt": "hat reduziert", "futur_i": "werde reduzieren" },
            "wir": { "praesens": "reduzieren", "praeteritum": "reduzierten", "perfekt": "haben reduziert", "futur_i": "werde reduzieren" },
            "ihr": { "praesens": "reduziert", "praeteritum": "reduziertet", "perfekt": "habt reduziert", "futur_i": "werdet reduzieren" },
            "sie_sie_form": { "praesens": "reduzieren", "praeteritum": "reduzierten", "perfekt": "haben reduziert", "futur_i": "werde reduzieren" }
        }
    },
    {
        "infinitiv": "erhöhen",
        "mean": "aumentar / elevar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "erhöhe", "praeteritum": "erhöhte", "perfekt": "habe erhöht", "futur_i": "werde erhöhen" },
            "du": { "praesens": "erhöhst", "praeteritum": "erhöhtest", "perfekt": "hast erhöht", "futur_i": "wirst erhöhen" },
            "er_sie_es": { "praesens": "erhöht", "praeteritum": "erhöhte", "perfekt": "hat erhöht", "futur_i": "wird erhöhen" },
            "wir": { "praesens": "erhöhen", "praeteritum": "erhöhten", "perfekt": "haben erhöht", "futur_i": "werde erhöhen" },
            "ihr": { "praesens": "erhöht", "praeteritum": "erhöhtet", "perfekt": "habt erhöht", "futur_i": "werdet erhöhen" },
            "sie_sie_form": { "praesens": "erhöhen", "praeteritum": "erhöhten", "perfekt": "haben erhöht", "futur_i": "werde erhöhen" }
        }
    },
    {
        "infinitiv": "wachsen",
        "mean": "crecer",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "wachse", "praeteritum": "wuchs", "perfekt": "bin gewachsen", "futur_i": "werde wachsen" },
            "du": { "praesens": "wächst", "praeteritum": "wuchsest", "perfekt": "bist gewachsen", "futur_i": "wirst wachsen" },
            "er_sie_es": { "praesens": "wächst", "praeteritum": "wuchs", "perfekt": "ist gewachsen", "futur_i": "wird wachsen" },
            "wir": { "praesens": "wachsen", "praeteritum": "wuchsen", "perfekt": "sind gewachsen", "futur_i": "werde wachsen" },
            "ihr": { "praesens": "wachst", "praeteritum": "wuchst", "perfekt": "seid gewachsen", "futur_i": "werdet wachsen" },
            "sie_sie_form": { "praesens": "wachsen", "praeteritum": "wuchsen", "perfekt": "sind gewachsen", "futur_i": "werde wachsen" }
        }
    },
    {
        "infinitiv": "sinken",
        "mean": "hundir / disminuir",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "sinke", "praeteritum": "sank", "perfekt": "bin gesunken", "futur_i": "werde sinken" },
            "du": { "praesens": "sinkst", "praeteritum": "sankst", "perfekt": "bist gesunken", "futur_i": "wirst sinken" },
            "er_sie_es": { "praesens": "sinkt", "praeteritum": "sank", "perfekt": "ist gesunken", "futur_i": "werde sinken" },
            "wir": { "praesens": "sinken", "praeteritum": "sanken", "perfekt": "sind gesunken", "futur_i": "werde sinken" },
            "ihr": { "praesens": "sinkt", "praeteritum": "sankt", "perfekt": "seid gesunken", "futur_i": "werdet sinken" },
            "sie_sie_form": { "praesens": "sinken", "praeteritum": "sanken", "perfekt": "sind gesunken", "futur_i": "werde sinken" }
        }
    },
    {
        "infinitiv": "steigen",
        "mean": "subir / aumentar",
        "auxiliar_perfekt": "sein",
        "konjugation": {
            "ich": { "praesens": "steige", "praeteritum": "stieg", "perfekt": "bin gestiegen", "futur_i": "werde steigen" },
            "du": { "praesens": "steigst", "praeteritum": "stiegst", "perfekt": "bist gestiegen", "futur_i": "wirst steigen" },
            "er_sie_es": { "praesens": "steigt", "praeteritum": "stieg", "perfekt": "ist gestiegen", "futur_i": "werde steigen" },
            "wir": { "praesens": "steigen", "praeteritum": "stiegen", "perfekt": "sind gestiegen", "futur_i": "werde steigen" },
            "ihr": { "praesens": "steigt", "praeteritum": "stiegt", "perfekt": "seid gestiegen", "futur_i": "werdet steigen" },
            "sie_sie_form": { "praesens": "steigen", "praeteritum": "stiegen", "perfekt": "sind gestiegen", "futur_i": "werde steigen" }
        }
    },
    {
        "infinitiv": "exportieren",
        "mean": "exportar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "exportiere", "praeteritum": "exportierte", "perfekt": "habe exportiert", "futur_i": "werde exportieren" },
            "du": { "praesens": "exportierst", "praeteritum": "exportiertest", "perfekt": "hast exportiert", "futur_i": "wirst exportieren" },
            "er_sie_es": { "praesens": "exportiert", "praeteritum": "exportierte", "perfekt": "hat exportiert", "futur_i": "werde exportieren" },
            "wir": { "praesens": "exportieren", "praeteritum": "exportierten", "perfekt": "haben exportiert", "futur_i": "werde exportieren" },
            "ihr": { "praesens": "exportiert", "praeteritum": "exportiertet", "perfekt": "habt exportiert", "futur_i": "werdet exportieren" },
            "sie_sie_form": { "praesens": "exportieren", "praeteritum": "exportierten", "perfekt": "haben exportiert", "futur_i": "werde exportieren" }
        }
    },
    {
        "infinitiv": "importieren",
        "mean": "importar",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "importiere", "praeteritum": "importierte", "perfekt": "habe importiert", "futur_i": "werde importieren" },
            "du": { "praesens": "importierst", "praeteritum": "importiertest", "perfekt": "hast importiert", "futur_i": "wirst importieren" },
            "er_sie_es": { "praesens": "importiert", "praeteritum": "importierte", "perfekt": "hat importiert", "futur_i": "werde importieren" },
            "wir": { "praesens": "importieren", "praeteritum": "importierten", "perfekt": "haben importiert", "futur_i": "werde importieren" },
            "ihr": { "praesens": "importiert", "praeteritum": "importiertet", "perfekt": "habt importiert", "futur_i": "werdet importieren" },
            "sie_sie_form": { "praesens": "importieren", "praeteritum": "importierten", "perfekt": "haben importiert", "futur_i": "werde importieren" }
        }
    },
    {
        "infinitiv": "produzieren",
        "mean": "producir",
        "auxiliar_perfekt": "haben",
        "konjugation": {
            "ich": { "praesens": "produziere", "praeteritum": "produzierte", "perfekt": "habe produziert", "futur_i": "werde produzieren" },
            "du": { "praesens": "produzierst", "praeteritum": "produziertest", "perfekt": "hast produziert", "futur_i": "wirst produzieren" },
            "er_sie_es": { "praesens": "produziert", "praeteritum": "produzierte", "perfekt": "hat produziert", "futur_i": "werde produzieren" },
            "wir": { "praesens": "produzieren", "praeteritum": "produzierten", "perfekt": "haben produziert", "futur_i": "werde produzieren" },
            "ihr": { "praesens": "produziert", "praeteritum": "produziertet", "perfekt": "habt produziert", "futur_i": "werdet produzieren" },
            "sie_sie_form": { "praesens": "produzieren", "praeteritum": "produzierten", "perfekt": "haben produziert", "futur_i": "werde produzieren" }
        }
    }
];

// export default VERBS_DATA;
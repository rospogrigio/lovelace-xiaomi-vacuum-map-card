const mode = "mode";
const powerMode = "powerMode";
const pmUnknown = "pmUnknown";
const pmSoft = "pmSoft";
const pmSilent = "pmSilent";
const pmBalanced = "pmBalanced";
const pmTurbo = "pmTurbo";
const pmMax = "pmMax";
const goToTarget = "goToTarget";
const zonedCleanup = "zonedCleanup";
const zones = "zones";
const run = "run";
const repeats = "repeats";
const confirmation = "confirmation";

const texts = {
    "en": {
        mode: "Mode",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Go to target",
        zonedCleanup: "Zoned cleanup",
        zones: "Rooms",
        run: "Start",
        repeats: "Times:",
        confirmation: "Command sent!"
    },
    "de": {
        mode: "Modus",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Gehe zum Zielpunkt",
        zonedCleanup: "Zonenreinigung",
        zones: "Zonen",
        run: "Starten",
        repeats: "Wiederholungen:",
        confirmation: "Kommando gesendet!"
    },
    "dk": {
        mode: "Mode",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Gå til punkt",
        zonedCleanup: "Zone rengøring",
        zones: "Zoner",
        run: "Start",
        repeats: "Gentagelser:",
        confirmation: "Kommando afsendt!"
    },
    "es": {
        mode: "Modos",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Ir al objetivo",
        zonedCleanup: "Zona de limpieza",
        zones: "Zonas",
        run: "Empezar",
        repeats: "Veces:",
        confirmation: "Comando enviado!"
    },
    "fr": {
        mode: "Mode",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Aller sur la cible",
        zonedCleanup: "Nettoyage de zone",
        zones: "Zones",
        run: "Démarrage",
        repeats: "Répéter:",
        confirmation: "Commande envoyée!"
    },
    "it": {
        mode: "Modalità",
        powerMode: "Power Mode",
        pmUnknown: "Sconosciuto",
        pmSoft: "Delicato",
        pmSilent: "Silenzioso",
        pmBalanced: "Bilanciato",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Raggiungi punto",
        zonedCleanup: "Pulizia zona",
        zones: "Stanze",
        run: "Avvia",
        repeats: "Volte:",
        confirmation: "Comando inviato!"
    },
    "nl": {
        mode: "Modus",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Ga naar een punt",
        zonedCleanup: "Zone reinigen",
        zones: "Zones",
        run: "Start",
        repeats: "Herhalingen",
        confirmation: "Commando gestuurd!"
    },
    "no": {
        mode: "Modus",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Gå til mål",
        zonedCleanup: "Sonerengjøring",
        zones: "Soner",
        run: "Start",
        repeats: "Repetisjoner:",
        confirmation: "Kommando sendt!"
    },
    "pl": {
        mode: "Tryb",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Idź do punktu",
        zonedCleanup: "Czyszczenie strefowe",
        zones: "Strefy",
        run: "Uruchom",
        repeats: "Razy:",
        confirmation: "Komenda wysłana!"
    },
    "ru": {
        mode: "Режим",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Движение к цели",
        zonedCleanup: "Зональная уборка",
        zones: "Зоны",
        run: "Старт",
        repeats: "Повторы:",
        confirmation: "Команда отправлена"
    },
    "se": {
        mode: "Läge",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Gå till vald destination",
        zonedCleanup: "Zon städning",
        zones: "Zoner",
        run: "Start",
        repeats: "Repetitioner:",
        confirmation: "Kommando skickat!"
    },	
    "uk": {
        mode: "Режим",
        powerMode: "Power Mode",
        pmUnknown: "Unknown",
        pmSoft: "Soft",
        pmSilent: "Silent",
        pmBalanced: "Balanced",
        pmTurbo: "Turbo",
        pmMax: "MAX",
        goToTarget: "Рух до цілі",
        zonedCleanup: "Зональне прибирання",
        zones: "Зони",
        run: "Старт",
        repeats: "Разів:",
        confirmation: "Команда надіслана"
    },
};

export {
    mode,
	powerMode,
    pmUnknown,
	pmSoft,
	pmSilent,
	pmBalanced,
	pmTurbo,
	pmMax,
    goToTarget,
    zonedCleanup,
    zones,
    run,
    repeats,
    confirmation,
    texts
};

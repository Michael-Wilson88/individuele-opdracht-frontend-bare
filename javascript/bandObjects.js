import {Band} from "./band.js";

const primus = new Band(
    "Primus",
    "San Francisco",
    "Funk Metal",
    '../img/logo-primus.png',
    [
        {"name": "Pork Soda"},
        {"name": "Frizzle Fry"}
    ]
);

const kyuss = new Band(
    "kyuss",
    "Palm Desert",
    "Stoner Rock",
    '../img/kyuss.webp',
    [
        {"name": "Welcome to Sky Valley"},
        {"name": "Blues for the Red Sun"}
    ]
);

const conan = new Band(
    "conan",
    "Liverpool",
    "Doom Metal",
    '../img/Conan_Logo_Red.webp',
    [
        {"name": "Horseback Battle Hammer"},
        {"name": "Blood Eagle"}
    ]
);

const qotsa = new Band(
    "qotsa",
    "Palm Desert",
    "Alternative Rock",
    '../img/qotsa-logo.jpg',
    [
        {"name": "Songs for the Deaf"},
        {"name": "Rated R"}
    ]
);

const ppsr = new Band(
    "ppsr",
    "Eindhoven",
    "Rock 'n Roll",
    '../img/peterpanspeedrock-logo.webp',
    [
        {"name": "Killermachine"},
        {"name": "Loud Mean Fast & Dirty"}
    ]
);

const wuTang = new Band(
    "Wu Tang",
    "Staten Island, New York",
    "Hip Hop",
    "../img/WU-TANG-LOGO.avif",
    [
        {"name": "C.R.E.A.M."},
        {"name": "Protect Ya Neck"}
    ]
);
const felaKuti = new Band(
    "Fela Kuti",
    "Lagos, Nigeria",
    "Afrobeat",
    "../img/fela.svg",
    [
        {"name": "Zombie"},
        {"name": "Water No Get Enemy"}
    ]
);

const howlinWolf = new Band(
    "Howlin' Wolf",
    "West Point, Mississippi",
    "Blues",
    "../img/howlin-wolf",
    [
        {"name": "Smokestack Lightnin'"},
        {"name": "Killing Floor"}
    ]
);

const kingGizzard = new Band(
    "King Gizzard and the Lizard Wizard",
    "Melbourne, Australia",
    "Psychedelic Rock",
    "../img/KGLW-Logo-02.svg",
    [
        {"name": "The River"},
        {"name": "Gamma Knife"}
    ]
);

const orangeGoblin = new Band(
    "Orange Goblin",
    "London, UK",
    "Stoner Rock",
    "../img/OGLOGO.webp",
    [
        {"name": "Scorpionica"},
        {"name": "Red Tide Rising"}
    ]
);

const creedence = new Band(
    "Creedence Clearwater Revival",
    "El Cerrito, California",
    "Rock",
    "../img/CCR-logo",
    [
        {"name": "Proud Mary"},
        {"name": "Fortunate Son"}
    ]
);
const bands= [primus, kyuss, conan, qotsa, ppsr, creedence, felaKuti, orangeGoblin, kingGizzard, howlinWolf, wuTang]
export let sortedBands= bands.sort((a, b)=>a.bandName.localeCompare(b.bandName))

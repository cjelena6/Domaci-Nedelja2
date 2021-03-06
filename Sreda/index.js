// 1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
// Drvo svaki dan poraste za 1 cm.

// Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),
// izracunati koliko je dana potrebno puzu da se popne na drvo
// pomocu WHILE petlje.

// Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

// Dan 1: Puz je presao 3cm, visina drveta 100cm
// Dan 2: Puz je presao 6cm, visina drveta 101cm
// ...

// Na kraju treba da se ispise poruka na primer:

// Puz se popeo na drvo za 8 dana

// Smatrati da drvo svakog dana raste fiksno 1cm.

let brzina = 3
let visina = 100
let dan = 1

while (brzina < visina) {
    console.log(`${dan}. dan: Puz je presao ${brzina} cm, visina drveta je ${visina} cm.`);
    dan++
    brzina = brzina + 3
    visina++
}
console.log(`${dan}. dan: Puz je presao ${brzina} cm, visina drveta je ${visina} cm.`);
console.log(`Puz se popeo na drvo za ${dan} dana.`);

console.log(`-----------------------------------------`);

// 2.    Treba izracunati poptust U DINARIMA koji ostvaruje kupac.

// Pravila za ostvarivanje popusta su sledeca:

// Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
// Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
// Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
// Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
// Svi ostali ne ostaruju nikakav popust.

// Ako kupovina pada za vikend (subota ili nedelja)
// odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
// onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
// osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

// Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
// osnova za vikend akciju je 10000 - 2000 = 8000 din,
// dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
// i dobije se dodatni popust od 400.
// Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara

let kupac = 'zaposleni'
let Dan = 'vikend'
let racun = 6000
let popust
switch (kupac) {
    case 'zaposleni':
        if (racun > 5000) {
            popust = racun / 100 * 5
            if (Dan != 'vikend') {
                console.log(`Kupac je ostvario popust ${popust} dinara.`);
            } else if (Dan == 'vikend') {
                console.log(`Kupac je ostvario popust ${popust + (popust / 100 * 5)} dinara.`);
            }
        } else {
            console.log(`Kupac nije ostvario pravo na popust.`);
        }
        break;
    case 'student':
        if (racun > 3000) {
            popust = racun / 100 * 20
            if (Dan != 'vikend') {
                console.log(`Kupac je ostvario popust ${popust} dinara.`);
            } else if (Dan == 'vikend') {
                console.log(`Kupac je ostvario popust ${popust + (popust / 100 * 5)} dinara.`);
            }
        } else {
            console.log(`Kupac nije ostvario pravo na popust.`);
        }
        break;
    case 'penzioner':
        if (racun > 2000) {
            popust = racun / 100 * 30
            if (Dan != 'vikend') {
                console.log(`Kupac je ostvario popust ${popust} dinara.`);
            } else if (Dan == 'vikend') {
                console.log(`Kupac je ostvario popust ${popust + (popust / 100 * 5)} dinara.`);
            }
        } else {
            console.log(`Kupac nije ostvario pravo na popust.`);
        }
        break;
    case 'firma':
        if (racun > 10000) {
            popust = racun / 100 * 10
            if (Dan != 'vikend') {
                console.log(`Kupac je ostvario popust ${popust} dinara.`);
            } else if (Dan == 'vikend') {
                console.log(`Kupac je ostvario popust ${popust + (popust / 100 * 5)} dinara.`);
            }
        } else {
            console.log(`Kupac nije ostvario pravo na popust.`);
        }
        break;
    default: console.log(`Kupac nema pravo na popustS`);
        break;
}

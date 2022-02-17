// lev1_2

let person = {
    name: "Johnny Guitar",
    age: "67",
    sagNameAlter: function () {
        alert(`Ich heiße ${person.name} und bin ${person.age} Jahre alt`)

    }
}

// console.log(person.name, person.age, person.sagNameAlter());
person.sagNameAlter()


// lev1_4

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere);

let changeDogs = unsereHaustiere[1].names;
console.log(changeDogs);

changeDogs = ["Lassie", "Struppi", "Bello"];

console.log(unsereHaustiere);

for (let items in unsereHaustiere) {
    unsereHaustiere[1].names = changeDogs;
}

console.log(unsereHaustiere[0].names[0]);
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[0].names[2]);

console.log(unsereHaustiere[1].names);

//lev1_5
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2); //Geheimnisse

console.log(unserLager.schrank["Untere Schublade"]); //Cola

console.log(unserLager.schreibtisch.schublade); //Hefter


// lev1_6

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];


console.log(myMusic);


//define new objekt 
let myFavBand = {
    artist: "New Model Army",
    title: "Impurity",
    release_year: "1990",
    medium: ["CD", "LP", "Download"],
    gold: "for some reasons, no :-(",
}
let myFavBand2 = {
    artist: "Alice in Chains",
    title: "Dirt",
    release_year: "1992",
    medium: ["CD", "LP", "Download"],
    gold: "for some reasons, no :-(",
}



console.log(myMusic);
console.log(myFavBand);

myMusic.push(myFavBand);
//myFavBand object added to array as array element to myMusic object by push()
console.log(myMusic);

myMusic.push(myFavBand2)

console.log(myMusic[0].artist); //The Beatles
console.log(myMusic[1].medium[3]); //Download
console.log(myMusic[1].gold); //true
console.log(myMusic[2].release_year, myMusic[3].release_year); //1971, 1983
console.log(myMusic[3].medium[2]); //MC
console.log(myMusic[3].title.slice(17, 22)); //Ride
console.log(myMusic[2].title.slice(13)); //IV
console.log(myMusic[1].artist.slice(5)); //Floyd

//lev1_7

let output = document.getElementById("artists");

myMusic.forEach(el => console.log(el.artist))  //Ausgabe: alle Artists in console
myMusic.forEach(el => console.log(el.title)) //Ausgabe: alle Titles

myMusic.forEach(el => console.log(el.medium)) //Ausgabe: alle Medien als Array

//PROBLEM - output in HTML mit forEach() Lösung gefunden hier: https://stackoverflow.com/questions/51483027/output-foreach-loop-to-innerhtml
let str = "";

myMusic.forEach(el => {
    str = `${el.artist}<br>${el.title}<br>${el.medium}<br><br>`;
    console.log(str);
    output.innerHTML += `${str}`;
});

//Alben vor 1975:

myMusic.forEach(el => {
    if (el.release_year < 1975) {
        console.log(el.release_year)
    }
}) //1969, 1971



//lev1_8

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

console.log(studentData[0]);
// output: names, coop, city, emails mit map() für beide Students parallel:
let names = studentData.map(el => {
    return el.name
});
console.log(names[0], names[1]);

let coop = studentData.map(el => {
    return el.coop
});
console.log(coop[0], coop[1]);

let city = studentData.map(el => {
    return el.address.city
});
console.log(city[0], city[1]);

let emails = studentData.map(el => {
    return el.emails
});
console.log(emails[0], emails[1]);

//mit forEach():
let studentNames = "";
let coop1 = "";
let emails1 = "";
studentData.forEach(el => {
    studentNames = el.name;
    coop1 = el.coop;
    emails1 = el.emails;
    console.log(studentNames, coop1, emails1);
})

//lev2_2
const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

console.log(singers);

//funktioniert nicht !!!

let sorted = singers.sort((a, b) => {
    return a.name - b.name
});

console.log(sorted);

// https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/ - stumpf abgetippt, aber nicht verstanden :-(

function compare(a, b) {
    let comparison = 0;
    let singerA = a.name;
    let singerB = b.name;
    if (singerA > singerB) {
        comparison = 1;
    }
    else if (singerA < singerB) {
        comparison = -1
    }
    return comparison;
};

singers.sort(compare);

//### aber warum geht das nicht so? ###/
singers.sort((a, b) => {
    return a.singers - b.singers
});
console.log(singers);
















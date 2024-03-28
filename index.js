const kerdesek = [
    {
        kerdes: "Mi Magyarorszag fővárosa?",
        valaszok: [
            {szoveg: "Kassa", megoldas: false},
            {szoveg: "Budapest", megoldas: true},
            {szoveg: "Bukarest", megoldas: false},
            {szoveg: "Győr", megoldas: false},
        ]
    },
    {
        kerdes: "Mi magyarország zászlajának a színei? (sorrendje)",
        valaszok: [
            {szoveg: "piros, fehér, zöld", megoldas: true},
            {szoveg: "piros, zöld, fehér", megoldas: false},
            {szoveg: "zöld, fehér, piros", megoldas: false},
            {szoveg: "fehér, zöld, piros", megoldas: false},
        ]
    },
    {
        kerdes: "ki Magyarország miniszterelnőke?",
        valaszok: [
            {szoveg: "Sebestyén Balázs", megoldas: false},
            {szoveg: "Halász judit", megoldas: false},
            {szoveg: "Orbán Viktor", megoldas: true},
            {szoveg: "Orbán Viktória", megoldas: false},
        ]
    },
    {
        kerdes: "Mi magyarország tavának a neve? ",
        valaszok: [
            {szoveg: "Balaton", megoldas: true},
            {szoveg: "Duna", megoldas: false},
            {szoveg: "Velencei-tó", megoldas: false},
            {szoveg: "hévíz", megoldas: false},
        ]
    },
    {
        kerdes: "Mikor volt a Nándorfehérvári csata?",
        valaszok: [
            {szoveg: "1521", megoldas: true},
            {szoveg: "1531", megoldas: false},
            {szoveg: "1501", megoldas: false},
            {szoveg: "1541", megoldas: false},
        ]
    },
];
 
const kerdesElement = document.getElementById("kerdes");
const valaszokgomb = document.getElementById("valasz-gombok");
const kovetkezogomb = document.getElementById("kovetkezo-gomb");
 
let kerdesIndex = 0;
let score = 0;
//kezdő kérdés
function kezdokerdes(){
    kerdesIndex = 0;
    score = 0;
    kovetkezogomb.innerHTML = "Következő";
    showkerdes();
}
//következő kérdés
function showkerdes(){
    torlesState();
    let currentkerdes = kerdesek[kerdesIndex];
    let kerdesNo = kerdesIndex + 1;
    kerdesElement.innerHTML = kerdesNo + ". " + currentkerdes.kerdes;
 
    currentkerdes.valaszok.forEach(valasz => {
        const button = document.createElement("button");
        button.innerHTML = valasz.szoveg;
        button.classList.add("btn");
        valaszokgomb.appendChild(button);
        if(valasz.megoldas){
            button.dataset.megoldas = valasz.megoldas;
        }
        button.addEventListener("click", selectValasz);
    });
}
 
//A következő gomb eltünése
function torlesState(){
    kovetkezogomb.style.display = "none";
    while(valaszokgomb.firstChild){
        valaszokgomb.removeChild(valaszokgomb.firstChild);
    }
}
//Válaszok beállítása
function selectValasz(e){
    const selectedBtn = e.target;
    const isValasz = selectedBtn.dataset.megoldas === "true";
    if(isValasz){
        selectedBtn.classList.add("helyes");
        score++;
    }else{
        selectedBtn.classList.add("rossz");
    }
    Array.from(valaszokgomb.children).forEach(button => {
        if(button.dataset.megoldas === "true"){
            button.classList.add("helyes");
        }
        button.display = true;
    });
    kovetkezogomb.style.display = "block";
}
//Végeredmény
function VegScore(){
    torlesState();
    kerdesElement.innerHTML = `Az eredményed: ${score} `;
    kovetkezogomb.innerHTML = "Új Játék";
    kovetkezogomb.style.display = "block";
}
//kezelőgomb
function kezelogomb(){
    kerdesIndex++;
    if(kerdesIndex < kerdesek.length){
        showkerdes();
    }else{
        VegScore();
    }
}
 
//következő gomb megjelenése
kovetkezogomb.addEventListener("click", ()=>{
    if(kerdesIndex < kerdesek.length){
        kezelogomb();
    }else
    kezdokerdes();
})
 
 
kezdokerdes();
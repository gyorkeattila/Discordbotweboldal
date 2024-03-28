const szavak = [
    "billentyűzet",
    "linux",
    "javascript",
    "minecraft",
    "google",
];
 
const kerdes = [
    "A hardware része",
    "Operációs rendszer",
    "Programozási Nyelv",
    "Híres játék",
    "Keresőmotor",
];
 
let szo = "";
 
function shuffle(str) {
    strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++i) {
        let j = Math.floor(Math.random() * strArray.length);  
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join(" ");
}
 
function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if (
        input.value.toLocaleLowerCase() ===
        displayszavak.toLocaleLowerCase()
    )
        output.innerHTML = "Eredmény: Helyes!";
    else output.innerHTML = "Eredmény: Helytelen!";
}
 
function refresh() {
    index = Math.floor(Math.random() * 5);
    displayszavak = szavak[index];
    displaykerdes = kerdes[index];
    szokirakas =  
        document.getElementById("scrambleWord");
    szokirakas.innerText =
        shuffle(displayszavak).toUpperCase();
    let kerdesek = document.getElementById("hint");
    kerdesek.innerHTML = "<b>Segítség:</b> " + displaykerdes;
    document.getElementById("output").innerText = "Eredmény:";
}
refresh();
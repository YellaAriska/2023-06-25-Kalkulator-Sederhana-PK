let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let hasilContainer = document.getElementById("hasilContainer");
let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang");
let kali = document.getElementById("kali");
let bagi = document.getElementById("bagi");
let hapus = document.getElementById("hapus");

function penjumlahan(x, y){
    let s = x + y;
    return s
}

function pengurangan(x, y){
    let s = x - y;
    return s
}

function pengalian(x, y){
    let s = x * y;
    return s
}

function pembagian(x, y){
    let s = x / y;
    return s
}

tambah.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add('paragraph-style');
    paragraph.innerHTML = num1.value + " + " + num2.value + " = " + penjumlahan(parseInt(num1.value), parseInt(num2.value));
    hasilContainer.appendChild(paragraph);
    num1.value = '';
    num2.value = '';
})

kurang.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add('paragraph-style');
    paragraph.innerHTML = num1.value + " - " + num2.value + " = " + pengurangan(parseInt(num1.value), parseInt(num2.value));
    hasilContainer.appendChild(paragraph);
    num1.value = '';
    num2.value = '';
})

kali.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add('paragraph-style');
    paragraph.innerHTML = num1.value + " × " + num2.value + " = " + pengalian(parseInt(num1.value), parseInt(num2.value));
    hasilContainer.appendChild(paragraph);
    num1.value = '';
    num2.value = '';
})

bagi.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add('paragraph-style');
    paragraph.innerHTML = num1.value + " ÷ " + num2.value + " = " + pembagian(parseInt(num1.value), parseInt(num2.value));
    hasilContainer.appendChild(paragraph);
    num1.value = '';
    num2.value = '';
})

hapus.addEventListener("click", function(){
    while (hasilContainer.firstChild) {
        hasilContainer.removeChild(hasilContainer.lastChild);
      }

})
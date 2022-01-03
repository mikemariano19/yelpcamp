let div = document.querySelector('#logo-xs');
let w = window.innerWidth;

if(w.value <= 640){
    div.innerHTML = "";
}

console.log(w);
const renk1=document.querySelector(".red");
const renk2=document.querySelector(".white");
const renk3=document.querySelector(".blue");
const renk4=document.querySelector(".black");
const renk5=document.querySelector(".green");


const yanlisDurum=document.querySelector("#yanlis")

renk1.innerText="Kirmizi"
renk2.innerText="Beyaz"
renk3.innerText="Mavi"
renk4.innerText="Siyah"
renk5.innerText="Yesil" 

let yanlisHal=`
<div class="row">
<div class="red">siyah</div>
<div class="white">kirmizi</div>
<div class="blue">yesil</div>
<div class="black">mavi</div>
<div class="green">beyaz</div>
</div>`;



yanlisDurum.innerHTML = `<h1 style=color:red; text-align:center >Yanlis Renkler </h1>
${yanlisHal}`;
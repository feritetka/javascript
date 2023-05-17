

let mesaj=document.querySelector("#msg");
function hesapla(){
    let vize=document.querySelector("#vize").value;
    let final=document.querySelector("#final").value;

   
    
    let ortalama=Number(vize*0.4 + final*0.6);

    let not="";

    switch(true){
        case ortalama>=90 && ortalama<=100:
        not="AA";
        break;
        case ortalama>=80 && ortalama<90:
        not="BA";
        break;
        case ortalama>=70 && ortalama<80:
        not="BB";
        break;
        case ortalama>=60 && ortalama<70:
        not="CB";
        break;
        case ortalama>=50 && ortalama<60:
        not="CC";
        break;
        case ortalama>=40 && ortalama<50:
        not="DC";
        break;
        case ortalama>=30 && ortalama<40:
        not="DD";
        break;
        case ortalama>=0 && ortalama<30:
        not="FD"
        break;
        default:
        not="FF"
        break;
    }
    mesaj.classList.remove("d-none");
    mesaj.classList.add("mesaj");
    mesaj.innerHTML=`Ortalamaniz: ${ortalama} notunuz ${not}`;
}

function sil(){
    mesaj.innerText="";
    document.querySelector("#msg").classList.add("d-none");
}
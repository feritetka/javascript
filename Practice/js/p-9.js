let rb_erkek=document.querySelector("#erkek");
let rb_kadin=document.querySelector("#kadin");
let mesaj=document.querySelector("#sonuc");

function durum(){
    
    let yas=document.querySelector("#yas").value;
    
    mesaj.classList.remove("#yas").value

    if(yas){
        if(yas>=20 && rb_erkek.checked){
            mesaj.innerHTML=`<strong>Askere Gidebilirsiniz</strong>`;
            mesaj.classList.add("yesil");
        }
        else{
            mesaj.innerHTML=`<strong>Askere Gidemezsiniz</strong>`;
            mesaj.classList.add("kirmizi");
        }
        }
    else{
        mesaj.innerHTML=`<strong>lutfen yas bilgisini giriniz</strong>`;
        mesaj.classList.add("sari");
    }
    }
function sil(){
    mesaj.innerHTML="";
    mesaj.classList.add("invisible");
    rb_erkek.checked=true;
    rb_kadin.checked=false;

    if(mesaj.contains("yesil")){
        mesaj.classList.remove("yesil")
    }
    else if(mesaj.contains("kirmizi")){
        mesaj.classList.remove("kirmizi")
    }
    else if(mesaj.contains("sari")){
        mesaj.classList.remove("sari")
    }
    else{
        mesaj.classList.remove("invisible")
    }
}

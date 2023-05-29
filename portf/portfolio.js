let email1 = document.getElementById('btn1');
let email2 = document.getElementById('btn2');

function informaçao(){
    let e1="jonasregly@gmail.com"
    
alert(`e-mail para contato: ${e1}`);
}

function informaçao2(){
    let e2="jonasregly@hotmail.com"
alert(`e-mail para contato: ${e2}`);
    }





    let btmenu=document.querySelector('#menu-mobile');
    let bticone=document.querySelector('#menu-mobile i');

    function menuToggle(){
        
    let navegaçao=document.querySelector('.navegaçao');
    navegaçao.classList.toggle('active');

    if(navegaçao.className=='navegaçao active'){
    bticone.classList.replace('fa-bars','fa-xmark')

    }else if(navegaçao.className=='navegaçao'){
    bticone.classList.replace('fa-xmark','fa-bars')
    }
}
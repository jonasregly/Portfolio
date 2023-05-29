var carrrossel=document.querySelector('.icamp')
let menu=document.getElementsByClassName('menus')[0]
let ul=document.querySelector('.menus ul')

let arrimagensc =['url(./imagens/campanha/Arrecadaçao2.jpeg)' ,'url(./imagens/campanha/Arrecadaçao3.jpeg)' ,'url(./imagens/campanha/Arrecadaçao4.jpeg)' ,
'url(./imagens/campanha/Arrecadaçao5.jpeg)' , 'url(./imagens/campanha/Arrecadaçao6.jpeg)' , 'url(./imagens/campanha/Arrecadaçao7.jpeg)' ,
'url(./imagens/campanha/Arrecadaçao8.jpeg)' , 'url(./imagens/campanha/Arrecadaçao9.jpeg)', 'url(./imagens/campanha/Arrecadaçao10.jpeg)' , 
'url(./imagens/campanha/Arrecadaçao11.jpeg)' ,'url(./imagens/campanha/Arrecadaçao13.jpeg)' ,
'url(./imagens/campanha/Arrecadaçao14.jpeg)' ,'url(./imagens/campanha/Arrecadaçao15.jpeg)' ,'url(./imagens/campanha/Arrecadaçao16.jpeg)' ,
'url(./imagens/campanha/Arrecadaçao17.jpeg)'];

contador = 0;

function avançar(){
contador++;

if(contador>arrimagensc.length-1){
    contador=0;
}

carrrossel.style.background=arrimagensc[contador];
carrrossel.style.backgroundSize='fill'
carrrossel.style.backgroundPosition='center center'
carrrossel.style.backgroundRepeat='no-repeat'
carrrossel.style.backgroundPositionY='-150px'
carrrossel.style.width="100%"

}


function regredir(){
    contador--;
    
    if(contador<0){
contador=arrimagensc.length -1     
    }
    
    carrrossel.style.background=arrimagensc[contador];

    carrrossel.style.backgroundSize='container'
    carrrossel.style.backgroundPosition='center center'
    carrrossel.style.backgroundRepeat='no-repeat'
    carrrossel.style.backgroundPositionY='-150px'   
    }


    setInterval(() => {
       //avançar();
       
        },4000);




        function tButton(){
    menu.classList.toggle('active');
    ul.classList.toggle('active');

        }
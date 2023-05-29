//definiçao da variaveis para manipulaçao da DOM
var mese=document.getElementById('idia');
var diae=document.getElementById('imes');
var anoe=document.getElementById('iano');
var eldia=document.getElementsByClassName('diae')[0];
var elmes=document.getElementsByClassName('mese')[0];
var elano=document.getElementsByClassName('anoe')[0];

var sdias=document.getElementById('sndias');
var smeses=document.getElementById('snmeses');
var sanos=document.getElementById('snanos');




//funçao acoplada ao onclick para start dos calculos 
function calcular(){

//variaveis criadas para receber o valor númerico dos inputs do sistema
var mes=diae.value;
var dia=mese.value;
var ano=anoe.value;





        //condiçao para nao permitir campo vazio nem menor que 1 do input dia
if(dia==""||dia<1){

mese.style.border='2px solid red'
eldia.style.color='red'
eldia.style.setProperty('--afterNoned','block');

        //condiçao para nao permitir exceder o ultimo dia do mes de janeiro
}else if(mes==1&&dia>31){

    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');
         
       //condiçao para nao permitir exceder o ultimo dia do mes de fevereiro em caso de ano bissexto
}else if(dia>29&&mes==2&&ano%4==0){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');
      //condiçao para nao permitir exceder o ultimo dia do mes de fevereiro caso nao seja ano bissexto
}else if(dia>28&&mes==2&&ano%4!=0){
 mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');

      //condiçao para nao permitir exceder o ultimo dia do mes de março
}else if(mes==3&&dia>31){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');

     //condiçao para nao permitir exceder o ultimo dia do mes de abril
}else if(mes==4&&dia>30){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');
    

    //condiçao para nao permitir exceder o ultimo dia do mes de maio
}else if(mes==5&&dia>31){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');


    //condiçao para nao permitir exceder o ultimo dia do mes de junho
}else if(mes==6&&dia>30){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');


    //condiçao para nao permitir exceder o ultimo dia do mes de julho
}else if(mes==7&&dia>31){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');


    //condiçao para nao permitir exceder o ultimo dia do mes de agosto
}else if(mes==8&&dia>31){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');


   //condiçao para nao permitir exceder o ultimo dia do mes de setembro
}else if(mes==9&&dia>30){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');


    //condiçao para nao permitir exceder o ultimo dia do mes de outubro
}else if(mes==10&&dia>31){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');


    //condiçao para nao permitir exceder o ultimo dia do mes de novembro
}else if(mes==11&&dia>30){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');


    //condiçao para nao permitir exceder o ultimo dia do mes de dezembro
}else if(mes==12&&dia>31){
    mese.style.border='2px solid red'
    eldia.style.color='red'
    eldia.style.setProperty('--afterNoned','block');


    //condiçao para exigir mês somente entre 1 e 12
}else if(mes<1 || mes>12){
    diae.style.border='2px solid red'
    elmes.style.color='red'
    elmes.style.setProperty('--afterNonem','block');

   //condiçao para nao permitir ano inferior a 1900 e posterior ao ano atual
}else if(ano<1900 || ano>new Date().getFullYear()){

anoe.style.border='2px solid red'
elano.style.color='red'
elano.style.setProperty('--afterNonea', 'block');

}else{
      //definiçoes da estilizaçao novamente, para voltar ao ciclo de estilo normal caso o usuario tenha errado e depois corrigido alguma data
    anoe.style.border='1px solid rgb(192, 190, 190)'
    elano.style.color='black'
    elano.style.setProperty('--afterNonea', 'none');

    mese.style.border='1px solid rgb(192, 190, 190)'
    elmes.style.color='black'
    elmes.style.setProperty('--afterNonem', 'none');
    
    diae.style.border='1px solid rgb(192, 190, 190)'
    eldia.style.color='black'
    eldia.style.setProperty('--afterNoned', 'none');


    //definiçao e unificaçao da data atravez das tres variaveis capturadas no sistema( dia,mes e ano)
    var nascimento=mes+'-'+dia+'-'+ano
    nascimento=new Date(nascimento);
    nascimento=nascimento.toDateString();
    
    //difiniçao da data de hoje
   var hoje=new Date();
    hoje=hoje.toDateString();
    

  

      // condiçao para nao permitir o usuario calcular uma data superior ao dia de hoje.
   if(new Date(nascimento)>new Date()){
alert('O nascimento nao pode ser superior ao dia de hoje!')


   }else{
  
     /*definiçao da variavel para contar o intervalo entre os dias da data até hoje.
     Vale ressaltar que foi uitlizado o metodo Math.abs para transformar os possiveis 
     numeros negativos em numeros positivos para nao haver bugs*/
var contagem=new Date(nascimento) - new Date(hoje);
    contagem=Math.abs(contagem);


    /*definiçao das variaveis que vao receber os valores dos dias, meses e anos e tambem 
     a tranformaçao desses valores em dias atravez de uma operaçao aritmetica*/

    let qdias=contagem/(1000*60*60*24);
    let qmeses=contagem/(1000*60*60*24*30);
    let qanos=contagem/(1000*60*60*24*365);
    

    // tranformaçoes dos tipos das variaveis para retornar um numero inteiro e assim obter um resultado assertivo.
    qmeses=parseInt(qmeses);
    qanos=parseInt(qanos);
    qdias=parseInt(qdias);


    //solicitaçao da exibiçao do resultado para o usuario.
    sdias.innerText=qdias
    smeses.innerText=qmeses
    sanos.innerText=qanos

    sdias="";
    smeses="";
    sanos="";

   }


}

}
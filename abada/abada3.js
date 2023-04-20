var imgc=document.getElementsByClassName('img1')[0]
var imgcamp=["/abada/imagens/Arrecadaçao2.jpeg","/abada/imagens/Arrecadaçao3.jpeg","/abada/imagens/Arrecadaçao4.jpeg","/abada/imagens/Arrecadaçao5.jpeg",
"/abada/imagens/Arrecadaçao6.jpeg","/abada/imagens/Arrecadaçao7.jpeg","/abada/imagens/Arrecadaçao8.jpeg","/abada/imagens/Arrecadaçao9.jpeg",
"/abada/imagens/Arrecadaçao10.jpeg"]
var num=0;

function direita(){
num++;
if(num>=imgcamp.lenght){

num=0;
imgc.src=imgcamp[num]
}

else{
imgc.src=imgcamp[num]
}

};
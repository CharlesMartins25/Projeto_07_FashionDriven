let camisaSelecionada;
let golaSelecionada;
let tecidoSelecionado;
let validURL = null;
let imgUrl = "";    



// let promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");


const entrada = () => {
    prompt("Insira seu nome");
    paginaTotal();
    
}
entrada();
function paginaTotal() {
    let page = document.querySelector(".container");
    page.innerHTML = `
    <div class="conteudo">       
    <h1>Escolha o modelo</h1>
        <div class="modelos">
            <figure class="modelo1" onclick="selecionandoCamisa(this)">
            <img src="imagens/tshirt.png" alt="Camiseta simples" height="80" width="80">  
            <h2>T-shirt</h2>
        </figure>
        <figure class="modelo2"  onclick="selecionandoCamisa(this)">
            <img src="imagens/Camiseta.png" alt="image" height="80" width="80">
               
            <h2>Camiseta</h2>
        </figure>
        <figure class="modelo3" onclick="selecionandoCamisa(this)">
            <img src="imagens/Mangalonga.png" alt="image" height="80" width="80"> 
           <h2>Manga longa</h2>
        </figure>              
</div>

      

<h3 >Escolha a gola</h3>
<div class="golas">


<figure class="gola1" onclick="selecionandoGola(this)">
<img src="imagens/GolaV.png" alt="image" height="55" width="80">
<h2>Gola V</h2>
</figure>

<figure class="gola2" onclick="selecionandoGola(this)">
<img src="imagens/GolaRedonda.png" alt="image" height="55" width="80">
<h2>Gola Redonda</h2>
</figure>
<figure class="gola3" onclick="selecionandoGola(this)">
    <img src="imagens/GolaPolo.png" alt="image" height="55" width="80">
    <h2>Gola Polo</h2>
</figure>



</div>
<h3 >Escolha o tecido</h3>
<div class="tecidos">


<figure class="tecido1" onclick="selecionandoTecido(this)">
<img src="imagens/Seda.png" alt="image" height="54" width="54">
<h2>Seda</h2>
</figure>

<figure class="tecido2" onclick="selecionandoTecido(this)">
<img src="imagens/Algodão.png" alt="image" height="60" width="60">
<h2>Algodão</h2>
</figure>
<figure class="tecido3" onclick="selecionandoTecido(this)">
   <img src="imagens/Poliester.png" alt="image" height="60" width="60">
   <h2>Poliester</h2>
</figure>


</div>
<div class="imgRef">
<h3>Imagem de referêcia</h3>
<input class="urlImg" name="title" type="text" placeholder="Insira o link">
</div>
<button class="final" onclick="confirmarPedido()" >Confirmar pedido</button>


<div class="novaAba">
    <div class="barrainferior">
    <h3 >Ultimos Pedidos</h3>
    <div class="pedidosFinais">
    </div>
        
    </div>
</div>
 

</div>

<div class="imagemLateral">
<img src="imagens/ilustração.png" >

</div>
</div>
`
}
function selecionandoCamisa(elemento, classe) {
    const selecionarCamisa = document.querySelector(".modelos .selecionado");
    if(selecionarCamisa !== null){
        selecionarCamisa.classList.remove("selecionado")
    }
    elemento.classList.add("selecionado")
   
  

     camisaSelecionada = document.querySelector(`.${classe}`);
    camisaSelecionada.classList.add(".selecionar");
    validarBotao()
   
}

function selecionandoGola(elemento, classe){
    const selecionarGola = document.querySelector(".golas .selecionado");
    if(selecionarGola !== null){
        selecionarGola.classList.remove("selecionado")
    }
elemento.classList.add("selecionado")


 golaSelecionada =  document.querySelector(`.${classe}`);
golaSelecionada.classList.add(".selecionar")
validarBotao()
}
function selecionandoTecido(elemento, classe){
    const selecionarTecido = document.querySelector(".tecidos .selecionado");
    if(selecionarTecido !== null){
        selecionarTecido.classList.remove("selecionado")
    }
    elemento.classList.add("selecionado")

  
    tecidoSelecionado =  document.querySelector(`.${classe}`);
    tecidoSelecionado.classList.add(".selecionar");
    validarBotao()

}
function verificarURL(){
    const testUrl = "https://";
    let valueUrl = document.querySelector(".urlImg").value;
    

    if (valueUrl.startsWith(testUrl)){
     imgUrl = false
       
    }
    else{
        alert ("Insira uma URL válida");
 
    }
    
}

function validarBotao(){
    
    if (camisaSelecionada !== null && golaSelecionada !== null && tecidoSelecionado !== null) {
        addBut.classList.add(".botaoFinal");
    }
}
document.querySelector("input").addEventListener("input", validarBotao);

function confirmarPedido() {
    verificarURL()
   
    if (camisaSelecionada !== null && golaSelecionada !== null && tecidoSelecionado !== null) {
        alert("funfun")
     }
    
}




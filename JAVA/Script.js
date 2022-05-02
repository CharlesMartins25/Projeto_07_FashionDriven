

const entrada = () => {
    prompt("Insira seu nome");
    
}
entrada()
function paginaTotal() {
    let page = document.querySelector(".container");
    page.innerHTML = `
    <div class="conteudo">       
    <h1>Escolha o modelo</h1>
        <div class="modelos">
            <div class="modelo1">
            <img src="imagens/tshirt.png" alt="image" height="80" width="80">    
            <h2>T-shirt</h2>
        </div>
        <img src="imagens/circulo/circulo.svg" alt="image" height="100" width="100">
        <div class="modelo2">
            <img src="imagens/Camiseta.png" alt="image" height="80" width="80">
               
            <h2>Camiseta</h2>
        </div>
        <img src="imagens/circulo/circulo.svg" alt="image" height="100" width="100">
        <div class="modelo3">
            <img src="imagens/Mangalonga.png" alt="image" height="80" width="80"> 
           <h2>Manga longa</h2>
        </div> 
        <img src="imagens/circulo/circulo.svg" alt="image" height="100" width="100">             
</div>

      

<h3 >Escolha a gola</h3>
<div class="golas">


<div class="gola1">
<img src="imagens/GolaV.png" alt="image" height="55" width="80">
<h2>Gola V</h2>
</div>
<img src="imagens/circulo/circulo.svg" alt="image" height="100" width="100">

<div class="gola2">
<img src="imagens/GolaRedonda.png" alt="image" height="55" width="80">
<h2>Gola Redonda</h2>
</div>
<img src="imagens/circulo/circulo.svg" alt="image" height="100" width="100">
<div class="gola3">
    <img src="imagens/GolaPolo.png" alt="image" height="55" width="80">
    <h2>Gola Polo</h2>
</div>
<img src="imagens/circulo/circulo.svg" alt="image" height="100" width="100">



</div>
<h3 >Escolha o tecido</h3>
<div class="tecidos">


<div class="tecido1">
<img src="imagens/Seda.png" alt="image" height="54" width="54">
<h2>Seda</h2>
</div>
<img src="imagens/circulo/circulo.svg" alt="image" height="100" width="100">

<div class="tecido2">
<img src="imagens/Algodão.png" alt="image" height="60" width="60">
<h2>Algodão</h2>
</div>
<img src="imagens/circulo/circulo.svg" alt="image" height="100" width="100">
<div class="tecido3">
   <img src="imagens/Poliester.png" alt="image" height="60" width="60">
   <h2>Poliester</h2>
</div>
<img src="imagens/circulo/circulo.svg" alt="image" height="100" width="100">



</div>
<div class="imgRef">
<h3>Imagem de referêcia</h3>
<input class="urlImg" name="title" type="text" placeholder="Insira o link">
</div>

<button>Confirmar pedido</button>
<div class="novaAba">
    <div class="barrainferior">
        
    </div>
</div>
 

</div>

<div class="imagemLateral">
<img src="imagens/ilustração.png" >

</div>
`
    

}
paginaTotal()
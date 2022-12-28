const xhttp = new XMLHttpRequest()

const criaLista = lista => lista.reduce((acum, item) => acum + `<li>${item}</li>` ,"")

// ${filme.opinioes /* rating */}

const preencheFixa = filme =>
`<div class="catalogos-boxes">
    <img src="${filme.figura}" alt="foto do filme">
    <div class="classificacao">
        <p>${filme.classificacao}</p>
        <div class="estrelas"></div>
    </div>
    <h3 class="filme-titulo">${filme.titulo}</h3>
    <p class="filme-genero">${filme.generos}</p>
    <b>elenco</b><p class="filme-elenco">${filme.elenco}</p>

    <p class="filme-descicao">${filme.resumo}</p>
    <h4>Titulos similares</h4>
    <ul class="filme-similares">
        <li>${filme.titulosSemelhantes/* vem em id dos outros filmes */}</li>
    </ul>
</div>`


const carregarFilmes = (filmeLista, seletorCatalogo) =>{
    const divCatalogo = document.querySelector(seletorCatalogo)

    filmeLista.forEach(filme => {
        divCatalogo.innerHTML += preencheFixa(filme);
        console.log(filme)

    });
}

xhttp.onreadystatechange = function(){
     if(this.readyState == 4 && this.status == 200){
        //console.log(this.responseText)
        console.log(JSON.parse(this.responseText))

        carregarFilmes((JSON.parse(this.responseText)), "#catalogos")
            
    }
}
    
xhttp.open("GET", "https://rafaelescalfoni.github.io/desenv_web/filmes.json")
    
xhttp.send()
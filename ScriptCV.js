//MENU LATERAL
var menu_visible=false;
let menu=document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//SI ESTA OCULTO
        menu.style.display="block";
        menu_visible=true;
    }
    else{
        menu.style.display="none";
        menu_visible=false;
    }
}
//OCULTO EL MENU UNA VEZ SELECCIONADA UNA OPCIÓN
let links=document.querySelectorAll("nav a");
for(var x=0;x<links.length;x++){
    links[x].onclick=function(){
        menu.style.display="none";
        menu_visible=false;
    }
}

//FUNCION PARA LAS BARRAS DE HABILIDADES
function crearBarra(id_barra){
    for(x=0;x<=10;x++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//CODIGO PARA SELECCIONAR BARRAS Y MODIFICARLAS
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let typescript = document.getElementById("typescript");
crearBarra(typescript);
let java_script = document.getElementById("java_script");
crearBarra(java_script);
let python = document.getElementById("python");
crearBarra(python);
let sql = document.getElementById("sql");
crearBarra(sql);

//MANIPULACION DE BARRAS
let contadores = [-1,-1,-1,-1,-1,-1,];//-1 PARA QUE LA BARRA ARRANQUE VACIA
let entro=false;//BORRAR LUEGO
//ANIMACIONES DE BARRAS
function efectoHabilidades(){
    var habilidades=document.getElementById("habilidades");
    var distancia_skill=window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skill>=300 && entro==false){
        entro=true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 10, 1, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 9, 2, intervalJavascript);
        },100);
        const intervalTypescript = setInterval(function(){
            pintarBarra(typescript, 8, 3, intervalTypescript);
        },100);
        const intervalJava_script = setInterval(function(){
            pintarBarra(java_script, 7, 4, intervalJava_script);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 6, 5, intervalPython);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 6, 0, intervalSql);
        },100);
    }
}

//PINTAR BARRAS
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#027c94";//COLOR DE LA BARRA
        interval = setInterval(function(){
            pintarBarra(id_barra, cantidad, indice, interval);
        },100);
    }else{
        clearInterval(interval);
    }
}

//INTERACCION BARRAS CON MOUSE
window.onscroll = function(){
    efectoHabilidades();
}

//PAQUETE IDIOMA
const elementoBandera = document.getElementById("banderas");
const seleccionIdiomas = document.querySelectorAll("[data-section]");
const cambiarIdioma = async (banderas) => {
    const requestJson = await fetch(`idioma/${banderas}.json`);
    const text = await requestJson.json();
    for (const seleccionIdioma of seleccionIdiomas) {
        const section = seleccionIdioma.dataset.section;
        const value = seleccionIdioma.dataset.value;
        seleccionIdioma.innerHTML = text[section][value];
    }
};
elementoBandera.addEventListener("click", (e) => {
    cambiarIdioma(e.target.parentElement.dataset.lenguaje);
});


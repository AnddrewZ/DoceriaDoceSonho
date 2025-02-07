function abrirSidebar() {
    document.getElementById("sidebarmobile").style.width = "250px";
}
  
function fecharSidebar() {
    document.getElementById("sidebarmobile").style.width = "0";
}

function mostrarNossosProdutos1() {
    document.getElementById("seletornossosprodutos1").style.color = "#585858";
    document.getElementById("seletornossosprodutos1").style.boxShadow = "0 3px 0 #585858";
    document.getElementById("seletornossosprodutos2").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos2").style.boxShadow = "none";
    document.getElementById("seletornossosprodutos3").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos3").style.boxShadow = "none";
    document.getElementById("seletornossosprodutos4").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos4").style.boxShadow = "none";
    document.getElementById("cardsnossosprodutos1").style.display = "grid";
    document.getElementById("cardsnossosprodutos2").style.display = "none";
    document.getElementById("cardsnossosprodutos3").style.display = "none";
    document.getElementById("cardsnossosprodutos4").style.display = "none";
}

function mostrarNossosProdutos2() {
    document.getElementById("seletornossosprodutos1").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos1").style.boxShadow = "none";
    document.getElementById("seletornossosprodutos2").style.color = "#585858";
    document.getElementById("seletornossosprodutos2").style.boxShadow = "0 3px 0 #585858";  
    document.getElementById("seletornossosprodutos3").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos3").style.boxShadow = "none";
    document.getElementById("seletornossosprodutos4").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos4").style.boxShadow = "none";
    document.getElementById("cardsnossosprodutos1").style.display = "none";
    document.getElementById("cardsnossosprodutos2").style.display = "grid";
    document.getElementById("cardsnossosprodutos3").style.display = "none";
    document.getElementById("cardsnossosprodutos4").style.display = "none";
}

function mostrarNossosProdutos3() {
    document.getElementById("seletornossosprodutos1").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos1").style.boxShadow = "none";
    document.getElementById("seletornossosprodutos2").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos2").style.boxShadow = "none";
    document.getElementById("seletornossosprodutos3").style.color = "#585858";
    document.getElementById("seletornossosprodutos3").style.boxShadow = "0 3px 0 #585858";
    document.getElementById("seletornossosprodutos4").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos4").style.boxShadow = "none";
    document.getElementById("cardsnossosprodutos1").style.display = "none";
    document.getElementById("cardsnossosprodutos2").style.display = "none";
    document.getElementById("cardsnossosprodutos3").style.display = "grid";
    document.getElementById("cardsnossosprodutos4").style.display = "none";
}

function mostrarNossosProdutos4() {
    document.getElementById("seletornossosprodutos1").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos1").style.boxShadow = "none";
    document.getElementById("seletornossosprodutos2").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos2").style.boxShadow = "none";
    document.getElementById("seletornossosprodutos3").style.color = "#6B717E";
    document.getElementById("seletornossosprodutos3").style.boxShadow = "none";
    document.getElementById("seletornossosprodutos4").style.color = "#585858";
    document.getElementById("seletornossosprodutos4").style.boxShadow = "0 3px 0 #585858";
    document.getElementById("cardsnossosprodutos1").style.display = "none";
    document.getElementById("cardsnossosprodutos2").style.display = "none";
    document.getElementById("cardsnossosprodutos3").style.display = "none";
    document.getElementById("cardsnossosprodutos4").style.display = "grid";
}
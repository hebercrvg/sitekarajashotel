// Script to open and close sidebar
var nome, email, mensagem;
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function NameChanged() {
  nome = document.getElementsByName("Name")[0].value;
}
function EmailChanged() {
  email = document.getElementsByName("Email")[0].value;
}
function MessageChanged() {
  mensagem = document.getElementsByName("Message")[0].value;
  document
    .getElementsByName("botao")[0]
    .setAttribute(
      "href",
      "mailto:contato@karajashotel.com.br?subject=Contato&amp;body=" +
        mensagem +
        "Meu email é:" +
        email +
        "   e meu nome é: " +
        nome
    );
}

function Teste() {
  console.log(document.getElementsByName("botao")[0].getAttribute("href"));
}

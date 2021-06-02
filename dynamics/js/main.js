window.addEventListener("load", ()=>{
  fondo = document.getElementById("container");
  nav = document.getElementById("nav");
  juego1 = document.getElementById("serpientesCard");
  juego2 = document.getElementById("breackoutCard");
  
  const cancion = new Audio('../statics/audios/prin.mp3');
  cancion.play();

  /*JUEGO 2*/
  juego1.addEventListener("click", ()=>{
    window.location.assign("./templates/harry.html");
  });
  /*JUEGO 1*/
  juego2.addEventListener("click", ()=>{
    window.location.assign("./templates/breakout.html");
  });

  /*PALETA MORADO*/
  function morado(){  
    fondo.style.background = "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #A72FED";
    let img = document.getElementById("serpientesCard");
    img.innerHTML ='<img src="./statics/img/Harry.jpg" class="card-img-top" alt="Imagen serpientes y escaleras"><img src="./statics/img/des_mo.jpg" alt="descripcion">';
    nav.style.background = "#FFCB1E";

    let img2 = document.getElementById('breackoutCard');

    img2.innerHTML = '<img src="./statics/img/break_mora.jpg" class="card-img-top" alt="snk"><img src="./statics/img/morado_break.jpg" alt="descripcion">'
    console.log("hola1");
  }

    paleta1 = document.getElementById("morado");
    paleta1.addEventListener("click", ()=>{
      morado();
    });
  
  /*PALETA AMARILLO */
  function amarillo(){
    fondo.style.background = "linear-gradient(0deg, rgba(236,175,0,1) 0%, rgba(250,250,250,1) 100%, rgba(255,255,255,1) 100%)";
    let img = document.getElementById("serpientesCard");
    img.innerHTML ='<img src="./statics/img/harry_ama.jpg" class="card-img-top" alt="Imagen serpientes y escaleras"><img src="./statics/img/des_ama.jpg" alt="descripcion">';
    nav.style.background = "#9E5B00";

    let img2 = document.getElementById('breackoutCard');

    img2.innerHTML = '<img src="./statics/img/break_ama.jpg" class="card-img-top" alt="snk"><img src="./statics/img/amarillo_break.jpg" alt="descripcion">'
    console.log("hola2");
  }
  
  paleta2 = document.getElementById("amarillo");
  paleta2.addEventListener("click", ()=>{
    amarillo();
  });
  /*PALETA NEGRA */
  function azul(){
    fondo.style.background = "linear-gradient(0deg, rgba(33,33,33,1) 0%, rgba(250,250,250,1) 91%, rgba(255,255,255,1) 100%)";
    let img = document.getElementById("serpientesCard");

    img.innerHTML ='<img src="./statics/img/harry_azu.jpg" class="card-img-top" alt="Imagen serpientes y escaleras"><img src="./statics/img/des_azu.jpg" alt="descripcion">';
    nav.style.background = "#0A8CBF";
    let img2 = document.getElementById('breackoutCard');

    img2.innerHTML = '<img src="./statics/img/break_azu.jpg" class="card-img-top" alt="snk"><img src="./statics/img/azul_break.jpg" alt="descripcion">'
    console.log("hola3");
  }
  /*  ACCESIBILIDAD TABINDEX */
  paleta3 = document.getElementById("azul");
  paleta3.addEventListener("click", ()=>{
    azul();
  });

  let palMorado = document.getElementById("textMorado");
  palMorado.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      morado();
    }        
  });

  let palAmarillo = document.getElementById("textAmarillo"); 
  palAmarillo.addEventListener("keydown", (e)=>{
     if(e.key == "Enter"){
      amarillo();
    }        
  });

  let palAzul = document.getElementById("textAzul");
  palAzul.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      azul();
    }       
  });

  let serpientes = document.getElementById("serpientesCard");
  serpientes.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("../../templates/harry.html");
    }    
  });

  let breaker = document.getElementById("breackoutCard");
  breaker.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("../../templates/breakout.html");
    }  
  });
  
});
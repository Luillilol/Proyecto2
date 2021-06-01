window.addEventListener("load", ()=>{
  var canvas = document.getElementById("tablero");
  var ctx = canvas.getContext("2d");
  let width=canvas.width, height=canvas.height;
  const can = new Audio('../statics/audios/can.mp3');
  can.play();
  const volumen = document.getElementById("volume");
  const perdio = new Audio('../statics/audios/pierde.mp3');
  const cora = new Image("./statics/img/cora.png");
  const win = new Audio("../statics/audios/win.mp3");
  const no = new Audio('../statics/audios/fin.mp3');
  const bri = new Audio ('../statics/audios/brick.m4a')
  const volver = document.getElementById('volver')
  document.cookie="punta=puntaje";

  volver.addEventListener("click", ()=>{
    window.location.assign("../../index.html");
  });


  volumen.addEventListener("change", ()=> {
    can.volume = volumen.value;
  })

  var vidas=5;
  var puntaje =0;
  var contBloques = 15;
  var perdiste ="G A M E   O V E R ";
  var ganaste = "Y O U   W I N";
  /* 400 x 500 */

  class bloque{
    constructor(x, y, estado, color){
      this.x = x;
      this.y = y;
      this.estado = estado;
      this.color = color
    }
  }
  

  const b1 = new bloque(30, 10, 0, 0);
  const b2 = new bloque(150, 10, 0, 0);
  const b3 = new bloque(270, 10, 0, 0);
  
  const b4 = new bloque(30, 50, 0, 1);
  const b5 = new bloque(150, 50, 0, 1);
  const b6 = new bloque(270, 50, 0, 1);

  const b7 = new bloque(30, 90, 0, 2);
  const b8 = new bloque(150, 90, 0, 2);
  const b9 = new bloque(270, 90, 0, 2);
  
  const b10 = new bloque(30, 130, 0, 3);
  const b11 = new bloque(150, 130, 0, 3);
  const b12 = new bloque(270, 130, 0, 3);
  
  const b13 = new bloque(30, 170, 0, 4);
  const b14 = new bloque(150, 170, 0, 4);
  const b15 = new bloque(270, 170, 0, 4);

  let bloques = []; 

  bloques.push(b1);
  bloques.push(b2);
  bloques.push(b3);
  
  bloques.push(b4);
  bloques.push(b5);
  bloques.push(b6);
  
  bloques.push(b7);
  bloques.push(b8);
  bloques.push(b9);
  
  bloques.push(b10);
  bloques.push(b11);
  bloques.push(b12);
  
  bloques.push(b13);
  bloques.push(b14);
  bloques.push(b15);
  
  console.log(bloques);
   
  var pelota = {
    x:200,
    y:455, 
    r:10,
    speed:6,
    horizontal: 1, /*horizonal 1 = derecha y 2 = izquierda */
    vertical : 1   /*vertical 1 = arriba y 2=abajo*/
  }
  
  var paleta = {
    x : 150,
    y : 470,
    xr : 5
  }

  let start = 1;
  let perdida = 0;
  let vez =0;
  let perder = 0;


  function drawBloques(){
    for (let value of bloques){
      if(value.estado==0)
      {
        if(value.color==0)
        { 
          ctx.beginPath();
          ctx.rect(value.x, value.y, 100, 20);
          ctx.fillStyle = "#ff190d";
          ctx.fill();
          ctx.closePath();
        }else if(value.color==1){
          ctx.beginPath();
          ctx.rect(value.x, value.y, 100, 20);
          ctx.fillStyle = "#ff860d";
          ctx.fill();
          ctx.closePath();
        }else if(value.color==2){
          ctx.beginPath();
          ctx.rect(value.x, value.y, 100, 20);
          ctx.fillStyle = "#feff0d";
          ctx.fill();
          ctx.closePath();
        }else if(value.color==3){
          ctx.beginPath();
          ctx.rect(value.x, value.y, 100, 20);
          ctx.fillStyle = "#0dff19";
          ctx.fill();
          ctx.closePath();
        }else if(value.color==4){
          ctx.beginPath();
          ctx.rect(value.x, value.y, 100, 20);
          ctx.fillStyle = "#cc0dff";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }


  function drawPaleta(){
    ctx.beginPath();
      ctx.rect(paleta.x, paleta.y+10, 100, 10);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
    ctx.closePath();
  }

  function drawBola(){
    ctx.beginPath();
      ctx.arc(pelota.x, pelota.y, pelota.r, 0, Math.PI*2);
      ctx.fillStyle = "#202020";
      ctx.fill();
    ctx.closePath();
  }

  function bolaMov(){
    if(pelota.horizontal === 1 && pelota.x < 390){
      pelota.x += pelota.speed;
    }else{
      pelota.horizontal = 2;
    }
    if(pelota.horizontal === 2 && pelota.x > 10){
      pelota.x -= pelota.speed;
    }else{
      pelota.horizontal = 1;
    }
    if(pelota.vertical === 1 && pelota.y>10){
      pelota.y -= pelota.speed;
    }else{
      pelota.vertical = 2;
    }
    if(pelota.vertical === 2 ){
      if(pelota.y<470){
         pelota.y += pelota.speed;
      }else{
        if(pelota.x-10<paleta.x+100 && pelota.x+10>paleta.x){
          pelota.vertical = 1;
        }else{
          let menos = document.getElementById('letra_cora');
          vidas-=1;
          start=1;
          pelota.x = paleta.x+50;
          perdio.play();
          menos.innerHTML=vidas;
            if(vidas==0){
              let menos = document.getElementById('letra_cora');
              let sin = document.getElementById('corazon');
              sin.style.display="none";
              menos.innerHTML=perdiste;
              perder = 1;
              can.pause();
              no.play();
            }

        }    
      }       
    }    
  }

  //O P C I O N E S           P U N T A J E//
  //funcionaria una variable para detectar que haya colisionado con todos sin perder para asignar puntos? o mejor uno que contenga los puntos y cada vez que ponga enter otra vez, le descuente
  function colision(){
    for (let value of bloques){
      if(value.estado==0 && ((value.x < pelota.x+10) && (value.x+100 > pelota.x-10)) && ((value.y < pelota.y+10)&&(value.y+20>pelota.y-10))&&((value.x+20 < pelota.x+10)&&(value.x) ) )
      { 
        if(pelota.vertical ===2){
          pelota.vertical=1;
          contBloques--;
        }else{
          pelota.vertical=2;
          contBloques--;
        }
        console.log("choque");
        let pun = document.getElementById('score');
        puntaje += 100;
        pun.innerHTML=puntaje;
        value.estado=1;
        bri.play();

      }
    }
  }
  


  function draw(){
   
    ctx.clearRect(0, 0, 400, 500);
    /* DIBUJAR PALETA*/
    if(contBloques>0 && perder===0){
      drawPaleta();
      /*DIBUJAR BOLA*/
      drawBola();
      console.log(start);
      if(start == 0){
        bolaMov();
        colision();
      }else{
        pelota.x = paleta.x+50;      
      }
      drawBloques();
      requestAnimationFrame(draw);
    }else{
      if(contBloques===0){
        let menos = document.getElementById('letra_cora');
        let sin = document.getElementById('corazon');
        sin.style.display="none";
        menos.innerHTML=ganaste;
        can.pause();
        win.play();
             
      }else if(vidas ===0){
        console.log("VIDAS");
      }
    }      
  }
  document.querySelector("body").addEventListener("keydown", (e)=>{
    console.log(e.key);
    /*DETECTAR EVENTOS PARA MOVER BARRAS 12LINEAS*/
    if(e.key == "ArrowLeft"&&paleta.x>0){
      paleta.x-=15;
    }
    if(e.key == "ArrowRight" && paleta.x < 300){
      paleta.x+=15;
    }
    if(e.key == "Enter"){
      start =0;
    }  
  })
requestAnimationFrame(draw);  
})


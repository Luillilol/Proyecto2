window.addEventListener("load", ()=>{
  const can = new Audio('../statics/audios/harryTheme.mp3');
  can.play();
  /* 400 x 500 */
 const volumen = document.getElementById("volumen");
volumen.addEventListener("change", ()=> {

  })
////
  let cookies = document.cookie;
  let nameUser;


  if(cookies.indexOf(";") === -1){
    let arreglo = [];
    arreglo = cookies.split('=');
 
    nameUser = arreglo[1];
 
  }else{
    let arreglo2 = [];
    let arrCookies = cookies.split('; ');

    for(const valor of arrCookies){
      const cookie = valor.split("=");
      arreglo2.push(cookie);

    }

    nameUser = arreglo2[0][0];

  }

  if(cookies.indexOf(";") === -1){
    let arreglo = [];
    arreglo = cookies.split('=');
    nameUser = arreglo[1];
  }else{
    let arreglo2 = [];
    let arrCookies = cookies.split('; ');
    for(const valor of arrCookies){
      const cookie = valor.split("=");
      arreglo2.push(cookie);
    }
    nameUser = arreglo2[0][0];
  }

  let jugador = 0;
  function tirarDado(){
	  return Math.round(Math.random()*5)+1;
  }

  let casilla1=0;
  let casilla2=0;

  document.getElementById("play").addEventListener("click",()=>{
    num = tirarDado()
    let player = document.getElementById("player");
    let dado = document.getElementById("num");
    dado.innerText = num;
    if(jugador==0)
    {
      player.innerText = jugador+1;
      if(casilla1>0)
      {
        let eliminar = document.getElementById(casilla1);
        eliminar.innerHTML = '<img src="../statics/img/transparente.png" alt="vacio">';
      }
      casilla1+=num;
      for(let i=0; i<=54; i++)
      {
        if(i==casilla1)
        {
          if(casilla1==5 || casilla1==11 || casilla1==23 || casilla1==34 || casilla1==43)
          {
            let mas = tirarDado();
            casilla1+=mas;
            let mensaje = document.getElementById("msj");
            mensaje.innerHTML = "Dumbledore te ayudo";
          }
          if(casilla1==14 || casilla1==27 || casilla1==31 || casilla1==40 || casilla1==47)
          {
            let menos = tirarDado();
            casilla1-=menos;
            let mensaje = document.getElementById("msj");
            mensaje.innerHTML = "El dementor te bajo";
            if(casilla1==5 || casilla1==11 || casilla1==23 || casilla1==34 || casilla1==43)
            {
              let mas = tirarDado();
              casilla1+=mas;
              let mensaje = document.getElementById("msj");
              mensaje.innerHTML = "Dumbledore te ayudo";
            }else{
              let mensaje = document.getElementById("msj");
              mensaje.innerHTML = " ";
            }
          }
          let cas = document.getElementById(casilla1);
          cas.innerHTML = "<img src='../statics/img/play1.png' alt='ficha' width = '50px'>";
        }else if(casilla1>=54)
        {
          let cas = document.getElementById("54");
          cas.innerHTML = "<img src='../statics/img/play1.png' alt='ficha' width = '50px'>";
          let gana = document.getElementById("gana");
          gana.innerText = "Gana jugador 1";
          document.cookie = "Jugador 1 = Ganador";
        }
      }
      jugador=1;
    }else if(jugador==1)
    {
      player.innerText = jugador+1;
      if(casilla2>0)
      {
        let eliminar = document.getElementById(casilla2);
        eliminar.innerHTML = '<img src="../statics/img/transparente.png" alt="vacio">';
      }
      casilla2+=num;
      for(let i=0; i<=54; i++)
      {
        if(i==casilla2 && i<54)
        {
          if(casilla2==5 || casilla2==11 || casilla2==23 || casilla2==34 || casilla2==43)
          {
            let mas = tirarDado();
            casilla2+=mas;
            let mensaje = document.getElementById("msj");
            mensaje.innerHTML = "Dumbledore te ayudo";
          }
          if(casilla2==14 || casilla2==27 || casilla2==31 || casilla2==40 || casilla2==47)
          {
            let menos = tirarDado();
            casilla2-=menos;
            let mensaje = document.getElementById("msj");
            mensaje.innerHTML = "El dementor te bajo";
            if(casilla2==5 || casilla2==11 || casilla2==23 || casilla2==34 || casilla2==43)
            {
              let mas = tirarDado();
              casilla2+=mas;
              let mensaje = document.getElementById("msj");
              mensaje.innerHTML = "Dumbledore te ayudo";
            }
          }else{
            let mensaje = document.getElementById("msj");
            mensaje.innerHTML = " ";
          }
          let cas = document.getElementById(casilla2);
          cas.innerHTML = "<img src='../statics/img/play2.png' alt='ficha' width = '50px'>";
        }else if(casilla2>=54)
        {
          let cas = document.getElementById("54");
          cas.innerHTML = "<img src='../statics/img/play2.png' alt='ficha' width = '50px'>";
          let gana = document.getElementById("gana");
          //document.cookie = "harry1=1";
          gana.innerText = "Gana jugador 2"
          document.cookie = "Jugador 2= Ganador";
        }
      }
      jugador=0;
    }
  })
  let vuelve = document.getElementById('volver');
  vuelve.addEventListener("click", ()=>{
    window.location.assign("../index.html");
  })
}) 
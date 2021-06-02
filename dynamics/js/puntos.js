window.addEventListener("load", ()=>{
  let vuelve = document.getElementById('volver');
  let un = document.getElementById('uno');
  let juga = document.getElementById('Nombre_gana')
  let gana = document.getElementById('ganador')

  //  juga.innerHTML='maria';


  let cookies = document.cookie;
  let nameUser;

  // juga.innerHTML = 

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
    let primero = document.getElementById('nombre_uno');
    let numero = document.getElementById('uno');
    nameUser = arreglo2[0][0];
    if(nameUser === "Jugador 1" || nameUser === "Jugador 2"){
     juga.innerHTML= arreglo2[0][0];
     gana.innerHTML= "GANADOR";
     }else{      
      primero.innerHTML= nameUser;
      numero.innerHTML= arreglo2[0][1];
    }
  }
       
  let arrCookies = cookies.split('; ');
  let arreglo = [];
  for(const valor of arrCookies)
  {
    const cookie = valor.split('=');
    arreglo.push(cookie);
  }
    
  vuelve.addEventListener("click", ()=>{
    window.location.assign("../index.html");    
  })
  vuelve.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("../index.html");
    }
  })
});
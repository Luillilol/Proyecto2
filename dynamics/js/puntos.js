window.addEventListener("load", ()=>{
  let vuelve = document.getElementById('volver');
  let un = document.getElementById('uno');

  let cookies = document.cookie;
  let nameUser;


  if(cookies.indexOf(";") === -1){
    let arreglo = [];
    arreglo = cookies.split('=');
    console.log(arreglo);
    nameUser = arreglo[1];
    console.log(nameUser+"=-1");
  }else{
    let arreglo2 = [];
    let arrCookies = cookies.split('; ');
    console.log(cookies+"1");
    for(const valor of arrCookies){
      const cookie = valor.split("=");
      arreglo2.push(cookie);
      console.log(cookie);
    }
    let primero = document.getElementById('nombre_uno');
    let numero = document.getElementById('uno');
    console.log(arreglo2);
    nameUser = arreglo2[0][0];
    console.log(nameUser+"nameuser= 1");
    primero.innerHTML= nameUser;
    numero.innerHTML= arreglo2[0][1];

  }
       

  // let cookies = document.cookie;
  let arrCookies = cookies.split('; ');
  console.log(arrCookies);
  let arreglo = [];
  for(const valor of arrCookies)
  {
    const cookie = valor.split('=');
    arreglo.push(cookie);
    console.log(cookie);
    //Todo bien hasta aqui jeje
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
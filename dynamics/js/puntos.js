window.addEventListener("load", ()=>{
  let vuelve = document.getElementById('volver');
  let un = document.getElementById('uno');

  let cookies = document.cookie;
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
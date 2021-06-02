window.addEventListener("load", ()=>{
    let vuelve = document.getElementById('volver');
    let un = document.getElementById('uno');
    vuelve.addEventListener("click", ()=>{
    window.location.assign("../index.html");
  
    
  })
  vuelve.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("../index.html");
    }
  })
  un.setAttribute()
});
window.addEventListener("load", ()=>{
  let volver = document.getElementById("volver");
  volver.addEventListener("click", ()=>{
     window.location.assign("../../index.html");
  })
  volver.addEventListener("keydown", (e)=>{
    console.log(e.key);
    if(e.key == "Enter"){
      window.location.assign("../../index.html");
    }
  });

});
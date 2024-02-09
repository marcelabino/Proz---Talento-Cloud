const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

const linkPerfilDados = document.getElementById("link-perfil-dados");
const linkIndex = document.querySelector("a");

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  console.log(e.code);

  if (navPerfil.style.display == "block"){
    //caso a navegação secundária esteja vísivel navegar para a respectiva página
    if (e.code == "Digit1"){
      linkPerfilDados.click();
    } else if (e.code == "Escape") {
      navPerfil.style.display = "none";
    }
  } else if (e.code == "Digit1"){
    //caso a navegação secundária não esteja vísivel, mudar o dis
    console.log("Abre o menu de perfil");
    navPerfil.style.display = "block";
  } else if (e.code == "backspace"){
    linkIndex.click();
  };
});

// window.addEventListener("keyup", (e) => {
//   console.log(e.key);
//   console.log(e.code);

//   if(e.code == "Digit1") {
//     console.log("Abre o menu de perfil");
//     navPerfil.style.display = "block";
//   } else if (e.code == "Escape") {
//     navPerfil.style.display = "none";
//   }
// })
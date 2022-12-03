// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise (faire le rapport entre la taille du body et le niveau de scroll car la taille du body varie selon taille ecran )

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

window.addEventListener("scroll", () => {
  // navbar effect
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  // image

  // document.body.offsetHeight : connaitre la taille du body
  // window.scrollY : niveau de scroll haut de la barre verticale
  // window.innerHeight : hauteur de la barre de scroll verticale

  // console.log(
  //     (window.scrollY + window.innerHeight) / document.body.offsetHeight
  // );

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  //  popup
  // Creer variable pour que le popup n'apparait plus des que l'on click dessus

  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

// evenement au clic : quand tu clics sur la croix le popup disparait

let playOnce = true;

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(400px)";
});

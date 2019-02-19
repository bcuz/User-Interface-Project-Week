function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.querySelector("header").style.zIndex = "0";
  // document.querySelector("header").style.position = "static";

}

// document.querySelector('.closeNav').addEventListener('click', (e) => {
  //     document.getElementById("myNav").style.width = "0%";
  //   })
  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.querySelector("header").style.zIndex = "1";
  // document.querySelector("header").style.position = "fixed";

}
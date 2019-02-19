// document.querySelector('header img').addEventListener('click', (e) => {
//   e.stopPropagation()

//   if (!document.body.classList.contains('overlay')) {
//     document.body.classList.add("overlay")
//   } 

//   if (document.body.classList.contains('remove')) {
//     document.body.classList.remove("remove")
//   }
  
// })

// // https://stackoverflow.com/questions/7478336/only-detect-click-event-on-pseudo-element
// document.querySelector('body').addEventListener('click', (e) => {
//   if (document.body.classList.contains('overlay')) {
//     document.body.classList.add("remove")    
//   } 
// })

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
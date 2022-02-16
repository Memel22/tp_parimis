/* ------------------------- MENU BURGER -------------------------*/ 
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}


/* ------------------------- DIAPO -------------------------*/ 
$( function() {
    let myIndex = 0;
       carousel();
       function carousel() {
           let i;
           let x = document.getElementsByClassName("mySlides");
           for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";
           }
           myIndex++;
           if (myIndex > x.length) {
               myIndex = 1
           }
           x[myIndex - 1].style.display = "block";
           setTimeout(carousel, 4000);
       }
     } );
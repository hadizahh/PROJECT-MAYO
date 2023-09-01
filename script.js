const leftNav = document.querySelector(".leftnav");
const menuIcon = document.querySelector(".iconformenu");

menuIcon.addEventListener("click", ()=>{
    // leftNav.classList.toggle(".show")
    if (leftNav.style.display === "none") {
        leftNav.style.display = "flex"
    } else {
        leftNav.style.display = "none"
    }
})


console.log(leftNav)
console.log(menuIcon)

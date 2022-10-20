window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
///job responsibility
const serviceModals = document.querySelectorAll(".exp-card");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const closeBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) =>{
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

closeBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalview) => {
            modalview.classList.remove("active");
        });
    });
});




///PROJECT POPUP
const projectModals = document.querySelectorAll(".project-model");
const imgCards = document.querySelectorAll(".img-card");
const projectCloseBtns = document.querySelectorAll(".project-close-btn");

var projectModal = function (modalClick){
    projectModals[modalClick].classList.add("active")
 }

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () =>{
    projectModal(i);
    });
 });

projectCloseBtns. forEach((projectCloseBtn) => {
    projectCloseBtn.addEventListener("click", () => {
         projectModals.forEach((projectModalView) => {
            projectModalView.classList.remove ("active");
         });
        });
 });
//scroll to top
const scrollTop = document.querySelector(".scrolltoTop-btn");

window.addEventListener("scroll", function (){
    scrollTop.classList.toggle("active",window.scrollY > 500);
});

scrollTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
//mobile menu
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

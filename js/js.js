const menuResponsive = document.getElementById('menu-responsive');
const barsIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.nav .menu-responsive');
const closeIcon = document.querySelector('.fa-times');
const menuItem = document.querySelectorAll('.menu-responsive li a');



barsIcon.addEventListener('click', () => {
    menu.style.width = '250px';
    document.body.style.opacity = '0.7';
    menu.style.opacity = '1';
    closeIcon.style.display = 'flex'; 
})

closeIcon.addEventListener('click', () => {
   
    menu.style.width = '0';
    document.body.style.opacity = '1';
    closeIcon.style.display="none";
})
menuItem.addEventListener('click',()=>{
    menu.style.width="0";
    document.body.style.opacity="1";
    closeIcon.style.display="none";
    barsIcon.style.display="flex";
})

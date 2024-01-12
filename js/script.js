window.onload = function() {
    const hamburger = document.getElementById('hamburger');

    hamburger.onclick = function() {
        let topNav = document.getElementById('myTopnav');
        if (topNav.className === 'responsive') {
            topNav.className = '';
        }
        else{2
            topNav.className = 'responsive';
        }
    }
    
    const menuList = document.querySelectorAll('.menu-element');
    menuList.forEach(function(element) {
        element.addEventListener('click', function(event) {           
            const elementLink = element.dataset.link;
            if(elementLink) {
                event.preventDefault();
                document.getElementById(elementLink).scrollIntoView({ behavior: 'smooth'});
            }
        })
    })
    const headerMenuList = document.querySelectorAll('.header-menu-element');
    headerMenuList.forEach(function(element) {
        element.addEventListener('click', function(event) {
            const elementLink = element.dataset.link;
            if(elementLink){
                event.preventDefault();
                document.getElementById(elementLink).scrollIntoView({ behavior: 'smooth'});
            }
        })
    })
}
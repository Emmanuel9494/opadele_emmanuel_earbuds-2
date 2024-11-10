// Menu Navigation
(function () {
    const menuLogo = document.querySelector("#main-logo");
   const showMobile = document.querySelector(".mobile-nav");

   function mobileNav() {
      if (showMobile.classList.contains("display")) {
        showMobile.classList.remove("display");
        showMobile.classList.add("display-mobile-nav");
        console.log("Menu shown");

        // GSAP
        gsap.fromTo(showMobile, 
            { opacity: 0 }, 
            {opacity: 1, duration: 1, ease: "power2.out"}
        );
     } else {
        showMobile.classList.remove("display-mobile-nav");
        showMobile.classList.add("display");
        console.log("Menu hidden");}
    }
        menuLogo.addEventListener('click', mobileNav);
})();

// Trivox Text Scroll 
(function () {
    window.addEventListener("load", function() {
        const scrollText1 = document.querySelector('.scrollleft');
        const scrollText2 = document.querySelector('.scrollright');
        
        // Get width of the scroll text element
        const textWidth1 = scrollText1.offsetWidth;
        const textWidth2 = scrollText2.offsetWidth;
        
        // Animate
        gsap.fromTo(scrollText1, 
            {x: "0%"},
            {x: `-${textWidth1}`, opacity: 1,duration: 10,ease: "linear",repeat:-1,repeatDelay: 0}
        );
        gsap.fromTo(scrollText2, 
            {x: "-100%"},
            {x: `+${textWidth2}`, opacity: 1,duration: 15,ease: "linear",repeat:-1,repeatDelay: 0}
        );
    });
})();
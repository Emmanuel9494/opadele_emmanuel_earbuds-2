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
        const scrollText1 = document.querySelectorAll('.scrollleft');
        const scrollText2 = document.querySelectorAll('.scrollright');
        
        scrollText1.forEach(scrollText1 => {
            const textWidth1 = scrollText1.offsetWidth;
        
            gsap.fromTo(scrollText1, 
                { x: "0%" },
                { x: `-${textWidth1}`, opacity: 1, duration: 10, ease: "linear", repeat:-1, repeatDelay: 0, delay:1});
        });
        scrollText2.forEach(scrollText2 => {
            const textWidth2 = scrollText2.offsetWidth;
        
            gsap.fromTo(scrollText2, 
                { x: "-100%" },
                { x: `+${textWidth2}`, opacity: 1, duration: 10, ease: "linear", repeat:-1, repeatDelay: 0});
        });
    });
})();

// Trivox reel
(function () {

    const player = new Plyr('video');
    player;
   
})();

// X-ray slider
(() => {

    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");


    function moveDivisor(){
        console.log(slider.value);
        divisor.style.width = slider.value+"%";
    }

    slider.addEventListener("input", moveDivisor);
  
})();
// scroll Animation
(() => {


    const canvas = document.querySelector("#trivox-flip");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 841; //how many frame do we have

    const images = [];  //array to hold all images

    //create an object called buds to hold the current frame 
    const pics = {
        frame: 0
    }

    // run a for loop to populate image array
    for(let i =0; i < frameCount; i++){
        const img = new Image();
        img.src =`images/trivox-animation${(i + 1).toString().padStart(4, '0')}.jpg`;
        images.push(img)

    }

    // console.table(images);

    gsap.to(pics, {
        frame: 841,
        snap: "frame",
        scrollTrigger: {
            trigger: "#trivox-flip",
            pin: true,
            scrub: 1,
            markers: false,
            start: "top top"
        },
        onUpdate: render
    })
    images[0].addEventListener("load", render);

    function render(){
        context.clearRect(0,0, canvas.width, canvas.height);
        // console.log(buds.frame);
        console.log(images[pics.frame]);
        context.drawImage(images[pics.frame], 0, 0);
    }

})();
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
        const scrollText1 = document.querySelectorAll('.scroll-left');
        const scrollText2 = document.querySelectorAll('.scroll-right');
        
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

    const frameCount = 840; //how many frame do we have

    const images = [];  //array to hold all images

    //create an object called pics to hold the current frame 
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
        frame: 840,
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
        // console.log(pics.frame);
        console.log(images[pics.frame]);
        context.drawImage(images[pics.frame], 0, 0);
    }

})();
// Hotspot
(() => {
    
  
    const hotspotInfo = [
      {
        slot: "hotspot-1",
        title: "Touch Input",
        infoDetails: "This allows users to control playback, answer calls, and access voice assistants with a simple tap.",
        imgPath: "images/touch-img.png"
      },
      {
        slot: "hotspot-2",
        title: "360 Woofer",
        infoDetails: "The 360-degree woofer ensures deep, resonant bass from all angles, enhancing music and media playback.",
        imgPath: "images/woffer.png"
      },
      {
        slot: "hotspot-3",
        title: "Ear Tips",
        infoDetails: "The earbuds come with multiple sizes of soft, silicone ear tips for a secure and comfortable fit.",
        imgPath: "images/eartips.png"
      },
      {
        slot: "hotspot-4",
        title: "Right Earbud",
        infoDetails: "Specifically designed with dedicated right-ear features to ensure optimal sound balance and comfort.",
        imgPath: "images/right-ear.png"
      },
      {
        slot: "hotspot-5",
        title: "Charging Connector",
        infoDetails: "Equipped with a fast and efficient charging connector, making recharging easy and convenient.",
        imgPath: "images/charging.png"
      }
    ];
  
    const hotSpots = document.querySelectorAll(".Hotspot");
    console.log(hotSpots);
  
    // Helper function to create and populate content
    function inputWord(inputWords, selected) {
      selected.innerHTML = `
        <h2>${inputWords.title}</h2>
        <p>${inputWords.infoDetails}</p>
        <img src="${inputWords.imgPath}" alt="${inputWords.title}">
      `;
    }
  
    // Functions
    function showInfo(e) {
      console.log(e.currentTarget.slot);
      const slot = e.currentTarget.slot;
      const inputWords = hotspotInfo.find(item => item.slot == slot);
  
      if (inputWords) {
        let selected = document.querySelector(`button[slot="${slot}"] > div`);
  
        // Adding the content to the DOM
        inputWord(inputWords, selected);
  
      
  
        // GSAP p, and img 
        gsap.to(selected, { autoAlpha: 1, duration: 1 });
        gsap.fromTo(
          selected.querySelector("p"),
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 1, delay: 0.2 }
        );
        gsap.fromTo(
          selected.querySelector("img"),
          { autoAlpha: 0, scale: 2 },
          { autoAlpha: 1, scale: 1, duration: 1, delay: 0.4 }
        );
      }
    }
  
    function hideInfo(e) {
      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    // Event listeners
    hotSpots.forEach(hotSpot => {
      hotSpot.addEventListener("mouseover", showInfo);
      hotSpot.addEventListener("mouseout", hideInfo);
    });
  })();
  
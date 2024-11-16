// Menu Navigation
(function () {
  const menuLogo = document.querySelector("#main-logo");
  const showMobile = document.querySelector(".mobile-nav");
  const closeLinks = document.querySelectorAll(".mobile-nav nav ul li a ");
  
  function toggleMenu() {
    if (window.innerWidth <= 767) { // Checking if screen size is 767px or less
      showMobile.classList.toggle('display');
      console.log("Menu Clicked");
    }
    gsap.fromTo(showMobile, 
      { opacity: 0 }, 
      {opacity: 1, duration: 1, ease: "power2.out"}
  );
  }

  if (window.innerWidth <= 767) { // Making sure it does not apply to screen size 768px and above
    menuLogo.addEventListener("click", toggleMenu);
    closeLinks.forEach(link => {
      link.addEventListener("click", toggleMenu);
    });
  }

})();


// Trivox Text Scroll 
(function () {
     const scrollText1 = document.querySelector(".scroll-left");
        const scrollText2 = document.querySelector(".scroll-right");
       
        // Get width of the scroll text element
        const textWidth1 = scrollText1.offsetWidth;
        const textWidth2 = scrollText2.offsetWidth;
       
        gsap.fromTo(scrollText1,
            {x: "0%"},
            {x: `-${textWidth1}px`, opacity: 1,duration: 50,ease: "linear",repeat:-1,repeatDelay: 0}
        );
        gsap.fromTo(scrollText2,
            {x: "-90%"},
            {x: `+${textWidth2}px`, opacity: 1,duration: 50,ease: "linear",repeat:-1,repeatDelay: 0}
        );

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
        img.src =`images/trivox-animation${(i + 1).toString().padStart(4, '0')}.png`;
        images.push(img)

    }

    // console.table(images);
    // if (window.innerWidth <= 767) { tried to add an IF for each screen size to adjust scrollTrigger markers but did not work on first attempt...i closed my eyes and pushed my branch }
    gsap.to(pics, {
        frame: 840,
        snap: "frame",
        scrollTrigger: {
            trigger: "#trivox-flip",
            pin: true,
            scrub: 1,
            markers: false,
            start: "top 5%",
            end: "50%  10%"
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

  // Scroll Triggers Links
(function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const closeLinks = document.querySelectorAll(".mobile-nav a");

  function scrollLink(e) {    
    e.preventDefault(); 
    console.log(e.currentTarget.hash);
    let selectedLink = e.currentTarget.hash;
    gsap.to(window, {duration: 2, scrollTo:{y:`${selectedLink}`, offsetY:100 }});
}

closeLinks.forEach((link) => {
link.addEventListener("click", scrollLink);
});
  

})();

// Scroll trigger animation
(function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  gsap.from("#one-trig", {
    scrollTrigger: {
      trigger: "#one-trig",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play reverse play reverse",
      markers: false 
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".newTrig", {
    opacity: 0,
    x: 100,
    duration: 2,
    repeat:-1,
    repeatDelay: 5,
    ease: "power2.out"
  });

  gsap.from(".budsTrig", {
    opacity: 0,
    x: -100,
    duration: 1,
    duration: 2,
    repeat:-1,
    repeatDelay: 5,
    ease: "power2.out"
  });

  gsap.from(".newTrig2", {
    scrollTrigger: {
      trigger: ".newTrig2",
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play reverse play reverse",
      markers: false
    },
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.out"
  });

  gsap.to(".moreTrig", {
    x: "100%",
    duration: 5,
    ease: "linear",
    repeat: -1
  });
  gsap.to(".moreTrig2", {
    x: "-90%",
    duration: 5,
    ease: "linear",
    repeat: -1
  });
  gsap.to(".case3", {
    x: "100%",
    duration: 5,
    ease: "linear",
    repeat: -1
  });

  gsap.from("#properties", {
    scrollTrigger: {
      trigger: ".trig-point",
      start: "top 80%", 
      toggleActions: "play reverse play reverse",
      markers: false
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out"
  });

})();

// Color Triangle Buttons
(() => {
  const earbuds = document.querySelector("#ear-buds");
  const buttons = document.querySelectorAll("#color-btns button");


  function swapColor(e){
    console.log(e.currentTarget.id);
    const selected = e.currentTarget.id;
    earbuds.src =  `images/${selected}.png`
  }

  buttons.forEach(button => {
    button.addEventListener("click", swapColor);
  })

})();

  
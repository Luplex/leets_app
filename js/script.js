

// Les grosses animations peuvent être faites avec un cercle qui a une animation qui se déclenche à un certain point du scroll de la page. Autre, il faut mettre la grande partie en fixed.



//Le curseur animé
var cursor1 = document.getElementById("cursor1");
var cursor2 = document.getElementById("cursor2");
var cursor3 = document.getElementById("cursor3");
var cursor4 = document.getElementById("cursor4");
var cursor5 = document.getElementById("cursor5");

document.onmousemove = function(e){
    cursor1.style.left = (e.pageX - 25) + "px";
    cursor1.style.top = (e.pageY - 25) + "px";
    cursor1.style.display = "block";

    cursor2.style.left = (e.pageX - 25) + "px";
    cursor2.style.top = (e.pageY - 25) + "px";
    cursor2.style.display = "block";

    cursor3.style.left = (e.pageX - 25) + "px";
    cursor3.style.top = (e.pageY - 25) + "px";
    cursor3.style.display = "block";

    cursor4.style.left = (e.pageX - 25) + "px";
    cursor4.style.top = (e.pageY - 25) + "px";
    cursor4.style.display = "block";

    cursor5.style.left = (e.pageX - 25) + "px";
    cursor5.style.top = (e.pageY - 25) + "px";
    cursor5.style.display = "block";
}

//La barre de scroll animé
const body = document.querySelector('body');
const scrollBar = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY / (body.clientHeight - window.innerHeight);
    let scrollPercent = Math.round(scroll * 100);
    scrollBar.style.height = scrollPercent + '%';
})

//Partie GSAP
//Terrain
gsap.registerPlugin(ScrollTrigger);

let avatar1tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#mainHeaderOne",
        // markers:true,
        start: "center 90%",
        // endTrigger: ".terrainMatch",
        end: "bottom",
        id: "avatar1",
        scrub: true,
        pinSpacing: false   
    }
  })

  avatar1tl.to(".avatar1", {
    x: 115,
    y: 50,
    duration: 8,
    delay: 0.1
  })


  let avatar2tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#mainHeaderOne",
        // markers:true,
        start: "top 90%",
        // endTrigger: ".terrainMatch",
        end: "bottom 90%",
        id: "avatar2",
        scrub: true,
        pinSpacing: false   
    }
  })

  avatar2tl.to(".avatar2", {
    x: 10,
    y: -80,
    duration: 8,
    delay: 1.5
  })

  let avatar3tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#mainHeaderOne",
        // markers:true,
        start: "top 45%",
        // endTrigger: ".terrainMatch",
        end: "bottom 20%",
        id: "avatar2",
        scrub: true,
        pinSpacing: false   
    }
  })

  avatar3tl.to(".avatar3", {
    x: -250,
    y: -80,
    duration: 3,
    delay: 1.5
  })


  let avatar4tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#mainHeaderOne",
        // markers:true,
        start: "top 40%",
        // endTrigger: ".terrainMatch",
        end: "bottom",
        id: "avatar4",
        scrub: true,
        pinSpacing: false   
    }
  })

  avatar4tl.to(".avatar4", {
    x: -230,
    y: 85,
    duration: 18,
    delay: 6.5
  })

  let avatar5tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#mainHeaderOne",
        // markers:true,
        start: "top 60%",
        // endTrigger: ".terrainMatch",
        end: "bottom 50%",
        id: "avatar5",
        scrub: true,
        pinSpacing: false   
    }
  })

  avatar5tl.to(".avatar5", {
    x: 250,
    y: 45,
    duration: 5,
    delay: 6.5
  })

  //TerrainMatch

//   let Dotl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#mainHeaderOne",
//         // markers:true,
//         start: "bottom",
//         // endTrigger: ".terrainMatch",
//         end: "bottom 50%",
//         id: "dot",
//         // pin:true 
//     }
//   })

//  Dotl.to(".dot", {
//     opacity:1
//   })

let Dotl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".dot",
      // markers:true,
      start: "top",
      endTrigger: "#mainHeaderOne",
      id: "dot2",
      end: "+=200%",
      scrub: true,
      // pin: true 
  }
})
Dotl2.to(".dot", {
  opacity:1, duration:15,delay:2
})
Dotl2.to(".dot", {
  scale:50, duration:30, delay:2
})

let texttl = gsap.timeline({
  scrollTrigger: {
      trigger: ".dot",
      // markers:true,
      start: "top",
      endTrigger: "#mainHeaderOne",
      id: "titreTerrain",
      end: "+=200%",
      scrub: true,
  }
})


texttl.to(".titreTerrain", {
  opacity:1, duration:15,delay:2
})
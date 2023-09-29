var tl = gsap.timeline({repeat: 3});

gsap.ticker.lagSmoothing(false);

let speed = 1
function pillizco_animation () {

    gsap.to("#slider-item-1", {duration: 0.5 * speed, 'left':'0%', ease:Expo.easeInO, delay:0.0*speed});


    gsap.to("#pellizco-anchor", {duration: 0.0, "opacity": "1", delay:0});

    gsap.to("#pellizco-anchor", {rotate: 180, duration: 1 * speed, ease:Power1.easeInOut});
    gsap.to("#pellizco-anchor", {rotate: 190, duration: 2.5 * speed, ease:Power1.easeOut, delay:1 * speed});
    gsap.to("#pellizco-anchor", {rotate: 360, duration: 0.8 * speed, ease:Power3.easeIn, delay:3 * speed});


    gsap.to("#pellizco", {rotate: 530, duration: 1 * speed,  ease:Power1.easeInOut });
    gsap.to("#pellizco", {rotate: 540, duration: 2.5 * speed,  ease:Power1.easeOut, delay:1 * speed });

    gsap.to("#l1", {duration: 0.3, "opacity": "1", delay:0.4*speed});
    gsap.to("#l1", {rotate: 270, duration: 0.6 * speed, ease:Power1.easeInOut, delay:0.3 * speed});
    gsap.to("#l1", {duration: 0.1, "opacity": "0", delay:0.8*speed});
    gsap.to("#l1", {rotate: 180, duration: 0.0, delay:4*speed});

 
    gsap.to("#l2", {duration: 0.3 * speed, "opacity": "1", delay:0.5 * speed});
    gsap.to("#l2", {rotate: 270, duration: 0.6 * speed, ease:Power1.easeInOut, delay:0.3 * speed});
    gsap.to("#l2", {duration: 0.1 * speed, "opacity": "0", delay:0.8 * speed});
    gsap.to("#l2", {rotate: 180, duration: 0.0, delay:4*speed});


    // gsap.to("#l3", {duration: 0.3 * speed, "opacity": "1", delay:0.5 * speed});
    // gsap.to("#l3", {rotate: 270, duration: 0.6 * speed, ease:Power1.easeInOut, delay:0.3 * speed});
    // gsap.to("#l3", {duration: 0.1, "opacity": "0", delay:0.8*speed});
    // gsap.to("#l3", {rotate: 180, duration: 0.0, delay:4*speed});


    gsap.to("#l5", {duration: 0.2 * speed, "opacity": "1", delay:3.6 * speed});
    gsap.to("#l5", {rotate: 120, duration: 0.6 * speed, ease:Power1.easeInOut, delay:3.5 * speed});
    gsap.to("#l5", {duration: 0.0, "opacity": "0", delay:5*speed});
    gsap.to("#l5", {rotate: 0, duration: 0.0, delay:5*speed});

    gsap.to("#l6", {duration: 0.2 * speed, "opacity": "1", delay:3.6 * speed});
    gsap.to("#l6", {rotate: 120, duration: 0.6 * speed, ease:Power1.easeInOut, delay:3.5 * speed});
    gsap.to("#l6", {duration: 0.0, "opacity": "0", delay:5*speed});
    gsap.to("#l6", {rotate: 0, duration: 0.0, delay:5*speed});
   


    gsap.to(".path-y", {duration: 0.0, "display": "none", delay:1.9 * speed});
    gsap.to(".path-w", {duration: 0.0, "display": "none", delay:1.9 * speed});

    gsap.to("#contorno-a", {duration: 0.0, "display": "block", delay:1.9 * speed});
    gsap.to("#contorno-b", {duration: 0.0, "display": "block", delay:1.9 * speed});
    gsap.to("#contorno-c", {duration: 0.0, "display": "block", delay:1.9 * speed});

    gsap.to("#contorno-a", {duration: 0.0, "display": "none", delay:3.2 * speed});
    gsap.to("#contorno-b", {duration: 0.0, "display": "none", delay:3.2 * speed});
    gsap.to("#contorno-c", {duration: 0.0, "display": "none", delay:3.2 * speed});

    gsap.to(".path-y", {duration: 0.0, "display": "block", delay:3.2 * speed});
    // gsap.to(".path-w", {duration: 0.0, "display": "block", delay:3.2 * speed});


    gsap.to("#pellizco-anchor", {duration: 0.0, "opacity": "0", delay:3.75 * speed});
    gsap.to("#pellizco-anchor", {rotate: 0, duration: 0.0, delay:4 * speed});
    gsap.to("#pellizco", {rotate: 180, duration: 0.0, delay:4 * speed});





  




   
}

function paleta_animation () {

    gsap.to("#slider-item-1", {duration: 0.5 * speed, 'left':'-100%', ease:Expo.easeInO, delay:0.0*speed, onComplete:()=>{
        gsap.to("#slider-item-1", {duration: 0.0 * speed, 'left':'100%', ease:Expo.easeInO, delay:0.0*speed});
  
    }});
    gsap.to("#slider-item-2", {duration: 0.5 * speed, 'left':'0%', ease:Expo.easeInO, delay:0.0*speed});
  


    gsap.to(".paleta-anchor", {duration: 0.0 * speed, 'opacity':'1', delay:0.0*speed});

    gsap.to(".aura-a", {duration: 0.1 * speed, 'opacity': '1', ease:'linear', delay:0.0 * speed});
    gsap.to(".aura-a", {duration: 0.6 * speed, scale: 1.2, ease:Expo.easeInOut, delay:0.0 * speed});
    gsap.to(".aura-a", {duration: 0.6 * speed, 'bottom': '74%', ease:Expo.easeInOut, delay:0.0 * speed});

    
    gsap.to(".aura-b", {duration: 0.1 * speed, 'opacity': '1', ease:'linear', delay:0.2 * speed});
    gsap.to(".aura-b", {duration: 0.6 * speed, scale: 1.4, ease:Expo.easeInOut, delay:0.2 * speed});
    gsap.to(".aura-b", {duration: 0.6 * speed, 'bottom': '65%', ease:Expo.easeInOut, delay:0.2 * speed});

    gsap.to(".aura-c", {duration: 0.1 * speed, 'opacity': '1', ease:'linear', delay:0.3 * speed});
    gsap.to(".aura-c", {duration: 0.6 * speed, scale: 0.9, ease:Expo.easeInOut, delay:0.3 * speed});
    gsap.to(".aura-c", {duration: 0.6 * speed, 'bottom': '55%', ease:Expo.easeInOut, delay:0.3 * speed});


    gsap.to(".aura-d", {duration: 0.1 * speed, 'opacity': '1', ease:'linear', delay:0.2 * speed});
    gsap.to(".aura-d", {duration: 0.6 * speed, scale: 0.5, ease:Expo.easeInOut, delay:0.2 * speed});
    gsap.to(".aura-d", {duration: 0.6 * speed, rotateX: 140, ease:Expo.easeInOut, delay:0.2 * speed});
    gsap.to(".aura-d", {duration: 0.6 * speed, 'top': '53%', ease:Expo.easeInOut, delay:0.2 * speed});

    gsap.to(".aura-e", {duration: 0.1 * speed, 'opacity': '1', ease:'linear', delay:0.3 * speed});
    gsap.to(".aura-e", {duration: 0.6 * speed, scale: 0.3, ease:Expo.easeInOut, delay:0.3 * speed});
    gsap.to(".aura-e", {duration: 0.6 * speed, rotateX: 170, ease:Expo.easeInOut, delay:0.3 * speed});
    gsap.to(".aura-e", {duration: 0.6 * speed, 'top': '63%', ease:Expo.easeInOut, delay:0.3 * speed});


    gsap.to(".aura-f", {duration: 0.1 * speed, 'opacity': '1', ease:'linear', delay:0.4 * speed});
    gsap.to(".aura-f", {duration: 0.6 * speed, scale: 0.4, ease:Expo.easeInOut, delay:0.4 * speed});
    gsap.to(".aura-f", {duration: 0.6 * speed, rotateX: 180, ease:Expo.easeInOut, delay:0.4 * speed});
    gsap.to(".aura-f", {duration: 0.6 * speed, 'top': '70%', ease:Expo.easeInOut, delay:0.4 * speed});


 
    gsap.to(".paleta-frame-a", {duration: 0.0 * speed, 'opacity': '1', ease:'linear', delay:0.1 * speed});
    gsap.to(".paleta-frame-a", {duration: 0.0 * speed, 'opacity': '0', ease:'linear', delay:0.3 * speed});

    gsap.to(".paleta-frame-b", {duration: 0.0 * speed, 'opacity': '1', ease:'linear', delay:0.4 * speed});
    gsap.to(".paleta-frame-b", {duration: 0.0 * speed, 'opacity': '0', ease:'linear', delay:0.6 * speed});

    gsap.to(".paleta-frame-b", {duration: 0.0 * speed, 'opacity': '1', ease:'linear', delay:0.7 * speed});
    gsap.to(".paleta-frame-b", {duration: 0.0 * speed, 'opacity': '0', ease:'linear', delay:0.9 * speed});
    gsap.to("#paleta        ", {duration: 0.0 * speed, 'opacity': '1', ease:'linear', delay:1 * speed});

    gsap.to("#paleta", {duration: 0.0 * speed, 'filter': 
    `drop-shadow(4px 4px 3px rgba(255, 255, 0,1)) 
    drop-shadow(-4px -4px 3px rgba(255, 255, 0,1)) 
    drop-shadow(0px 0px 3px rgba(255, 255, 0,1)) `, 
    ease:'linear', delay:1.1 * speed});

    gsap.to("#paleta", {duration: 0.0 * speed, 'filter': '',ease:'linear', delay:1.3 * speed});

    gsap.to("#paleta", {duration: 0.0 * speed, 'filter': 
    `drop-shadow(4px 4px 3px rgba(255, 255, 255,1)) 
    drop-shadow(-4px -4px 3px rgba(255, 255, 255,1)) 
    drop-shadow(0px 0px 3px rgba(255, 255, 255,1)) `, 
    ease:'linear', delay:1.4 * speed});
  
    gsap.to(".aura-a", {duration: 0.5 * speed, scale: 1.8, ease:Expo.easeInOut, delay:1.4 * speed});
    gsap.to(".aura-a", {duration: 0.4 * speed, 'opacity': '0', ease:'linear', delay:1.4 * speed});

    gsap.to(".aura-b", {duration: 0.5 * speed, scale: 2.2, ease:Expo.easeInOut, delay:1.5 * speed});
    gsap.to(".aura-b", {duration: 0.4 * speed, 'opacity': '0', ease:'linear', delay:1.5 * speed});

    gsap.to(".aura-c", {duration: 0.5 * speed, scale: 1.3, ease:Expo.easeInOut, delay:1.4 * speed});
    gsap.to(".aura-c", {duration: 0.4 * speed, 'opacity': '0', ease:'linear', delay:1.4 * speed});

    gsap.to(".aura-d", {duration: 0.5 * speed, scale: 0.9, ease:Expo.easeInOut, delay:1.5 * speed});
    gsap.to(".aura-d", {duration: 0.4 * speed, 'opacity': '0', ease:'linear', delay:1.5 * speed});

    gsap.to(".aura-e", {duration: 0.5 * speed, scale: 0.7, ease:Expo.easeInOut, delay:1.6 * speed});
    gsap.to(".aura-e", {duration: 0.4 * speed, 'opacity': '0', ease:'linear', delay:1.6 * speed});

    gsap.to(".aura-f", {duration: 0.5 * speed, scale: 1, ease:Expo.easeInOut, delay:1.6 * speed});
    gsap.to(".aura-f", {duration: 0.4 * speed, 'opacity': '0', ease:'linear', delay:1.6 * speed});



    gsap.to(".paleta-anchor", {duration: 1.4 * speed, rotate:-40,ease:Power4.easeOut, delay:1.6 * speed, onComplete:()=>{
        gsap.to(".paleta-anchor", {duration: 1.2 * speed, rotate:220,ease:Power4.easeIn});
        gsap.to(".paleta-anchor", {duration: 0.3 *speed, 'opacity':'0', delay:1 * speed});
        gsap.to(".paleta-anchor", {duration: 0.0 * speed, rotate:45, delay:1.5*speed});

        //RESET AUREOLAS//
        gsap.to(".aura-a", {duration: 0.0 * speed, 'bottom': '0%', ease:Expo.easeInOut, delay:0.0 * speed});
        gsap.to(".aura-a", {duration: 0.0 * speed, scale: 0.2, delay:0.0 * speed});
        gsap.to(".aura-b", {duration: 0.0 * speed, 'bottom': '0%', ease:Expo.easeInOut, delay:0.0 * speed});
        gsap.to(".aura-b", {duration: 0.0 * speed, scale: 0.2, delay:0.0 * speed});
        gsap.to(".aura-c", {duration: 0.0 * speed, 'bottom': '0%', ease:Expo.easeInOut, delay:0.0 * speed});
        gsap.to(".aura-c", {duration: 0.0 * speed, scale: 0.2, delay:0.0 * speed});
        gsap.to(".aura-d", {duration: 0.0 * speed, 'top': '0%', ease:Expo.easeInOut, delay:0.0 * speed});
        gsap.to(".aura-d", {duration: 0.0 * speed, scale: 0.2, delay:0.0 * speed});
        gsap.to(".aura-e", {duration: 0.0 * speed, 'top': '0%', ease:Expo.easeInOut, delay:0.0 * speed});
        gsap.to(".aura-e", {duration: 0.0 * speed, scale: 0.2, delay:0.0 * speed});
        gsap.to(".aura-f", {duration: 0.0 * speed, 'top': '0%', ease:Expo.easeInOut, delay:0.0 * speed});
        gsap.to(".aura-f", {duration: 0.0 * speed, scale: 0.2, delay:0.0 * speed});

        gsap.to("#paleta", {duration: 0.0 *speed, 'opacity':'0', delay:1.5 * speed});

    }});

    gsap.to("#l7", {duration: 0.0, "opacity": "1", delay:4*speed});
    gsap.to("#l7", {rotate: 140, duration: 0.6 * speed, ease:Power1.easeOut, delay:4 * speed});
    gsap.to("#l7", {duration: 0.1, "opacity": "0", delay:4.2*speed});
    gsap.to("#l7", {rotate: 0, duration: 0.0, delay:5*speed});
  


    gsap.to("#l8", {duration: 0.0, "opacity": "1", delay:4*speed});
    gsap.to("#l8", {rotate: 320, duration: 0.4 * speed, ease:Power1.easeOut, delay:4 * speed});
    gsap.to("#l8", {duration: 0.1, "opacity": "0", delay:4.2*speed});
    gsap.to("#l8", {rotate: 160, duration: 0.0, delay:5*speed});

}

function banderilla_animation(){

    gsap.to("#slider-item-2", {duration: 0.5 * speed, 'left':'-100%', ease:Expo.easeInO, delay:0.0*speed, onComplete:()=>{
        gsap.to("#slider-item-2", {duration: 0.0 * speed, 'left':'100%', ease:Expo.easeInO, delay:0.0*speed});
    }});
    gsap.to("#slider-item-3", {duration: 0.5 * speed, 'left':'0%', ease:Expo.easeInO, delay:0.0*speed});

    gsap.to("#banderilla-path-y", {duration: 0.0 * speed, 'opacity':'1', delay:0.0*speed});
    gsap.to("#banderilla", {duration: 0.2 * speed, 'opacity':'1', delay:0.7*speed});


    gsap.to(".banderilla-anchor", {duration: 1 * speed, rotate:420,ease:Power1.easeOut, delay:0.7*speed});
    gsap.to(".banderilla-anchor", {duration: 1.5 * speed, rotate:460,ease:Power1.easeOut, delay:1*speed});
    gsap.to(".banderilla-anchor", {duration: 0.5 * speed, rotate:860,ease:Power4.easeIn, delay:2.5*speed});
    gsap.to(".banderilla-anchor", {duration: 0.1 * speed, 'opacity':'0', delay:2.9*speed});



    gsap.to("#l9", {duration: 0.0, "opacity": "1", delay:0.8*speed});
    gsap.to("#l9", {rotate: 10, duration: 0.3 * speed, ease:Power1.easeOut, delay:0.8 * speed});
    gsap.to("#l9", {duration: 0.2, "opacity": "0", delay:0.9*speed});
   

    gsap.to("#l10", {duration: 0.0, "opacity": "1", delay:0.8*speed});
    gsap.to("#l10", {rotate: 190, duration: 0.3 * speed, ease:Power1.easeOut, delay:0.8 * speed});
    gsap.to("#l10", {duration: 0.2, "opacity": "0", delay:0.9*speed});

   


    gsap.to("#l9", {duration: 0.0, "opacity": "1", delay:2.7*speed});
    gsap.to("#l9", {rotate: 120, duration: 0.6 * speed, ease:Power3.easeIn, delay:2.3 * speed});
    gsap.to("#l9", {duration: 0.2, "opacity": "0", delay:2.8*speed});

    gsap.to("#l10", {duration: 0.0, "opacity": "1", delay:2.7*speed});
    gsap.to("#l10", {rotate: 280, duration: 0.6 * speed, ease:Power3.easeIn, delay:2.3 * speed});
    gsap.to("#l10", {duration: 0.2, "opacity": "0", delay:2.8*speed});



    

    gsap.to("#l9", {rotate: -60, duration: 0.0 * speed, delay:3.5 * speed});
    gsap.to("#l10", {rotate: 120, duration: 0.0 * speed, delay:3.5 * speed});


    gsap.to("#banderilla-path-y", {duration: 0.0 * speed, 'opacity':'0', delay:3.5*speed});
    gsap.to("#banderilla", {duration: 0.0 * speed, 'opacity':'0', delay:3.5*speed});
    gsap.to(".banderilla-anchor", {duration: 0.0 * speed, 'opacity':'1', delay:3.5*speed});
    gsap.to(".banderilla-anchor", {duration: 0.0 * speed, rotate:140, delay:3.5*speed});

    gsap.to("#slider-item-3", {duration: 0.5 * speed, 'left':'-100%', ease:Expo.easeInO, delay:3.1*speed, onComplete:()=>{
        gsap.to("#slider-item-3", {duration: 0.0 * speed, 'left':'100%', ease:Expo.easeInO, delay:0.0*speed});
    }});



 


    

}

function cintillo_animation(speed){

    gsap.to("#cintillo-item-a", {duration: 3 * speed, 'right':'100%', ease:'none', onComplete:()=>{
        gsap.to("#cintillo-item-a", {duration: 0  * speed, 'right':'-100%', ease:'none' });
    } });
    gsap.to("#cintillo-item-b", {duration: 3 * speed, 'right':'0%', ease:'none', onComplete:()=>{}});
    gsap.to("#cintillo-item-b", {duration: 3 * speed, 'right':'100%', ease:'none', delay:3 * speed, onComplete:()=>{
        gsap.to("#cintillo-item-b", {duration: 0 * speed, 'right':'-100%', ease:'none'});
    } });
    gsap.to("#cintillo-item-a", {duration: 3 * speed, 'right':'0%', ease:'none',  delay:3 * speed, onComplete:()=>{ }});

    ///
    gsap.to("#cintillo-item-a-text", {duration: 3 * speed, 'left':'100%', ease:'none', onComplete:()=>{
        gsap.to("#cintillo-item-a-text", {duration: 0  * speed, 'left':'-100%', ease:'none' });
    } });
    gsap.to("#cintillo-item-b-text", {duration: 3 * speed, 'left':'0%', ease:'none', onComplete:()=>{}});
    gsap.to("#cintillo-item-b-text", {duration: 3 * speed, 'left':'100%', ease:'none', delay:3 * speed, onComplete:()=>{
        gsap.to("#cintillo-item-b-text", {duration: 0 * speed, 'left':'-100%', ease:'none'});
    } });
    gsap.to("#cintillo-item-a-text", {duration: 3 * speed, 'left':'0%', ease:'none',  delay:3 * speed, onComplete:()=>{ }});
  
}





const init = () => {
    pillizco_animation()

    setTimeout(()=>{
        paleta_animation()
    }, 3600 * speed)

    setTimeout(()=>{
    
        banderilla_animation()
    }, 7700 * speed)

}


init();
setInterval(()=>{
    init()
}, 11000 * speed)

cintillo_animation(3);
setInterval(()=>{
    cintillo_animation(3)
}, 7000 * 3)

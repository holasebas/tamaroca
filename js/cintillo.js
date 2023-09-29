
gsap.ticker.lagSmoothing(false);



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
    // gsap.to("#cintillo-item-a-text", {duration: 3 * speed, 'left':'100%', ease:'none', onComplete:()=>{
    //     gsap.to("#cintillo-item-a-text", {duration: 0  * speed, 'left':'-100%', ease:'none' });
    // } });
    // gsap.to("#cintillo-item-b-text", {duration: 3 * speed, 'left':'0%', ease:'none', onComplete:()=>{}});
    // gsap.to("#cintillo-item-b-text", {duration: 3 * speed, 'left':'100%', ease:'none', delay:3 * speed, onComplete:()=>{
    //     gsap.to("#cintillo-item-b-text", {duration: 0 * speed, 'left':'-100%', ease:'none'});
    // } });
    // gsap.to("#cintillo-item-a-text", {duration: 3 * speed, 'left':'0%', ease:'none',  delay:3 * speed, onComplete:()=>{ }});
  
}






cintillo_animation(3);
setInterval(()=>{
    cintillo_animation(3)
}, 7000 * 3)

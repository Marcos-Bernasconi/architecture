 
 
let startAnimation = gsap.timeline({defaults:{opacity:0,ease: "power3.out",duration:1.5}});

startAnimation.from(".hero h1",{
x: -10, 

})

.from(".hero h3",{
x: -10, 

},"<+=0.5")


.from(".hero button",{
    y: 10, 
},"<=0.5")

.from("video",{
    duration: 2,  
  },"<+=1")



let mm = gsap.matchMedia();

mm.add("(min-width:1300px)",()=>{


    let animation = gsap.timeline();


    // animation.from("video",{ 
    //   yPercent:-100,duration: 2, ease: "power3.out"});
    
    //   animation.pause();
    
    // let video = document.querySelector("video");
    
    // video.oncanplay = ()=>{animation.resume();console.log("Animation")};
 
    // return () => { 
    //   };
});
var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a += Math.floor(Math.random()*40)
        if(a<100){
            document.querySelector(".lodder h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector(".lodder h1").innerHTML = a+"%"
        }
    },150)
}

tl.to(".lodder h1",{
    delay:0.1,
    duration:1,
    
    onStart:time()
})
tl.to(".lodder",{
    top:"-100vh",
    delay:0.1,
    duration:1,
    
})







tl.to(".con",{
    y:-"-3",
    opacity:1,
    duration:2,
    delay:0.3,
    
    
},'a')

tl.to(".pgae1-end",{
        
    opacity:1,
    duration:2,
    delay:0.4,
    
   
    
},'a')
tl.to(".main-border1s",{
        
    opacity:1,
    duration:2,
    delay:0.4,
    
   
    
},'a')

tl.to(".main-page",{
        
    opacity:1,
    duration:2,
    delay:0.4,
    
   
    
},'a')

tl.to("#main-border",{
    backgroundColor :"#6943D0",
    duration:0.5,
    height:"95",
    scrollTrigger:{
        trigger:"#main-border",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -10%",
        scrub:5,

        
    }
    
    })




    

    

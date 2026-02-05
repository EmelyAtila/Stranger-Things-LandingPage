// Scrool Suave-> Animações -> Animações com Rolagem
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);


ScrollSmoother.create({
smooth: 2,
effects: true
});

// Animações da Página
function animationPag(){

// Animação do Hero
gsap.from(".hero",{
    opacity: 0,
    duration: 1,
})

gsap.from("picture:nth-child(2)",{
    y:80,
    duration: 1,
})

gsap.from("picture:nth-child(1)",{
    y:-80,
    duration: 1,
})

// Animação dos Cards
gsap.from(".card",{
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".cards",
        start: "top 80%", // 0% = top
        end: "100% 70%",
        scrub: true
    }
})

gsap.from(".section-list ul li ",{
    opacity: 0,
    x:40,
    filter: "blur(10px)",
    stagger: .09,
    scrollTrigger:{
        trigger: ".section-list ul",
        start: "top 80%",
        end: "100% 50%",
        scrub: 2
    }
})

//Animações footer


gsap.from("footer",{
    y: "-30%",
    immediateRender: false,
    scrollTrigger:{
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }
})

// Letras surgindo

const  grupSplitText = document.querySelectorAll(".text-split")

grupSplitText.forEach(text => {
    const splitText = SplitText.create(text,{
        type:"lines, words, chars",
        mask: "lines"
    });
    
    gsap.from(splitText.chars,{
        y: 40,
        opacity: 0,
        duration: .3,
        stagger: .03,
        scrollTrigger:{
            trigger: text,
        }
    });
});

}

// PreLoader 

const tl = gsap.timeline({
    onComplete(){
        animationPag(),
        gsap.to("#preLoader",{
            opacity: 0,
            display:"none"
            
        })
    }
});


tl.to("#preLoader path",{
    duration: 1.2,
    strokeDashoffset: 0
});

tl.to("#preLoader path",{
    fill: "rgb(168,19,19)",
    duration: 1,
    strokeDashoffset: 0
})
// script du système solaire autour de la carte d afrique
        gsap.to(".Afrique", {
            scale: 1.1,
            duration: -1,
            repeat: 3,
            yoyo: true,
            ease: "power1.inOut"
        });

        gsap.to("#mercure-orbit", {
            rotation: 360,
            duration: 5,
            repeat: -1,
            ease: "none" 
        });

        gsap.to("#venus-orbit", {
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: "none"
        });

        gsap.to("#terre-orbit", {
            rotation: 360,
            duration: 12,
            repeat: -1,
            ease: "none"
        });

        gsap.to("#mars-orbit", {
            rotation: 360,
            duration: 18,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".planete", {
            rotation: 360,
            duration: 3,
            repeat: -1,
            ease: "none",
            stagger: 0.5 
            })
            // // tumeline
            // let tl = gsap.timeline()
            // tl.to(" .class1",{rotation:20, repeat:-1,duration:1 })
            // tl.to(".class2",{ y:200,rotation:360, repeat:-1, borderRauis:70, backgroundColor:"blue",ease:"bounce.out",yoyo:true,duration:1 })
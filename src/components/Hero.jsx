import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState,useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {

{/* This is video condition code */}
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  )
  const handlevideoSrcSet =  () => {
    if (window.innerWidth < 760){
      setvideoSrc(smallHeroVideo)
    }
    else {
      setvideoSrc(heroVideo)
    }
  }

{/* This is effect GSAP code  for resizing */}
  useEffect(() => {
    window.addEventListener('resize', handlevideoSrcSet);
    return () => {
      window.removeEventListener('resize',setvideoSrc)
    }
  },[])

{/* This is GSAP code  for animation */}
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", {opacity: 1, y: -50, delay:2 })
  }, []);

  return (

    <section className="w-full nav-height bg-black relative">

{/* This is title code */}
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone15 Pro
        </p>

 {/* This is video code */}
        <div className="md:w-10/12 w-9/12">
          <video  className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

{/* This is the BUY Button code */}
      <div 
      id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>

    </section>
  );
};

export default Hero;

import Image from "next/image";
import Gradient from "./Gradient";
import HeroImage from "@/assets/home-hero.jpg";
import Buttons from "./Buttons";
import Container from "@/components/ui/Container";


export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex-center flex-col text-light text-center">
      <Gradient />
      <Gradient />
      
      <video src="/hero-video.mp4" muted autoPlay loop className="absolute inset-0 h-full w-full object-cover -z-20"></video>
      {/* <Image src={HeroImage}  
        placeholder="blur"
        alt="alem travels" 
        layout="fill" style={{ objectFit: "cover" }} className="-z-20" 
      /> */}

      <h1 className="text-5xl lg:text-7xl xl:text-8xl">Alem Travels</h1>
      <p className="lg:text-lg xl:text-xl">A journey of a thousand miles begins with a single step</p>
      <Container className={`flex justify-center`}>

        <Buttons />
      </Container>
    </section>
  )
}
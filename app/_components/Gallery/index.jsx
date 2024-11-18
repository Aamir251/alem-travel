import Image from "next/image";
import BlackLogo from "@/assets/black-logo.png"
import ImageOne from "@/assets/gallery/one.jpeg"
import ImageTwo from "@/assets/gallery/two.jpeg"
import ImageThree from "@/assets/gallery/three.jpeg"
import ImageFour from "@/assets/gallery/four.jpeg"
import ImageFive from "@/assets/gallery/five.jpeg"
import ImageSix from "@/assets/gallery/six.jpeg"
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function Gallery() {
  return (
    <Container className="relative">
      <Image src={BlackLogo} width={160} height={120}
        style={{ objectFit: "contain" }}
        alt="alem travel gallery"
        className="mx-auto translate-x-2"
      />

      <div className="grid lg:grid-cols-2 gap-x-7 gap-y-8 mt-10">
        <figure className="relative w-full h-96 lg:h-[480px] rounded-xl overflow-hidden">
          <Image src={ImageSix} layout="fill" style={{ objectFit: "cover" }} className="transition duration-500 hover:scale-110" alt="travel with us gallery" />
        </figure>
        <figure className="relative w-full h-96 lg:h-[480px] rounded-xl overflow-hidden">
          <Image src={ImageTwo} layout="fill" style={{ objectFit: "cover" }} className="transition duration-500 hover:scale-110" alt="travel with us gallery" />
        </figure>
        <figure className="relative w-full h-96 lg:h-[480px] rounded-xl overflow-hidden">
          <Image src={ImageOne} layout="fill" style={{ objectFit: "cover" }} className="transition duration-500 hover:scale-110" alt="travel with us gallery" />
        </figure>
        
        <figure className="relative w-full h-96 lg:h-[480px] rounded-xl overflow-hidden">
          <Image src={ImageFive} layout="fill" style={{ objectFit: "cover" }} className="transition duration-500 hover:scale-110" alt="travel with us gallery" />
        </figure>
        <figure className="relative w-full h-96 lg:h-[480px] rounded-xl overflow-hidden">
          <Image src={ImageThree} layout="fill" style={{ objectFit: "cover" }} className="transition duration-500 hover:scale-110" alt="travel with us gallery" />
        </figure>
        <figure className="relative w-full h-96 lg:h-[480px] rounded-xl overflow-hidden">
          <Image src={ImageFour} layout="fill" style={{ objectFit: "cover" }} className="transition duration-500 hover:scale-110" alt="travel with us gallery" />
        </figure>
        

      </div>

      <div className="mt-10 flex-center">
        <Button className={`rounded-md`} >Book Now</Button>
      </div>
    </Container>
  )
}
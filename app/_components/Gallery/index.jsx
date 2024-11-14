import Image from "next/image";
import BikeLogo from "@/assets/bike-logo.png"
import ImageOne from "@/assets/gallery-one.png"
import ImageTwo from "@/assets/gallery-two.png"
import ImageThree from "@/assets/gallery-three.png"
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function Gallery() {
  return (
    <Container className="relative">
      <Image src={BikeLogo} width={100} height={120}
        style={{ objectFit: "contain" }}
        alt="travel with us gallery"
        className="lg:absolute left-1/2 lg:-translate-x-1/2 -top-10 mx-auto"
      />

      <div className="grid lg:grid-cols-3 gap-x-10 gap-y-8 mt-10 lg:mt-0">
        <figure className="relative w-full h-96 lg:h-[480px] rounded-xl overflow-hidden">
          <Image src={ImageOne} layout="fill" style={{ objectFit: "cover" }} alt="travel with us gallery" />
        </figure>
        <figure className="relative w-full h-96 lg:h-[480px] lg:translate-y-32 rounded-xl overflow-hidden">
          <Image src={ImageTwo} layout="fill" style={{ objectFit: "cover" }} alt="travel with us gallery" />
        </figure>
        <figure className="relative w-full h-96 lg:h-[480px] rounded-xl overflow-hidden">
          <Image src={ImageThree} layout="fill" style={{ objectFit: "cover" }} alt="travel with us gallery" />
        </figure>

      </div>

      <div className=" translate-y-10 lg:translate-y-40 flex-center">
        <Button variant={"primary"} className={`rounded-md`} >Book Now</Button>
      </div>
    </Container>
  )
}
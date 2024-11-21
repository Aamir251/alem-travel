import Image from "next/image";
import BlackLogo from "@/assets/black-logo.png"
import Container from "@/components/ui/Container";

import "swiper/css";
import 'swiper/css/navigation';


import Dochula from "./Dochula";
import Paro from "./Paro";
import { Suspense } from "react";
import SkeletonLoaderGallery from "@/components/ui/SkeletonLoaderGallery";



export default function Gallery() {
  return (
    <Container className="relative">
      <Image src={BlackLogo} width={160} height={120}
        style={{ objectFit: "contain" }}
        alt="alem travel gallery"
        className="mx-auto translate-x-2"
      />

      <div className="space-y-10">

        <Suspense fallback={SkeletonLoaderGallery}>
          <Dochula />
        </Suspense>

        <Suspense fallback={SkeletonLoaderGallery}>
          <Paro />
        </Suspense>

      </div>
      {/* <div className="grid lg:grid-cols-2 gap-x-7 gap-y-8 mt-10">
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


      </div> */}

      
    </Container>
  )
}
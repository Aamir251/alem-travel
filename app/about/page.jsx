import Image from "next/image"
import MainLogo from "@/assets/group-logo.png"
import Container from "@/components/ui/Container"

import MainImage from "@/assets/gallery/four.jpeg"


const AboutUsPage = () => {
  return (
    <main>
      <Container className={`mt-10`}>
        <Image
          src={MainLogo} alt="alem travel logo"
          width={320} height={250}
          style={{ objectFit: "contain" }}
          className="mx-auto"
        />


        <article className="mt-10 grid grid-cols-2" >
          <div>
            <h5 className="uppercase tracking-widest font-federo text-grey-one opacity-70 text-sm">alem travel</h5>
            <h1 className="text-6xl uppercase mt-2">About Us</h1>

            <div className="mt-3 space-y-3 text-grey-one w-11/12">
              <p>
                Located at the vibrant heart of Phuentsholing, you are invited to the finest address in the city. ALEM Resort is decorated in an exquisite and elegant facade, so much that it will be a conspicuous edifice in the city where it is located.
              </p>


              <p>
                Alem Resort provides a conductive spot for our valued guests to take a break from their busy schedule, to a place where they can find comfort and unlimited luxury. Alem Resort epitomizes understated luxury and gracious service in an intimate sanctuary.Offering our guests an experience that is distinctively inspiring with the touch of pure nature.
              </p>
            </div>
          </div>

          <figure className="relative h-full w-full min-h-[500px]">
            <Image 
              src={MainImage} alt="alem travel about us image" 
              layout="fill" className="rounded-md" 
              style={{ objectFit : "cover"}}
            />
          </figure>
        </article>
      </Container>
    </main>
  )
}

export default AboutUsPage
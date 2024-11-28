import Image from "next/image"
import MainLogo from "@/assets/group-logo.png"
import Container from "@/components/ui/Container"

import AboutUsImage from "@/assets/about-us.jpeg"
import FounderImage from "@/assets/founder.jpeg"
import InstagramQR from "@/assets/instagram.jpeg";
import InstagramIcon from "@/assets/instagram-icon.svg"



import "./_styles.css"


export const metadata = {
  title: 'About Us',
}



const AboutUsPage = () => {
  return (
    <>
      <main className="pb-10">
        <Container className={`mt-10`}>
          {/* <Image
            src={MainLogo} alt="alem travel logo"
            width={320} height={250}
            style={{ objectFit: "contain" }}
            className="mx-auto hidden lg:block"
          /> */}


          <article className="mt-10 grid gap-y-10 lg:grid-cols-2 text-center lg:text-left" >
            <div>
              <h5 className="uppercase tracking-widest font-federo text-grey-one opacity-70 text-sm">alem travel</h5>
              <h1 className="text-4xl lg:text-6xl uppercase mt-2">About Us</h1>

              <div className="mt-3 text-grey-one lg:w-10/12 font-federo">


                <div className="space-y-3 mt-5">
                  <p>
                    Alem Travel, established in 2024, we are a travel company registered under Department of tourism.
                  </p>


                  <p>
                    Our founder Mr. Kuldeep Ghalley who is Bike enthusiast launched the company for all the motorbiker wishing to ride Bhutan. The feeling when you ride in bhutan is no other feeling. You will feel free from the world, you will feel unstoppable, riding with passion and joy.
                  </p>

                  <p>So get ready to explore Bhutan like never before!</p>

                  <div>
                    <p>Alem Travel</p>
                    <p>Let the adventure begin!</p>
                  </div>
                </div>

                <div className="mt-5">
                  <h2 className="text-3xl">Founder</h2>
                  <h3 className="mt-1">Name: Kuldeep Ghalley</h3>
                  <h6 className="text-sm">Founder of &quot;ALEM Travel&quot;</h6>

                  <Image
                    src={InstagramQR}
                    alt="instagram qr"
                    width={150}
                    height={150}
                    className="mx-auto mt-2 lg:ml-0 lg:-translate-x-2"
                  />
                </div>
              </div>
            </div>

            <figure className="relative">
              <Image
                src={AboutUsImage} alt="alem travel about us image"
                className="rounded-md about-us-image"
                height={300}
                width={400}
                style={{ objectFit: "cover" }}
              />

              <Image
                src={FounderImage}
                alt="founder image"
                width={140}
                height={140}
                className="rounded-md absolute top-0 right-0"
              />
            </figure>
          </article>
        </Container>
      </main>

    </>
  )
}

export default AboutUsPage
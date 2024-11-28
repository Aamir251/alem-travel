import Container from "@/components/ui/Container"
import Link from "next/link"
import PhoneIcon from "@/assets/phone-icon.svg"
import EmailIcon from "@/assets/email-icon.svg"
import WebIcon from "@/assets/web-icon.svg"
import Image from "next/image"


export const metadata = {
  title: 'Contact Us',
}



export default function ContactUsPage() {
  return (
    <main>
      <Container className={"mt-20 text-center lg:text-left"}>
        <h1 className="text-4xl lg:text-5xl text-center">Contact Us</h1>

        <div className="space-y-12 mt-14 flex flex-col items-center max-w-md mx-auto bg-gray-100/50 px-6 py-10 rounded-lg">
          <Link href={"mailto:alembhutantravel@gmail.com"} className="grid lg:grid-cols-[auto_1fr] gap-x-3 gap-y-3 items-center w-full contact-item">
            <figure className="bg-gray-100 w-max rounded-full p-3 mx-auto">
              <Image src={EmailIcon} width={45} height={45} alt="email" />
            </figure>
            <div>
              <h5 className="text-xl font-inter font-medium">Email</h5>
              <p >alembhutantravel@gmail.com</p>
            </div>
          </Link>

          <Link href={"https://www.alemtravel.bt/"} className="grid lg:grid-cols-[auto_1fr] gap-x-3 gap-y-3 items-center w-full contact-item">
            <figure className="bg-gray-100 w-max rounded-full p-3 mx-auto">
              <Image src={WebIcon} width={45} height={45} alt="website" />
            </figure>
            <div>
              <h5 className="text-xl font-inter font-medium">Website</h5>
              <p>https://www.alemtravel.bt/</p>
            </div>
          </Link>

          <Link href={"tel:17254444"} className="grid lg:grid-cols-[auto_1fr] gap-x-3 gap-y-3 items-center w-full contact-item">
            <figure className="bg-gray-100 w-max rounded-full p-3 mx-auto">
              <Image src={PhoneIcon} width={45} height={45} alt="phone call" />
            </figure>
            <div>
              <h5 className="text-xl font-inter font-medium">Phone</h5>
              <p>17254444</p>
            </div>
          </Link>
        </div>
      </Container>
    </main>
  )
}
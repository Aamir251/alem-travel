import Image from "next/image";
import CalendarImage from "@/assets/calendar.png"
import Button from "@/components/ui/Button";
import ChatOnWhatsAppImage from "@/assets/chat-on-whatsapp.png"


export default function BookingSystem() {
  return (
    <div className="drop-shadow-primary px-5 py-7 bg-white h-max w-full min-w-[300px] space-y-3 text-center">
      <h3 className="text-xl">Book Now</h3>

      <h5 className="text-lg">Choose Date</h5>
      <Image
        src={CalendarImage}
        alt="calendar image"
        width={300}
        height={400}
        style={{ objectFit : "contain"}}
      />

      <Button variant={'primary'} className={`font-federo w-full rounded-xl text-lg`}>Next</Button>

      <Image
        src={ChatOnWhatsAppImage}
        alt="calendar image"
        width={180}
        height={38}
        style={{ objectFit : "contain"}}
        className="mx-auto"
      />
    </div>
  )
}

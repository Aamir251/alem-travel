"use client";

import Image from "next/image";

import ChatOnWhatsAppImage from "@/assets/chat-on-whatsapp.png"

import DatePicker from "./DatePicker";
import { useState } from "react";
import Button from "@/components/ui/Button";


export default function BookingSystem() {

  const [ selectedDate, setSelectedDate ] = useState(new Date());


  return (
    <div className="drop-shadow-primary px-5 py-7 bg-white h-max w-full min-w-[320px] space-y-3 text-center">
      <h3 className="text-xl">Book Now</h3>

      <h5 className="text-lg">Choose Date</h5>


      <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />

      <Button className={`font-federo w-full rounded-xl text-lg`}>Next</Button>

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

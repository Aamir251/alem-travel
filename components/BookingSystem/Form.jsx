"use client";

import { useState } from "react";
import { bookingAction } from "./action";
import SubmitButton from "./SubmitButton";



const Form = ({ selectedDate, showSuccessMessage }) => {

  const [ isSuccess, setIsSuccess ] = useState(false)

  const formAction = async (formData) => {
    
    const { error, success } =  await bookingAction(formData)

    if (error) {
      alert("Failed to Submit")
      return
    }

    // successful submission

    showSuccessMessage()
  }
  return (
    <>
      <form className="text-left space-y-4" action={formAction}>

        <div className="space-y-1.5">
          <label htmlFor="full-name">Full Name</label>
          <input
            name="full-name"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            name="phone-number"
            placeholder="Full Name"
            required
          />
        </div>

        <input type="text" name="booking-date" aria-hidden hidden defaultValue={selectedDate} />

        <SubmitButton />
      </form>
    </>
  )
}

export default Form
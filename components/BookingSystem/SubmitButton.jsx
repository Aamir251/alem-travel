"use client";

import { useFormStatus } from "react-dom"
const SubmitButton = () => {
  const { pending } = useFormStatus()


  return (
    <div>
      <button 
        disabled={pending} 
        className={`btn-primary w-full font-federo rounded-md ${pending ? "cursor-wait" : "cursor-pointer"}`} 
        type="submit"
      >
        {pending ? "Please Wait..." : "Submit"}
      </button>
    </div>
  )
}

export default SubmitButton
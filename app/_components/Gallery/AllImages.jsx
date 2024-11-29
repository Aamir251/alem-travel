
import DochulaOne from "@/assets/dochula/one.jpeg"
import DochulaTwo from "@/assets/dochula/two.jpeg"
import DochulaThree from "@/assets/dochula/three.jpeg"
import DochulaFour from "@/assets/dochula/four.jpeg"
import DochulaFive from "@/assets/dochula/five.jpeg"

import ParoOne from "@/assets/paro/one.jpeg"
import ParoTwo from "@/assets/paro/two.jpeg"
import ParoThree from "@/assets/paro/three.jpeg"
import ParoFour from "@/assets/paro/four.jpeg"



import SliderWrapper from "./SliderWrapper";



export default function AllImages() {
  return (
    <div>
      <SliderWrapper
        placeName={""}
        images={[
          DochulaOne,
          DochulaTwo,
          DochulaThree,
          DochulaFour,
          DochulaFive,
          ParoOne,
          ParoTwo,
          ParoThree,
          ParoFour,
        ]}
      />
    </div>
  )
}
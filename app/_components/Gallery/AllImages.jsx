
import ImageOne from "@/assets/gallery/one.jpeg"
import ImageTwo from "@/assets/gallery/two.jpeg"
import ImageThree from "@/assets/gallery/three.jpeg"
import ImageFour from "@/assets/gallery/four.jpeg"
import ImageFive from "@/assets/gallery/five.jpeg"

import ImageSix from "@/assets/gallery/six.jpeg"
import ImageSeven from "@/assets/gallery/seven.jpeg"
import ImageEight from "@/assets/gallery/eight.jpeg"
import ImageNine from "@/assets/gallery/nine.jpeg"
import ImageTen from "@/assets/gallery/ten.jpeg"
import ImageEleven from "@/assets/gallery/eleven.jpeg"
import ImageTwelve from "@/assets/gallery/twelve.jpeg"
import ImageThirteen from "@/assets/gallery/thirteen.jpeg"
import ImageFourteen from "@/assets/gallery/fourteen.jpeg"



import SliderWrapper from "./SliderWrapper";



export default function AllImages() {
  return (
    <div>
      <SliderWrapper
        placeName={""}
        images={[
          ImageOne,
          ImageTwo,
          ImageThree,
          ImageFour,
          ImageFive,
          ImageSix,
          ImageSeven,
          ImageEight,
          ImageNine,
          ImageTen,
          ImageEleven,
          ImageTwelve,
          ImageThirteen,
          ImageFourteen
        ]}
      />
    </div>
  )
}
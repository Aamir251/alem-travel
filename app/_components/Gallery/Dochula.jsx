

import ImageOne from "@/assets/dochula/one.jpeg"
import ImageTwo from "@/assets/dochula/two.jpeg"
import ImageThree from "@/assets/dochula/three.jpeg"
import SliderWrapper from "./SliderWrapper";


const Dochula = () => {
  return (
    <div>
      <SliderWrapper
        placeName={"Dachula"}
        images={[ImageOne, ImageTwo, ImageThree]}
      />
      
    </div>
  )
}

export default Dochula
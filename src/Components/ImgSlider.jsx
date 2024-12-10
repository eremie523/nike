import { useState } from "react"
import { shoes } from "../Constants"
import ShoeCard from "./ShoeCard"

const ImgSlider = ({imgBg, img1}) => {
    const [CurrentImage, setCurrentImage] = useState(img1)
  return (
    <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center max-md:pr-14">
        <img src={imgBg} alt="" className="absolute w-full h-[94%] top-0 rounded-md"/>
        <img
            src={CurrentImage}
            alt='shoe colletion'
            width={500}
            height={400}
            className='object-contain relative'
        />
        <div className="absolute bottom-[-5%] flex gap-16">
            {shoes.map((shoe) => {
                return(
                    <div key={shoe}>
                        <ShoeCard imgUrl={shoe} changeBigShoeImg={(shoe) => {setCurrentImage(shoe)}} bigShoeImg={CurrentImage}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ImgSlider
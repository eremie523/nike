import {Button} from "../Components/Button";

import { arrowRight } from "../assets/icons"

import { statistics } from "../Constants";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import { bigShoeBackground } from "../assets/images"
import ImgSlider from "../Components/ImgSlider";

const Hero = () => {
  // const collectionBg = {
  //   backgroundImage: bigShoeBackground,
  //   // backgroundSize: "100%",
  //   backgroundRepeat: "no-repeat",
  //   // backgroundColor: "black"
  // }
  return (
    <section id="home" className="w-full flex flex-row max-lg:flex-col min-h-screen max-conatiner justify-center gap-10 padding-l">
      <div className="xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 relative z-20">
          <p className="text-red-600 text-sm font-montserrat">Our Summer Collections</p>
          <h1 className="font-bold font-serif text-8xl xl:text-[85px] pr-10">
            <span className="max-md:bg-white bg-white whitespace-nowrap max-md:whitespace-normal pr-4">
              The New Arrival 
            </span>
            <br/> 
            <span className="text-red-500">
              Nike
            </span> Shoes
          </h1>
          <p className="inline-block text-lg leading-8 mt-4 mb-8 text-slate-500 font-bold my-4 font-montserrat max-w-sm">
            Discover Stylish Nike arrivals, quality comfort, and innovation for your active life
          </p>
          <Button textWithin={"Shop Now"} imgdir={arrowRight} bg_color={""} text_color={""} border_color={""}/>
          <div className="flex gap-16 justify-start items-start flex-wrap w-full py-4">
            {statistics.map(({value, label}, i) => {
              return(
                <div className="flex flex-col gap-1 items-start justify-center" key={i}>
                  <h1 className="text-2xl font-bold">{value}</h1>
                  <p className="text-slate-600 text-sm">{label}</p>
                </div>
              )
            })}
          </div>
        </div>
      <ImgSlider img1={bigShoe1} img2={bigShoe2} img3={bigShoe3} imgBg={bigShoeBackground}/>
    </section>
  )
}

export default Hero
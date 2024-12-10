import { Button } from "../Components/Button"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center gap-6 flex-row max-md:flex-col">
      <div className="max-md:hidden block">
        <img src={offer} alt="" width={650}/>
      </div>
      <div className="w-[50%] max-md:w-full py-5">
        <h1 className="text-4xl font-bold font-montserrat pb-20 max-xl:pb-5"><span className="text-red-600">Special</span> Offer</h1>
        <p className="font-montserrat py-3 text-slate-600">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevete your experience, providing you with unmatched quality, innovation and a touch of elegance</p>
        <p className="py-5 font-montserrat text-slate-600">Our dedication to detail and excellence ensures your satisfaction Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
        <div className="flex flex-row gap-7"><Button textWithin="View Details" imgdir={""} text_color="" bg_color="" border_color=""/> <Button textWithin="Learn More" imgdir={""} bg_color="bg-slate-100" border_color="border-gray-100" text_color="text-slate-600"/></div>
      </div>
      <div className="max-md:block hidden">
        <img src={offer} alt="" width={650}/>
      </div>
    </section>
  )
}

export default SpecialOffer
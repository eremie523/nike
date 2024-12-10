import { Button } from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section className="grid grid-cols-2 max-md:grid-cols-1 gap-x-10 gap-y-3 items-center align-content-center ">
      <div>
        <h1 className="font-bold font-montserrat text-4xl">We Provide You <span className="text-red-600">Super Quality</span> Shoes</h1>
        <p className="font-montserrat py-3 text-slate-600">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevete your experience, providing you with unmatched quality, innovation and a touch of elegance</p>
        <p className="py-5 font-montserrat text-slate-600">Our dedication to detail and excellence ensures your satisfaction</p>
        <Button imgdir="" textWithin={"View Details"} text_color={""} bg_color={""} border_color={""}/>
      </div>
      <div className="p-10">
        <img src={shoe8} alt="" className="w-full h-full"/>
      </div>
    </section>
  )
}

export default SuperQuality
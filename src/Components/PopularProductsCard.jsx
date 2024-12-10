import { star } from "../assets/icons"

const PopularProductsCard = ({imgURL, name, price}) => {
  return (
    <div>
        <div className="rounded-xl overflow-hidden border-4 border-blue-600 bg-blue-600 max-md:border-2">
            <img src={imgURL} alt={name + "img"} className="w-full h-full"/>
        </div>
        <div className="flex justify-start items-start flex-col font-mono p-5">
            <div className="flex w-full items-start justify-start gap-3 py-3"><img src={star} alt="" width={24} height={24}/> (4.5)</div>
            <h3 className="text-xl text-slate-900 font-bold">{name}</h3>
            <p className="text-md text-red-600 font-bold">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductsCard
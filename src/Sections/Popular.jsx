import PopularProductsCard from "../Components/PopularProductsCard"
import { products } from "../Constants"

const Popular = () => {
  return (
    <section>
      <h1 className="text-3xl font-montserrat font-bold pt-5">Our <span className="text-red-600">Popular</span> Products</h1>
      <p className="text-slate-600 text-md w-[40%] pb-5 max-md:w-[70%]">Experience top notch quality and style with our sought-after selections. Discover a world of comfort, design and value</p>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
        {products.map(({imgURL, name, price}, index) => {
            return(
              <PopularProductsCard key={index} imgURL={imgURL} name={name} price={price} />
            )
        })}
      </div>
    </section>
  )
}

export default Popular
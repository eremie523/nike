import ServicesCard from "../Components/ServicesCard"
import { services } from "../Constants"

const Services = () => {
  return ( 
    <section className="grid grid-cols-3 gap-10  max-md:grid-cols-1 pr-10">
      {services.map((elem, i) => {
        return (
          <div key={elem.imgURL}>
            <ServicesCard elem={elem} index={i}/>
          </div>
        )
      })}
    </section>
  )
}

export default Services
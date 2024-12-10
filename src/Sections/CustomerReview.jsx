import { reviews } from "../Constants"
import ReviewCard from "../Components/ReviewCard"

const CustomerReview = () => {
  return (
    <section>
        <h3 className="text-4xl font-monospace text-center font-bold">
          What Our <span className="text-red-500">
            Customers
          </span> Say?
        </h3>
        <p className="text-center text-slate-500">Hear genuine stories from our satisfied customers about thei exceptional experiences with us.</p>
        <div className="flex gap-16 flex-row max-md:flex-col p-10 justify-evenly">
          { reviews.map((review, i) => {
            return(
              <div key={i}>
                <ReviewCard review={review}/>
              </div>
            )
          }) }
        </div>
    </section>
  )
}

export default CustomerReview
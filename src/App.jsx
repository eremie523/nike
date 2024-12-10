import { Hero, Services, SpecialOffer, Subscribe, Popular,  Footer, CustomerReview, SuperQuality  } from "./Sections/"
import Nav from "./Components/Nav"

const APP = () => {
  return(
    <main  className="relatitve">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <Popular/> 
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding py-10">
        <Services/> 
      </section>
      <section className="padding">
        <SpecialOffer/> 
      </section>
      <section className="padding bg-blue-100">
        <CustomerReview/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default APP;
import { Button } from "../Components/Button"
const Subscribe = () => {
  return (
    <section className="text-center flex flex-col justify-center pr-8">
      <h3 className="text-3xl font-bold font-palanquin">Sign Up for <span className="text-red-500">Updates</span> & News Letter</h3>
      <div className="border-2 border-slate-400 max-sm:rounded p-1 rounded-full m-6 flex gap-2 w-full lg:max[40%] flex-row max-sm:flex-col">
        <input type="text"placeholder="subscribe@nike.com" className="input rounded-full max-sm:rounded border-none"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button imgdir="" textWithin={"View Details"} text_color={""} bg_color={""} border_color={""} fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
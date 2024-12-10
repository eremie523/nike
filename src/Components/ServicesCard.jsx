const ServicesCard = ({elem, index}) => {
  return (
    <div className={`p-4 shadow-2xl ring-4 ring-offset-slate-600 h-[320px] ring-gray-100 rounded-lg bg-slate-300 flex justify-center items-center flex-col`}>
        <div className="p-4">
            <img src={elem.imgURL} alt="Services" width={70} height={70} />
        </div>
        <div className="text-center pb-7">
            <h1  className="text-2xl font-bold text-blue-400 py-3 font-mono">{elem.label}</h1>
            <p className="font-montserrat text-slate-600 text-lg">{elem.subtext}</p>
        </div>
    </div>
  )
}

export default ServicesCard
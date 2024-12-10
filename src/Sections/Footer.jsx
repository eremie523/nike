import { footerLogo } from "../assets/images"
import { copyrightSign } from "../assets/icons"
import { socialMedia, footerLinks } from "../Constants"
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start w-full">
          <a href="#">
            <img src={footerLogo} width={150} height={46}/>
          </a>
          <p className="text-white text-base mt-6 leading-7 font-montserrat">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => {
              return(
                <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full gap-6">
                  <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                </div>
              )
            })}
          </div>
          <div className="flex lg:gap-10 gap-20 justify-between flex-wrap text-white mt-6">
              {footerLinks.map((item) => {
                return(
                  <div key={item}>
                    <h4 className="font-bold">{item.title}</h4>
                    <ul>
                      {item.links.map((link) => { 
                        return(
                          <li key={link} className="py-1 hover:text-red-400 focus:text-red-500 cursor-pointer"><a href={link.link}>{link.name}</a></li>
                        )
                      }
                      )}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between items-center text-slate-300 py-9 max-sm:flex-col max-sm:justify-center w-full">
              <div className="flex justify-start items-center gap-2 font-montserrat cursor-pointer">
                <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0" /><p>Copyright. All rights reserved</p>
              </div>
              <div className="cursor-pointer font-montserrat">Terms & Conditions</div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
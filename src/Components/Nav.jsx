
import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../Constants"

function Nav() {
  return(
    // <div>
    //   Hello
    // </div>
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between max-container">
          <a href="/">
              <img src={headerLogo} alt="Logo" width={130} height={29}/>
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
             {navLinks.map((elem) => {
              return (
                <li key={elem.label}>
                  <a href={elem.href} className="font-monsterrat leading-normal text-lg text-slate-6 00">{elem.label}</a>
                </li>
              )
             })}
          </ul>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="Toggler" width={25} height={25}/>
          </div>
      </nav>
    </header>
  )
}

export default Nav 
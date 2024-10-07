//Putting in public assets
import Button from "./Button";
export function NavSvg(){
    return(
        <a
              href="index.html"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <img
                src="/assets/images/logo/logo.svg"
                alt="logo"
                className="header-logo h-12"
              />
            </a>
    )
}

function NavItems({navname}){
    return(
        <li className="group relative">
                <a
                  href="#home"
                  className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-white group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                >
                  {navname}
                </a>
              </li>
    )
}

export default function Navbar() {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <NavSvg/>

            <ul className="hidden lg:flex ">
              <NavItems navname="Home" />
              <NavItems navname="About"/>
              <NavItems navname="Pricing"/>
              <NavItems navname="Blog"/>
            </ul>

            <div className="sm:flex">
              <Button name="Sign In" value="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"/>
              <Button name="Sign Up"  value="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

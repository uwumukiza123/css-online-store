import dropDown from "../assets/images/dropDown.svg"
import cart from "../assets/images/cart.svg"

const Nav = () => {
  return (
    <nav className="bg-[#ececec] h-16 z-1 sticky top-0 left-0">
        <div className="flex justify-around items-center pt-4">
            <img src={dropDown} alt="drop down icon" />
            <span><img src="https://comfy-house-64zx3twr7-stuartmuyambi.vercel.app/images/logo.svg" alt="" /></span>
            <img src={cart} alt="" />
        </div>
    </nav>
  )
}

export default Nav
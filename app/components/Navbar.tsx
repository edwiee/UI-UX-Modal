import Image from "next/image";
import logo from "../../public/assets/Logo.svg"
import usericon from "../../public/assets/User.svg"
import menu from "../../public/assets/Menu.svg"


const navLinks =[
    {name: 'Features'},
    {name: 'Pricing'},
    {name: 'Enterprise'},
    {name: 'Careers'}
]
export function Navbar(){
    return( 
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            <div className="flex items-center ">
                <Image src={logo} alt="logo" />
                <div className="hidden md:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((link, index)=>(
                        <p key={index} className="text-[#36485c] font-medium">{link.name}</p>
                    ))}
                </div>
            </div>

            <div className="flex gap-x-5">
                <p className="hidden lg:block mt-[0.5] text-[#36485c] pr-[56px]">Open an account</p>
                <div className="flex items-center gap-x-2">
                    <Image src={usericon} alt="UserProfile" />
                    <span className="hidden font-medium text-[#36485c] lg:block">Sign in</span>
                </div>
                <Image src={menu} alt="menu" className="lg:hidden"/>
            </div>
        </nav>
    )
}
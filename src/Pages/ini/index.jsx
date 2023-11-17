
import {NavLink} from "react-router-dom"

function Navbar() {
    const activeStyle = ' underline underline-offset-4'
  return (
    <>
    <div className="flex flex-row justify-center bg-[#D5E4F7]"> 
                 <li>
                    <NavLink to='/caballeros'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                           <button className="text-white p-2  rounded-full mt-1	bg-[#00B7F5] hover:bg-[#0819FA] ">caballero</button>
                        
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                           <button className="text-white p-2 rounded-full mt-1 bg-[#00B7F5] hover:bg-[#0819FA]">home</button>
                     
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/descripcion'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                         <button className="text-white p-2  rounded-full mt-1 bg-[#00B7F5] hover:bg-[#0819FA]">description</button>
                     
                    </NavLink>
                </li>
    



     </div>

</>
    )
}

export default Navbar

  
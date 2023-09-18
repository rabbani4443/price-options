import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        {id: 1, name: "Home", path: "/"},
        {id: 2, name: "About", path: "/about"},
        {id: 3, name: "Products", path: "/products"},
        {id: 4, name: "Contact", path: "/contact"},
        {id: 5, name: "Profile", path: "/profile"}
    ];
    
    return (
        <nav className="py-5 bg-slate-600 ">
            <div onClick={()=>setOpen(!open) } className="text-2xl font-semibold md:hidden px-6 "  >
                {
                    open === true ? <AiOutlineCloseSquare></AiOutlineCloseSquare> : <FiMenu ></FiMenu>
                }
            {/* <FiMenu ></FiMenu> */}
            </div>

            <ul className={`md:flex absolute md:static bg-slate-600 duration-1000 rounded-lg px-6 text-white list-none justify-center text-lg font-semibold 
            ${open? 'left-0' : '-left-40'}
            `}>
              {
                routes.map((route)=>(
                    <Link route={route} key={route.id}></Link>
                ))
              }
              </ul>
        </nav>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;